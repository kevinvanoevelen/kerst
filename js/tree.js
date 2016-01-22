


// lights
// *******
function christmas_lights() {

	var lightbands = document.getElementsByClassName('lightbands');

	for (var i = 0; i < lightbands.length; i++) {

		var get_transform = function() {

			var styles = window.getComputedStyle(lightband);
			var rotation = styles.getPropertyValue("transform");

			var rot_arr = rotation.split(',');
			var rot_arr_aid = rot_arr[0].split('(');

			rot_deg = rot_arr_aid[0] + "(" + (rot_arr_aid[1]*1) + "," + (rot_arr[1]*(-1)) + "," + (rot_arr[2]*(-1)) + "," + (rot_arr[3]*(1)) + "," + rot_arr[4] + "," + rot_arr[5];

		};

		var lightband = lightbands[i];

		var rot_deg = {};

		var width = lightband.clientWidth;
		var height = lightband.clientHeight;

		get_transform();

		var extra = Math.floor(Math.random()*2)*5;
		var lights_num = Math.floor((width/(35+extra))+1);

		var pos_sect = width/(lights_num*2);
		var pos = 0;

		for (var n = 0; n < lights_num; n++) {

			pos = pos + pos_sect;

			var light = document.createElement('div');
			lightband.appendChild(light);
			light.classList.add('lights');
			light.id = "light_" + n;

			var height_rand = Math.ceil(Math.random()*(height*0.75)-n*2);

			light.style.top = (height_rand) + "px";

			if (lights_num === 1) {
				light.style.left = (pos/2+2) + "px";
			} else {
				light.style.left = (pos) + "px";
			};

			light.style.transform = rot_deg;

			pos = pos + pos_sect;

		};

	};

}; christmas_lights();




















