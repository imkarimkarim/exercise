from db.connection import connection

cursor = connection.cursor()


def read_fruits():
    with cursor:
        sql = "SELECT * FROM fruits"
        cursor.execute(sql)
        result = cursor.fetchall()
        return result
