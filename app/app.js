// app.js - root of webpack bundling/build

// JS
import './js/index.js';
import './js/interact.js';

// Pug Templates
require('./index.pug');
function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('./views/skills', true, /\.pug$/));

// 3rd Party Styles
import './css/bootstrap.css';
import './css/font-awesome.css';
import './css/animate.css';

// My Styles
import './sass/style.sass';
