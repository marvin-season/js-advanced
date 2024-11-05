import { useState } from "react";
import { sleep } from "@marvin/shared";

const LeetcodePage = () => {

  const [dp, setDp] = useState<number[][]>([]);


  const start = async () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const dp = new Array(prices.length).fill(0).map(v => new Array(2).fill(0));
    setDp(dp);
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let i = 1; i < prices.length; i++) {
      await sleep(800);

      setDp(prev => {
        const newDp = prev.map(row => [...row]);
        newDp[i][0] = Math.max(newDp[i - 1][0], newDp[i - 1][1] + prices[i]);
        return newDp;
      });
      await sleep(800);
      setDp(prev => {
        const newDp = prev.map(row => [...row]);
        newDp[i][1] = Math.max(newDp[i - 1][0] - prices[i], newDp[i - 1][1]);
        return newDp;
      });
    }
  };


  return <>
    <div onClick={start}>perform</div>
    {

      dp.map((row, rowIndex) => {
        return <div key={rowIndex} className={"flex gap-4 w-12 justify-between"}>

          {
            row.map((col, colIndex) => {
              return <div key={colIndex} className={"flex-1 p-2 border"}>{col}</div>;
            })
          }
        </div>;
      })
    }

  </>;
};

export default LeetcodePage;