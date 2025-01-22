from oauth2client.service_account import ServiceAccountCredentials  # pip install oauth2client
import httplib2  # pip install httplib2
import json
import pandas as pd   # pip install pandas

# Specify your Google Service Account JSON key file and scopes
JSON_KEY_FILE = "shapexui.json"    # this is file get for https://console.cloud.google.com/apis/library/indexing.googleapis.com?project=your project name
SCOPES = ["https://www.googleapis.com/auth/indexing"]

# Authorize using the service account credentials
credentials = ServiceAccountCredentials.from_json_keyfile_name(JSON_KEY_FILE, scopes=SCOPES)
http = credentials.authorize(httplib2.Http())

def indexURL(urls, http):
    """
    Function to index URLs using Google Indexing API.
    """
    ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

    for u in urls:
        content = {
            "url": u.strip(),
            "type": "URL_UPDATED"
        }
        json_content = json.dumps(content)

        try:
            response, content = http.request(
                ENDPOINT, method="POST", body=json_content, headers={"Content-Type": "application/json"}
            )
            if response.status == 200:
                result = json.loads(content.decode())
                print(f"Indexed URL: {result['urlNotificationMetadata']['url']}")
            else:
                print(f"Error ({response.status}): {response.reason}")
        except Exception as e:
            print(f"Exception occurred: {e}")

# Read CSV file and extract the URL column
try:
    csv = pd.read_csv("my_data.csv")
    urls = csv["URL"].dropna().tolist() # remove NaN value

    indexURL(urls, http)
except FileNotFoundError:
    print("Error: 'my_data.csv' not found.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
