from db.connection import connection

cursor = connection.cursor()


def read_customers():
    with cursor:
        sql = "SELECT * FROM customers"
        cursor.execute(sql)
        result = cursor.fetchall()
        return result
