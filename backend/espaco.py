from database import create_connection

def get_espaco():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM espaco ORDER BY nome;')
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
