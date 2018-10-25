<?php
//Definimos Variables de Conexion
//Host Servidor PG SQL
$servername = "135.9.153.225";
//Usuario
$username = "report";
//Password
$password = "avaya123";
//Database
$dbname = "VoicePortal";
//Intentamos conexion
try {
    //Creamos la conexion via PDO y hacemos bind a las variables (IVR)
    $conn = new PDO("pgsql:host=$servername;dbname=$dbname", $username, $password);
    //Creamos la conexion via ODBC (CMS)
    $conn2 = new PDO("odbc:cms_cmsr18");
    //Configuramos los errores del conector PDO para ambas conexiones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); /* PDO::ERRMODE_EXCEPTION, PDO::ERRMODE_SILENT, and PDO::ERRMODE_WARNING  */
    $conn2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); /* PDO::ERRMODE_EXCEPTION, PDO::ERRMODE_SILENT, and PDO::ERRMODE_WARNING  */
    //Catch de errores

} catch(PDOException $e) {
    die( "Ha ocurrido el siguiente error: " . $e->getMessage());
}
?>
