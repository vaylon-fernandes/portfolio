from os import environ
from flask import render_template, redirect, request, flash
from flask.blueprints import Blueprint
from flask.helpers import send_file

views = Blueprint("views", __name__)


@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("index.html")


@views.route('/download')
def download():
    path = "files/Resume-Vaylon-Fernandes.pdf"
    return send_file(path, as_attachment=True)
