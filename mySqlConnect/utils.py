import random


def random_util(start: int, end: int):
    if start is None or end is None:
        return
    return round(random.random() * (end - start)) + start
