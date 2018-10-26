<?php
// Incluimos la conexion a la base de datos
include "db.php";
// Obtenemos variables por POST
$fechainicio = $_POST["fechainicio-input"];
$variable = $_POST["grupotxt-input"];


//funcion para obtener datos
//declaramos los valores que pasaremos a la function
//$conn1 y $conn2 son las conexiones que incluimos con el archivo db.php, $fechainicio y $fechafin los valores del fpormulario
function obtenerdatos($conn2, $fechainicio, $variable)
	{
	// Creamos una sentencia preparada para evitar inyecciones SQL
  //Obtenemos la lista del IVR que contengan un UCID y especificamos el Rango de Fechas en nuestra Sentencia Preparada
	$stmt = $conn2->prepare("SELECT split, row_date, (100 * (ACCEPTABLE / CALLSOFFERED)) as SL from dsplit
where split=:variable
and row_date = :fechainicio


");
	// Enlazamos las variables a nuestros apuntadores para Prepared Statements y Ejecutamos el Query
	$stmt->execute([':fechainicio' => $fechainicio, ':variable' => $variable]);
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


obtenerdatos($conn2, $fechainicio, $variable);
?>
