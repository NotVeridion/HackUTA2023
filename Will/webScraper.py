import requests
from bs4 import BeautifulSoup
import pandas as pd

def readpage(topics_url, titles, descriptions, links):
    response = requests.get(topics_url)
    page_info = response.text
    with open("webinfo.html", "a") as file:
        file.write(page_info)

    doc = BeautifulSoup(page_info, "html.parser")
    top_Titles = doc.find_all("p", {"class" : "f3 lh-condensed mb-0 mt-1 Link--primary"})
    if not top_Titles: return False
    top_Descriptions = doc.find_all("p", {"class" : "f5 color-fg-muted mb-0 mt-1"})
    top_Links = doc.find_all("a", {"class" : "no-underline flex-grow-0"})

    for tags in top_Titles:
        titles.append(tags.text)

    for tags in top_Descriptions:
        descriptions.append(tags.text.strip())

    for tags in top_Links:
        links.append("https://github.com" + tags["href"])
    return True

    

url = "https://github.com/topics"
titles = []
descriptions = []
links = []
page = 2
while(readpage(url, titles, descriptions, links)):
    url = "https://github.com/topics?page=" + str(page)
    page+=1

print(titles)
top_Dict = {"title" : titles, "descriptions" : descriptions, "links" : links}
df = pd.DataFrame(top_Dict)
df.to_csv("topic.csv", index=None)