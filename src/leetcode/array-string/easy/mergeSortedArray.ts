function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  /* 1. Push nums2 to nums1 and sort*/
  nums1.splice(m, n)
  nums1.push(...nums2)
  nums1.sort((a, b) => a - b)
}
