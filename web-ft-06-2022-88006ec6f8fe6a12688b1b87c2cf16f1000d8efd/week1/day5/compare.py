
def tandem(list1,list2,fastest):
    list1 = [1,2,3,4]
    list2 = [2,3,7,8]
        # [8,7,3,2]
    speed = []
    if fastest:
        list2.reverse()
    for i in range(len(list1)):
        # val = list1[i]
        # val2 = list2[i]
        print(list1[i])
        print(list2[i])
        if list1[i] > list2[i]:
            speed.append(list1[i])
        if list1[i] == list2[i]:
            speed.append(list1[i])
        if list1[i] < list2[i]:
            speed.append(list2[i])
    return sum(speed)