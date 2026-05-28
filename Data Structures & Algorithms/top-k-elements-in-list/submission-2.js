class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {}
        // get the frequency
        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        // solution 2
        // bucket sort using index.
        // initialize bucket array 
        let res = Array.from({length: nums.length + 1}, () => [])
        // assume k to be 3 [0,0,0]

        // loop over the freq obj
        for(let key in freq) {
        // update the array at index to match the frequency with the key
            res[freq[key]].push(parseInt(key))
        }
        console.log(res)
        // slice the array backwards from length - 1 to k
        let sanitized = res.filter((el) => el.length);
        console.log(sanitized)
        return sanitized.reverse().flat().slice(0,k)


        // // solution 1
        // // assume we have a priority Q
        // let q = new MinPriorityQueue((x) => x[1])
        // // we create a results array
        // let result = []
        // // we loop over the frequency object
        // for(let [key,val] of Object.entries(freq)) {
        // // otherwise we push to the Q
        // q.enqueue([key,val])
        // // we check if the Q length is greater than 2 we remove the least
        // if(q.size() > k) {
        //     q.dequeue()
        // }
        // }
        // // we loop over the Q and push the value of the highest freq to the result array
        // for(let i = 0; i < k; i++) {
        //     let [key,val] = q.dequeue();
        //     result.push(key)
        // }
        // // we return the result array.
        // return result
    }
}
