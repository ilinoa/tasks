// Получение доступа к DOM элементам
const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3000');

// получение статуса
function setStatus(value) {
	status.innerHTML = value;
}

// вывод сообщения на страницу
function printMessage(value) {
	const li = document.createElement('li');

	li.innerHTML = value;
	messages.appendChild(li);
}
form.addEventListener('submit', event => {
	event.preventDefault();

	ws.send(input.value) {
		input.value = '';
	}
});

ws.onopen = () => setStatus('online');

ws.oneclose = () => setStatus('disconnect'); 

ws.onmessage = response => printMessage(response.data);