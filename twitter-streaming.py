import requests
import os
import json
import boto3
import random
import time
import tweepy 

# To set your environment variables in your terminal run the following line:
# export 'BEARER_TOKEN'='<your_bearer_token>'
#bearer_token = os.environ.get("BEARER_TOKEN")
consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""
bearer_token= "" 

streamName = ''


def create_url():
    return "https://api.twitter.com/2/tweets/sample/stream?tweet.fields=author_id,attachments"


def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2SampledStreamPython"
    return r


def connect_to_endpoint(url):
    response = requests.request("GET", url, auth=bearer_oauth, stream=True)
    print(response.status_code)
    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            response = kinesis_client.put_record_batch(
                DeliveryStreamName=streamName,
                Records=[
                    {
                       "Data" :  response_line
                        }
                    ]
                )
            #print(response)
            #print(json.dumps(json_response, indent=4, sort_keys=True))

    if response.status_code != 200:
        raise Exception(
            "Request returned an error: {} {}".format(
                response.status_code, response.text
            )
        )


def main():
    url = create_url()
    timeout = 0
    while True:
        connect_to_endpoint(url)
        timeout += 1


if __name__ == "__main__":
    kinesis_client = boto3.client('firehose', region_name = 'us-east-1')
    main()
