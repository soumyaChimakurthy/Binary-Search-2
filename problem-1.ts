// Time Complexity : O(log n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

// Your code here along with comments explaining your approach
class searchRange {
    result = [];
    nums = [5, 7, 7, 8, 8, 10];
    target = 8;
    constructor() {
        this.result.push(this.findStartPosition());
        this.result.push(this.findLastPosition());
    }

    findStartPosition() {
        let low = 0; // first index
        let high = this.nums.length - 1; // last index

        while (low <= high) {
            // Calculate mid
            const mid = Math.floor(low + (high - low) / 2);
            // if target is in the left side of the array reduce the high to mid - 1
            if (this.nums[mid] >= this.target) {
                high = mid - 1;
            }
            // if target is on right side then increase the low to mid + 1
            else {
                low = mid + 1;
            }
            // if mid matches target return the index
            if (this.nums[mid] === this.target) {
                 return mid;
            }
        }
        return -1;
    }

    findLastPosition() {
        let low = 0; // first index
        let high = this.nums.length - 1; // last index

        while (low <= high) {
            // calculate mid
            const mid = Math.floor(low + (high - low) / 2);
            // if target is in the left side, increase low to mid + 1
            if (this.nums[mid] <= this.target) {
                low = mid + 1;
            }
            else {
                // if target is on the right side reduce high to mid - 1
                high = mid - 1;
            }
            // if mid matches target return the index 
            if (this.nums[mid] === this.target) {
                return mid;
            }
        }
        return -1;
    }
}

const search = new searchRange();
console.log(search.result);
