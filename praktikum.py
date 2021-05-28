import json
from lib2to3.pgen2 import driver
from selenium import webdriver

PATH = "C:\Program Files\chromedriver.exe"
LINK = "http://localhost:3000/"

with open('prak-3.json') as json_file:
    data = json.load(json_file)


for i in data:
    browser = webdriver.Chrome(PATH)
    browser.get(LINK)
    print(browser.title+"\n\n")
    browser.find_element_by_name('name').send_keys(i['data']['name'])
    browser.find_element_by_name('surname').send_keys(i['data']['surname'])
    browser.find_element_by_name('username').send_keys(i['data']['username'])
    browser.find_element_by_name('password').send_keys(i['data']['password'])
    browser.find_element_by_name('password2').send_keys(i['data']['password2'])
    submit = browser.find_element_by_id('register_submit')

    submit.click()
    try:
        alert = browser.switch_to_alert()
        pesan = alert.text
        alert.accept()
        print("\nIsi pesan : "+pesan+"\n")
    except:
        print("\nGagal !\n")
browser.close()
