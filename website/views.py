from flask import render_template
from flask.blueprints import Blueprint
from flask.helpers import send_file

views = Blueprint("views", __name__)


@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("index.html")


@views.route('/resume')
def get_resume():
    path = "files/Resume-Vaylon-Fernandes.pdf"
    return send_file(path, as_attachment=True)
