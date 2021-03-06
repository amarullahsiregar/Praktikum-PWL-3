from time import time
from turtle import delay
from urllib import response
from selenium import webdriver
import json

# options = webdriver.ChromeOptions()
# options.add_experimental_option('excludeSwitches', ['enable-logging'])
# driver = webdriver.Chrome(options=options)

PATH = "C:\Program Files\chromedriver.exe"
LINK = "https://prak-web-3.herokuapp.com/"

with open('prak-3.json') as json_file:
    data = json.load(json_file)

for i in data:
    browser = webdriver.Edge(PATH)
    browser.get(LINK)

    browser.find_element_by_name('name').send_keys(i['data']['name'])
    browser.find_element_by_name('surname').send_keys(i['data']['surname'])
    browser.find_element_by_name('username').send_keys(i['data']['username'])
    browser.find_element_by_name('password').send_keys(i['data']['password'])
    browser.find_element_by_name('password2').send_keys(i['data']['password2'])
    klik = browser.find_element_by_id('register_submit')

    klik.click()
