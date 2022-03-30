import boto3
import json
import os
import tweepy
import uuid

consumer_key = os.environ['CONSUMER_KEY']
consumer_secret = os.environ['CONSUMER_SECRET']
access_token = os.environ['ACCESS_TOKEN']
access_token_secret = os.environ['ACCESS_TOKEN_SECRET']

kinesis_stream_name = 'kds-twitter-sda'
twitter_filter_tag = '#Covid19'


class StreamingTweets(tweepy.Stream):
    def on_status(self, status):
        data = {
            'tweet_text': status.text,
            'created_at': str(status.created_at),
            'user_id': status.user.id,
            'user_name': status.user.name,
            'user_screen_name': status.user.screen_name,
            'user_description': status.user.description,
            'user_location': status.user.location,
            'user_followers_count': status.user.followers_count,
            'tweet_body': json.dumps(status._json)
        }

        response = kinesis_client.put_record(
            StreamName=kinesis_stream_name,
            Data=json.dumps(data),
            PartitionKey=partition_key)

        print('Status: ' +
              json.dumps(response['ResponseMetadata']['HTTPStatusCode']))

    def on_error(self, status):
        print(status)


session = boto3.Session()
kinesis_client = session.client('kinesis')
partition_key = str(uuid.uuid4())

stream = StreamingTweets(
    consumer_key, consumer_secret,
    access_token, access_token_secret
)

stream.filter(track=[twitter_filter_tag])
