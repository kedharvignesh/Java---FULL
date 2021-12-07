package windosSlidingTechnique;

public class SmallestSumOfConsecutive {

	public static void main(String[] args) {

		int[] numbers = { 3, 4, 2, 6, 43, 66, 44, 5, 35, 78, 46, 11, 4, 7 };
		int subArray = 4;

		System.out.println("smallestSum = " + findSmallest(numbers, subArray));

	}

	static int findSmallest(int[] arr, int k) {
		int n = arr.length;
		int minSum = 0;
		if (k > n) {
			System.out.println(" invalid length for subarray ");
		} else {
			for (int i = 0; i < k; i++) {
				minSum += arr[i];
			}
			int newMin = minSum;
			for (int i = k; i < n; i++) {
				newMin += arr[i] - arr[i - k];
				minSum = Math.min(minSum, newMin);
			}
		}

		return minSum;
	}

}
