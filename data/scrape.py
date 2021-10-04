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

tags = [tag.text_content() for tag in new_releases.xpath('.//div[@class="tab_item_top_tags"]')]
tags = [tag.split(', ') for tag in tags]

flatList = [ item for elem in tags for item in elem]

temp_list = []

for i in flatList:
    if i not in temp_list:
        temp_list.append(i)
#print(temp_list);

#full tag lists:
#['Simulation', 'Strategy', 'Casual', 'Management', 'Multiplayer', '2D', 'Conversation', 'Metroidvania',
# 'Action', '2D Platformer', 'Platformer', 'Tower Defense', 'Auto Battler', 'Soccer', 'Football', 'Sports',
# 'Indie', 'Adventure', 'RPG', 'Story Rich', 'Racing', 'Arcade', 'Third Person', 'Split Screen', '2D Fighter',
# 'Gore', 'Violent', 'Hack and Slash', 'Horror', 'Mystery', 'Massively Multiplayer', 'MMORPG', 'Open World',
# 'Psychological Horror', 'Lovecraftian', 'Atmospheric', 'Visual Novel', 'Action-Adventure', 'City Builder',
# 'Economy', 'Sandbox', 'Exploration', 'Survival', 'Building', 'Medieval', 'Free to Play', 'Shooter', 'Zombies',
# 'Online Co-Op', 'Co-op', 'Physics', '3D Platformer', 'Dating Sim', 'Pixel Graphics', 'Singleplayer',
# 'Sexual Content', 'Nudity', 'Hentai', 'Retro', 'Software', 'FPS', 'First-Person', 'Anime', 'JRPG',
# 'Choices Matter', 'Female Protagonist', 'Choose Your Own Adventure', 'Multiple Endings', 'Cute', 'Puzzle Platformer']

#full platforms lists:
#win linux mac

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
for info in zip(image,titles,prices, tags, total_platforms):
    resp = {}
    resp['image'] = info[0]
    resp['title'] = info[1]
    resp['price'] = info[2]
    resp['tags'] = info[3]
    resp['platforms'] = info[4]
    output.append(resp)
output_file = open("steamdata.json","w")
json.dump(output,output_file,indent=6)
output_file.close()
