<?
$name = $_POST['name'];
$phone = $_POST['phone'];

if ( $_POST['email'] == '' ) {
	$email = 'Не указан';
} else {
	$email = $_POST['email'];
};

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);

$to = 'translatepluskz@gmail.com'; 
$subject = 'Заявка с сайта';
$message = '
            <html>
            <head>
                <title>'.$subject.'</title>
                </head>
                <body>
		    <p>Тут тебе на Лексус денег пришло.</p>
                    <p>Имя: '.$name.'</p>
                    <p>Телефон: '.$phone.'</p> 
                    <p>Email: '.$email.'</p>                       
                </body>
            </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: order@translateplus.kz\r\n";

mail($to, $subject, $message, $headers);
?>