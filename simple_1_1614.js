/**
 * 1614. 括号的最大嵌套深度
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let ans = 0,
        cur = 0;
    for (const v of s) {
        if (v == '(') {
            cur++;
            ans = Math.max(ans, cur);
        } else if (v == ')') {
            cur--;
        }
    }
    console.log(ans);
    return ans;
};

// maxDepth("1+(2*3)/(2-1)");
// maxDepth("(1)+((2))+(((3)))")
maxDepth('(1+(2*3)+((8)/4))+1');
