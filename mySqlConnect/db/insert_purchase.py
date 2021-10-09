from db.connection import connection


def insert_purchase(fruit, customer, weight, price):
    cursor = connection.cursor()
    with cursor:
        sql = """INSERT INTO `purchases` (
        `fruit_id`, `customer_id`, `fruit_weight`, `fruit_price`)
        VALUES (
        %s, %s, %s, %s)"""
        cursor.execute(sql, (fruit, customer, weight, price))
        connection.commit()
