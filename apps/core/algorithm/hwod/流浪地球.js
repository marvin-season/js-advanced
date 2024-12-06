(async () => {
  // 发动机的总个数, 计划手动启动的发动机总个数
  const [n, e] = [8, 2];
  const launches = new Array(n).fill(2001);
  launches[2] = 0;
  launches[6] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const innerDis = Math.abs(i - j);
      const outerDis = n - innerDis;

      const dis = Math.min(innerDis, outerDis);
      launches[j] = Math.min(launches[j], launches[i] + dis);
    }
  }

  let maxT = 0;
  let result = [];
  for (let i = 0; i < launches.length; i++) {
    const t = launches[i];

    if (t < maxT) continue;

    if (t > maxT) {
      maxT = t;
      result = [];
    }
    result.push(i);
  }

  console.log(result.length, result);
})();