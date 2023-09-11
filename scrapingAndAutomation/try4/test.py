import undetected_chromedriver as uc
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

options = uc.ChromeOptions() 
options.add_argument("start-maximized")
# s = Service('C:\\BrowserDrivers\\chromedriver.exe')
driver = uc.Chrome(options=options)
driver.get('google.com')
# driver.save_screenshot('datadome_undetected_webddriver.png')