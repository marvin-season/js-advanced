const rl = (await import("readline")).createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function() {
  // 发动机的总个数, 计划手动启动的发动机总个数
  const [n, e] = (await readline()).split(" ").map(Number);

  // 记录每个发动机的最终启动时刻, 初始化为极大值，方便后面取最早启动时刻
  const launches = new Array(n).fill(2001);
  for (let i = 0; i < e; i++) {
    // 发动机的手动启动时刻, 发动机的位置编号
    const [t, p] = (await readline()).split(" ").map(Number);
    // p号发动机在t时刻手动启动
    launches[p] = t;
  }

  // 从编号 i 的发动机手动启动后, 关联启动到编号 j
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 内关联距离
      const innerDis = Math.abs(i - j);
      // 外关联距离
      const outerDis = n - innerDis;
      // 最短关联距离
      const dis = Math.min(innerDis, outerDis);

      launches[j] = Math.min(launches[j], launches[i] + dis);
    }
  }
  let maxT = 0; // 最晚启动时刻
  const last = []; // 最晚启动的发动机编号集合

  for (let p = 0; p < launches.length; p++) {
    const t = launches[p]; // 当前发动机启动时刻

    if (t < maxT) continue; // 不是最晚启动的发动机

    // 更晚启动的时刻
    if (t > maxT) {
      maxT = t;
      last.length = 0;
    }

    last.push(p); // 记录该发动机编号
  }

  console.log(last.length);
  console.log(last.sort((a, b) => a - b).join(" "));
})();
