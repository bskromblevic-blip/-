// Функция переключения между основными разделами приложения (SPA-навигация)
function navigate(screenId) {
    // 1. Скрываем все активные экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // 2. Показываем выбранный экран по его ID
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // 3. Подсвечиваем активную кнопку в навигационном меню
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        if (btn.getAttribute('data-target') === screenId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 4. Плавно прокручиваем страницу наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Заглушка для кнопки оформления заказа в ЛР №21
function checkoutDemo() {
    alert('Прототип ЛР №21: Модуль оформления заказа будет подключен в следующих лабораторных работах.');
}