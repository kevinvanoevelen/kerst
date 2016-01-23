


// lights
// *******
function christmas_lights() {

	var lightbands = document.getElementsByClassName('lightbands');

	for (var i = 0; i < lightbands.length; i++) {

		var get_transform = function() {

			var styles = window.getComputedStyle(lightband);
			var rotation = styles.getPropertyValue("transform");
			var rot_arr = rotation.split(',');

			rot_deg = rot_arr[0] + "," + (rot_arr[1]*(-1)) + "," + (rot_arr[2]*(-1)) + "," + (rot_arr[3]*(1)) + "," + rot_arr[4] + "," + rot_arr[5];

		};

		var make_lights = function() {

			var lights_num = Math.floor((width/(35+5))+1);
			var pos_sect = width/(lights_num*2);
			var pos = 0;

			for (var n = 0; n < lights_num; n++) {

				pos = pos + pos_sect;

				var light = document.createElement('div');
				lightband.appendChild(light);
				light.classList.add('lights');
				light.id = "light_" + n;

				var red = (Math.floor(Math.random()*180)+76);
				var green = (Math.floor(Math.random()*160)+76);
				var blue = (Math.floor(Math.random()*180)+76);
				var colour = "rgba(" + red + "," + green + "," + blue + ",0.6)";

				var height_rand = Math.ceil(Math.random()*(height*0.75)-n*1.5);

				light.style.top = (height_rand) + "px";

				if (lights_num === 1) {

					light.style.left = (pos/2+2) + "px";

				} else {

					light.style.left = (pos) + "px";

				};

				light.style.transform = rot_deg;

				light.style.background = colour;

				pos = pos + pos_sect;

			};

		};

		var lightband = lightbands[i];
		var rot_deg = {};
		var width = lightband.clientWidth;
		var height = lightband.clientHeight;

		get_transform();
		make_lights();

	};

}; christmas_lights();



function lights_flicker() {

	var timer = (Math.floor(Math.random()*400)+200);

	function control_flicker() {

		setTimeout(function() {

			flicker();

			timer = (Math.floor(Math.random()*400)+200);

			control_flicker();

		},timer);

	};

	function flicker() {
	
		var lights = document.getElementsByClassName('lights');
	
		for (var i = 0; i < lights.length; i++) {

			var light = lights[i];
			var styles = window.getComputedStyle(light);
			var background_colour = styles.getPropertyValue("background-color");
			var background_main_arr = background_colour.split('(');
			var background_sec_arr = background_main_arr[1].split(')');
			var coulours = background_sec_arr[0].split(',');
			var red = coulours[0];
			var green = coulours[1];
			var blue = coulours[2];
			var rgba = background_main_arr[0];
			var for_col = "(";
			var back_col = ")";
			var comma = ",";
			var background = rgba + for_col + red + comma + green + comma + blue + comma + opac + back_col;
			var shadow = "0px 0px 2px 0px " + background;
			// c(red + " " + green + " " + blue);
			var opac =  Math.floor(Math.random()*80)/100+0.2;

			light.style.boxShadow = shadow;
			light.style.background = background;

		};

	};

	control_flicker();

}; lights_flicker();








/*

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

*/







