def wrap():
    def decorate(func):
        def call(*args, **kwargs):
            result = func(*args, **kwargs)
            return result

        return call

    return decorate
