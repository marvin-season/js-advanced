class WebStream {
  constructor() {
    this.buffer = [];
    this.readCallbacks = []; // 等待读取的回调队列
  }

  write(chunk) {
    if (this.readCallbacks.length > 0) {
      return this.readCallbacks.shift()(chunk);
    }
    this.buffer.push(chunk);
  }

  async read() {
    if (this.buffer.length === 0) {
      return new Promise(resolve => {
        this.readCallbacks.push(resolve);
      });
    }

    return Promise.resolve(this.buffer.shift());
  }
}

class StreamReader {
  constructor(stream) {
    this.stream = stream;
  }

  async reading() {
    while (true) {
      const data = await this.stream.read();
      if (!data) {
        break;
      }

      console.log(`Read: ${data}`);
    }
  }
}

class StreamWriter {
  constructor(stream) {
    this.stream = stream;
  }

  write(chunk) {
    this.stream.write(chunk);
  }

  async writeChunks(chunks) {
    for (const chunk of chunks) {
      this.stream.write(chunk);
      await new Promise((resolve) => setTimeout(resolve, 500)); // 按指定速率写入
    }
  }
}

//
(() => {
  const stream = new WebStream();

  const streamReader = new StreamReader(stream);
  streamReader.reading().then();
  const streamWriter = new StreamWriter(stream);
  streamWriter.writeChunks(["Chunk 1", "Chunk 2", "Chunk 3", "Chunk 4"]).then();
})();