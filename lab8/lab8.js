function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today

    out.innerHTML = `
        <div class="frame">
            <div>Дата и время для локали России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время для локали Германии: ${today.toLocaleString('de-DE')}</div>
            <div>Дата и время для локали Швейцарии: ${today.toLocaleString('fr-CH')}</div>
            <div>Дата и время для локали Испании: ${today.toLocaleString('es-AR')}</div>
            <div>Дата и время для локали Китая: ${today.toLocaleString('zh-MO')}</div>
            <div>Дата и время для локали Словакии: ${today.toLocaleString('sk-SK')}</div>
            
        </div>
    `;
}