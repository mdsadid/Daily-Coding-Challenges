<?php

$sentence = readline("Enter a sentence: ");

if (!trim($sentence)) {
    echo "Empty sentence!" . PHP_EOL;

    exit();
}

$charArr    = str_split($sentence);
$characters = array_values(array_filter($charArr, fn($char) => $char != ' '));
$charFreq   = [];
$charMap    = [];

foreach ($characters as $char) {
    $lowerChar            = strtolower($char);
    $charFreq[$lowerChar] = ($charFreq[$lowerChar] ?? 0) + 1;

    if (!isset($charMap[$lowerChar])) {
        $charMap[$lowerChar] = $char;
    }
}

arsort($charFreq);

echo 'Character frequencies:' . PHP_EOL;

foreach ($charFreq as $lowerChar => $freq) {
    $displayChar = $charMap[$lowerChar];

    echo "$displayChar => $freq" . PHP_EOL;
}
