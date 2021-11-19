package contactManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ContactApplication {
	
	Scanner scanner = new Scanner(System.in);
	public static ArrayList<Contact> contactList = new ArrayList<Contact>();
	
	 
	
	
	void loadContacts() {
		 try {
			 FilereadWrite.load();
			 }catch (Exception e) {
				System.out.println("No contacts Found");
			}
		 
		 sortContacts();
	 }
	
	
	
	
	void menu() {
		
		 try {
			 
			 
	
		System.out.println("\n\nContacts : \n");
		System.out.println("Select an option :\n"
				+ "1-Search \n"
				+ "2-Create \n"
				+ "3-Update \n"
				+ "4-Delete \n"
				+ "5-View all Contacts \n"				
				+ "0-Exit \n");
		int select = scanner.nextInt();
		while(select!=0) {
		switch(select) {
		case 1:
			searchContact();
			break;
		case 2:
			createContact();
			break;
		case 3:
			updateContact();
			break;
		case 4:
			deleteContact();
			break;
		case 5:
			viewContacts();
			break;
		case 6:
			select=0;
			break;
		default :
			System.out.println("\n\tInvalid input - press 1 or 2 else 0 to exit  ");
		}
		menu();
		break;
		
		}
		 }catch (InputMismatchException e) {
			System.out.println(" Invalid input ");
			
		}
		 FilereadWrite.save();
		 
		 
	}
	 
	

	
		
		private int searchContact() {
			 int contactIndex = 0 ;
			 System.out.println("Select an option : \n"
			 		+ "1-Search by name \n"
			 		+ "2-Search by phone \n"
			 		+ "3-Search by E-mail");
			 int selectSearch=scanner.nextInt();
			 
			 switch(selectSearch) {
			 case 1:
				 contactIndex =searchByName();
				  
				 break;
			 case 2:				 
				 contactIndex = searchByPhone();
				 break;
			 case 3:				
				 contactIndex= searchByMail();
				 break;
			 case 0:
				 menu();
				 break;
			 
			 default :
				 System.out.println("\n\tInvalid input - press 1 or 2 or 3 else 0 for menu  ");
					 
			 } if (contactIndex<0)System.out.println("Contact not found");
			return contactIndex;
			
		}
		
		
		// search methods 
		 private int searchByName() {
			 int contactIndex = 0 ;
			System.out.println("Enter search name :");
			String searchName = scanner.next().toUpperCase();
			for(Contact i:contactList) {
				if(searchName.equals(i.getName())) {
					contactIndex=contactList.indexOf(i);
					System.out.println(i.toString());
					break;
				}else {
					
					contactIndex =-1;					
				}
			}
			return contactIndex;
		}

		
		 
		 
		 private int searchByPhone() {
			int contactIndex = 0 ;
			System.out.println("Enter search phone number :");
			int searchNumber = scanner.nextInt();
			for(Contact i:contactList) {
				if(searchNumber==(i.getPhone())) {
					contactIndex=contactList.indexOf(i);
					System.out.println(i.toString());
					break;
				}else {
					
					contactIndex =-1;
				}
			}
			return contactIndex;
		}

		private int searchByMail() {
			int contactIndex = 0 ;
			System.out.println("Enter search mail :");
			String searchMail = scanner.next().toLowerCase();
			for(Contact i:contactList) {
				if(searchMail.equals(i.getMail())) {
					contactIndex=contactList.indexOf(i);
					System.out.println(i.toString());
					break;
				}else {
					
					contactIndex =-1;
				}
			}return contactIndex;
			
		}

		
		
		
		
		
		
		
		
		
		
		private void createContact() {
			System.out.println(" save contacts :\n\n");
			System.out.println("Enter contact name :");
			String name = scanner.next().toUpperCase();
			System.out.println(" Enter phone number :");
			int phone = scanner.nextInt();
			System.out.println(" Enter E-mail :");
			String email = scanner.next().toLowerCase();
			
			if(contactList.add(new Contact(name,phone,email)))
			System.out.println("Contact saved");
			
			
			
		}
		
	
		
		private  void updateContact() {
				
				int index = searchContact();
				
				if(index>=0) {
				System.out.println("\nEnter new Name : \n");
				String newName = scanner.next().toUpperCase();
				System.out.println("Enter new Number : ");
				int newNumber= scanner.nextInt();
				System.out.println("Enter new Email : ");
				String newMail=scanner.next().toLowerCase();
				Contact contact = new Contact(newName,newNumber,newMail);
				contactList.set(index, contact);
				System.out.println(" Updated contact");
				}
				
			}
		
		
		
		
		private void deleteContact() {
			int index = searchContact();
			if(index>=0) {
			contactList.remove(index);
			System.out.println("Contact deleted");
			
			}
		}
		
	
		void viewContacts() {
			System.out.println("All contacts : \n"+contactList+"\n\n");
		}
		
		
		
		
		void sortContacts() {
			Comparator<Contact> compare= new Comparator<Contact>() {
				
				@Override
				public int compare(Contact o1, Contact o2) {
					
					return o1.getName().compareTo(o2.getName());
				}
			}; 
			Collections.sort(contactList, compare);;
		}
	 
	 
	

}
