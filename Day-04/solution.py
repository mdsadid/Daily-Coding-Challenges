from functools import reduce

sentence = input('Enter a sentence: ')

if not sentence.strip():
    print("Empty sentence!")
    exit()

words = sentence.split()


def find_longest_word(acc, word):
    word = word.strip(".,!?;:(){}[]*")

    return word if len(word) > len(acc) else acc


longest_word = reduce(find_longest_word, words, "")

print(f"The longest word is: {longest_word}")
