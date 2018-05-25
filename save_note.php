<?php

$space = $_POST['notes-notepad'];
$myFile = "Notes.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$ptag = array("<p>", "</p>", "<ol>", "</ol>", "<li>", "</li>");
$end = str_replace($ptag, "", $space);
fwrite($fh, $end);
fclose($fh);

header("Location: http://127.0.0.1/~beckettjenen/foo"); /* Redirect browser */
exit();

?>