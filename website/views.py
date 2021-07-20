from os import environ
from flask import render_template, redirect, request, flash
from flask.blueprints import Blueprint

views = Blueprint("views", __name__)


@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("index.html")
