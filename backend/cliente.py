from database import create_connection

def get_cliente():
    conn = create_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM cliente;')
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows 

def insert_cliente(nome, email, telemovel):
    query = 'INSERT INTO cliente(nome, email, telemovel) VALUES (\''+ nome +'\',' +'\'' + email + '\', \'' + telemovel + '\');'
    print(query)
    conn = create_connection()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    query = 'SELECT * FROM cliente WHERE id=(SELECT MAX(id) FROM cliente);'
    cur.execute(query)
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return row

