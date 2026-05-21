class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    // let obj = {};
    // for(let s of strs) {
    //   let sorted = s.split('').sort().join('');
    //     if(!obj[sorted]) {
    //       obj[sorted] = []
    //     }

    //     obj[sorted].push(s);
    // }
    // return Object.values(obj);


    let obj = {}
    for(let s of strs) {
      let count = new Array(26).fill(0);
      for(let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      }
      let key = count.join(',');
      if(!obj[key]) {
        obj[key] = []
      }
        obj[key].push(s)
    }
    return Object.values(obj)
  }
}
