package windosSlidingTechnique;
//Given an array of integers of size ‘n’.
//Our aim is to calculate the maximum sum of ‘k’ 
//consecutive elements in the array.
public class MaxSumOfSubarrays {

	public static void main(String[] args) {
	
		int[] numbers = {3,4,2,6,43,66,44,5,35,78,46,11,4,7};
		int subArray= 4;
		
		System.out.println("maxSum = "+findMax(numbers, subArray));
 
	}
	
	static int findMax(int[] arr ,int k) {
		int n = arr.length;
		int maxSum=0;
		if(k>n) {
			System.out.println(" invalid length for subarray ");
		}else {
			for(int i=0;i<k;i++) {
				maxSum+=arr[i];
			}
			int newMax= maxSum;
			for(int i=k;i<n;i++) {
				newMax += arr[i]-arr[i-k];
				maxSum= Math.max(maxSum, newMax);
			}
		}
		
		return maxSum;
	}

}

