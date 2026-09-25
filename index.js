const menuData = {
    seafood: [
        { name: "Пивные креветки", price: 5890, desc: "Отборные креветки в пикантном фирменном соусе", tag: "Хит", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600" },
        { name: "Креветки темпура", price: 3900, desc: "Хрустящие креветки в нежном кляре темпура", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600" },
        { name: "Салат с морепродуктами", price: 3890, desc: "Микс салата, тигровые креветки, кальмары, мидии", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600" },
        { name: "Салат рукола с лососем", price: 3790, desc: "Свежая рукола, слабосоленый лосось, черри, пармезан", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
        { name: "Паста с морепродуктами", price: 3890, desc: "Феттучини с креветками, мидиями и кальмарами под соусом", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" },
        { name: "Уха по-царски", price: 2900, desc: "Наваристый рыбный бульон с благородными сортами рыбы", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
        { name: "Рыбная солянка", price: 3200, desc: "Сытная солянка с копченой рыбой и оливками", img: "https://www.photorecept.ru/wp-content/uploads/2021/06/italjanskij-sup-iz-ryby-rybnaja-soljanka-867x1300.jpg" }
    ],
    steaks: [
        { name: "Стейк Рибай", price: 9700, desc: "Премиальный мраморный стейк из отборной говядины", tag: "Премиум", img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=600" },
        { name: "Стейк Т-бон", price: 9700, desc: "Классический стейк на Т-образной кости", img: "https://images.gastronom.ru/53ioIZirAmyRrL-Zq0YOnQ00LYirgJh9xa5AjKcUJKQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2RmYTU2OTI3LWIzOTgtNGU4Yy04OWZlLWY4MzI4NmQwNDEyOS5qcGc.webp" },
        { name: "Стейк Шато", price: 6990, desc: "Нежнейший вырезка-стейк с авторским соусом", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" },
        { name: "Шеф-стейк конины", price: 7900, desc: "Фирменный деликатесный стейк из конины", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" },
        { name: "Говяжьи ребра", price: 6990, desc: "Томленые говяжьи ребра с молодым картофелем", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1gpg1BCecq4ywTwsAv1NolbbM-Ca86wuSOngunbcC4R8hhhYyo_N4M8&s=10" },
        { name: "Томленная конина", price: 6900, desc: "Нежная конина в ароматном соусе чимичури", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsiLMJLyoW7oBu1PjwIvYCa6SdsPDCccpBujVp2XTmg&s" }
    ],
    pizza: [
        { name: "Пицца «Пепперони»", price: 3590, desc: "Острая салями, моцарелла, фирменный томатный соус", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца «Болоньезе»", price: 3200, desc: "Фарш болоньезе, томаты, сыр моцарелла, зелень", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца с голубым сыром и грушей", price: 4290, desc: "Сыр с плесенью, карамелизованная груша, мед, орехи", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца «Маргарита» ", price: 3100, desc: "Классическая пицца с томатами, моцареллой и базиликом", img: "https://images.gastronom.ru/N6zlwS_N-4UhPJWWd8qev9r-gn9hMs_9BVOmVI_7oE4/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzIxMjY0Y2U2LTA1YjAtNDExZC04ZTc5LTM5Y2IyNzVmOGE3Zi5qcGc.webp" }
    ],
    pasta: [
        { name: "Паста с лососем и песто", price: 3790, desc: "Спагетти с кусочками лосося и ароматным соусом песто", tag: "Рекомендуем", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600" },
        { name: "Феттучини с курицей и грибами", price: 3190, desc: "Нежное куриное филе, шампиньоны, сливочный соус", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" },
        { name: "Спагетти Болоньезе", price: 2600, desc: "Классические спагетти с мясным соусом болоньезе", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7aDlhHvtSbzNffH9J_V3cIgyzkE5aZn2M5HFDYL4iOa3qsJmZ9r4t5A&s=10" },
        { name: "Паппарделле с кониной", price: 2900, desc: "Широкая паста с нежной кониной и ароматными травами", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600" }
    ]
};

const categoryNames = {
    seafood: "Морепродукты",
    steaks: "Стейк-хаус",
    pizza: "Пицца",
    pasta: "Паста"
};

let cart = [];
let currentCategory = 'seafood';

document.addEventListener('DOMContentLoaded', () => {
    initMenuCategories();
    renderMenuItems(currentCategory);
});

function initMenuCategories() {
    const container = document.getElementById('menu-categories');
    container.innerHTML = '';
    
    Object.keys(menuData).forEach(catKey => {
        const btn = document.createElement('button');
        btn.className = `px-6 py-2.5 rounded-full text-sm font-medium transition-all ${catKey === currentCategory ? 'bg-[#C5A880] text-[#070D19] shadow-lg shadow-[#C5A880]/20 font-bold' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}`;
        btn.textContent = categoryNames[catKey];
        btn.onclick = () => {
            currentCategory = catKey;
            initMenuCategories();
            renderMenuItems(catKey);
        };
        container.appendChild(btn);
    });
}

function renderMenuItems(category) {
    const container = document.getElementById('menu-items-container');
    container.innerHTML = '';
    
    menuData[category].forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-[#070D19] rounded-2xl overflow-hidden border border-white/5 flex flex-col sm:flex-row group hover:border-[#C5A880]/30 transition-all duration-300";
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.08}s`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <div class="sm:w-44 h-48 sm:h-auto relative overflow-hidden shrink-0">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                ${item.tag ? `<span class="absolute top-3 left-3 bg-[#C5A880] text-[#070D19] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">${item.tag}</span>` : ''}
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start gap-2 mb-2">
                        <h4 class="text-lg font-serif font-bold text-white group-hover:text-[#C5A880] transition-colors">${item.name}</h4>
                        <span class="text-[#C5A880] font-bold whitespace-nowrap">${item.price} ₸</span>
                    </div>
                    <p class="text-[#94A3B8] text-xs sm:text-sm mb-4 leading-relaxed">${item.desc}</p>
                </div>
                <button onclick="addToCart('${item.name}', ${item.price}, '${item.img}')" class="w-full bg-white/5 hover:bg-[#C5A880] hover:text-[#070D19] border border-white/10 hover:border-transparent text-white py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-plus"></i> В корзину
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Добавление ключевых анимаций через JS стиль
const styleInject = document.createElement('style');
styleInject.innerHTML = `
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleInject);

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

function openBooking() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBooking() {
    document.getElementById('booking-modal').classList.add('hidden');
    document.getElementById('phone-error').classList.add('hidden');
}

// Валидация формы бронирования столика
function submitBooking(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('booking-phone').value.trim();
    const errorSpan = document.getElementById('phone-error');
    
    // Проверка: минимум 7 цифр в номере телефона
    const phoneDigits = phoneInput.replace(/\D/g, '');
    if (phoneDigits.length < 7) {
        errorSpan.classList.remove('hidden');
        return;
    }
    errorSpan.classList.add('hidden');

    const name = document.getElementById('booking-name').value;
    alert(`Спасибо, ${name}! Ваша заявка на бронирование столика принята. Мы свяжемся с вами в ближайшее время.`);
    closeBooking();
    event.target.reset();
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('translate-x-full');
}

function addToCart(name, price, img) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }
    updateCartUI();
    toggleCart();
}

function updateCartUI() {
    const itemsContainer = document.getElementById('cart-items');
    const badge = document.getElementById('cart-badge');
    const totalElement = document.getElementById('cart-total');
    
    itemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = `<div class="text-center text-[#94A3B8] py-12">Ваша корзина пуста</div>`;
        badge.classList.add('hidden');
        totalElement.textContent = `0 ₸`;
        return;
    }
    
    badge.classList.remove('hidden');
    
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;
        
        const row = document.createElement('div');
        row.className = "flex items-center gap-4 bg-[#070D19] p-4 rounded-2xl border border-white/5";
        row.innerHTML = `
            <img src="${item.img}" class="w-16 h-16 rounded-xl object-cover">
            <div class="flex-1">
                <h5 class="font-serif font-bold text-white text-sm mb-1">${item.name}</h5>
                <div class="text-[#C5A880] text-xs font-bold">${item.price} ₸</div>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="changeQuantity(${index}, -1)" class="w-6 h-6 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/10">-</button>
                    <span class="text-xs text-white">${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)" class="w-6 h-6 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/10">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" class="text-[#94A3B8] hover:text-red-400 p-2"><i class="fa-solid fa-trash text-sm"></i></button>
        `;
        itemsContainer.appendChild(row);
    });
    
    badge.textContent = count;
    totalElement.textContent = `${total.toLocaleString()} ₸`;
}

function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) return;
    alert("Заказ успешно оформлен! Оператор свяжется с вами для подтверждения доставки.");
    cart = [];
    updateCartUI();
    toggleCart();
}
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('translate-x-full');
    }
}