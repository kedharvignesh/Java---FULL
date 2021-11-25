import java.util.Scanner;

public class StringChallenge3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 Scanner scan = new Scanner(System.in);
		 System.out.println("enter the string : ");
	        String s = scan.next();
	        System.out.println("enter no. of char : ");
	        int k = scan.nextInt();
	        scan.close();
	      
	        System.out.println(getSmallestAndLargest(s, k));

	}
	
	 public static String getSmallestAndLargest(String s, int k) {
		 	
		 	
	        String smallest = s.substring(0,k);
	        String largest = s.substring(0,k);
	        
	        // Complete the function
	        // 'smallest' must be the lexicographically smallest substring of length 'k'
	        // 'largest' must be the lexicographically largest substring of length 'k'
	        
	        for(int i=1;i<s.length()-k+1;i++) {
	        	String newString= s.substring(i,k+i);
	        	if(newString.compareTo(smallest)<0) {
	        		smallest=newString;
	        	}
	        	if(newString.compareTo(largest)>0) {
	        		largest=newString;
	        	}
	        }
	        
	        return smallest + "\n" + largest;
	    }

}
