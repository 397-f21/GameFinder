#part of this code is cited from https://yasoob.me/2018/06/20/an-intro-to-web-scraping-with-lxml-and-python/
import requests
import lxml.html
import json

html = requests.get('https://store.steampowered.com/explore/new/')


doc = lxml.html.fromstring(html.content)

new_releases = doc.xpath('//div[@id="tab_newreleases_content"]')[0]


image = new_releases.xpath('//img[@class="tab_item_cap_img"]/@src')
titles = new_releases.xpath('.//div[@class="tab_item_name"]/text()')
prices = new_releases.xpath('.//div[@class="discount_final_price"]/text()')
url = new_releases.xpath('//*[@id="tab_newreleases_content"]/a/@href')

prices = [price.replace("$", "") for price in prices]
prices = [price.replace("Free To Play", "Free") for price in prices]
prices = [price.replace("Free", "0") for price in prices]
prices = list(map(float, prices))

url = [u.replace("?snr=1_239_new__145", "") for u in url]
tags = [tag.text_content() for tag in new_releases.xpath('.//div[@class="tab_item_top_tags"]')]
tags = [tag.split(', ') for tag in tags]

flatList = [ item for elem in tags for item in elem]

temp_list = []

for i in flatList:
    if i not in temp_list:
        temp_list.append(i)

occurrences_list = []
occurrences_list = dict((x,flatList.count(x)) for x in flatList)

#find the top 10 common tags
sorted_dict = sorted(occurrences_list.items(), key=lambda x: x[1])
#const tags = ["Action", "Multiplayer", "Adventure","Simulation", "Free to Play", "Open World","Third Person", "Strategy", "Racing","Casual"];

# print(sorted_dict);

platforms_div = new_releases.xpath('.//div[@class="tab_item_details"]')
total_platforms = []

for game in platforms_div:
    temp = game.xpath('.//span[contains(@class, "platform_img")]')
    platforms = [t.get('class').split(' ')[-1] for t in temp]
    if 'hmd_separator' in platforms:
        platforms.remove('hmd_separator')
    total_platforms.append(platforms)

#print(total_platforms);

output = []
for info in zip(image,total_platforms,prices, tags,titles,url):
    resp = {}
    resp['image'] = info[0]
    resp['platforms'] = info[1]
    resp['price'] = info[2]
    resp['tags'] = info[3]
    resp['title'] = info[4]
    resp['url'] = info[5]
    output.append(resp)
output_file = open("steamdata.json","w")
json.dump(output,output_file,indent=6)
output_file.close()
