import * as focusTimer from './focusTimer/index.js';
import * as cards from './focusTimer/cards/index.js';
import { toggleMode, handlerMode } from "./lightmode.js";

//light-mode
toggleMode.addEventListener('click', handlerMode);
