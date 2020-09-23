/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (data) => {
    if (data == 'w') {
      conn.write('Move: up');
    } else if (data == 's') {
      conn.write('Move: down');
    } else if (data == 'a') {
      conn.write('Move: left');
    } else if (data == 'd') {
      conn.write('Move: right');
    } else if (data == '\u0003') {
      process.exit();
    } else if (data == '1') {
      conn.write('Say: OUTTA MY WAY')
    } else if (data == '2') {
      conn.write('Say: YOU SNAKE...')
    } else if (data == '3') {
      conn.write('Say: HISSSSS')
    }
  });

  return stdin;
}




module.exports = setupInput;