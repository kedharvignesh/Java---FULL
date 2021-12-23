import java.util.Arrays;
import java.util.Scanner;

public class StringChallenge5 {
	
	 static boolean isAnagram(String a, String b) {
	        // Complete the function
		
		 
		 char[] charA = a.toLowerCase().toCharArray();
		 char[] charB = b.toLowerCase().toCharArray();
		 
		 int length1=charA.length;
		 int length2=charB.length;
		 if(length1!=length2) {
			 return false;
		 }
		 
		 
		 Arrays.sort(charA);
		 Arrays.sort(charB);
		 for(int i=0;i<length1;i++) {
			 if(charA[i]!=charB[i]) {
				 return false;
			 }
			 
			 
			 

		 }
		 return true;

		 
		 
		 
		 
	    }
	 
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 Scanner scan = new Scanner(System.in);
		 System.out.println("enter String a :");
        String a = scan.next();
        System.out.println("enter string b: ");
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );

	}

}
