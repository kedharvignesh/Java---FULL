import java.util.ArrayList;
import java.util.HashMap;
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


public class CollectionChallenge1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Hero spiderMan = new Hero("spiderman");
		Hero shaktiMaan = new Hero("Shaktimaan");
		Hero batMan = new Hero("Batman");
		
		Set<Hero> hero = new LinkedHashSet<Hero>();
		hero.add(spiderMan);
		hero.add(batMan);
		hero.add(shaktiMaan);
		
		
		Villain venom = new Villain("Venom");
		Villain kabali = new Villain("Kabali");
		Villain joker = new Villain("joker");
		
		Set<Villain> villain = new LinkedHashSet<Villain>();
		villain.add(venom);
		villain.add(joker);
		villain.add(kabali);
		
		Map<Victory, Integer> victory = new HashMap<Victory, Integer>(); 
		
		System.out.println("Fight  starts : ");
		
		Random rand = new Random();
		
		List<Hero> heroList = new ArrayList<Hero>(hero);
		List<Villain> villainList = new ArrayList<Villain>(villain);
		
		
		Hero fight1Hero = heroList.get(rand.nextInt(heroList.size()));
		Villain fight1Villain = villainList.get(rand.nextInt(villainList.size()));
		
//		System.out.println(fight1Hero);
//		System.out.println(fight1Villain);
		int heroVictory= 0;
		int villainVictory=0; 
		while(endFight(hero,villain)) {
			
		while(knockout(fight1Hero, fight1Villain)>0) { 
				
		fight1Villain.villainAttack(fight1Hero);
		fight1Hero.HeroAttack(fight1Villain);
				
		}
		if(fight1Hero.getHealthHero()<1 ) {
			System.out.println("villain wins ");
			villainVictory++;
			hero.remove(fight1Hero);
			heroList.remove(fight1Hero);
			if(heroList.size()>0) {fight1Hero=heroList.get(rand.nextInt(heroList.size()));}
		}
		if(fight1Villain.getHealthVilain()<1 ) {
			System.out.println("hero wins");
			heroVictory++;
			villain.remove(fight1Villain);
			villainList.remove(fight1Villain);
			if(villainList.size()>0) {fight1Villain=villainList.get(rand.nextInt(villainList.size()));}
		}
		
		}
		
		victory.put(Victory.HERO_VICTORIES, heroVictory);
		victory.put(Victory.VILLAIN_VICTORIES, villainVictory);
		
		System.out.println(victory);
		
		

	}
	static int knockout (Hero h , Villain v) {
		if (h.getHealthHero()<1 || v.getHealthVilain()<1) {
			return 0 ;
		}else return 1;
	}
	
	static boolean endFight (Set<Hero> a , Set<Villain> b) {
		if (a.isEmpty() || b.isEmpty()) {
			return false;
		}else return true;
	}
	
	
	

}

enum Victory{
	HERO_VICTORIES,VILLAIN_VICTORIES;
}

class Villain {
	private String name;
	private int healthVillain=100 ;
	public Villain(String name) {
		
		this.name = name;
	}
	public Villain() {
		}
	public int getHealthVilain() {
		return healthVillain;
	}
	public void setHealthVillain(int health) {
		this.healthVillain = health;
	}
	Random rand = new Random();
	
	void villainAttack(Hero h) {
		int attack = rand.nextInt(100);
		
		
		h.setHealthHero(h.getHealthHero()-attack);
		
	}
	@Override
	public String toString() {
		return "Villain [name=" + name + ", healthVillain=" + healthVillain + "]";
	}
	
	
}

class Hero {
	private String name;
	private int healthHero=100 ;
	public Hero(String name) {
		
		this.name = name;
	}
	public Hero() {
	
	}
	public int getHealthHero() {
		return healthHero;
	}
	public void setHealthHero(int health) {
		this.healthHero = health;
	}
	Random rand = new Random();
	
	void HeroAttack(Villain v) {
		int attack = rand.nextInt(100);
		
		v.setHealthVillain(v.getHealthVilain()-attack);
		
	}
	@Override
	public String toString() {
		return "Hero [name=" + name + ", healthHero=" + healthHero + "]";
	}
	
	
}