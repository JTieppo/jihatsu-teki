import json

with open('python/brasil.json') as file:
    json_loads = json.load(file)
    print(json_loads)
    