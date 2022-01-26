<!DOCTYPE html>
<html>
<head>
<title> </title>
</head>
<body>
<?php
	if (isset($_POST['ok'])) {
		$nombre = $_POST['nombre'];
		$empresa = $_POST['empresa'];
		$telefono = $_POST['tel'];
		$servicio = $_POST['servicios'];
		$coment = $_POST['coment'];
		$para = "leanledes2014@gmail.com";
		
		$msg =  "El (la) c. $nombre de la empresa $empresa, con telefono $telefono, requiere el servicio $servicio y sus comentarios son: $coment";
		
		$ready = mail($para,"Servicios","");
		
		#Cambiar la ruta de refrescado cuando ya esté en el servidor
		if($ready){
			print "<script>alert('Mensaje enviado');</script>";
            print "<meta http-equiv='refresh' content='0.001; http://leanledes.github.io/seguridad-privada/envio/envio.php'"; 
		}else{
			print "algo ocurrio!";
		}
	}
	
?>
</body>
</html>
