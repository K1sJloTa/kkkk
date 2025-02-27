// Получаем все кнопки с выпадающими меню
const buttons = document.querySelectorAll('.btn');
const menus = document.querySelectorAll('.dropdown-content');

// Добавляем обработчик события для каждой кнопки
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Скрываем все меню
        menus.forEach(menu => {
            menu.style.display = 'none';
        });

        // Показываем текущее меню
        const menu = menus[index];
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

// Закрытие меню, если кликнуть вне кнопки
window.addEventListener('click', function(event) {
    if (!event.target.matches('.btn')) {
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Получаем все кнопки с вариантами (30 Дней, 90 Дней, Навсегда)
const timeButtons = document.querySelectorAll('.time-btn');

// Получаем div для отображения описания
const donationTitle = document.getElementById('donation-title');
const donationInfo = document.getElementById('donation-info');
const donationPrice = document.getElementById('donation-price');
const descriptionBox = document.getElementById('donation-description');

// Слушаем клики на кнопки с временем
timeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Останавливаем событие от всплытия (чтобы не скрывать описание сразу)
        event.stopPropagation();

        const donation = button.getAttribute('data-donation'); // Получаем тип доната
        const duration = button.getAttribute('data-duration'); // Получаем длительность

        // Делаем div с описанием видимым
        descriptionBox.style.display = 'block';

        // Обновляем информацию в зависимости от выбора
        if (donation === 'Cosmo') {
            donationTitle.innerHTML = '<p class="name">Cosmo</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>• /kits - Набор Cosmo<br>• /craft - Открыть верстак<br>• /feed - Покормить себя<br><br>   </b>А также:<b><br><br>• 3 Региона<br>• 6 Слотов на аукционе<br>• 4 Точки дома<br>• 6 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 19р / 9грн </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>• /kits - Набор Cosmo<br>• /craft - Открыть верстак<br>• /feed - Покормить себя<br><br>   </b>А также: <b><br><br>• 3 Региона<br>• 6 Слотов на аукционе<br>• 4 Точки дома<br>• 6 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 39р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>• /kits - Набор Cosmo<br>• /craft - Открыть верстак<br>• /feed - Покормить себя<br><br>   </b>А также:<b><br><br>• 3 Региона<br>• 6 Слотов на аукционе<br>• 4 Точки дома<br>• 6 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 59р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
        } else if (donation === 'Star') {
            donationTitle.innerHTML = '<p class="name">Star</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Cosmo<b><br><b>• /kits - Набор Star<br>• /ec - Открыть эндер-сундук<br>• /heal - Покормить себя <br>• /cartographytable - Открыть стол крафтографа<br><br>   </b>А также:<b><br><br>• 4 Региона<br>• 7 Слотов на аукционе<br>• 4 Точки дома<br>• 5 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 39р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Cosmo<b><br><b>• /kits - Набор Star<br>• /ec - Открыть эндер-сундук<br>• /heal - Покормить себя <br>• /cartographytable - Открыть стол крафтографа<br><br>   </b>А также:<b><br><br>• 4 Региона<br>• 7 Слотов на аукционе<br>• 4 Точки дома<br>• 5 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 79р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Cosmo<b><br><b>• /kits - Набор Star<br>• /ec - Открыть эндер-сундук<br>• /heal - Покормить себя <br>• /cartographytable - Открыть стол крафтографа<br><br>   </b>А также:<b><br><br>• 4 Региона<br>• 7 Слотов на аукционе<br>• 4 Точки дома<br>• 5 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 99р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
        }   else if (donation === 'Meteor') {
            donationTitle.innerHTML = '<p class="name">Meteor</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Star<b><br><b>• /kits - Набор Meteor<br>• /rtp long - Дальняя телепортация<br>• /loom - Открыть ткацкий стол <br>• /hat - Надеть предмет на голову<br><br>   </b>А также:<b><br><br>• 5 Регионов<br>• 9 Слотов на аукционе<br>• 5 Точек дома<br>• 4 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 139р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Star<b><br><b>• /kits - Набор Meteor<br>• /rtp long - Дальняя телепортация<br>• /loom - Открыть ткацкий стол <br>• /hat - Надеть предмет на голову<br><br>   </b>А также:<b><br><br>• 5 Регионов<br>• 9 Слотов на аукционе<br>• 5 Точек дома<br>• 4 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 179р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Star<b><br><b>• /kits - Набор Meteor<br>• /rtp long - Дальняя телепортация<br>• /loom - Открыть ткацкий стол <br>• /hat - Надеть предмет на голову<br><br>   </b>А также:<b><br><br>• 5 Регионов<br>• 9 Слотов на аукционе<br>• 5 Точек дома<br>• 4 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 199р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
        }   else if (donation === 'World') {
            donationTitle.innerHTML = '<p class="name">World</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Meteor<b><br><b>• /kits - Набор World<br>• /top - Телепортироватся на самую верхнюю точку<br>• /pweather - Установить погоду для себя <br>• /ptime - Установить время для себя<br><br>   </b>А также:<b><br><br>• 8 Регионов<br>• 12 Слотов на аукционе<br>• 7 Точек дома<br>• 3 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 139р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Meteor<b><br><b>• /kits - Набор World<br>• /top - Телепортироватся на самую верхнюю точку<br>• /pweather - Установить погоду для себя <br>• /ptime - Установить время для себя<br><br>   </b>А также:<b><br><br>• 8 Регионов<br>• 12 Слотов на аукционе<br>• 7 Точек дома<br>• 3 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 179р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Meteor<b><br><b>• /kits - Набор World<br>• /top - Телепортироватся на самую верхнюю точку<br>• /pweather - Установить погоду для себя <br>• /ptime - Установить время для себя<br><br>   </b>А также:<b><br><br>• 8 Регионов<br>• 12 Слотов на аукционе<br>• 7 Точек дома<br>• 3 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 199р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
        }   else if (donation === 'Alien') {
            donationTitle.innerHTML = '<p class="name">Alien</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии World<b><br><b>• /kits - Набор Alien<br>• /repair - Починить предмет в руке<br>• /stonecutter - Открыть камнерез <br>• /invsee - Посмотреть инвентарь игрока<br><br>   </b>А также:<b><br><br>• 8 Регионов<br>• 15 Слотов на аукционе<br>• 8 Точек дома<br>• 3 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 359р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии World<b><br><b>• /kits - Набор Alien<br>• /repair - Починить предмет в руке<br>• /stonecutter - Открыть камнерез <br>• /invsee - Посмотреть инвентарь игрока<br><br>   </b>А также:<b><br><br>• 8 Регионов<br>• 15 Слотов на аукционе<br>• 8 Точек дома<br>• 3 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 479р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии World<b><br><b>• /kits - Набор Alien<br>• /repair - Починить предмет в руке<br>• /stonecutter - Открыть камнерез <br>• /invsee - Посмотреть инвентарь игрока<br><br>   </b>А также:<b><br><br>• 8 Регионов<br>• 15 Слотов на аукционе<br>• 8 Точек дома<br>• 3 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 699р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }   else if (donation === 'Platinum') {
            donationTitle.innerHTML = '<p class="name">Platinum</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Alien<b><br><b>• /kits - Набор Platinum<br>• /repair all - Поченить все вещи в инвентаре<br>• /anvil - Открыть наковальню<br><br>   </b>А также:<b><br><br>• 9 Регионов<br>• 18 Слотов на аукционе<br>• 10 Точек дома<br>• 1 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 559р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Alien<b><br><b>• /kits - Набор Platinum<br>• /repair all - Поченить все вещи в инвентаре<br>• /anvil - Открыть наковальню<br><br>   </b>А также:<b><br><br>• 9 Регионов<br>• 18 Слотов на аукционе<br>• 10 Точек дома<br>• 1 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 699р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Alien<b><br><b>• /kits - Набор Platinum<br>• /repair all - Поченить все вещи в инвентаре<br>• /anvil - Открыть наковальню<br><br>   </b>А также:<b><br><br>• 9 Регионов<br>• 18 Слотов на аукционе<br>• 10 Точек дома<br>• 1 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 888р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }   else if (donation === 'Magnetar') {
            donationTitle.innerHTML = '<p class="name">Magnetar</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Platinum<b><br><b>• /kits - Набор Magnetar<br>• /rtp near - Телепортация рядом с игроком<br>• /tempmute - Выдать мут игроку <br>• /smithingtable - Открыть стол кузнеца<br><br>   </b>А также:<b><br><br>• 11 Регионов<br>• 25 Слотов на аукционе<br>• 15 Точек дома<br>• 0 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 777р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Platinum<b><br><b>• /kits - Набор Magnetar<br>• /rtp near - Телепортация рядом с игроком<br>• /tempmute - Выдать мут игроку <br>• /smithingtable - Открыть стол кузнеца<br><br>   </b>А также:<b><br><br>• 11 Регионов<br>• 25 Слотов на аукционе<br>• 15 Точек дома<br>• 0 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 888р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Platinum<b><br><b>• /kits - Набор Magnetar<br>• /rtp near - Телепортация рядом с игроком<br>• /tempmute - Выдать мут игроку <br>• /smithingtable - Открыть стол кузнеца<br><br>   </b>А также:<b><br><br>• 11 Регионов<br>• 25 Слотов на аукционе<br>• 15 Точек дома<br>• 0 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 1419р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }   else if (donation === 'Asteroid') {
            donationTitle.innerHTML = '<p class="name">Asteroid</p>';
            if (duration === '30') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Magnetar<b><br><b>• /kits - Набор Asteroid<br>• Возможность писать в чат всеми цветами и стилями<br>• /tempban - Выдать бан игроку <br><br>   </b>А также:<b><br><br>• 15 Регионов<br>• 50 Слотов на аукционе<br>• 25 Точек дома<br>• 0 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 999р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Magnetar<b><br><b>• /kits - Набор Asteroid<br>• Возможность писать в чат всеми цветами и стилями<br>• /tempban - Выдать бан игроку <br><br>   </b>А также:<b><br><br>• 15 Регионов<br>• 50 Слотов на аукционе<br>• 25 Точек дома<br>• 0 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 1299р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = 'Доступные команды: <br><br><b>Все команды привилегии Magnetar<b><br><b>• /kits - Набор Asteroid<br>• Возможность писать в чат всеми цветами и стилями<br>• /tempban - Выдать бан игроку <br><br>   </b>А также:<b><br><br>• 15 Регионов<br>• 50 Слотов на аукционе<br>• 25 Точек дома<br>• 0 Секунд задержка на телепорт</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 1599р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }   else if (donation === 'DonatCase') {
            donationTitle.innerHTML = '<p class="dk-tk">Кейс с донатом</p>';
            if (duration === '30') {
                donationInfo.innerHTML = '<b>С данного кейса вы можете выбить:   (30 Дней - 90 Дней - Навсегда)<br><br> • Cosmo <br>• Star<br>• Meteor<br>• World<br>• Alien<br>• Platinum<br>• Magnetar<br>• Asteroid</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 59р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = '<b>С данного кейса вы можете выбить:   (30 Дней - 90 Дней - Навсегда)<br><br> • Cosmo <br>• Star<br>• Meteor<br>• World<br>• Alien<br>• Platinum<br>• Magnetar<br>• Asteroid</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 139р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = '<b>С данного кейса вы можете выбить:   (30 Дней - 90 Дней - Навсегда)<br><br> • Cosmo <br>• Star<br>• Meteor<br>• World<br>• Alien<br>• Platinum<br>• Magnetar<br>• Asteroid</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 209р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }

        else if (donation === 'TokenCase') {
            donationTitle.innerHTML = '<p class="dk-tk">Кейс с осколками</p>';
            if (duration === '30') {
                donationInfo.innerHTML = '<b>С данного кейса вы можете выбить донат валюту - осколки.</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 59р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationInfo.innerHTML = '<b>С данного кейса вы можете выбить донат валюту - осколки.</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 139р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationInfo.innerHTML = '<b>С данного кейса вы можете выбить донат валюту - осколки.</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 209р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }   else if (donation === 'another') {
            if (duration === '30') {
                donationTitle.innerHTML = '<p class="dk-tk">Разбан</p>';
                donationInfo.innerHTML = '<b>Разбаньте люблого пользователя в 1 клик!</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 150р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === '90') {
                donationTitle.innerHTML = '<p class="dk-tk">Battle Pass Premium</p>';
                donationInfo.innerHTML = '<b>Приобретя данный Battle Pass у вас будет больше квестов и наград!</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 299р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'forever') {
                donationTitle.innerHTML = '<p class="dk-tk">Кастомный титул</p>';
                donationInfo.innerHTML = '<b>Приобретя, вы можете создать себе кастомный титул в майнкрафт!</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 149р </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            } else if (duration === 'osk') {
                donationTitle.innerHTML = '<p class="dk-tk">Осколки</p>';
                donationInfo.innerHTML = '<b>Приобретя осколки, вы сможете купить что захотите в донат магазине сервера!</b>';
                donationPrice.innerHTML = '<p class="cena">Цена: 1р/2шт </p> <a href="https://cosmoworldmine.easydonate.ru/" class="button-link" target="_blank"><button class="buy">Приобрести</button></a>';
            }
            
            
        }
        
    });
});


document.querySelectorAll('.square a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

