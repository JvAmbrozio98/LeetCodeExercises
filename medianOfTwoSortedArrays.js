/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2]
    arr.sort((a,b)=> a-b)
    let medianIndex = Math.floor(arr.length / 2)
    return median = arr.length % 2 === 1 ? arr[medianIndex] : (arr[medianIndex-1]+arr       [medianIndex]) / 2

    
};

