import requests
import json



url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'

response = requests.get(url)
data = response.json()


with open('brasil.json', 'w', encoding='utf8') as file:
    json_dump = json.dumps(data, indent=4, ensure_ascii=False)
    file.write(json_dump)

    


