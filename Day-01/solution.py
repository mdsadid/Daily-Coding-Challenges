input_str = input('Enter a string: ')
count = input_str.count('*')

if count:
    print(f"Number of asterisks: {count}")
else:
    print("No asterisks found.")
