public class Addition extends Adder{

	
	public static void main(String[] args) {
		Addition obj1= new Addition();
		System.out.println(obj1.add(3, 3));
		
		System.out.println(obj1.multiply(3, 3));
	}

	@Override
	int multiply(int a, int b) {
		
		return a*b;
	}
	
	
}

abstract class Adder{
	 int add (int a , int b) {
		return a+b;
	}
	 abstract int multiply(int a ,int b) ;
		

}
