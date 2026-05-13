class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let obj1 = {}
        let obj2 = {}

        for(let i = 0; i < s.length; i++) {
            obj1[s[i]] = (obj1[s[i]] || 0) + 1
        }

        for(let j = 0; j < t.length; j++) {
            obj2[t[j]] = (obj2[t[j]] || 0) + 1
        }

        for(let key in obj1) {
            if (!(key in obj2 && obj2[key] === obj1[key])){
                return false;
            }
        }
        return true;
    }
}
