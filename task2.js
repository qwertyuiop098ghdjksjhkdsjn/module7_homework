const user = {
	name: 'Ivan',
	surname: 'Ivanov'
};

 function check(str, obj) {
	
	console.log(str in obj);
	
};
check('surname', user);