// Метод с объектом

	var test = {
		title: "Тест по програмированию",
		questions: "Вопрос №",
		answers: [["Ответ №"], 
				["Ответ №"], 
			    ["Ответ №"]],



    createHeader: function () {
        var el = document.createElement('h1');
        el.innerHTML = this.title;
        var DOMEl = document.querySelector('body');
        DOMEl.appendChild(el);
    },

    createQuestion: function(){
    	var div = document.createElement('div');
    	div.classList.add('questions');
    	var DOMEl= document.querySelector('body');
    	DOMEl.appendChild(div);
    	
    	console.log(div);

    	var ul = document.createElement('ul');
    	ul.classList.add('questionsUl');
    	div.appendChild(ul);


    	for(var i = 1; i < 4; i++){
    		var q = document.createElement('li');
    		q.classList.add('questionsLi');
    		q.innerHTML = (i) + '. ' + this.questions + i, [i]; 
    		var DOMEl = document.querySelector('.questionsUl');
    		ul.appendChild(q);

    		console.log(q);

    	   var newUl = document.createElement('ul');
           q.appendChild(newUl);
        for (var j = 0; j< 3; j++){


           var answ = document.createElement('li');
           var input = document.createElement('input');
           input.setAttribute('type', 'checkbox');
           var label = document.createElement('label');

           newUl.appendChild(answ);
           answ.appendChild(input);
           input.appendChild(label);

           textEl = document.createTextNode(this.answers[j] + (j+1), '.question' + i);
           answ.appendChild(textEl);

           // answ.innerHTML = this.answers[j] + (j+1), '.question' + i;

    }
    }
    },

    createButton: function () {
        var el = document.createElement('button');
        el.innerHTML = 'Проверить мои результаты';
        var DOMEl = document.querySelector('body');
        DOMEl.appendChild(el);
    },

    run: function() {
        this.createHeader();
        this.createQuestion();
        this.createButton();
    }
}

test.run();




 
// Самый простой метод

// var header = document.createElement('P');
// header.innerHTML = 'Тест по программированию';
// document.body.appendChild(header);

// var askQuestion = document.createElement('OL');
// askQuestion.innerHTML = '1. Вопрос №1';
// document.body.appendChild(askQuestion);

// var subQuest1 = document.createElement('LI');
// subQuest1.innerHTML = '<input type ="checkbox" name="question1" value="1"> Вариант ответа №1';
// document.body.appendChild(subQuest1);

// var subQuest2 = document.createElement('LI');
// subQuest2.innerHTML = '<input type ="checkbox" name="question1" value="2"> Вариант ответа №2';
// document.body.appendChild(subQuest2);

// var subQuest3 = document.createElement('LI');
// subQuest3.innerHTML = '<input type ="checkbox" name="question1" value="3"> Вариант ответа №3';
// document.body.appendChild(subQuest3);

// var askQuestion = document.createElement('OL');
// askQuestion.innerHTML = '2. Вопрос №2';
// document.body.appendChild(askQuestion);

// var subQuest1 = document.createElement('LI');
// subQuest1.innerHTML = '<input type ="checkbox" name="question2" value="1"> Вариант ответа №1';
// document.body.appendChild(subQuest1);

// var subQuest2 = document.createElement('LI');
// subQuest2.innerHTML = '<input type ="checkbox" name="question2" value="2"> Вариант ответа №2';
// document.body.appendChild(subQuest2);

// var subQuest3 = document.createElement('LI');
// subQuest3.innerHTML = '<input type ="checkbox" name="question2" value="3"> Вариант ответа №3';
// document.body.appendChild(subQuest3);

// var askQuestion = document.createElement('OL');
// askQuestion.innerHTML = '3. Вопрос №3';
// document.body.appendChild(askQuestion);

// var subQuest1 = document.createElement('LI');
// subQuest1.innerHTML = '<input type ="checkbox" name="question3" value="1"> Вариант ответа №1';
// document.body.appendChild(subQuest1);

// var subQuest2 = document.createElement('LI');
// subQuest2.innerHTML = '<input type ="checkbox" name="question3" value="2"> Вариант ответа №2';
// document.body.appendChild(subQuest2);

// var subQuest3 = document.createElement('LI');
// subQuest3.innerHTML = '<input type ="checkbox" name="question3" value="3"> Вариант ответа №3';
// document.body.appendChild(subQuest3);

// var btn = document.createElement('BUTTON');
// var buttonText = document.createTextNode('Проверить мои результаты');
// btn.appendChild(buttonText);
// document.body.appendChild(btn);