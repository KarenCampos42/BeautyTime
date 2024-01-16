from flask import Flask, jsonify, request, render_template
from utils import *
import espaco
from servico import * 
import espaco_servico as esp_serv
from marcacao import *
from cliente import *


app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route('/age')
def calcula_idade():
    return str(calcula_maior(10))


@app.route('/espaco', methods = ['POST', 'GET'])
def get_espacos():
    if request.method == 'POST':
      nome = request.form['nome']
      localizacao = request.form['localizacao']
      abertura = request.form['abertura']
      fecho = request.form['fecho']
      result = espaco.insert_espaco(nome, localizacao, abertura, fecho)
      return jsonify(result)
    else:
        return espaco.get_espaco()


@app.route('/servico', methods = ['POST', 'GET'])
def get_servicos():
    if request.method == 'POST':
      categoria = request.form['categoria']
      nome = request.form['nome']
      result = insert_servico(categoria, nome)
      return jsonify(result)
    else:
        return get_servico()

@app.route('/cliente', methods = ['POST', 'GET'])
def get_clientes():
    if request.method == 'POST':
      nome = request.form['nome']
      email = request.form['email']
      telemovel = request.form['telemovel']
      result = insert_cliente(nome, email, telemovel)
      return jsonify(result)
    else:
        return get_cliente()

@app.route('/marcacao', methods = ['POST', 'GET'])
def get_marcacoes():
    if request.method == 'POST':
      id_cliente = request.form['id_cliente']
      id_espaco = request.form['id_espaco']
      id_servico = request.form['id_servico']
      data = request.form['data']
      result = insert_marcacao(id_cliente, id_espaco, id_servico, data)
      return jsonify(result)
    else:
        return get_marcacao()
    

@app.route('/espaco_servico', methods = ['POST', 'GET'])
def get_espacos_servicos():
    if request.method == 'POST':
      id_espaco = request.form['id_espaco']
      id_servico = request.form['id_servico']
      preco = request.form['preco']
      result = esp_serv.insert_espaco_servico(id_espaco, id_servico, preco)
      return jsonify(result)
    else:
        return esp_serv.get_espaco_servico()


@app.route('/espaco/<int:id>')
def get_espacos_by_id(id):
    result = get_espaco_by_id(id)
    return jsonify(result)


