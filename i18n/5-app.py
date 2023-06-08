#!/usr/bin/env python3
"""
basic flask app
"""


from flask import Flask, render_template, request, g
from flask_babel import Babel


app = Flask(__name__)
babel = Babel(app)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config():
    """ configures available languages """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


@app.route('/', strict_slashes=False)
def index():
    """ homepage """
    return render_template('4-index.html')


@babel.localeselector
def get_locale():
    """ Retrieves locale from request """
    locale = request.args.get('locale')
    if locale and locale in Config.LANGUAGES:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


def get_user():
    """ returns user dict """
    user_id = request.args.get('login_as')
    if user_id:
        return users.get(int(user_id))
    return None


@app.before_request
def before_request():
    """ finds user and set to flask.g.user """
    g.user = get_user()


app.config.from_object(Config)

if __name__ == '__main__':
    app.run()
