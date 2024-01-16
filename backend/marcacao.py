from database import create_connection

def get_marcacao():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT m.id, c.nome nome_cliente, e.nome nome_espaco, s.nome nome_servico, m.data FROM marcacao m, espaco e, servico s, cliente c WHERE m.id_cliente=c.id AND m.id_espaco=e.id AND m.id_servico=s.id;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def insert_marcacao(id_cliente, id_espaco, id_servico, data):
    query = 'INSERT INTO marcacao(id_cliente, id_espaco, id_servico, data) VALUES (\''+ id_cliente +'\',' +'\'' + id_espaco + '\', \'' + id_servico + '\', \''+ data +'\');'
    print(query)
    conn = create_connection()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    query = 'SELECT * FROM marcacao WHERE id=(SELECT MAX(id) FROM marcacao);'
    cur.execute(query)
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return row
