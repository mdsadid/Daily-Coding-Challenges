<?php

$sentence = readline("Enter a sentence: ");

if (!trim($sentence)) {
    echo "Empty sentence!" . PHP_EOL;

    exit();
}

$words = array_filter(explode(' ', $sentence));

$longestWord = array_reduce(
    $words,
    function ($carry, $word) {
        $word = trim($word, ".,!?;:(){}[]*");

        return strlen($word) > strlen($carry) ? $word : $carry;
    },
    ''
);

echo "The longest word is: $longestWord" . PHP_EOL;
