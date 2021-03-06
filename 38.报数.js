/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (52.68%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    59.6K
 * Total Submissions: 111.7K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1'
    let ans = '1'
    let arr = ans.split('').map(Number)
    while (n > 1) {
        ans = count(arr)
        arr = ans.split('').map(Number)
        n--
    }
    return ans
};
/**
 * @param {number} n[1,3]
 * @return {string} '1113'
 */
var count = function (arr) {
    let left = 0, right = 1, count = 1, res = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[left] === arr[right]) {
            count++
        } else {
            res += count + ("" + arr[left])
            left = right
            count = 1
        }
        right++
    }
    return res
}
// @lc code=end

