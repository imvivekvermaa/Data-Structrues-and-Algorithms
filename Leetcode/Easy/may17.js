// 1480. Running Sum of 1d Array

var runningSum = function(nums) {
    
    for(let i=1; i< nums.length; i++){
        nums[i] = nums[i]+ nums[i-1]
    }
    return nums;
};

// 724. Find Pivot Index


var pivotIndex = function(nums) {
    const n= nums.length;

    let totalSum= 0;
    
    for(let i=0; i< n; i++){
        totalSum+= nums[i];
    }

    let leftSum=0
    let rightSum=0
    
    for(let i=0; i< n; i++){
        if(i>0){
            leftSum+=nums[i-1]
        }
        rightSum= (totalSum-leftSum)- nums[i]

        if(rightSum==leftSum){
            return i;
        }
    }
    return -1;

};


// 35. Search Insert Position


var searchInsert = function(nums, target) {
    let low =0;
    let high= nums.length;


    while(low < high){
        let mid = parseInt((low+ high)/2);
        if(nums[mid]== target){
            return mid;
        }

        if(nums[mid]< target){
            low= mid+1;
        }
        else{
            high = mid
        }
    }
    return low;
};

// 278. First Bad Version

function find(n) {
    let start=1;
    let end= n;

    while(start<end){
        const mid= parseInt((start + end)/2);

        if(isBadVersion(mid)){
            end= mid;
        }else{
            start= mid+1
        }
    }
    return start;
};

// 367. Valid Perfect Square

var isPerfectSquare = function(num) {
    let start= 1, end= num;
   
    while(start<= end){
        const mid = parseInt((start+end)/2);

        if(mid*mid ===num){
            return true;
        }

        if(mid*mid> num){
            end= mid-1;
        }
        else{
            start= mid+1;
        }
    }
    return false;
};
