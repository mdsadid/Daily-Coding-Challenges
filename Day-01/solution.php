<?php

$input = readline("Enter a string: ");
$count = substr_count($input, '*');

if ($count) {
    echo "Number of asterisks: $count\n";
} else {
    echo "No asterisks found.\n";
}
