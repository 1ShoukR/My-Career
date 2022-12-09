
# role = input("What is your desired role? entry, support, awper, lurker? ")
# favorite_gun = input("WHat is your favorite gun? ")
# full_armor = input("enter 'full' for full armor, and 'half' for half armor. ")
# favorite_region = input("Enter your favorite region ")
# favorite_team = input("Enter your favorite team ")



# class Player:
#     def __init__(self, role = None, favorite_gun = None, full_armor = None):
#         # if self.role != "entry" or "support" or "awper" or "lurker":
#         #     print("That is not an available roll")
#         # else:
#         #     self.role = role
#         # if self.favorite_gun != "ak-47" or "m4a1s" or "m4a4":
#         #     print("Invalid gun")
#         # else: 
#         #     self.favorite_gun = favorite_gun 
#         # if self.full_armor != "half" or "full":
#         #     print("Invalid entry")
#         # else:
#         #     self.full_armor = full_armor
#         self.role = role
#         self.favorite_gun = favorite_gun
#         self.full_armor = full_armor
#     # def __str__(self):
#     #     return f"Created Player: {self.role}, {self.favorite_gun}, {self.full_armor}"


# class Team(Player):
#     def __init__(self, region, favorite_team, **kwargs):
#         print(kwargs)
#         super().__init__(**kwargs)
#         self.region = region
#         self.favorite_team = favorite_team
#     def __str__(self):
#         return f"Created Player: {self.role}, {self.favorite_gun}, {self.full_armor}, {self.region}, {self.favorite_team}"



# # shoukr = Team(role, favorite_gun, full_armor)

# shoukr = Team( favorite_team=favorite_team, region=region, role=role, favorite_gun=favorite_gun, full_armor=full_armor)

# print(shoukr)


# def name_age(name, age):
#     print(name, age)
# person = {
#     "name": "Rahmin",
#     "age": 32
# }

# name_age(**person)



# class Occupation:
#     def __init__(self, job = None, salary = None):
#         self.job = job
#         self.salary = salary
#     def __str__(self):
#         return f"Occupation Created: {self.job}, {self.salary}"

# rahmin_occupation = Occupation("Coder", "$50,000")
# print(rahmin_occupation)


# class Human: 
#     def __init__(self):
#         self.legs = 2
#         self.arms = 2
#         self.hands = 2
#         self.eyes = 2
#     def legs_blown_off(self):
#         self.legs = 0 



class Dealership:
    def __init__(self, brand = None, make = None, model = None):
        self.brand = brand
        self.make = make
        self.model = model
    def __str__(self):
        return f"Dealership cars: {self.brand}, {self.make}, {self.model}"

car_dealership = Dealership("Porsche", "panamera", "2020")

print(car_dealership)


class Downpayment:
    def __init__(self, paid_down_payment = None):
        self.paid_down_payment = paid_down_payment
    def __str__(self):
        return f"Downpayment created: {self.paid_down_payment}"


downpayment_info = Downpayment("Has paid")
print(downpayment_info)


class Person(Dealership, Downpayment):
    def __init__(self, name, type_of_car, payment_type):
        self.name = name
        self.type_of_car = type_of_car
        self.paymet_type = payment_type
        self.dealership = Dealership()
        self.downpayment = Downpayment()
    def __str__(self):
        return f"Created Person: {self.type_of_car}, {self.paymet_type}, {self.dealership}, {self.downpayment}"
    def update_dealership(self, brand, make, model):
        self.dealership.brand = brand
        self.dealership.make = make
        self.dealership.model = model
    def update_downpayment(self, paid_down_payment):
        self.downpayment.paid_down_payment = paid_down_payment

person_car_buy = Person(name="rahmin", type_of_car="McLaren", payment_type="cash")
person_car_buy.update_dealership(brand="McLaren", make="720", model="S")
person_car_buy.update_downpayment(paid_down_payment = "has not paid")
print("Person car buy", person_car_buy)




class Ben_Is_A_Bitch:
    def __init__(self, is_ben_a_bitch = None):
        self.is_ben_a_bitch = is_ben_a_bitch
    def __str__(self):
        return f"is ben a bitch? {self.is_ben_a_bitch}"


ben = Ben_Is_A_Bitch(is_ben_a_bitch= "ben is fr a bitch")

print(ben)






class AmIGettingThisJob:
    def __init__(self, idk_am_i):
        self.idk_am_i = idk_am_i
    def __str__(self):
        return f"will rahmin get this job? {self.idk_am_i}"

job_aquisition = AmIGettingThisJob(idk_am_i="nah")


print(job_aquisition)



class DoesWillLikeMe(AmIGettingThisJob):
    def __init__(self):
        self.maybe_he_does = AmIGettingThisJob()
    def __str__(self):
        return f"Does will like rahmin: {self.maybe_he_does}"
    def update_maybe_he_does(self, idk_am_i):
        self.maybe_he_does.idk_am_i = idk_am_i


