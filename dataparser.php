<?php
    $email = $_POST['name'];
$list_text = array("email" => $email);
$list_text_JSON = json_encode($list_text);
$str;
 $f = fopen("email.json", "r+");
 $count = fread($f, 1);
     if (strlen($count) == 0) {
        $str = "[{'email' : '$email'}]";
         fwrite($f, $str);
     }
else {
    $str = ", {'email' : '$email'}]"; 
    fseek( $f, -1, SEEK_END );
    fwrite($f, $str);
}
fclose($f);
?>