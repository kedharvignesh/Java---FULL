import java.util.Scanner;

public class InterestException {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("principle = ");
		double principle = scanner.nextInt();
		System.out.println("rate = ");
		double rate = scanner.nextInt();
		System.out.println("year = ");
		int year = scanner.nextInt();
		
		
		try {
			if(principle<=0||rate<=0||year<=0) {
				throw new InvalidIpException("less than one");
			}
			
			
			System.out.println("simple interest :"+simple(principle, rate, year));					
			System.out.println("compound interest : "+compound(principle, rate, year));
		}catch (InvalidIpException e) {
			// TODO: handle exception
			e.printStackTrace();
			System.out.println("caught input less than one error");
		}
		
		
		

	}
    static double simple(double p,double r,int year) {
		
		return p*r*year/100;
	}
	
	static double compound(double p,double r,int year){
		return p*(Math.pow(1+r/100, year))-p;
	}

}


class InvalidIpException extends Exception{
	
	public InvalidIpException(String s){
		super(s);
	
	}
}


