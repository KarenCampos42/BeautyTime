***Go to Backend

***Identify which file is the server (if we dont run this command flask will assume that the default file where server is located is App.py)
export FLASK_APP=server.py

***Run App (debug is to force automatic restart of the server when we save the file)
flask run --debug

***To be able to communicate with server outside the localhost
flask run --host=0.0.0.0

***Run App (debug is to force automatic restart of the server and host is to be able to communicate with server outside the localhost)
flask run --debug --host=0.0.0.0