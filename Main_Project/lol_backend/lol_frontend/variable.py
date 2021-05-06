import pandas as pd
import json

API_KEY = 'RGAPI-cb7a554d-39e5-4a73-9422-9a6c16715b95'
DEV_API = 'RGAPI-cb7a554d-39e5-4a73-9422-9a6c16715b95'

#mapper for champion name to its id
mapper = {}
championId = pd.read_csv("lol_frontend/functionality/champion.csv", usecols = ["key"], squeeze = True).to_numpy()
championName = pd.read_csv("lol_frontend/functionality/champion.csv", usecols = ["name"], squeeze = True).to_numpy()
for i in range(championId.size):
    mapper[championId[i]] = championName[i]

#leaderboard data fetch in variable 
with open('lol_frontend/functionality/leaderboard.json') as f:
    leaderboard_DATA = json.load(f)

#upcomingLeague data fetch in variable
with open('lol_frontend/functionality/upcomingLeagueInfo.json') as f:
    upcomingleague_DATA = json.load(f)

#fetch player champion data for suggestion
with open('lol_frontend/functionality/br1sample.json') as f:
    br1_DATA = json.load(f)
