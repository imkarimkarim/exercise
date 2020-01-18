#!/usr/bin/python3
# print("\n Start")
array = [1, 3, 34, 199, 20 , 8 , 9]
print(array)
for a in range(0,6):
    # print("==============")
    # print("a is:", a, "and array is:", array)
    for b in range(6-a):        
        print("b is:", b, "and array is:", array)
        if(array[b] > array[b+1]):
            # print("\"if was true\" and array is:", array)
            # print("array[b]: ", array[b], "array[b+1]", array[b+1])
            t = array[b]
            array[b] = array[b+1]
            array[b+1] = t
            
# print("\n Final")
print(array)