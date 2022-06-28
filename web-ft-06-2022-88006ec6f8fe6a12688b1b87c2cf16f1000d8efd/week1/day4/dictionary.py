# Dictionary
# Dictionaries will give you the value of something by referencing it's key

variable = {
    "nums": [1,2,3,4,5],
    "name": "Joe",
    "boolean": False,
    "pets": "crazy cats",
    "weldingEquipment": ["torch"],
    "glass": "Wine Glass"
}
# print(variable[0])
for num in variable["nums"]:
    print(num)

# JSON
computer = {
    "ram": "12gb",
    "monitor": "Benq",
    "ram": "16gb",
    "hddSize": "512gb ssd",
    "keyboard": "logitech",
    "color": "silver",
    "brand": "Dell",
    "OS": "Windows",
    "fans":[
        {"gpu": "3"},
        {"processor": "1"},        
    ]
}

computer["monitor"] = "Samsung"
computer["ram"] = "32gb"
computer["color"] = "grey"
computer["powersupply"] = "500w"
computer["powersupply"] = "500w"
computer["fans"].append({"house":"ceiling fan"})

print(computer)


bigData = [
	{
		"color": "red",
		"value": "#f00"
	},
	{
		"color": "green",
		"value": "#0f0"
	},
	{
		"color": "blue",
		"value": "#00f"
	},
	{
		"color": "cyan",
		"value": "#0ff"
	},
	{
		"color": "magenta",
		"value": "#f0f"
	},
	{
		"color": "yellow",
		"value": "#ff0"
	},
	{
		"color": "black",
		"value": "#000"
	}
]
print(bigData[0]["color"])