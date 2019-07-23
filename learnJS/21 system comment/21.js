let comments = [];
loadComments();
document.getElementById('comment-add').onclick = function() {
	

	event.preventDefault(); 										// Отменяет событие, если оно отменяемое 
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name : commentName.value, 
		body : commentBody.value,
		time : Math.floor(Date.now()/1000)
	}
	commentName.value = '';											// очистка формы
	commentBody.value = '';
	comments.push(comment);											// добавление массива
	saveComments();													// сохранение
	showComments();													// показ
	console.log(comment);
}

function saveComments() {
	localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
	if (localStorage.getItem('comments')) {
		comments = JSON.parse(localStorage.getItem('comments'));
	}
	showComments();
}

function showComments() {
	let commentField = document.getElementById('comment-field');
	let out = '';
	comments.forEach(function(item) {
		out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
		out += `<p class="alert alert-primary">${item.name}</p>`;
		out += `<p class="alert alert-success">${item.body}</p>`;
	});
	commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date  + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;	
	return time;
}