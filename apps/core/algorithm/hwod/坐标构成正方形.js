const coordinate = ["0 0", "1 2", "3 1", "2 -1"];
(() => {

  const set = new Set(coordinate);
  let count = 0;
  for (let i = 0; i < coordinate.length; i++) {
    const [x1, y1] = coordinate[i].split(" ");
    const [x2, y2] = coordinate[(i + 1) % coordinate.length].split(" ");

    console.log(x1, y1, x2, y2);


    const x3 = x2 + (y2 - y1);
    const y3 = y2 - (x2 - x1);

    const x4 = x1 + (y2 - y1);
    const y4 = y1 - (x2 - x1);

    if (set.has(x3 + " " + y3) && set.has(x4 + " " + y4)) {
      count++;
    }
    const x5 = x2 - (y2 - y1);
    const y5 = y2 + (x2 - x1);

    const x6 = x1 - (y2 - y1);
    const y6 = y1 + (x2 - x1);
    if (set.has(x5 + " " + y5) && set.has(x6 + " " + y6)) {
      count++;
    }
  }

  console.log(count / 4);
})();