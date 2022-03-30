import boto3
import json
import os
import tweepy
import uuid

consumer_key = fGFOmQId24tRKmtsIpoD4nntd
consumer_secret = ntRsegY8alhDcXdFN0aaco3sG5lAMi5Vx8eYnwKgybpWZffl3f
access_token = 1467680913081331713-BRiiOvb54UtmHUmYPVPSGCWkZJQKl5
access_token_secret = 0fOOgFC05CwchbRwraf6v7NfX9Ns1cr2QYJw56nakVEe9

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
