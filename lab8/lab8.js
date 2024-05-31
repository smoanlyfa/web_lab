function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    out.innerHTML = `
        <div class="frame">
            <div>Дата и время для локали России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время для локали Германии: ${today.toLocaleString('de-DE')}</div>
            <div>Дата и время для локали Швейцарии: ${today.toLocaleString('fr-CH')}</div>
            <div>Дата и время для локали Испании: ${today.toLocaleString('es-AR')}</div>
            <div>Дата и время для локали Китая: ${today.toLocaleString('zh-MO')}</div>
            <div>Дата и время для локали Словакии: ${today.toLocaleString('sk-SK')}</div>
            <div>Текущий год: ${today.getFullYear()}</div>
            <div>Текущий месяц: ${today.getMonth()}</div>
            <div>Текущая дата: ${today.getDate()}</div>
            <div>День недели: ${weekDays[today.getDay()]}</div>
        </div>
    `;
}

function getDayOfWeek() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1;
    let year = document.getElementById('year').value;
    let date = new Date(year, month, day);
    let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let dayOfWeek = weekDays[date.getDay()];
    document.getElementById('day-of-week').textContent = 'День недели: ' + dayOfWeek;
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('count-days').textContent = 'Количество дней с даты рождения: ' + daysCount;
}

function clearInput() {
    document.getElementById('birthday').value = '';
    document.getElementById('count-days').textContent = '';
}