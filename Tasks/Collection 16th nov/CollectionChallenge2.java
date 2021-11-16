import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

//2.     create a contact manager console application:   
//   user should be able to create, update, create, delete the contacts  
//        search with keywords and phone, email  
//        list the contacts
//       Save them after closing        
public class CollectionChallenge2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Contact c = new Contact();
		
		c.create("kedhar", 123);
		c.create("arjun", 111);
		c.create("bheem", 222);
		c.create("nakul", 333);
		c.create("karna", 444);
		
		c.update("nakul", 555);
		
		System.out.println(c);
		
		c.delete("kedhar");
		
		
		System.out.println(c.search("karna"));
		
		System.out.println(c.search(111));


		
		

	}

}



class Contact {
	private String name;
	private int number;
	private Map<String ,  Integer> contact;
	public Contact(String name, int number) {
		
		this.name = name;
		this.number = number;
		contact = new TreeMap<String, Integer>();
	}
	public Contact() {
		contact = new TreeMap<String, Integer>();
	}
	
	public Map<String ,  Integer>  getContact() {
		return contact;
	}
	public void setContact(Map<String ,  Integer>  contact) {
		this.contact = contact;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	
	 void create(String name , int number ) {
		this.name = name;
		this.number = number;
		this.contact.put(name, number);
	}
	
	void update(String name , int number ) {
		
		contact.put(name, number);
		
	}
	
	void delete (String  s) {
		contact.remove(s);
	}
	
	Map.Entry<String ,  Integer>  search(String s) {
		 Entry<String, Integer> out = null ;
		for(Map.Entry<String ,  Integer> j:contact.entrySet()) {
		if(j.getKey().equals(s)) {
			out = j;
		}
		}return out;
	}
	
	  Entry<String, Integer> search(int k) {
		  Entry<String, Integer> result = null ;
		for(Map.Entry<String ,  Integer> i:contact.entrySet()) {
		if(i.getValue().equals(k)) {
			result =i;
		} 
		}
		return result;
	}
	@Override
	public String toString() {
		return "Contact [contact=" + contact + "]";
	}
	
	
	
	
	
}