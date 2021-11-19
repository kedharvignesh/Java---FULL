package contactManager;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;


public class FilereadWrite {
	
	static String file = "C:\\Users\\Admin\\eclipse-workspace\\FULL Contact Manager\\src\\contactManager\\Contacts.csv";
	
	static public void load() {
		BufferedReader reader = null;
		try {
		String line=";";
		reader= new BufferedReader(new FileReader(file));
		reader.readLine();
		
		while((line=reader.readLine()) != null) {
			String[] fields = line.split(",");
			
			if(fields.length>0) {
				ContactApplication.contactList.add(new Contact(fields[0], Integer.parseInt(fields[1]), fields[2]));
				
			}
		}
		}catch (Exception e) {
			
		}finally {
			try {
				reader.close();
			} catch (IOException e) {				
				
			}
		}
	}
	
	
	
	
	
	
	static public void save() {
		FileWriter fileWriter = null;
		try {
		fileWriter = new FileWriter(file);		
		fileWriter.append("Name , Phone , E-mail \n");
		
		for(Contact contact : ContactApplication.contactList) {
			fileWriter.append(contact.getName());
			fileWriter.append(",");
			fileWriter.append(String.valueOf(contact.getPhone()));
			fileWriter.append(",");
			fileWriter.append(contact.getMail());
			fileWriter.append("\n");
		}
		
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				fileWriter.flush();
				fileWriter.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
