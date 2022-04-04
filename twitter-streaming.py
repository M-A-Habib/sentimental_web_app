#https://medium.com/fernando-pereiro/analyzing-twitter-on-real-time-with-aws-big-data-and-machine-learning-services-1fa888f962cf
#https://github.com/fepereiro/FirehoseWithComprehend/blob/master/twitter-streaming.py


import boto3
import random
import time
import json
import tweepy 

#This is the super secret information
consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""
bearer_token= "" 

DeliveryStreamName = 'PUT-S3-qFeoj'


#This is a basic listener that just prints received tweets and put them into the stream.
class listener(tweepy.StreamingClient):

    def on_status(self, status):

        data = {
            'tweet_text': status.text,
            'created_at': str(status.created_at),
            'user_id': status.user.id,
            'user_name': status.user.name,
            'user_screen_name': status.user.screen_name,
            'user_description': status.user.description,
            }
        
        response = kinesis_client.put_record(
            StreamName=DeliveryStreamName,
            Data=json.dumps(data))

        print('Status: ' +
              json.dumps(response['ResponseMetadata']['HTTPStatusCode']))

    def on_error(self, status):
        print(status)


if __name__ == '__main__':
    session = boto3.Session()
    kinesis_client = session.client('kinesis')

    #This handles Twitter authetification and the connection to Twitter Streaming API
    stream = listener(bearer_token)
    stream.sample() #was stream.filter

    print("Successfully compiled.")
