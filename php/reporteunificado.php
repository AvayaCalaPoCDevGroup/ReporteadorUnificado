<?php

// Incluimos la conexion a la base de datos

include "db.php";

// Obtenemos variables por POST

$fechainicio = $_POST["fechainicio-input"];
$fechafin = $_POST["fechafin-input"];

// Concatenamos Horas

$fechainicio = $fechainicio . " 00:00:01";
$fechafin = $fechafin . " 23:59:59";

//funcion para obtener datos
//declaramos los valores que pasaremos a la function
//$conn1 y $conn2 son las conexiones que incluimos con el archivo db.php, $fechainicio y $fechafin los valores del fpormulario
function obtenerdatos($conn, $conn2, $fechainicio, $fechafin)
	{
	// Creamos una sentencia preparada para evitar inyecciones SQL
  //Obtenemos la lista del IVR que contengan un UCID y especificamos el Rango de Fechas en nuestra Sentencia Preparada
	$stmt = $conn->prepare("SELECT ucid FROM cdr WHERE (ucid is null or ucid != '')  AND calltimestamp BETWEEN :fechainicio AND :fechafin ORDER BY ucid ASC");
	// Enlazamos las variables a nuestros apuntadores para Prepared Statements y Ejecutamos el Query
	$stmt->execute([':fechainicio' => $fechainicio, ':fechafin' => $fechafin]);
  //Creamos un Objeto con los resultados de la consulta
	$array = $stmt->fetchAll(PDO::FETCH_ASSOC);
  //Recorremos este objeto y vamos agregando los resultados de la columna ucid a un Array
	foreach($array as $row)
		{
		$indexes[] = $row['ucid'];
		}
    //a los resultados los agregamos a una nueva variable llamada result y creamos una lista separada por comas
	$result = "'" . implode("', '", $indexes) . "'";
  // Creamos una sentencia preparada para evitar inyecciones SQL
  //Obtenemos la lista del CMS que estén dentro del rango especificado con la lista anterior
	$stmt2 = $conn2->prepare("SELECT ucid,anslogin,dispsplit,agentskilllevel,agentsurplus,queuetime,held,ansholdtime,holdabn,ansreason,disppriority,duration,firstvdn,talktime,asai_uui,lastcwc FROM root.call_rec WHERE ucid IN ($result) ORDER BY ucid ASC");
  //Ejecutamos el Query
	$stmt2->execute();
  //Creamos un Objeto con los resultados de la consulta
	$arr2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
  //Recorremos este objeto y vamos agregando los resultados de la columna ucid a un Array
	foreach($arr2 as $arrs2)
		{
		$indexes1[] = $arrs2['ucid'];
		}
//a los resultados los agregamos a una nueva variable llamada result1 y creamos una lista separada por comas
	$result1 = "'" . implode("', '", $indexes1) . "'";
  // Creamos una sentencia preparada para evitar inyecciones SQL
  //Obtenemos la lista del CMS que estén dentro del rango especificado con la lista anterior
	$stmt3 = $conn->prepare("SELECT ucid, originatingnumber,applicationname,destinationnumber,duration,endtype,redirectednumber,calltimestamp FROM cdr WHERE ucid IN ($result1) and ucid != ''  ORDER BY ucid ASC");
  //Ejecutamos el Query
  $stmt3->execute();
  //Creamos un Objeto con los resultados de la consulta
	$arr3 = $stmt3->fetchAll(PDO::FETCH_ASSOC);
  //Si este array se encuentra vacio lanzamos el error que no se encuentran reusltados en la Consola
	if (!$arr3) exit('No hay resultados');
  //Designamos una variable con el objeto base
	$base = $arr3;
  //El Objeto complementario
	$reemplazos = $arr2;
  //Creamos un nuevo array remplazando los elementos que coincidan
	$final = array_replace_recursive($base, $reemplazos);
  //Imprimimos el objeto en formato json
	echo json_encode($final);
  //Limpiamos Consultas
	$stmt = null;
	$stmt2 = null;
	$stmt3 = null;
  //Cerramos conexiones
  $conn = null;
  $conn2 = null;
	}


obtenerdatos($conn, $conn2, $fechainicio, $fechafin);
?>
