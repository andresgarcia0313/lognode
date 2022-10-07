var clog=console.log;
clog("Inicio");
const logLib = require("log");// Registrador predeterminado (escribe en el nivel 'info')
require("log-node")();
const log = logLib.get("log");//Nombre 
log.error("1Prueba de registro de error");
log.error("2Prueba de registro de error");



/*log.info("1algún mensaje de información %s", "cuerda inyectada");// Registrar mensaje de nivel 'info':
const myLibLog = log.get("my-lib");// Obtener registrador de espacio de nombres (estilo lib de depuración)
myLibLog.info("2algún mensaje de información en el contexto del espacio de nombres 'my-lib'");// Registrar el mensaje de nivel 'info' en el contexto del espacio de nombres 'my-lib':
const myLibFuncLog = log.get("func");// Los espacios de nombres se pueden anidar más
myLibFuncLog.info("3algún mensaje de información en el contexto del espacio de nombres 'my-lib:func'");// Registrar el mensaje de nivel 'info' en el contexto del espacio de nombres 'my-lib:func':
myLibFuncLog.error("4Algún mensaje de error");// Registrar el mensaje de nivel de 'error' en el contexto del espacio de nombres 'my-lib:func':
const { restore } = myLibFuncLog.error.disable();// la salida del registro se puede habilitar/deshabilitar dinámicamente durante el tiempo de ejecución
myLibFuncLog.error("5mensaje de error no registrado realmente");// Restaurar el estado de visibilidad de los registros anteriores
restore();
myLibFuncLog.error("6mensaje de error para ser registrado");*/
clog("Fin");