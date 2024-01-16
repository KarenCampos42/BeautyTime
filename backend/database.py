import psycopg2


def create_connection():
    conn = psycopg2.connect(database = "beautytime", 
                        user = "karencampos", 
                        host= 'localhost',
                        password = "kc",
                        port = 5432)
    return conn

"""
def get_espaco():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM espaco;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def get_servico():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM servico;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def get_cliente():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM cliente;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def get_marcacao():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM marcacao;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def get_espaco_servico():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM espaco_servico;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def insert_espaco(nome, localizacao, abertura, fecho):
    query = 'INSERT INTO espaco(nome, localizacao, abertura, fecho) VALUES (\''+ nome +'\',' +'\'' + localizacao + '\', \'' + abertura + '\', \''+ fecho +'\');'
    print(query)
    conn = create_connection()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    query = 'SELECT * FROM espaco WHERE id=(SELECT MAX(id) FROM espaco);'
    cur.execute(query)
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return row

def get_espaco_by_id(id):
    query = 'SELECT * FROM espaco WHERE id=' + str(id) + ';'
    conn = create_connection()
    cur = conn.cursor()
    cur.execute(query)
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return row


"""