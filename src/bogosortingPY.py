import random
arr = [9, 4, 12, 43, 1, 5, 2]
sorted = False

while(sorted == False):
    random.shuffle(arr)
    for i in range(len(arr) - 1):
        if(arr[i] > arr[i + 1]):
            random.shuffle(arr)
            print(arr)
        else:
            sorted = True
    
            
