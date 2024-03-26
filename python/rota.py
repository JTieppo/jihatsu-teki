# pra rodar da o comando no terminal python main.py (ou python3 caso o outro n funcionar) 
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)                                                 # evita erro de CORS, eu gostaria de explicar mas é bem complexo, por enquanto foca no resto da bomba 

@app.route('/')                                           # a rota que vai acessar, quando o metodo for GET vc pode colocar http://localhost:5000/nome-rota que ele vai te retornar o conteudo direto no navegado, criei uma rota assim lá em baixo
def funcao():                                             # toda rota precisa obrigatóriamente ter uma função, no python vc cria a função com o def, é a mesma coisa que function(js) ou int void(se não me engano) em C
	return render_template('index.html')                  # aqui é o que a rota retorna pro front(EUA), nesse caso é uma página



@app.route('/brasil-recebe-dados', methods=['POST'])      # Pode adicionar mais de um método ficaria assim method=['POST'] 
def TratamentoDeDados():                                  # não esquece o : depois do (), é da syntax do python 
    print("chamando rota backend", request.method)        
    dados = request.get_json()                            # desamarra o pacote e guarda as informações em um uma variavel pra poder usar depois
    print("dados recebidos: ",dados)
                    
                    
    if(request.method == 'POST'):                         # o request seria a carga amarrada que vc recebeu dos EUA
        return jsonify({"mensagem": "carga"}), 200        # o 200 é pra falar que deu tudo certo
    else:
        return jsonify({}), 400
    
    
@app.route('/get')                                      # essa é a rota que falei, vai no seu navegador e escreve http://localhost:5000
def funcGet():
    return jsonify({"mensagem": 'pagamento'})           # aqui eu to empacotando e amarrando o pagamento pros EUA


if __name__ == '__main__':
	porta = 4000                                        # se mudar pra 5000 as rotas vão estar todas em http://localhost:4000/
	app.run(host='0.0.0.0', port=porta, debug=True)
 
# caso esse código não rodar tenta trocar o numero da porta por 5000 como te falei, se ainda não funcionar tenta trocar a porta de novo, caso nao der é pq falta instalar algo, como o flask ou python
# caso mudar a porta não esquece de mudar as urls que chamam a rota também, o console é um ótimo aliado nessas horas
