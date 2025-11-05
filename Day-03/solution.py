from functools import reduce

input_str = input('Enter a string: ')

if not input_str.strip():
    print("Empty string!")
    exit()

vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

vowel_count = reduce(lambda acc, char: acc +
                    (1 if char in vowels else 0), list(input_str), 0)

print(f"Number of vowels: {vowel_count}")
