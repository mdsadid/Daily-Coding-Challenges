sentence = input('Enter a sentence: ')

if not sentence.strip():
    print("Empty sentence!")
    exit()

char_list = list(sentence)
characters = [char for char in char_list if char.strip()]
char_freq = {}
char_map = {}

for char in characters:
    lower_char = char.lower()
    char_freq[lower_char] = char_freq.get(lower_char, 0) + 1

    if lower_char not in char_map:
        char_map[lower_char] = char

sorted_chars = sorted(char_freq.items(), key=lambda item: item[1], reverse=True)

print('Character frequencies:')

for lower_char, freq in sorted_chars:
    display_char = char_map[lower_char]

    print(f"{display_char} => {freq}")
