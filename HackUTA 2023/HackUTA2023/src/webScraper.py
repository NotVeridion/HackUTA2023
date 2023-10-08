import requests
from bs4 import BeautifulSoup
import pandas as pd

def readpage(topics_url, titles, cost ,image, links, limit):
    
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

    for tags in itemTitles[1:limit]:
        titles.append(tags.text)

    for tags in itemCost[1:limit]:
        grandchild = ""
        for child in tags.findChildren("div", {"class" : "s-item__detail s-item__detail--primary"} , recursive=False):
            if not grandchild:
                try:
                    grandchild = child.findChildren("span", {"class" : "s-item__price"}, recursive=False)
                except:
                    grandchild = ""
        
        cost.append(grandchild[0].text)

    for tags in itemImage[1:limit]:
        child = tags.findChildren("img" , recursive=False)
        image.append(child[0].get("src"))

    for tags in itemLinks[1:limit]:
        links.append(tags["href"])
    #print(cost)
    return True

    

name = "iphone"
page = 1
limit = 12
url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1311&_nkw=" + name + "&_pgn="+ str(page)
titles = []
costs = []
images = []
links = []
readpage(url, titles, costs, images, links, limit)
#while(readpage(url, titles, costs, images, links)):
#    url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1311&_nkw=" + name + "&_pgn="+ str(page)
#    page+=1


ItemDict = {"title" : titles, "costs" : costs, "images" : images, "links" : links}
#df = pd.DataFrame(ItemDict)
#df.to_csv("topic.csv", index=None, header=None)
for i in range(0, len(titles)):
    titles[i] = titles[i].replace('"', '\\\"')
    #print(titles[i])

with open("Item.jsx", "w") as file:
        file.write("function Item(){\n")
        file.write("\tconst items = [\n")
        end = ""
        for i in range(0, len(titles)):
            file.write("\t\t{\n")
            file.write("\t\t\ttitle: \"" + titles[i] + "\",\n")
            file.write("\t\t\tcosts: \"" + costs[i] + "\",\n")
            file.write("\t\t\timages: \"" + images[i] + "\",\n")
            file.write("\t\t\tlinks: \"" + links[i] + "\",\n")
            file.write("\t\t},\n")
        file.write("\t]\n")
        file.write("\treturn items\n}\n")
        file.write("export default Item\n")
        