class searchRange {
    result = [];
    nums = [5, 7, 7, 8, 8, 10];
    target = 8;
    constructor() {
        this.result.push(this.findStartPosition());
        this.result.push(this.findLastPosition());
    }

    findStartPosition() {
        let low = 0;
        let high = this.nums.length - 1;

        while (low <= high) {
            const mid = Math.floor(low + (high - low) / 2);
            if (this.nums[mid] >= this.target) {
                high = mid - 1;
            }

            else {
                low = mid + 1;
            }
            if (this.nums[mid] === this.target) {
                 return mid;
            }
        }
        return -1;
    }

    findLastPosition() {
        let low = 0;
        let high = this.nums.length - 1;

        while (low <= high) {
            const mid = Math.floor(low + (high - low) / 2);
            if (this.nums[mid] <= this.target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }

            if (this.nums[mid] === this.target) {
                return mid;
            }
        }
        return -1;
    }
}

const search = new searchRange();
console.log(search.result);
