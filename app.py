import numpy as np
import sqlite3
from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/mlb_data"
    )


def get_db_conn():
    conn = sqlite3.connect('mlbSeason_db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/v1.0/mlb_data')
@cross_origin()
def project_data():
    conn = get_db_conn()
    posts = conn.execute('SELECT * FROM mlb_season_data').fetchall()
    conn.close()
    data = []
    
    for post in posts:
        print(post[0])
        mlb_season_data = {}
        mlb_season_data["year"] = post[0]
        mlb_season_data["league_id"] = post[1]
        mlb_season_data["division_id"] = post[2]
        mlb_season_data["rank"] = post[3]
        mlb_season_data["games_played"] = post[4]
        mlb_season_data["home_games"] = post[5]
        mlb_season_data["wins"] = post[6]
        mlb_season_data["losses"] = post[7]
        mlb_season_data["division_winner"] = post[8]
        mlb_season_data["wild_card_winner"] = post[9]
        mlb_season_data["league_winner"] = post[10]
        mlb_season_data["world_series_winner"] = post[11]
        mlb_season_data["runs_scored"] = post[12]
        mlb_season_data["at_bats"] = post[13]
        mlb_season_data["hits"] = post[14]
        mlb_season_data["doubles"] = post[15]
        mlb_season_data["triples"] = post[16]
        mlb_season_data["homeruns"] = post[17]
        mlb_season_data["walks"] = post[18]
        mlb_season_data["strikeouts_by_batters"] = post[19]
        mlb_season_data["stolen_bases"] = post[20]
        mlb_season_data["caught_stealing"] = post[21]
        mlb_season_data["batters_hit_by_pitch"] = post[22]
        mlb_season_data["sacrifice_flies"] = post[23]
        mlb_season_data["opponents_runs_scored"] = post[24]
        mlb_season_data["earned_runs_allowed"] = post[25]
        mlb_season_data["earned_run_average"] = post[26]
        mlb_season_data["complete_games"] = post[27]
        mlb_season_data["shutouts"] = post[28]
        mlb_season_data["saves"] = post[29]
        mlb_season_data["outs_pitches"] = post[30]
        mlb_season_data["hits_allowed"] = post[31]
        mlb_season_data["homeruns_allowed"] = post[32]
        mlb_season_data["walks_allowed"] = post[33]
        mlb_season_data["strikeouts_by_pitchers"] = post[34]
        mlb_season_data["errors"] = post[35]
        mlb_season_data["double_plays"] = post[36]
        mlb_season_data["fielding_percentage"] = post[37]
        mlb_season_data["team_name"] = post[38]
        mlb_season_data["ball_park"] = post[39]
        mlb_season_data["home_attendance"] = post[40]


        data.append(mlb_season_data)

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug = True)
