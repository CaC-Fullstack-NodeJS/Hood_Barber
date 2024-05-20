let monthNames=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

console.log(currentDay + '---' + monthNumber + '---' + currentYear);

let dates =document.getElementById ('dates');
let month =document.getElementById ('month');
let year =document.getElementById ('year');

let prevMonthDOM =document.querySelectorAll('.calendar-prev')
/*addEventListener no se puede aplicar directamente a una NodeList */

let nextMonthDOM = document.getElementById('next-month');


month.textContent = monthNames[monthNumber];
        year.textContent =currentYear.toString();

prevMonthDOM.forEach(button => {
            button.addEventListener('click', lastMonth);
        });
        
nextMonthDOM.addEventListener('click', nextMonth);

writeMonth(monthNumber)
function writeMonth(month) {
    dates.innerHTML = ''; // Clear previous dates

    for (let i = startDay(); i > 0; i--) {
        dates.innerHTML += `<div class="calendar-day-item last-days" day-item="${getTotalDays(monthNumber - 1) - (i - 1)}">${getTotalDays(monthNumber - 1) - (i - 1)}</div>`;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
        if (i === currentDay) {
            dates.innerHTML += `<div class="calendar-day-item today" day-item="${i}">${i}</div>`;
        } else {
            dates.innerHTML += `<div class="calendar-day-item" day-item="${i}">${i}</div>`;
        }
    }

    addClickEventToDays(); // Add click event after days are written
}

function getTotalDays(month){
    if (month=== -1) month= 11;
    
    if (month == 0 || month == 2 || month == 4 || month ==6 || month ==7 || month == 9 || month == 11){
        return 31;
    }
    
    else if (month == 3 || month == 5 || month == 8 || month ==10){
        return 30;
    }

    else {
        return isLeap()? 29:28;
    }
}

function isLeap(){
    return ((currentYear % 100 !==0) &&  (currentYear % 4 ===0) || (currentYear % 400 ===0));
}

function startDay(){
    let start = new Date(currentYear, monthNumber, 1);
    return (start.getDay())
}

function lastMonth(){
    if (monthNumber !==0){
        monthNumber --;
    }
    else {
        monthNumber= 11;
        currentYear --;
    }
    setNewDate();
}

function nextMonth(){
    if (monthNumber !==11){
        monthNumber ++;
    }
    else {
        monthNumber= 0;
        currentYear ++;
    }
    setNewDate();
}

function setNewDate(){
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent =monthNames[monthNumber];
    year.textContent =currentYear.toString();
    dates.textContent='';
    writeMonth(monthNumber); 
}

/*hoy es*/
function mostrarFechaHora() {
    const ahora = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES', opcionesHora);

    const fechaHoraElemento = document.getElementById('fecha-hora');
    fechaHoraElemento.textContent = `${fecha} ${hora}`;
}

// Llama a la función inmediatamente para mostrar la fecha y hora actual al cargar la página.
mostrarFechaHora();

// Actualiza la fecha y hora cada segundo.
setInterval(mostrarFechaHora, 1000);

/*---Reserva--- */

function addClickEventToDays() {
    const dayElements = document.querySelectorAll('.calendar-day-item[day-item]');
    dayElements.forEach(dayElement => {
        dayElement.addEventListener('click', (event) => {
            const day = event.target.getAttribute('day-item');
            window.location.href = `contact.html?day=${day}&month=${monthNumber + 1}&year=${currentYear}`;
        });
    });
}
