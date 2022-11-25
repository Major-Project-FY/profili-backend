// importing dependency code
import { log, text } from './color.logger.js';
import { currentDate } from '../../utils/basic/basic.utils.js';

// logging helper for any successful event occured
export const successLog = (part, msg) => {
  console.log(
    `[${text.yellow(currentDate())}] : ${text.green(part)} -> ${text.green(msg)}`
  );
};

// logging and function helper for error exit of server
export const serverExit = (exitMsg) => {
  log.red(`\n✗ ${exitMsg}`);
  console.log('\nserevr will now exit ...\n');
  process.exit(-1);
};
