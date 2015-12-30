/* MAIN JAVASCRIPT PAGE */

	
//	capturing the window width and height for further use

var inner_width = window.innerWidth;
var inner_height = window.innerHeight;


//setting the min-height of the .wrapper for dev in early stages so it is open with footer at the bottom

var wrapper = document.getElementById('wrapper');
var wrapper_top = 12; // .wrapper margin top
var wrapper_bottom = 24; // .wrapper margin bottom

// automatically calculates and sets the min height of .wrapper
wrapper.style.minHeight = (inner_height-(wrapper_top+wrapper_bottom)) + "px";

/* ***************************************************************************************************************************** */
/* ***************************************************************************************************************************** */



// header random image picker

var img_random = Math.floor(Math.random()*5);

var img_arr = [
		"baubles_02.svg",
		"retro_christmas_card.jpg",
		"retro_santa_03.jpg",
		"retro_snowman_02.jpg",
		"santa_classic_03.jpg"
	];

var img = img_arr[img_random];

var img_loc = document.getElementById('logo');

img_loc.src = "./img/header/" + img;
img_loc.data = img;

var timeout_header_img = setTimeout(check_img,100);

function check_img() {
	if (img_loc.width == 96) {

		img_loc.style.background = "#6F5A55";
		img_loc.style.border = "1px solid rgba(65,25,12,0)";

		set_shadow();
		setTimeout(function() { set_radius(); },1600)
		
	} else {

		img_loc.style.borderRadius = "5%";
		if (img_loc.data !== "baubles_02.svg") { img_loc.style.border = "1px solid rgba(255,245,220,0.8)"; set_shadow(); };  // 

	};

};

function set_shadow() {
	var opac = 0;

	var interval = setInterval(ch_shadow,5);	

	function ch_shadow() {

		if (opac >= 1) {

			if (opac > 1) { opac = 1; };

			clearInterval(interval);

			img_loc.style.boxShadow = "0px 0px 18px 0px rgba(255,245,220,0.8)";

		} else {

			img_loc.style.boxShadow = "0px 0px 22px 2px rgba(255,245,220," + opac.toFixed(2) + ")";

			opac = (opac+0.015);

		};

	};

};

function set_radius() {

	var radius = 5;
	var rad = 0;
	var opac = 0;

	var interval = setInterval(ch_radius,5);	

	function ch_radius() {

		if (radius >= 48) {

			clearInterval(interval);

			img_loc.style.borderRadius = "48px";
			img_loc.style.border = "1px solid rgba(75,35,22,0.4)";

		} else {

			if (opac > 0.45) { opac = 0.45; };

			img_loc.style.borderRadius = radius + "px";
			img_loc.style.border = "1px solid rgba(75,35,22," + opac.toFixed(2) + ")";

			radius = (radius+rad);
			rad = (rad+0.015);
			opac = rad;

		};

	};

};

img_loc.onclick = function() {

	window.location.href = "http://kevinvanoevelen.github.io";

};

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
		var items = document.getElementById('article_01').getElementsByClassName('item');
		c(items[0]);
		c(getComputedStyle(item));

		if (!item.classList.contains('header_open')) {

			
			for(var i = 0; i < items.length; i++) {
				c("in items loop: " + items[i].classList);
				if (items[i].classList.contains('header_open')) {
					c("in items loop class found");
					var ids_items = items[i].id;
					var self_items = document.getElementById(ids_items).children[0].id;
					setTimeout(function() {

						open_close(self_items,ids_items,"in");

					},100);
					items[i].classList.toggle('header_open',false);
					break;
				} else {
					c("in items loop class check");
					continue;
				};
			};
			
			
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
		var opac = o_upper;

		var opr = (-1);

	} else if (in_out == "out") {

		var height = h_lower;
		var opac = o_lower;

		var opr = 1;

		set_radius(0);

	};

	var speed_ctrl = 0;

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

		if ((opr == (-1) && height <= h_lower) || (opr == 1 && height >= h_upper)) {

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

			// setTimeout(function() { window.location.href = "#" + id; },200);

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
















