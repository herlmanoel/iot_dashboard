
import requests

def getDataJsonThingspeak(channelId, fieldNumber, numResults):
    URL = 'https://api.thingspeak.com/channels/'+channelId+'/fields/'+fieldNumber+'.json?results='+numResults

    response = requests.get(url=URL)
    feedsJson = response.json()["feeds"]

    print(feedsJson)

    return feedsJson

__name__ = 'utils'