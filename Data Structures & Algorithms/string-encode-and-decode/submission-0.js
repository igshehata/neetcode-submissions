class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // we define the encoding algorithm. assume a shared character @
        let str = ''
        // we embed that @ + the length of every word as the prefix
        for(let i =0; i < strs.length; i++) {
            str+= strs[i].length + "@" + strs[i];
        }
        // console.log(str)
        // we return the string
        console.log(str,"str")
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // we take the encoded str, loop over it
        let res = []
        let i = 0
        // // we look for @ followed by a number
        // 5@hello5@world5@again
           while(i < str.length) {
            let j=i
            while(str[j] !== "@"){
                j++
            }
                let length = parseInt(str.substring(i,j))
                i = j + 1
                j = i + length
                res.push(str.substring(i,j))
                i = j
           }
        // create a result arr
        return res
        // we take a slice of that string from str at index of number to that number and push to arr 
    }
}
