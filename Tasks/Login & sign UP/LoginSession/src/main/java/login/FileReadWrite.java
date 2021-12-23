package login;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map.Entry;



public class FileReadWrite {
	static String file = "C:\\Users\\Admin\\eclipse-workspace\\LoginSession\\src\\main\\java\\login\\Users.csv";
	
	
	public static HashMap<String, User> load() {
		BufferedReader reader = null;
		HashMap<String, User> loadUserMap = new HashMap<String, User>();
		try {
			String line = "";
			reader = new BufferedReader(new FileReader(file));
			reader.readLine();

			while ((line = reader.readLine()) != null) {
				String[] fields = line.split(",");

				if (fields.length > 0) {
					loadUserMap.put(fields[0], new User(fields[0], fields[1], fields[2]));

				}
			}
		} catch (Exception e) {

		} finally {
			try {
				reader.close();
			} catch (IOException e) {

			}
		}
		return loadUserMap;
	}
	
	
	static public void save(HashMap<String, User> users) {
		FileWriter fileWriter = null;
		try {
			fileWriter = new FileWriter(file);
			fileWriter.append("Name , Password , E-mail,ID  \n");

			for (Entry<String, User> user : users.entrySet()) {
				fileWriter.append(user.getValue().getUserName());
				fileWriter.append(",");
				fileWriter.append(user.getValue().getPassword());
				fileWriter.append(",");
				fileWriter.append(user.getValue().getEmail());
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
