/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let tp = 0, sp = 0;

    while(tp <= t.length - 1){
        if(t.at(tp) === s.at(sp)){
            sp++;
        }

        tp++;
    }
    return sp === s.length

};

const s = "b", t = "c";

console.log(isSubsequence(s, t))