age = input('how old are you bitch?!: ')
try:
    age_in_days = int(age) * 365
    print('haha you lived around', age_in_days, 'days')
except ValueError:
    print('you basterd... only input numbers...')
