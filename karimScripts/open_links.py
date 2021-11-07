#!/usr/bin/python3

import sys
import webbrowser

filename = sys.argv[1]

with open(filename) as f:
    content = f.readlines()

for link in content:
    webbrowser.open_new_tab(link[0:-1])
