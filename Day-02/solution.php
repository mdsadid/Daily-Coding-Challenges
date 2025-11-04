<?php

$inputStr = readline("Enter a string: ");

if (!trim($inputStr)) {
    echo "Empty string!" . PHP_EOL;

    exit();
}

$strLen     = strlen($inputStr);
$reverseStr = '';

for ($i = $strLen - 1; $i >= 0; $i--) {
    $reverseStr .= $inputStr[$i];
}

echo 'Reverse string: ' . $reverseStr . PHP_EOL;
