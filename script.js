function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.body.classList.add('no-scroll'); // bloquear scroll al abrir
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('no-scroll'); // permitir scroll al cerrar
}
