import requests
from bs4 import BeautifulSoup
import pandas as pd

def readpage(topics_url, titles, cost ,image, links):
    
    response = requests.get(topics_url)
    page_info = response.text
    #with open("webinfo.html", "a") as file:
    #    file.write(page_info)

    doc = BeautifulSoup(page_info, "html.parser")
    itemTitles = doc.find_all("span", {"role" : "heading"})
    if not itemTitles: return False
    itemCost = doc.find_all("div", {"class" : "s-item__details clearfix"})
    itemImage = doc.find_all("div", {"class" : "s-item__image-wrapper image-treatment"})
    itemLinks = doc.find_all("a", {"class" : "s-item__link"})

    for tags in itemTitles[1:]:
        titles.append(tags.text)

    for tags in itemCost[1:]:
        grandchild = ""
        for child in tags.findChildren("div", {"class" : "s-item__detail s-item__detail--primary"} , recursive=False):
            if not grandchild:
                try:
                    grandchild = child.findChildren("span", {"class" : "s-item__price"}, recursive=False)
                except:
                    grandchild = ""
        
        cost.append(grandchild[0].text)

    for tags in itemImage[1:]:
        child = tags.findChildren("img" , recursive=False)
        image.append(child[0].get("src"))

    for tags in itemLinks[1:]:
        links.append(tags["href"])
    #print(cost)
    return True

    

name = "iphone"
page = 1
url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1311&_nkw=" + name + "&_pgn="+ str(page)
titles = []
costs = []
images = []
links = []
url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1311&_nkw=" + name + "&_pgn="+ str(page)
readpage(url, titles, costs, images, links)
#while(readpage(url, titles, costs, images, links)):
#    url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1311&_nkw=" + name + "&_pgn="+ str(page)
#    page+=1


ItemDict = {"title" : titles, "costs" : costs, "images" : images, "links" : links}
df = pd.DataFrame(ItemDict)
df.to_csv("topic.csv", index=None, header=None)
for i in range(0, len(titles)):
    titles[i] = titles[i].replace('"', '\\\"')
    #print(titles[i])

with open("Item.jsx", "w") as file:
        file.write("const laptops = [\n")
        end = ""
        for i in range(0, len(titles)):
            file.write("\t{\n")
            file.write("\t\ttitle: \"" + titles[i] + "\",\n")
            file.write("\t\tcosts: \"" + costs[i] + "\",\n")
            file.write("\t\timages: \"" + images[i] + "\",\n")
            file.write("\t\tlinks: \"" + links[i] + "\",\n")
            file.write("\t},\n")
        file.write("]")
        