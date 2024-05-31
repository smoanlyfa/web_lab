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