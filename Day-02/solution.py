inputStr = input('Enter a string: ')

if not inputStr.strip():
    print("Empty string!")
    exit()

strLen = len(inputStr)
reverseStr = ''

for i in range(strLen - 1, -1, -1):
    reverseStr += inputStr[i]

print(f"Reverse string: {reverseStr}")
