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