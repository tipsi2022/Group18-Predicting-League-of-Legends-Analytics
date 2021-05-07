from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index),

    #all links for request data 
    re_path(r'^api/leaderBoard$', views.leaderboard_view),
    re_path(r'^api/upcomingLeague$', views.upcomingLeague_view),
    re_path(r'^api/playerCompare$', views.playercompare_view),
    re_path(r'^api/playerPlayStyle', views.playerPlayStyle_view),
    re_path(r'^api/suggestion', views.suggestion_view),
    re_path(r'^api/matchdata', views.summonerdata),
    
    #this link for reload all data manually by calling this website
    


]