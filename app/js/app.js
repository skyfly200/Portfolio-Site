// app.js - root of webpack bundling/build

// Vendor Code
import $ from 'jquery';
import './vendor/jquery.flexslider.js';
import WOW from './vendor/wow.js';

// Project Code
import './slider.js';
import './interact.js';
import './index.js';

// Pug Templates
require('../index.pug');
function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../views/skills', true, /\.pug$/));
