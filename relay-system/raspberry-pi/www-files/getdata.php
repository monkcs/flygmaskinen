<?php
$serialoutput = "/tmp/serial-output";
$serialinput = "/tmp/serial-input";

if ($filehandler = fopen($serialinput, "w")) {
    fwrite($filehandler, $_POST["property"]);       # Write data to serial connection
    fclose($filehandler);                           # Close pipe-file
}

if ($filehandler = fopen($serialoutput, "r")) {
    while(!feof($filehandler)) {
        echo fgetc($filehandler);                   # Echo data back to browser
    }
    fclose($filehandler);                           # Close pipe-file
}
?>
