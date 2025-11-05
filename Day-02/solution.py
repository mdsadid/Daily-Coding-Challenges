input_str = input('Enter a string: ')

if not input_str.strip():
    print("Empty string!")
    exit()

str_len = len(input_str)
reverse_str = ''

for i in range(str_len - 1, -1, -1):
    reverse_str += input_str[i]

print(f"Reverse string: {reverse_str}")
