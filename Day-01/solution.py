inputStr = input('Enter a string: ')
count = inputStr.count('*')

if count:
    print(f"Number of asterisks: {count}")
else:
    print("No asterisks found.")
