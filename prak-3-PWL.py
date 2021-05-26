from time import time
from turtle import delay
from selenium import webdriver
import json

PATH = "C:\Program Files (x86)\Google\chromedriver.exe"
LINK = "https://prak-web-3.herokuapp.com/"

with open('data-test.json') as json_file:
    data = json.load(json_file)


for i in data['userdata']:
    browser = webdriver.Chrome(PATH)
    browser.get(LINK)
    print(browser.title)

    browser.find_element_by_name('name').send_keys(
        i['name'])
    browser.find_element_by_name('surname').send_keys(
        i['surname'])
    browser.find_element_by_name('username').send_keys(
        i['username'])
    browser.find_element_by_name('password').send_keys(
        i['password'])
    browser.find_element_by_name('password2').send_keys(
        i['password2'])
    klik = browser.find_element_by_id('register_submit')

    klik.click()

browser.quit()
