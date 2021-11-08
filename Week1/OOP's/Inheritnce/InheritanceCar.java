
public class InheritanceCar extends Vehicles {

	public InheritanceCar(int i, String string) {
		super(i,string);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		InheritanceCar swift = new InheritanceCar(4,"swift");
		
		//can access parent class method .
		
		swift.stop();
		
		// can override parent class method
		
		swift.start();
		
		System.out.println(swift);
	

}
	@Override
	public void start() {
		// TODO Auto-generated method stub
		System.out.println("keyless start");
	}
}
class Vehicles{

	   private int wheels;
	    private String model;
	    
	   Vehicles(int wheels , String model) {
		   this.wheels=wheels;
		   this.model=model;
	   }
	    public void start() {
	        // the process of starting the vehicle
	    	System.out.println("Insert key");
	    }
	    
	    public void stop() {
	        // process to stop the vehicle
	    	System.out.println("disk break");
	    }
	    
	    public void honk() { 
	        // produces a default honk 
	    	System.out.println("long horn");
	    }
		@Override
		public String toString() {
			return "Vehicles [wheels=" + wheels + ", model=" + model + "]";
		}
	    
	    

}