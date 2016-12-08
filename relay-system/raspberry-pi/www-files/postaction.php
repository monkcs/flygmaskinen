<?php
$serialoutput = "/tmp/serial-output";
$serialinput = "/tmp/serial-input";

function WriteStream($datatowrite)
{
    if ($filehandler = fopen($serialinput, "w")) {
        fwrite($filehandler, $datatowrite);
    # Processing
        fclose($filehandler);
    }
}
WriteStream($_POST["property"]); # Post data to serial connection
?>
