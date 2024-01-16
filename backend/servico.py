from database import create_connection

def get_servico():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM servico ORDER BY nome;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 


def insert_servico(categoria, nome):
    query = 'INSERT INTO servico(categoria, nome) VALUES (\''+ categoria +'\',' +'\'' + nome + '\');'
    print(query)
    conn = create_connection()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    query = 'SELECT * FROM servico WHERE id=(SELECT MAX(id) FROM servico);'
    cur.execute(query)
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return row


