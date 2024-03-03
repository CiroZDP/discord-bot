export { onMessage };
import chp from 'child_process';
const spawn = chp.spawn;

async function onMessage(message) {
    let process = spawn('C:\\Program Files\\Java\\jdk-21\\bin\\javaw.exe', ["-jar", "bin\\Commander.jar", message.content]);
}