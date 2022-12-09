from typing import List

name = "Rahmin Shoukoohi" 
age = 23
hobbies = ["gaming", "reading", "lifting"]



class Family: 
    def __init__(self):
        pass





class Occupation:
    def __init__(self, job = None, salary = None):
        self.job = job
        self.salary = salary
    def __str__(self):
        return f"Occupation Created: {self.job}"

adam_occupation = Occupation("coder", "$120,000")
print(adam_occupation)



class Human:
    def __init__(self):
        # self.eye_color = eye_color
        # self.hair = hair
        self.legs = 2
        self.arms = 2
        self.fingers = 10
        self.toes = 10
        self.eyes = 2
    # def __str__(self):
    #     return f"Created Human {self.eye_color}, {self.hair}, {self.legs}"
    def legs_blown_off(self):
        self.legs = 0

class Person(Human): 
    def __init__ (self, name: str, age: int, hobbies: List[str]):
        super().__init__()
        self.name = name
        self.age = age
        self.hobbies = hobbies
        self.occupation = Occupation()
    def __str__(self):
        return f"Created Person {self.name}, {self.age}, {self.hobbies} {self.legs}, {self.arms}"
    def update_occupation(self, job: str, salary: str):
        self.occupation.job = job
        self.occupation.salary = salary


rahmin = Person(name, age, hobbies)

print("This is rahmin 1 ",rahmin)
rahmin.legs_blown_off()
rahmin.update_occupation("coder", "$120,000")
print("This is rahmin 2 ",rahmin)


# new_human = Human("brown", "black")
# print(new_human)

# new_human.legs_blown_off()

# print(new_human)



try:
    rahmin[1]
except AttributeError as attr_error:
    print(f"This is my attribute error: {attr_error}")
except TypeError as type_error:
    print(f"This is my type error {type_error}")
else:
    print("ok")