const s = "()[]{}";


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const map = {
    "(": ")", "{": "}", "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[stack.at(-1)] === s.at(i)) {
      stack.pop();
    } else {
      stack.push(s.at(i));
    }
  }

  return stack.length === 0;
};

console.log(isValid(s));