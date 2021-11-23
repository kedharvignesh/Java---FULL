package contactManager;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Map.Entry;

public class FilereadWrite {

	static String file = "C:\\Users\\Admin\\eclipse-workspace\\FULL Contact Manager\\src\\contactManager\\Contacts.csv";

	static public void load() {
		BufferedReader reader = null;
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					ContactApplication.contactsMap.put(fields[3],
							(new Contact(fields[0], Integer.parseInt(fields[1]), fields[2])));

				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
	}

	static public void loadNames() {
		BufferedReader reader = null;
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					
					ContactApplication.namesMap.computeIfAbsent(fields[0],k-> new ArrayList<String>()).add(fields[3]);
				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
	}

	static public void loadNumber() {
		BufferedReader reader = null;
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					ContactApplication.numbersMap.put(Integer.parseInt(fields[1]), fields[3]);
				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
	}

	static public void loadMail() {
		BufferedReader reader = null;
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					ContactApplication.emailsMap.put(fields[2], fields[3]);
				}
			}
		} catch (Exception e) {

		} finally {
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
			fileWriter.append("Name , Phone , E-mail,ID  \n");

			for (Entry<String, Contact> contact : ContactApplication.contactsMap.entrySet()) {
				fileWriter.append(contact.getValue().getName());
				fileWriter.append(",");
				fileWriter.append(String.valueOf(contact.getValue().getPhone()));
				fileWriter.append(",");
				fileWriter.append(contact.getValue().getMail());
				fileWriter.append(",");
				fileWriter.append(contact.getValue().getId());
				fileWriter.append("\n");

			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				fileWriter.flush();
				fileWriter.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
