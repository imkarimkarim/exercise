from db.read_fruits import read_fruits
from db.read_customers import read_customers
from utils import random_util

fruits = []
customers = []
if len(fruits) == 0 and len(customers) == 0:
    fruits = read_fruits()
    customers = read_customers()


# fruit customer weight price
def generate_random_purchase():
    last_index_f = len(fruits) - 1
    last_index_c = len(customers) - 1
    rnd_fruit = fruits[random_util(0, last_index_f)]['fruit_id']
    rnd_customer = customers[random_util(0, last_index_c)]['customer_id']
    rnd_weight = random_util(5, 50)
    rnd_price = random_util(5000, 250000)

    return [rnd_fruit, rnd_customer, rnd_weight, rnd_price]
