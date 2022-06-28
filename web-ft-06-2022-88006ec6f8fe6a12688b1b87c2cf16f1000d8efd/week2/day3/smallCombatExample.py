class Hero:
    def __init__(self,name,health,attack,defense):
        self.name=name
        self.health=health
        self.attackDmg=attack
        self.defense=defense 
    def attack(self,enemyHealth,defense):
        total = enemyHealth + defense
        return total - self.attackDmg
    def defend(self,enemyAttack):
        total = self.health + self.defense
        self.health = total - enemyAttack
    def __str__(self):
        return (f"""
        name: {self.name}
        health: {self.health}
        attack: {self.attackDmg}
        defense: {self.defense}
        """)

class Villain(Hero):
    def superAttack(self,enemyHealth):
        print("super attack")
    pass       
print("Welcome to my game, pick a hero of your choice")
character = int(input("""
    1. hero
    2. mage
    3. archer
    4. ninja
    """))

if character == 1:
    hero = Hero("hero Joe",50,20,10)
if character == 2:    
    hero = Hero("mage Joe",80,20,10)
if character == 3:
    hero = Hero("archer Joe",40,15,10)
if character == 4:    
    hero = Hero("ninja Joe",30,10,20)

characterTheyChoose = character - 1

villain = Villain("Evil Joe",50,20,10)
herolist = ["hero","mage","archer","ninja"]

print(f"You choose {herolist[characterTheyChoose]}")
while True:
    choice = ""   
    choice = int(input("1 .attack,2. defend 3. view stats"))
    if choice == 1:
        print("You attack")
        villain.health = hero.attack(villain.health,villain.defense)
        print(f"Villain has {villain.health}")
        print(f"You have {hero.health}")
    elif choice == 2:
        hero.defend(villain.attackDmg)
        print(f"You have {hero.health}")
        print(f"Villain has {villain.health}")
    elif choice == 3:
        print(hero)
    if hero.health <= 0: 
        print("The good joe died")
        break
    if villain.health <= 0:
        print("You win, good joe")
        break