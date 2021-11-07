#!/usr/bin/python3

from colorama import Fore

values = input('type the record values:\n')
v = values.split(' ')
for i in range(0, 8):
    v[i] = int(v[i])

gamesCount = v[4] + v[5] + v[6]
points = v[6] * 3 + v[5]
residuum = v[3] - v[2]

flag = True

if gamesCount != v[7]:
    print(Fore.RED + "games count isn't valid")
    flag = False
if points != v[0]:
    print(Fore.RED + "point isn't valid")
    flag = False
if residuum != v[1]:
    print(Fore.RED + "residuum isn't valid")
    flag = False
if flag:
    print(Fore.GREEN + "yessssss!")
