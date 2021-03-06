var letters = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg"];
var names = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Wolfram", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium"];
var mass = [1.0, 4.0, 6.9, 9.0, 10.8, 12.0, 14.0, 16.0, 19.0, 20.2, 23.0, 24.3, 27.0, 28.1, 31.0, 32.1, 35.5, 39.9, 39.1, 40, 45.0, 47.9, 50.9, 52.0, 54.9, 55.8, 58.9, 58.7, 63.5, 65.4, 69.7, 72.6, 74.9, 79.0, 79.9, 83.8, 85.5, 87.6, 88.9, 91.2, 92.9, 95.9, 98, 101.1, 102.9, 106.4, 107.9, 112.4, 114.8, 118.7, 121.8, 127.6, 126.9, 131.3, 132.9, 137.3, 138.9, 140, 141, 144, 147, 150, 152, 157, 159, 163, 165, 167, 169, 173, 175, 178.5, 180.9, 183.8, 186.2, 190.2, 192.2, 195.1, 197.0, 200.6, 204.4, 207.2, 209.0, 209, 210, 222, 223, 226, 227, 232, 231, 238, 237, 241, 243, 247, 245, 251, 254, 253, 256, 254, 257, 261, 262, 266, 264, 277, 268, 271, 272];

function set_output() {
	var molar_mass = 0;
	var array = new Array(111).fill(0);
	var fancy_string = "";

	let re = new RegExp("[A-Z][a-z]?|[0-9]+|\\(|\\)", "g");
	m = document.getElementById("input_text").value.matchAll(re);
	for (i of m) {
		if (Number(i[0]) != 1 && !isNaN(i[0])) {
			fancy_string = fancy_string + "<sub>" + String(i[0]) + "</sub>";
		}
		else if (letters.includes(i[0]) || i[0] == "(" || i[0] == ")") {
			fancy_string = fancy_string + "<span>" + String(i[0]) + "</span>";
		}
	}


	let re1 = new RegExp("\\([^\)]+\\)[0-9]+", "g");
	let re2 = new RegExp("([A-Z][a-z]?[0-9]*)", "g");
	match = document.getElementById("input_text").value.matchAll(re1);

	for (item of match) {
		inside = String(item[0]).match(/\(([^\)]+)\)/);
		match_inside = inside[0].matchAll(re2);
		repeat = String(item[0]).match(/[0-9]+$/);
		// fancy_string = fancy_string + "<span>(";

		for (item of match_inside) {
			molecule = String(item[0]).match(/^[A-Z][a-z]?/);
			number = String(item[0]).match(/[0-9]+$/);
			if (number == null) {
				number = 1
			}
			index = letters.indexOf(String(molecule));
			molar_mass = molar_mass + (mass[index] * repeat * number);
			array[index] = parseInt(array[index]) + parseInt(repeat) * parseInt(number);
		}
		// 	if (number == 1) {
		// 		fancy_string = fancy_string + molecule;
		// 	}
		// 	else {
		// 		fancy_string = fancy_string + molecule + "<sub>" + number + "</sub>";
		// 	}
		// }
		// if (repeat == 1) {
		// 	fancy_string = fancy_string + ")" + "</span>";
		// }
		// else {
		// 	fancy_string = fancy_string + ")" + "<sub>" + repeat + "</sub>" + "</span>";
		// }
	}

	let string = document.getElementById("input_text").value.replace(re1, "");
	let match2 = string.matchAll(re2);

	for (item of match2) {
		molecule = String(item[0]).match(/^[A-Z][a-z]?/);
		number = String(item[0]).match(/[0-9]+$/);
		index = letters.indexOf(String(molecule))
		if (number == null) {
			molar_mass = molar_mass + (mass[index]);
			array[index] = parseInt(array[index]) + 1;
			// fancy_string = fancy_string + "<span>" + molecule + "</span>";
		}
		else {
			molar_mass = molar_mass + (mass[index] * number);
			array[index] = parseInt(array[index]) + parseInt(number);
			// fancy_string = fancy_string + "<span>" + molecule + "</span>" + "<sub>" + number + "</sub>";
		}
	}

	var output_string = "";
	var sum = "";
	var count = 0;
	for (var i=0; i < 111; i++) {
		if (array[i] > 0) {
			output_string = output_string + "<div>" + names[i] + " (" + letters[i] + "): " + array[i] + " * " + mass[i] + " = " + mass[i] * array[i] + "</div>";
			sum = sum + mass[i] * array[i] + " + ";
			count++;
		}
	}
	sum = sum.slice(0,-3)
	document.getElementById("info").innerHTML = output_string;
	if (molar_mass > 0) {
		if (count == 1) {
			document.getElementById("output").innerHTML = "Molar Mass: " + molar_mass;
		}
		else {
			document.getElementById("output").innerHTML = "Molar Mass: " + sum + " = " + molar_mass;
		}
	}
	else if (count == 0) {
		document.getElementById("output").innerHTML = "";
	}

	document.getElementById("display").innerHTML = fancy_string;

}
setInterval(set_output, 0);