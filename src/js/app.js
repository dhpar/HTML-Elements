import "../styles/styles.css";

import Dialog from './dialog/dialog.js';
import dialogTemplate from './dialog/dialog.template.js';
import dialogDefaults from './dialog/dialog.defaults.js';

import CodeFormating from './utils/codeFormating.js';

Dialog(dialogTemplate(dialogDefaults));

CodeFormating();
