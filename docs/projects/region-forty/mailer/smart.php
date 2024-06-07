<?php

$select = $_POST['select'];
$calendar = $_POST['calendar'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'andbatanov@yandex.ru';                 // Наш логин
$mail->Password = 'nwgujoeasdypuhce';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('andbatanov@yandex.ru', 'Регион 40');   // От кого письмо 
$mail->addAddress('BatanovFreelans@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Тип транспорта: ' . $select . '<br>
	Дату отправления: ' . $calendar . '<br>
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	Пожелание: ' . $text . '';

if (!$mail->send()) {
  return false;
} else {
  return true;
}