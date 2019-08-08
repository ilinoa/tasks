
$(function(){
	var socket = io.connect() 			// подключаем socket -> connection
	var $form = $('#messForm') 			// обращаемся к объекту по Id - messForm
	var $time = $('time')
	var $input_mess = $('#message') 	// поле ввода
	var $all_mess = $('#all_mess')		// поле вывода
	
	now = new Date();
	setTimeout(function(){
		 window.location.reload(1);
   	
	}, 60000);
	
	/*
	*	отслеживаем в форме событие submit
	*	preventDefault() - предотвращает стандартное поведение
	*	socket обращается к функции emit() для вызова события - укажет 'send mess' и данные поле ввода
	*	после отправки сообщения указываем путую строку
	*/
	$form.submit(function(event){
		event.preventDefault()
		console.log(now)
		socket.emit('send mess',  {mess:$input_mess.val()})
		$input_mess.val('')
	})

	/*
	*	когда вызовется 'add mess' -  обратиться к функции emit()
	*  	append() - встраивает блок внутрь all_mess
	* 	
	*/
	socket.on('add mess', function(data){
		$all_mess.append(now+'<div>' + data.mess + '</div>')
	})
})