export default function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const comp = target - nums[i];
    if (comp in map) {
      return [map[comp], i];
    }
    map[nums[i]] = i;
  }
  return null;
}
