class Node:
    def __init__(self, data):
        self.data = data
        self.next = ''
def add(data):
    node = head
    while head.next:
        node = head.next
    node.next = Node(data)



def returnBig(s, e):
        if (s > e):
            big = s
            small = e
        else:
           big = e
           small = s
        return big, small


def selectCoin(value):
    return

arr = [1,2,3,4,5,6,7,8,9,10] #연결리스트
len = len(arr)
#A = Array(len/2), B = new Array(len/2)
print(len)
for i in range(len):
    s = arr[i]
    e = arr[len-1]
    #var [big, small] = [3, 4]
    big, small = returnBig(s, e)
    print(big, small, i)
    benefit = big - small
    benefit_B = s
    lisk_small = e





