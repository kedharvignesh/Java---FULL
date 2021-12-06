import java.util.Scanner;

public class StringChallenge4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the string to check palindrome: ");
        String A=sc.next();
        
        byte[] byteString = A.getBytes();
        byte[]  reverse = new byte[byteString.length];
        
        for(int i=0;i<byteString.length;i++) {
        	reverse[i]=byteString[byteString.length-i-1];
        }
        String reverseString = new String(reverse);
        
        if(reverseString.equals(A)) {
        	System.out.println("Yes");
        }else {
        	System.out.println("No");
        }
 
	}

}
