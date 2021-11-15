import java.awt.Container;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class CollectionBasicMethods {

	public static void main(String[] args) {
		
		
		// Important methods in collection Interface , this applies to all sub interface of collection interface (all single entry collections ) i.e execept map interface
		
		
		List<Integer> numbers = new ArrayList<Integer>();
		
		
		// To add objects to collection 
		for (int i= 0 ; i<20;i+=2) {
			numbers.add(i);  // method to add object , returns boolean 
		}
		
		System.out.println(" .add  =  "+ numbers);
		
		
		
		//  To add a collection to another collection 
		
		List<Integer> newNumbers = new ArrayList<Integer>();
		
		newNumbers.add(222);
		newNumbers.add(111);
		
		newNumbers.addAll(numbers);  // returns boolean , adds a whole collection into a collection .
		
		System.out.println( " .addAll = "+newNumbers);
		
		
		
		// To remove object from a collection 
		newNumbers.remove(5);  //removes object based on index - returns element which was removed .
		newNumbers.remove(1); // removes object based on the object value - returns boolean  .
		
		System.out.println(".remove = " + newNumbers +"(6 and 111 removed)");
		
		
		
		// to remove a collection from another collection 
		
		newNumbers.removeAll(numbers);       // returns boolean
		System.out.println(" .removeAll = "+ newNumbers);
		
		
		// to remove or clear all elements in a collection 
		
		
		newNumbers.addAll(numbers);
		
		newNumbers.clear();  // return void , makes the list empty
		
		System.out.println(" .clear = "+ newNumbers);
		
		
		
		/// removes all except particular collection ..
		newNumbers.add(111);
		newNumbers.add(112);
		newNumbers.add(113);
		
		newNumbers.addAll(numbers);
		
		
		newNumbers.retainAll(numbers); // returns boolean 
		
		System.out.println(".retainAll  = "+newNumbers + " (111 ,112 ,113 removed )");
		
		
		
		// To check whether the collections contains particular object 
		
		newNumbers.add(444);
		newNumbers.add(333);
		boolean contains = newNumbers.contains(444);
		System.out.println(".contains = "+contains);
		
		
		
		// To check whether collection contains all elements of another collection 
		
		System.out.println(".containsAll = "+newNumbers.containsAll(numbers)); // return boolean . 
		
		
		
		// To check whether empty 
		
		System.out.println(" .isEmpty = "+ newNumbers.isEmpty()); // returns boolean
		
		// To find number or object or size of the collection .
		
		
		System.out.println(" .size() = " + newNumbers.size()); // returns integer 
		
		
		/// To iterate or go through objects in a collection 
		
		Iterator<Integer> iterator = newNumbers.iterator();
		System.out.println("iterating through collection : ");
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
		
		
		// To convert a collection into array :
		
		Object[] newArray = newNumbers.toArray();
		
		
		System.out.println(".toArray = "+newArray.getClass().getSimpleName());
			
		
		
		
		

	
	}
}
