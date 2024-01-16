from database import create_connection

def get_espaco_servico():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM espaco_servico;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    print(rows)
    return rows 

def insert_espaco_servico(id_espaco, id_servico, preco):
    query = 'INSERT INTO espaco_servico(id_espaco, id_servico, preco) VALUES (\''+ id_espaco +'\',' +'\'' + id_servico + '\', \'' + preco + '\');'
    print(query)
    conn = create_connection()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    query = 'SELECT * FROM espaco_servico WHERE id=(SELECT MAX(id) FROM espaco_servico);'
    cur.execute(query)
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return row
