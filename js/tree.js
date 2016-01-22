


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

		// var extra = Math.floor(Math.random()*2)*5;
		var lights_num = Math.floor((width/(35+5))+1);

		var pos_sect = width/(lights_num*2);
		var pos = 0;

		for (var n = 0; n < lights_num; n++) {

			pos = pos + pos_sect;

			var light = document.createElement('div');
			lightband.appendChild(light);
			light.classList.add('lights');
			light.id = "light_" + n;

			var height_rand = Math.ceil(Math.random()*(height*0.75)-n*1.5);

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



function lights_flicker() {

	var timer = (Math.floor(Math.random()*600)+200);

	setInterval(function() {

		// timer = 1122; //(Math.floor(Math.random()*600));

		// console.log(timer); 
		flicker();
		setTimeout(function() {
			timer = (Math.floor(Math.random()*600)+200);
			// console.log(timer); 
		},timer);

	},timer);

	function flicker() {
		var lights = document.getElementsByClassName('lights');
		for (var i = 0; i < lights.length; i++) {

			var light = lights[i];

			// console.log(light);
			var opac = Math.floor(Math.random()*100)/100;
			light.style.boxShadow = "0px 0px 4px 0px rgba(254,252,62," + opac + ")";
			// console.log(opac);

		};
	};

		// setInterval(function() {
		// 		console.log(light); 
		// 		flicker(light);
		// 		setTimeout(function() {

		// 		},1100);
		// 	},1000);

		// setTimeout(function() {

		// },1100);

}; lights_flicker();
















