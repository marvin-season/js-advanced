class StreamController {
  constructor(rate = 1000) {
    this.rate = rate; // 写入速率（单位：毫秒）

    // TransformStream 管理流的中转
    this.transformStream = new TransformStream();

    // 提取 TransformStream 的读写接口
    this.writable = this.transformStream.writable; // 可写端
    this.readable = this.transformStream.readable; // 可读端
  }

  // 写入方法
  async writeChunks(chunks) {
    const writer = this.writable.getWriter();
    for (const chunk of chunks) {
      await new Promise((resolve) => setTimeout(resolve, this.rate)); // 按速率写入
      await writer.write(chunk); // 写入数据
    }
    writer.close(); // 结束写入
  }

  // 读取方法
  async readChunks() {
    const reader = this.readable.getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        console.log("Stream ended.");
        break;
      }
      console.log(`Read: ${value}`);
    }
  }
}

// 测试代码
(async function test() {
  const streamController = new StreamController(500); // 每 500ms 写入一次

  // 写入端
  const chunksToWrite = ["Chunk 1", "Chunk 2", "Chunk 3", "Chunk 4"];
  streamController.writeChunks(chunksToWrite).then();

  // 读取端
  streamController.readChunks().then();
})();