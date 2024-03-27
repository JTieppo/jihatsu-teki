import json

with open('python/brasil.json') as file:
    json_loads = json.load(file)
    for x in json_loads:
        print(x['nome'])
        print(x['municipio']['nome'])
        print(x['municipio']['microrregiao']['nome'])
        # tem mais alguns
    