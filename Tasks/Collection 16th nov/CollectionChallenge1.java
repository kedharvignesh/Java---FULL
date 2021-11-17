import java.util.ArrayList;
import java.util.EnumMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

//
//1.
//    in java Create 3 Hero Characters and 3 Villain Characters and store them in 2 Set Objects. One for Heroes and One for Villains.
//    Create a Map that will use the Type enum as a key and the value will be the number of battles won for
//    the Heroes and the Villains.
//    Randomly select one Hero and one Villain.
//    The Villain attacks first -- reduce the Heroes health by the Villain attack. Note the attacks should be a
//    method call in this class.
//    The Hero attacks second --- same as above
//    Print the toString method for the Villain then for the Hero
//    If the Hero's or Villain's health is O or below remove them from their respective Set.
//    Repeat until one of the sets is empty. Note one battle occurs each time through the loop.
//    Print out which group won and the number of battles won for each group.


public class HeroVsVillain {

	enum CHARACTER{
		HERO,VILLAIN;
	}
	public static void main(String[] args) {
	
		// Creating Characters :
	
		// Creating 3 heroes 
		Character spiderMan = new Character("spiderman",CHARACTER.HERO);
		Character shaktiMaan = new Character("Shaktimaan",CHARACTER.HERO);
		Character batMan = new Character("Batman",CHARACTER.HERO);
		// Creating 3 villains
		Character venom = new Character("Venom",CHARACTER.VILLAIN);
		Character kabali = new Character("Kabali",CHARACTER.VILLAIN);
		Character joker = new Character("joker",CHARACTER.VILLAIN);
		
		
		
		
		
		
		
		
		
		//Adding Characters to set
		
		// Adding heroes to a set 
		Set<Character> heroes = new LinkedHashSet<Character>();
		heroes.add(spiderMan);
		heroes.add(batMan);
		heroes.add(shaktiMaan);
		// adding villains to a set .	
		Set<Character> villains = new LinkedHashSet<Character>();
		villains.add(venom);
		villains.add(joker);
		villains.add(kabali);
		
				
		
		
		
		
		
		
		
		
		
		
		System.out.println("Fight  starts : \n");
		
		// Selecting Random hero and a villain 
		Random rand = new Random();
		List<Character> heroList = new ArrayList<Character>(heroes);
		List<Character> villainList = new ArrayList<Character>(villains);
		
		int heroVictory= 0;
		int villainVictory=0;
		
		while(endFight(heroes,villains)) {
			Character heroSelect = heroList.get(rand.nextInt(heroList.size()));
			Character villainSelect = villainList.get(rand.nextInt(villainList.size()));
		while(knockoutCharacter(heroSelect, villainSelect)) { 			
		villainSelect.villainAttack(heroSelect);
		heroSelect.heroAttack(villainSelect);			
		}
		if(heroSelect.getHealth()<1 ) {
			System.out.println(villainSelect.getName()+" wins "+"(villain)" );
			villainVictory++;
			heroes.remove(heroSelect);
			heroList.remove(heroSelect);
			if(!heroList.isEmpty()) {heroSelect=heroList.get(rand.nextInt(heroList.size()));}
		}
		if(villainSelect.getHealth()<1 ) {
			System.out.println(heroSelect.getName()+" wins"+"(Hero)");
			heroVictory++;
			villains.remove(villainSelect);
			villainList.remove(villainSelect);
			if(!villainList.isEmpty()) {villainSelect=villainList.get(rand.nextInt(villainList.size()));}
		}
		
		}
		
		
		
		
		
		
		
		
		
		
		// Updating final scoreBoard 
		EnumMap<CHARACTER, Integer> scoreBoard = new EnumMap<CHARACTER, Integer>(CHARACTER.class);
		
		scoreBoard.put(CHARACTER.HERO, heroVictory);
		scoreBoard.put(CHARACTER.VILLAIN, villainVictory);
		System.out.println("\n");
		System.out.println(" Final Score : ");
		System.out.println(scoreBoard+"\n\n\n");
	
		
		
		
		
		
		
		
		
		// Display Characters 
		displayCharacter(shaktiMaan);
		displayCharacter(kabali);
		
		

	}
	
	static boolean knockoutCharacter (Character hero , Character villain) {
		if (h.getHealth()<1 || v.getHealth()<1) {
			return false ;
		}else return true;
	}
	
	static boolean endFight (Set<Character> hero , Set<Character> villain) {
		if (a.isEmpty() || b.isEmpty()) {
			return false;
		}else return true;
	}
	
	static void displayCharacter(Character character) {
		System.out.println("Character = "+character);
	}
	

}

	



class Character {
	private String name;
	private int health=100 ;
	private Enum< HeroVsVillain.CHARACTER> type; 
	
	
	public Character(String name,  HeroVsVillain.CHARACTER hero) {
		super();
		this.name = name;		
		this.type = hero;
	}
	public int getHealth() {
		return health;
	}
	public void setHealth(int health) {
		this.health = health;
	}
	public String getName() {
		return name;
	}
	Random rand = new Random();
	
	void villainAttack(Character hero ) {
		int attack = rand.nextInt(100);
		
		hero.setHealth(hero.getHealth()-attack);
	}
	void heroAttack(Character villain ) {
		int attack = rand.nextInt(100);
		
		villain.setHealth(villain.getHealth()-attack);
	}
	
		
	@Override
	public String toString() {
		return ""+this.type +" [name=" + name + ", health=" + health + "]";
	}
	
	
}

