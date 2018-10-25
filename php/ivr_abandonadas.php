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
function obtenerdatos($conn, $fechainicio, $fechafin)
	{
	// Creamos una sentencia preparada para evitar inyecciones SQL
  //Obtenemos la lista del IVR que contengan un UCID y especificamos el Rango de Fechas en nuestra Sentencia Preparada
	$stmt = $conn->prepare("SELECT sdr.applicationname, sdr.terminationpagenameshort, count(*)
from cdr, sdr
where sdr.sessionid = cdr.sessionid
              and cdr.calltype = 0
              and cdr.reasoncode = '9'
              and cdr.endtype = 3
              and (cdr.calltimestamp BETWEEN :fechainicio and :fechafin)
group by sdr.applicationname, sdr.terminationpagenameshort
");
	// Enlazamos las variables a nuestros apuntadores para Prepared Statements y Ejecutamos el Query
	$stmt->execute([':fechainicio' => $fechainicio, ':fechafin' => $fechafin]);
  //Creamos un Objeto con los resultados de la consulta
	$array = $stmt->fetchAll(PDO::FETCH_ASSOC);
  //Recorremos este objeto y vamos agregando los resultados de la columna ucid a un Array
  //Si este array se encuentra vacio lanzamos el error que no se encuentran reusltados en la Consola
	if (!$array) exit('No hay resultados');
  //Designamos una variable con el objeto base
	echo json_encode($array);
  //Limpiamos Consultas
	$stmt = null;

  //Cerramos conexiones
  $conn = null;

	}


obtenerdatos($conn, $fechainicio, $fechafin);
?>
