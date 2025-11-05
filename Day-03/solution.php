<?php

$inputStr = readline("Enter a string: ");

if (!trim($inputStr)) {
    echo "Empty string!" . PHP_EOL;

    exit();
}

$vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

$vowelCount = array_reduce(
    str_split($inputStr),
    function ($carry, $char) use ($vowels) {
        return $carry + (in_array($char, $vowels, true) ? 1 : 0);
    },
    0
);

echo "Number of vowels: $vowelCount" . PHP_EOL;
