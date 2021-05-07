import json
import requests
import numpy as np
import pandas as pd
import csv
import time
from lol_frontend.variable import *

#API_KEY = 'RGAPI-2aba161a-00a5-4b81-a1a2-1f0898283562'



def getBySummonerName(region, SummnorName):
    url = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + SummnorName + '?api_key=' + API_KEY
    responce = requests.get(url)
    if  responce.status_code == 200:
        details = responce.json()
        return details
    else:
        return None


def getPlayerMatchList(region, AccountId):
    url = 'https://' + region + '.api.riotgames.com/lol/match/v4/matchlists/by-account/' + AccountId + '?api_key=' + API_KEY
    playerMatchList = []
    responce = requests.get(url)
    if responce.status_code == 200:
        arr = responce.json()
        playerMatchList = arr['matches']
    return playerMatchList


def getPlayerChampionDict(region, PlayerList):
    
    players = {}
    laneDetails = {}
    roleDetails = {}
    cnt = 0

    #iterate all the player id get all info
    for list_arr in PlayerList:
        Accountid = list_arr[0]
        
        # get match list played by summnor
        playerMatchList = getPlayerMatchList(region, Accountid)
        matchListSize = len(playerMatchList)

        #set Accountid as a key in a all map
        players.setdefault(Accountid, {})
        laneDetails.setdefault(Accountid, {})
        roleDetails.setdefault(Accountid, {})

        #now iterate all the matchid and count champion and lane details and also get role 
        for match in playerMatchList:

            #fetch champion , lane, role name for current gameid
            champion = match['champion']
            lane = match['lane']
            role = match['role']

            if champion in players[Accountid]:
                players[Accountid][champion] += 1.0
            else:
                players[Accountid][champion] = 1.0
            
            if lane in laneDetails[Accountid]:
                laneDetails[Accountid][lane] += 1.0
            else:
                laneDetails[Accountid][lane] = 1.0

            if role in roleDetails[Accountid]:
                roleDetails[Accountid][role] += 1.0
            else:
                roleDetails[Accountid][role] = 1.0

        # for rate limit of riot api        
        time.sleep(0.2)

    return players, laneDetails, roleDetails



def playStyle(region, username):
    
    #championId = pd.read_csv("lol_frontend/functionality/champion.csv", usecols = ["key"], squeeze = True).to_numpy()
    #championName = pd.read_csv("lol_frontend/functionality/champion.csv", usecols = ["name"], squeeze = True).to_numpy()
    
    # map champion name to champion id
    #mapper = {}
    #for i in range(championId.size):
    #  mapper[championId[i]] = championName[i]

    all_data = {}
    all_data['champion'] = []
    all_data['championCnt'] = []
    all_data['lane'] = []
    all_data['laneCnt'] = []
    all_data['role'] = []
    all_data['roleCnt'] = []

    return_username = (username.replace(" ", "%20")).lower() #riot API uses no space lower case verison of username as key
    print("Username: ", username)
    print('usenename  : ', return_username)

    #find account id by summonerName
    details = getBySummonerName(region, return_username)

    if details == None:
        return all_data    
    
    # get all details about champion, lane, role 
    arr = [[details['accountId']]]
    userChampionsList, laneList, roleList  = getPlayerChampionDict(region, arr)
    userChampionsList = userChampionsList[details['accountId']]   
    laneList = laneList[details['accountId']]   
    roleList = roleList[details['accountId']] 


    champ = list(userChampionsList.keys())
    # for mapping champion id to champion name
    champname = [mapper[i] for i in champ]
    champMatch = list(userChampionsList.values())

    all_data['champion'] = champname
    all_data['championCnt'] = champMatch


    lane = list(laneList.keys())
    laneCnt = list(laneList.values())

    all_data['lane'] = lane
    all_data['laneCnt'] = laneCnt

    role = list(roleList.keys())
    roleCnt = list(roleList.values())

    all_data['role'] = role
    all_data['roleCnt'] = roleCnt

    return all_data

