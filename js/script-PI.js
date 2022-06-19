function HelloUkraine() {
    alert('Привіт, Україно!!!')
}

let counter = 0;
  function Count() {
    counter++;
      document.querySelector('h2').innerHTML = counter;
	if (counter % 7 === 0) {
      alert(`Зараз на лічильнику буде ${counter} балів`)	  
    }
  }

function ResetCounter() {
  counter = 0;
  document.querySelector('h2').innerHTML = 0;
}

function EnchantTitle() {
  const header3 = document.querySelector('h3');
    if (header3.innerHTML === 'чарівний заголовок') {
        header3.innerHTML = 'дійсно, так і є';
    }
    else {
        header3.innerHTML = 'чарівний заголовок';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#personGreet').onsubmit = function() {
    const name = document.querySelector('#name').value;
      alert(`Привіт, ${name}`);
      return false;
    };
	
  document.querySelectorAll('.color-btn').forEach(function(button) {
    button.onclick = function() {
      document.querySelector("#colorH2").style.color = button.dataset.color;
    }
  });
  
  document.querySelector('select').onchange = function() {
    document.querySelector('#colorH3').style.color = this.value;
  }	
});

//create a to-do list
// Зачекати завантаження сторінки
document.addEventListener('DOMContentLoaded', function() {

  // Отримати кнопку надсилання та введення для подальшого використання 
  const submit = document.querySelector('#submit');
  const newTask = document.querySelector('#task');

  // За замовчуванням вимкнути кнопку надсилання:
  submit.disabled = true;

  // Слухати подію вводу даних до поля введення:
  newTask.onkeyup = () => {
    if (newTask.value.length > 0) {
      submit.disabled = false;
    }
    else {
      submit.disabled = true;
    }
  }

  // Слухати подію надсилання форми
  document.querySelector('#taskForm').onsubmit = () => {

    // Знайти завдання, яке додав користувач
    const task = newTask.value;

    // Створити пункт списку для нового завдання та додати завдання до нього
    const li = document.createElement('li');
      li.innerHTML = task;

    // Додати новий елемент до невпорядкованого списку:
    document.querySelector('#tasks').append(li);

      // Очистити поле введення:
      newTask.value = '';

      // Знову вимкнути кнопку надсилання:
      submit.disabled = true;

        // Зупинити надсилання форми:
        return false;
    }
});

