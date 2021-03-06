package contactManager;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;

public class FilereadWrite {

	static String file = "Contacts.csv";

	public static HashMap<String, Contact> load() {
		BufferedReader reader = null;
		HashMap<String, Contact> loadContactsMap = new HashMap<String, Contact>();
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					loadContactsMap.put(fields[3],
							(new Contact(fields[0], Integer.parseInt(fields[1]), fields[2], fields[3])));

				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
		return loadContactsMap;
	}

	static public HashMap<String, ArrayList<String>> loadNames() {
		BufferedReader reader = null;
		HashMap<String, ArrayList<String>> loadNamesMap = new HashMap<String, ArrayList<String>>();
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {

					loadNamesMap.computeIfAbsent(fields[0], k -> new ArrayList<String>()).add(fields[3]);
				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
		return loadNamesMap;
	}

	static public HashMap<Long, String> loadNumber() {
		BufferedReader reader = null;
		HashMap<Long, String> loadNumbersMap = new HashMap<Long, String>();
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					loadNumbersMap.put(Long.parseLong(fields[1]), fields[3]);
				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
		return loadNumbersMap;
	}

	static public HashMap<String, String> loadMail() {
		BufferedReader reader = null;
		HashMap<String, String> loadEmailsMap = new HashMap<String, String>();
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					loadEmailsMap.put(fields[2], fields[3]);
				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
		return loadEmailsMap;
	}

	static public void save(HashMap<String, Contact> contacts) {
		FileWriter fileWriter = null;
		try {
			fileWriter = new FileWriter(file);
			fileWriter.append("Name , Phone , E-mail,ID  \n");

			for (Entry<String, Contact> contact : contacts.entrySet()) {
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
