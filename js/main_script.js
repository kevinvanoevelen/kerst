/* MAIN JAVASCRIPT PAGE */

/* adjusting the height of the #wrapper */
/* setting min-height to window height minus the top and bottom margins */

var inner_width = window.innerWidth;
var inner_height = window.innerHeight;

var wrapper = document.getElementById('wrapper');
var wrapper_top = 12;
var wrapper_bottom = 24;

wrapper.style.minHeight = (inner_height-(wrapper_top+wrapper_bottom)) + "px";










