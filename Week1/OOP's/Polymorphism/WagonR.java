
public class WagonR extends Maruti {

	public WagonR(double mileage, double cc, String name) {
		super(mileage, cc, name);
		
	}


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		WagonR wagonr = new WagonR(20,980,"wagonR");//static binding
		
		//applying method overloading
		wagonr.price("petrol");
		wagonr.price(4, "CNG");
		
		
		
		// applying method overriding
		wagonr.acceleration();
		
		
		
		
		//applying dynamic binding
		
		Maruti wagonR2 = new WagonR(21, 1020, "wagonR 2");
		wagonR2.acceleration();
		
		
		
		
		

	}
	
	
	
	@Override
	void acceleration() {
		// TODO Auto-generated method stub
		System.out.println(" wagonR accelerate 0-60kmph in 6 sec");
	}


	void price(int airbags ,String fuel) {
		System.out.println(fuel + " model " + " priced at 5 lakhs with "+ airbags + " airbags ");
	}
	
	// method overloading
	void price(String fuel) {
		System.out.println(fuel + " model " + " priced at  4 lakhs");
	}
	

}
class Maruti {
	private double mileage ;
	private double cc;
	private String name;
	public Maruti(double mileage, double cc, String name) {
		super();
		this.mileage = mileage;
		this.cc = cc;
		this.name = name;
	}
	
	// Constructor over loading.
	public Maruti(double cc, String name) {
		super();
		this.cc = cc;
		this.name = name;
	}
	
	void acceleration() {
		System.out.println("0-60vkmph in 7 sec");
	}

	@Override
	public String toString() {
		return "Maruti [mileage=" + mileage + ", cc=" + cc + ", name=" + name + "]";
	}
	
	
	
	
}