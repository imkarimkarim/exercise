from random_purchase import generate_random_purchase
from db.insert_purchase import insert_purchase

for i in range(100):
    rp = generate_random_purchase()
    insert_purchase(rp[0], rp[1], rp[2], rp[3])
