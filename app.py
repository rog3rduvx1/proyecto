import os
from flask import Flask, render_template

app = Flask (__name__,static_folder ='assets')

@app.route('/')
def inicio():
    return render_template('index.html')

if __name__=='__main__':
    app.run(debug=True)