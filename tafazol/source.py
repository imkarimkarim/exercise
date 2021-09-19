def game(number):
    pass
    firstNumber = int(str(number)[0])
    secondNumber = int(str(number)[1])
    if firstNumber > secondNumber:
        return firstNumber - secondNumber
    else:
        return secondNumber - firstNumber
