/* click button and add / minus people */

const Hire = {'trainer': 30, 'miner': 20, 'hacker': 80};


function add_trainer(){
	console.log("Add trainer");
	var people_get = document.getElementById('standby_trainer_num').textContent;
	var num = Number(people_get);
	var money = document.getElementById('Money').textContent;
	if (money >= Hire['trainer']){
		num += 1;
		money -= Hire['trainer'];
		console.log(money);
		console.log(num);
		$('#Money').text(money);
		$('#standby_trainer_num').text(num);
		$('.choose_trainer').attr({"max":num});
		// socket.emit('trainer_num', money, num);
	}
	else{
		console.log("None");
		// alert("Run out of money !")
	}
}

function minus_trainer(){
	console.log("Minus trainer");
	var people_get = document.getElementById('standby_trainer_num').textContent;
	var num = Number(people_get);
	var money = document.getElementById('Money').textContent;
	if (num >= 1){
		num -= 1;
		$('#standby_trainer_num').text(num);
		$('.choose_trainer').attr({"max":num});
		// socket.emit('trainer_num', money, num);
	}
	else{
		console.log("None");
		// alert("You don't have any standby trainer <3");
	}
}

function add_miner(){
	console.log("Add miner");
	var people_get = document.getElementById('standby_miner_num').textContent;
	var num = Number(people_get);
	var money = document.getElementById('Money').textContent;
	if (money >= Hire['miner']){
		num += 1;
		money -= Hire['miner'];
		console.log(money);
		console.log(num);
		$('#Money').text(money);
		$('#standby_miner_num').text(num);
		$('.choose_miner').attr({"max":num});
		// socket.emit('miner_num', money, num);
	}
	else{
		console.log("None");
		// alert("Run out of money !")
	}
}

function minus_miner(){
	console.log("Minus miner");
	var people_get = document.getElementById('standby_miner_num').textContent;
	var num = Number(people_get);
	var money = document.getElementById('Money').textContent;
	if (num >= 1){
		num -= 1;
		$('#standby_miner_num').text(num);
		$('.choose_miner').attr({"max":num});
		// socket.emit('miner_num', money, num);
	}
	else{
		console.log("None");
		// alert("You don't have any standby miner <3");
	}
}

function add_hacker(){
	console.log("Add hacker");
	var people_get = document.getElementById('standby_hacker_num').textContent;
	var num = Number(people_get);
	var money = document.getElementById('Money').textContent;
	if (money >= Hire['hacker']){
		num += 1;
		money -= Hire['hacker'];
		console.log(money);
		console.log(num);
		$('#Money').text(money);
		$('#standby_hacker_num').text(num);
		$('.choose_hacker').attr({"max":num});
		// socket.emit('hacker_num', money, num);
	}
	else{
		console.log("None");
		// alert("Run out of money !")
	}
}

function minus_hacker(){
	console.log("Minus hacker");
	var people_get = document.getElementById('standby_hacker_num').textContent;
	var num = Number(people_get);
	var money = document.getElementById('Money').textContent;
	if (num >= 1){
		num -= 1;
		$('#standby_hacker_num').text(num);
		$('.choose_hacker').attr({"max":num});
		// socket.emit('hacker_num', money, num);
	}
	else{
		console.log("None");
		// alert("You don't have any standby hacker <3");
	}
}
