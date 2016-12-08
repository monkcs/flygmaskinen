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
?>


{
  "Name": "<?php print($_POST["property"]); echo exec('whoami'); ?>",
  "Value": 101,
  "Commited": true
}
