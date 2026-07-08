// === ALPINE.JS APP DATA ===
function app() {
  return {
    scrolled: false,
    mobileMenuOpen: false,
    init() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 60;
      });
    }
  };
}

function menuData() {
  return {
    activeCategory: 'cold',
    categories: [
      { id: 'cold',  name: 'Холодные закуски' },
      { id: 'hot',   name: 'Горячие блюда' },
      { id: 'soup',  name: 'Супы' },
      { id: 'main',  name: 'Основные блюда' },
      { id: 'sweet', name: 'Десерты' },
    ],
    items: [
      // Cold starters
      {
        cat: 'cold', name: 'Сельдь под шубой', price: 520,
        desc: 'Маринованная сельдь с варёными овощами и свекольным муссом, украшенная икрой трески',
        img: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=400&q=75',
        tags: ['Традиционный', 'Без глютена'],
      },
      {
        cat: 'cold', name: 'Холодец из телятины', price: 680,
        desc: 'Прозрачный студень из телячьих ножек с хреном и горчицей домашнего приготовления',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=75',
        tags: ['Классика'],
      },
      {
        cat: 'cold', name: 'Тартар из оленины', price: 890,
        desc: 'Дикая оленина с кедровым орехом, брусничным желе и маринованными грибами',
        img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&q=75',
        tags: ['Шеф-рекомендация', 'Сезонное'],
      },
      // Hot starters
      {
        cat: 'hot', name: 'Пирожки «Берёзка»', price: 380,
        desc: 'Румяные пирожки с капустой, яйцом и зелёным луком по рецепту бабушки Натальи',
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=75',
        tags: ['Выпечка', 'Дом. рецепт'],
      },
      {
        cat: 'hot', name: 'Блины с красной икрой', price: 1200,
        desc: 'Тонкие гречневые блины с маслом, сметаной и красной икрой от камчатских рыбаков',
        img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=75',
        tags: ['Праздничное'],
      },
      {
        cat: 'hot', name: 'Жульен из лисичек', price: 650,
        desc: 'Карельские лисички в сливочно-сырном соусе, запечённые в кокотнице',
        img: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=400&q=75',
        tags: ['Вегетарианское'],
      },
      // Soups
      {
        cat: 'soup', name: 'Борщ московский', price: 480,
        desc: 'Наваристый борщ на говяжьем бульоне со свежей свёклой, подаётся с пампушками с чесноком',
        img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=75',
        tags: ['Классика', 'Популярное'],
      },
      {
        cat: 'soup', name: 'Уха из судака', price: 520,
        desc: 'Прозрачная уха из судака и налима с кореньями, двойной навар по рецепту волжских рыбаков',
        img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=75',
        tags: ['Рыбное'],
      },
      {
        cat: 'soup', name: 'Рассольник', price: 440,
        desc: 'Сборный рассольник с почками, солёными огурцами, перловкой и жирной сметаной',
        img: 'https://images.unsplash.com/photo-1557499305-0af888c3d8ec?w=400&q=75',
        tags: ['Согревающее'],
      },
      // Main
      {
        cat: 'main', name: 'Говядина по-купечески', price: 1450,
        desc: 'Говяжья вырезка томлёная 6 часов с мочёными яблоками и можжевеловым соусом',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=75',
        tags: ['Шеф-рекомендация'],
      },
      {
        cat: 'main', name: 'Щука запечённая', price: 980,
        desc: 'Целая щука из карельских озёр, фаршированная грибами и гречкой, в томлёных сливках',
        img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=75',
        tags: ['Фермерское'],
      },
      {
        cat: 'main', name: 'Утка с гречей', price: 1100,
        desc: 'Домашняя утка с яблоками и клюквой, подаётся с рассыпчатой гречневой кашей',
        img: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&q=75',
        tags: ['Традиционный'],
      },
      // Sweets
      {
        cat: 'sweet', name: 'Медовик', price: 420,
        desc: 'Классический медовый торт со сметанным кремом по рецепту советской эпохи, 7 коржей',
        img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=75',
        tags: ['Классика', 'Домашнее'],
      },
      {
        cat: 'sweet', name: 'Блинный пирог', price: 380,
        desc: 'Многослойный пирог из тонких блинов с творожно-ягодным кремом и брусничным конфитюром',
        img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=75',
        tags: ['Авторское'],
      },
      {
        cat: 'sweet', name: 'Пряник тульский', price: 290,
        desc: 'Настоящий тульский пряник с вареньем из брусники, подаётся с чаем на иван-чае',
        img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=75',
        tags: ['К чаю'],
      },
    ],
    get currentItems() {
      return this.items.filter(i => i.cat === this.activeCategory);
    },
  };
}

function reserveForm() {
  return {
    form: { name: '', phone: '', date: '', time: '', guests: 2, wishes: '' },
    submitted: false,
    submit() {
      this.submitted = true;
      setTimeout(() => { this.submitted = false; this.form = { name: '', phone: '', date: '', time: '', guests: 2, wishes: '' }; }, 5000);
    }
  };
}

// === SCROLL ANIMATIONS ===
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.appear, .appear-left, .appear-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 90);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => io.observe(el));

  // Hero elements appear on load
  document.querySelectorAll('.hero .appear').forEach((el, i) => {
    setTimeout(() => el.classList.add('in-view'), 400 + i * 200);
  });

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
    });
  });
});
