<?php

$input = readline("Enter a string: ");
$count = substr_count($input, '*');

if ($count) {
    echo "Number of asterisks: $count" . PHP_EOL;
} else {
    echo "No asterisks found." . PHP_EOL;
}
