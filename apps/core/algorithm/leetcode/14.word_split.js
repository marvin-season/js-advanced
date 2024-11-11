/**
 * 
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
 * 
 * 
 */

/**
 * 定义 f[i] 表示字符串 s 前 i 个字符组成的字符串 s[0..i−1] 是否能被空格拆分成若干个字典中出现的单词
 * f[i] = f[j] && check(s[j, i - 1])
 * f[0] = true 空字符串定义为true
 *
 */
/**
 *
 * @param {string} s
 * @param {string[]} wordDict
 */
const wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  let fx = new Array(s.length + 1).fill(false);
  fx[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (fx[j] && set.has(s.slice(j, i))) {
        fx[i] = true;
        break;
      }
    }
  }

  return fx[s.length];
};

// console.log(wordBreak("applepenapple", ["apple", "pen"]))
console.log(wordBreak("cars", ["car", "ca", "rs"]));
