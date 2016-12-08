<?php
$serialoutput = "/tmp/serial-output";
$serialinput = "/tmp/serial-input";

function ReadStream()
{
    if ($filehandler = fopen($serialoutput, "r")) {
    # Processing
        while(!feof($filehandler)) {
            echo fgetc($filehandler);
        }
        fclose($filehandler);
    }
}
function WriteStream($datatowrite)
{
    if ($filehandler = fopen($serialinput, "w")) {
        fwrite($filehandler, $datatowrite);
    # Processing
        fclose($filehandler);
    }
}
WriteStream($_POST["property"]); # Post data to serial connection
ReadStream();                    # Wait for callback
?>
