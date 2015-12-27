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

for(var i = 0; i < header_arr.length; i++) {

	var header = header_arr[i].children[0];

	header.onclick = function() {

		var self = this.id;
		var ids = this.parentNode.id;
		var item = document.getElementById(ids);

		if (!item.classList.contains('header_open')) {
			
			setTimeout(function() {

				open_close(self,ids,"out");

			},100);

			item.classList.toggle('header_open',true);

		} else if (item.classList.contains('header_open')) {

			setTimeout(function() {

				open_close(self,ids,"in");

			},100);

			item.classList.toggle('header_open',false);

		};
		
	};
	
};



function open_close(self,id,in_out) {

	var h_upper = 480;
	var h_lower = 200;

	var o_upper = 0.4;
	var o_lower = 0;

	if (in_out == "in") {

		var height = h_upper;
		var border = h_lower;
		var opac = o_upper;

		var opr = (-1);

	} else if (in_out == "out") {

		var height = h_lower;
		var border = h_upper;
		var opac = o_lower;

		var opr = 1;

	};

	var speed_ctrl = 0;

	var radius = set_radius(0);

	var interval = setInterval(anim,5);

	function set_radius(rad) {

		document.getElementById(self).style.borderBottomLeftRadius = rad + "px";

		document.getElementById(self).style.borderBottomRightRadius = rad + "px";

	};

	function set_style() {

		if (height > h_upper) { height = h_upper; } else if (height < h_lower) { height = h_lower; };

		if (opac > o_upper) { opac = o_upper; } else if (opac < o_lower) { opac = o_lower; };

		document.getElementById(id).style.height = height + "px";

		document.getElementById(id).style.background = "rgba(177,77,77," + opac.toFixed(2) + ")";

	};

	function anim() {

		if ((opr == (-1) && height <= border) || (opr == 1 && height >= border)) {

			clearInterval(interval);

			if (opr == (-1)) {

				heigth = h_lower;
				opac = o_lower;

				set_style();

				set_radius(6);

			} else if (opr == 1) {

				height = h_upper;
				opac = o_upper;

				set_style();

			};

		} else {
			
			set_style();

			height = (height+(speed_ctrl*opr));
			opac = (opac+((speed_ctrl*0.0012)*opr));
			speed_ctrl = (speed_ctrl+0.25);

		};

	};

};

/* ***************************************************************************************************************************** */
/* ***************************************************************************************************************************** */
















