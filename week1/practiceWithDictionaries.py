# data = {
#     "president": {
#         "name": "Sherry Phong",
#         "Species": "bad ass bitch",
#         "location": ["Canada eh?"],
#     }
# }
# #Print the name

# print(data["president"]["name"])

# #Print the location
# print(data["president"]["location"][0])






## convert two lists into one
# keys = ['ten', 'twenty', 'thirty']
# values = [10, 20, 30]
# newDict = {}

# for dictNew in range(len(keys)):
#     newDict.update({keys[dictNew]: values[dictNew]})
# print(newDict)

## print value of  key "history" from the below dictionary

# sampleDict = {
#     "class": {
#         "student": {
#             "name": "Mike",
#             "marks": {
#                 "physics": 70,
#                 "history": 80
#             }
#         }
#     }
# }
# print(sampleDict["class"]["student"]["marks"]["history"])

## Change value of a key in a   nested dictionary

# sample_dict = {
#     'emp1': {'name': 'Jhon', 'salary': 7500},
#     'emp2': {'name': 'Emma', 'salary': 8000},
#     'emp3': {'name': 'Brad', 'salary': 500}
# }
# sample_dict["emp3"]["salary"] = 8500
# print(sample_dict)