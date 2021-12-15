let date = new Date();
let arr=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря',];
let ar=Number(date.getMonth());
console.log(ar);

function displayTime() {
	let date = new Date();
	let time =date.getHours()+": "+ date.getMinutes()+": "+ date.getSeconds()+ " " + 
	date.getDate()+" "+arr[ar];
	
	document.querySelector('.tim').innerHTML = time;
 }