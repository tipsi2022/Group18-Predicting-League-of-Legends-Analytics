import requests

api_key = 'RGAPI-b64e66f5-60ac-4a7f-8e10-296c9afa825a'
header = {"X-Riot-Token": "RGAPI-b64e66f5-60ac-4a7f-8e10-296c9afa825a"}

url = 'https://euw1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5'

summoner_name = 'Tommy Vercetttii'
summoner_name = summoner_name.replace(" ", "%20")

url += summoner_name

data = requests.get(url, headers = header)
data = data.json()
print(data['puuid'])