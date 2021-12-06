import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

public class ListImportants {
	
	// List is preferred when we have to represent group of single entities as one entity .
	// List is preferred when we need duplicates , and insertion order is maintained .
	//  Index  is the main criteria  in List .

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> numbers = new ArrayList<Integer>();
		
		for(int i=1 ; i<20;i+=2) {
			numbers.add(i);
		}
		
		
		// To add object at particular index :
		numbers.add(4, 6);
		
		System.out.println(".add() with index = "+numbers+"( 6 added)");
		
		// similarly for remove 
		
		
		// to get value of object at particular index
		
		System.out.println(".get() = "+numbers.get(4));
		
		// To replace an object at particular index :
		numbers.set(4, 444);

		System.out.println(".set() =  "+ numbers);
		
		//  to find first and last occurence of an object :
		
		numbers.add(444);
		
		System.out.println("First occurence index : "+numbers.indexOf(444));// returns index of first occurence
		System.out.println("Second occurence index : "+numbers.lastIndexOf(444));// returns index of last occurence .
		
		
		// ArrayList Features
		//  > Its underlined data structure is growable Array or resizable array .
		// it can accomodate null values .
		// implements randomAccess interface , so data retreival is very high
		// there are 3 constructors for arrayList 
		
		
		//Array list disadvantage
		// Adding or removing element in beginning , forces to change index of all remaining elements and slows down operation .
		
		
		
		
		ArrayList<Integer> AL1 = new ArrayList<Integer>(); // this will first create empty array of capacity 10 and if objects size exceeds  10 new obect will be created with capacity of 10 * (3/2)+1 
		
		// Similarly if size further increases new array with size of current size * (3/2)+1 will be created .
		// so size will go like , 10 , 16 , 25, 38 .......
		
		
		//2nd type constructor :
		ArrayList<Integer> AL2 = new ArrayList<Integer>(50); // this will create array list with capacity mentioned in int .
		
		
		// 3rd type : 
		
		ArrayList<Integer> AL3 = new ArrayList<Integer>(numbers); // this will create another list similar to the collection input we give . create copy of a collection 
		// this constructor is used for all classes which comes under Collection Interface .
		// this is used widely for various type convertion within sub classes of collection . 
		
		System.out.println(" new copy of list = "+ AL3);
		
		
		
	
		// Collections.SynchronizedList(ArrayLiistObject) = gives synchronised form of ArrayList
		
		
		
		
		// Linked List :
		
	// > Data Structure is doubly linked list
		// > null insertion possible
		// > not Suitable For retrieval operations - since elements are not stored in continuous memory location .
		// > best for add or removal of data . - only two or max 3 elements will be disturbed for this . 
		
		// Concept of list capacity is not applicable to linked list so there are only 2 constructors
		
		// Linked list is used to implement stack and queue
		
		// Following are specific methods for linked list :
		
		
		LinkedList< Integer> LinkList = new LinkedList<Integer>(numbers);// using another collection
		
		LinkList.addFirst(555);
		LinkList.addLast(999);
		System.out.println("Linked list specific operation at start : "+ LinkList);
		
		System.out.println(".getFirst() = "+LinkList.getFirst());
		System.out.println(".getLast() = "+LinkList.getLast());
		
		LinkList.removeFirst();
		LinkList.removeLast();
		
		System.out.println("Linked list specific operation at end : "+ LinkList);
		
		
		
		// vector :
		
		// it is similar to arrayList but has one addiional constructor ;
		
		// Vector vector  = new Vector(initial capacity , additional capacity)
		
		
		// Iterator vs List Iterator :
		
		// iterator is unidirectional but  LI is bi dir
		//List Iterator can perform additional functions like , add ,replace , remove ...
		
		ListIterator< Integer> lit = LinkList.listIterator();
		
		
		
		
		while(lit.hasNext()) {
			int num = lit.next();
			if (num==444) {
			lit.add(333);
			}
			if (num== 5) {
			lit.remove();
			}if (num==11) {
				
			
			lit.set(60);
			}
		}
		
		System.out.println(LinkList);
		
		//doubt listIterator
		
		
		
		
	}

}
