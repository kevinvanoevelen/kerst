/* MAIN JAVASCRIPT PAGE */

	
//	adjusting the height of the #wrapper
//	setting min-height to window height minus the top and bottom margins

var inner_width = window.innerWidth;
var inner_height = window.innerHeight;

var wrapper = document.getElementById('wrapper');
var wrapper_top = 12; // .wrapper margin top
var wrapper_bottom = 24; // .wrapper margin bottom

// automatically calculates and sets the min height of .wrapper for dev in early stages so it is open w. footer at the bottom
wrapper.style.minHeight = (inner_height-(wrapper_top+wrapper_bottom)) + "px";

/* ***************************************************************************************************************************** */
/* ***************************************************************************************************************************** */


// open/close the main items

var header_arr = document.getElementsByClassName('item');

console.log(header_arr);

for(var i = 0; i < header_arr.length; i++) {

	var header = header_arr[i].children[0];

	header.onclick = function() {

		var ids = this.parentNode.id;
		var item = document.getElementById(ids);

		console.log(" in onclick " + item.classList.contains('header_open'));

		if (item.classList.contains('header_open') == false) {
			
			console.log(" itr_header = 0");

			setTimeout(function() {

				open_close(ids,"out");

				setTimeout(function() { document.getElementById(ids).style.height = "500px"; },100);

			},100);

			item.classList.toggle('header_open',true);

		} else if (item.classList.contains('header_open') == true) {

			console.log(" itr_header = 1");

			setTimeout(function() {

				open_close(ids,"in");

				setTimeout(function() { document.getElementById(ids).style.height = "200px"; },100);

			},100);

			item.classList.toggle('header_open',false);

		};
		
	};
	
};




function open_close(id,in_out) {

	if (in_out == "in") {
		var height = 500;
		var border = 200;
		var opr = (-1);
	} else if (in_out == "out") {
		var height = 200;
		var border = 500;
		var opr = (1);
	} else {
		alert("you should type either 'in' or 'out' in open_close()");
	};

	var speed_ctrl = 1;

	var fb_int = setInterval(anim,5);

	function anim() {

		if ((opr == (-1) && height <= border) || (opr == (1) && height >= border)) {

			console.log("right before clearInterval " + height);

			if (opr == (-1)) {
				document.getElementById(id).style.height = "200px";
				heigth = 200;
			} else if (opr == (1)) {
				document.getElementById(id).style.height = "500px";
				height = 500;
			};

			clearInterval(fb_int);

			console.log("right after clearInterval");

		} else {
			
			console.log("in fall_back " + height);

			document.getElementById(id).style.height = height + "px";

			height = (height+(speed_ctrl*opr));

			speed_ctrl = (speed_ctrl+0.25);

		};
	};

};

/* ***************************************************************************************************************************** */
/* ***************************************************************************************************************************** */
















