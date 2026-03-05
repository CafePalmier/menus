document.addEventListener('DOMContentLoaded', () => {
  const langSwitchers = document.querySelectorAll('[data-lang-switcher]');
  const mainLangSwitcher = document.getElementById('langSwitcher');
  let currentLang = 'en';

  const translations = {
    food:      { en: 'Food',         fr: 'Nourriture' },
    tea:       { en: 'Tea',          fr: 'Thé' },
    cocktails: { en: 'Cocktails',    fr: 'Cocktails' },
    coffee:    { en: 'Coffee',       fr: 'Café' },
    shelf:     { en: 'Discover our Coffee Shelf', fr: 'Découvrez notre étagère à café' },
    review:    { en: 'Leave us a review',         fr: 'Laissez-nous un avis' }
  };

  const legendTranslations = {
    glutenPill: { en: 'GF', fr: 'SG' },
    glutenText: { en: 'Gluten Free', fr: 'Sans gluten' },
    vegetarianText: { en: 'Vegetarian', fr: 'Végétarien' },
    veganText: { en: 'Vegan', fr: 'Végétalien' }
  };

  function updateLabels() {
    document.querySelectorAll('.label').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[key]) {
        el.textContent = translations[key][currentLang];
      }
    });
  }

  function syncLanguageSwitchers() {
    langSwitchers.forEach(sw => {
      sw.classList.toggle('eng-active', currentLang === 'en');
      sw.classList.toggle('fra-active', currentLang === 'fr');
    });
  }

  const FOOD_MENU_VARIANTS = {
    full: {
      sections: [
        { key: 'toast',        labels: { en: 'Toast',               fr: 'Toast' } },
        { key: 'french_toast', labels: { en: 'French Toast & More', fr: 'Pain Doré & Plus' } },
        { key: 'bowls',        labels: { en: 'Bowls',               fr: 'Bols' } },
        { key: 'soup',         labels: { en: 'Seasonal Soup',       fr: 'Soupe de saison' } },
        { key: 'sandwich',     labels: { en: 'Sandwich',            fr: 'Sandwich' } },
        { key: 'a_la_carte',   labels: { en: 'À la carte',          fr: 'À la carte' } }
      ],
      menus: {
        en: `
      <section id="food-toast-en" class="menu-section image-card" data-section-key="toast">
        <h2 class="sr-only">Toast</h2>
        <img src="Assets/menus/food/eng/toasts-eng.png" alt="Toasts menu" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/gravlax.png" alt="" aria-hidden="true" class="menu-icon icon-gravlax" />
      </section>

      <section id="food-french-en" class="menu-section image-card" data-section-key="french_toast">
        <h2 class="sr-only">French Toast &amp; More</h2>
        <img src="Assets/menus/food/eng/french-toasts.png" alt="French toast and more menu" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/pancakes.png" alt="" aria-hidden="true" class="menu-icon icon-pancakes" />
      </section>

      <section id="food-bowls-en" class="menu-section image-card" data-section-key="bowls">
        <h2 class="sr-only">Bowls</h2>
        <img src="Assets/menus/food/eng/bowls.png" alt="Bowls menu" class="food-menu-image" loading="lazy" />
      </section>

      <section id="food-soup-en" class="menu-section image-card" data-section-key="soup">
        <h2 class="sr-only">Seasonal Soup</h2>
        <img src="Assets/menus/food/eng/soup-eng.png" alt="Seasonal soup menu" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/breakfastsandwich.png" alt="" aria-hidden="true" class="menu-icon icon-breakfast-left" />
      </section>

      <section id="food-sandwich-en" class="menu-section image-card" data-section-key="sandwich">
        <h2 class="sr-only">Sandwich</h2>
        <img src="Assets/menus/food/eng/sandwiches.png" alt="Sandwich menu" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/poptart.png" alt="" aria-hidden="true" class="menu-icon icon-poptart" />
      </section>

      <section id="food-alacarte-en" class="menu-section image-card" data-section-key="a_la_carte">
        <h2 class="sr-only">À la carte</h2>
        <img src="Assets/menus/food/eng/a-la-carte-eng.png" alt="À la carte menu" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/eng/add.png" alt="Add-ons menu" class="food-menu-image stacked" loading="lazy" />
      </section>
    `,
        fr: `
      <section id="food-toast-fr" class="menu-section image-card" data-section-key="toast">
        <h2 class="sr-only">Toast</h2>
        <img src="Assets/menus/food/fra/toasts-fra.png" alt="Menu Toasts" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/gravlax.png" alt="" aria-hidden="true" class="menu-icon icon-gravlax" />
      </section>

      <section id="food-french-fr" class="menu-section image-card" data-section-key="french_toast">
        <h2 class="sr-only">Pain Doré &amp; Plus</h2>
        <img src="Assets/menus/food/fra/pain-dores.png" alt="Menu pain doré et plus" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/pancakes.png" alt="" aria-hidden="true" class="menu-icon icon-pancakes" />
      </section>

      <section id="food-bowls-fr" class="menu-section image-card" data-section-key="bowls">
        <h2 class="sr-only">Bols</h2>
        <img src="Assets/menus/food/fra/bols.png" alt="Menu bols" class="food-menu-image" loading="lazy" />
      </section>

      <section id="food-soup-fr" class="menu-section image-card" data-section-key="soup">
        <h2 class="sr-only">Soupe de Saison</h2>
        <img src="Assets/menus/food/fra/soupe.png" alt="Menu soupe de saison" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/breakfastsandwich.png" alt="" aria-hidden="true" class="menu-icon icon-breakfast-right" />
      </section>

      <section id="food-sandwich-fr" class="menu-section image-card" data-section-key="sandwich">
        <h2 class="sr-only">Sandwich</h2>
        <img src="Assets/menus/food/fra/sandwichs.png" alt="Menu sandwichs" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/icons/poptart.png" alt="" aria-hidden="true" class="menu-icon icon-poptart" />
      </section>

      <section id="food-alacarte-fr" class="menu-section image-card" data-section-key="a_la_carte">
        <h2 class="sr-only">À la carte</h2>
        <img src="Assets/menus/food/fra/a-la-carte-fra.png" alt="Menu à la carte" class="food-menu-image" loading="lazy" />
        <img src="Assets/menus/food/fra/ajouter.png" alt="Menu ajouter" class="food-menu-image stacked" loading="lazy" />
      </section>
    `
      }
    }
,
    reduced: {
      sections: [
        { key: 'all_day', labels: { en: 'Menu', fr: 'Menu' } },
        { key: 'a_la_carte', labels: { en: 'À la carte', fr: 'À la carte' } }
      ],
      menus: {
        en: `
      <section id="food-classics-en" class="menu-section" data-section-key="all_day">
        <h2 class="sr-only">All-Day Menu</h2>
        <h3>Breakfast Sandwich <span class="price">12</span></h3>
        <p>brioche bun, smoked cheddar cheese, vegan garlic mayo, avocado, sunny egg, pickled onion, micro-greens.</p>
        <p><strong>Option:</strong> Add bacon or sausage! (+)</p>

        <h3>Smash Burger <span class="price">16</span></h3>
        <p>brioche bun, butter, two smash patties, onion, house burger sauce, house garlic dill pickles, cheddar cheese.</p>

        <h3>Classic French Toast <span class="price">19</span></h3>
        <p>french toast with cinnamon sugar, seasonal compote, fresh berries and maple syrup.</p>

        <h3>Staff Meal <span class="price">24</span></h3>
        <p>two eggs sunnyside, seasonal salad, avocado, country bread with herby cream cheese, bacon.</p>

        <h3>Deli Sandwich <span class="price">17</span></h3>
        <p>ciabatta, smoked turkey, salami, capocollo ham, provolone, vegan garlic mayo, dijon mustard, banana pepper, micro-greens.</p>

        <h3>Veggie Sandwich <span class="price">15</span></h3>
        <p>ciabatta, smoked cheddar cheese, vegan garlic mayo, avocado, chickpea salad, pickled onion, micro-greens.</p>

        <h3>Avocado Toast <span class="price">18</span></h3>
        <p>country bread, vegan garlic mayo, avocado, cherry tomatoes, flaky salt, pepper, and basil oil.</p>
        <p><strong>Option:</strong> Add bacon and/or an egg! (+).</p>

        <h3>Palmier Poke Bowl <span class="price">25</span></h3>
        <p>brown rice, tuna, avocado, seasonal salad, spicy mayo. Available vegan with chickpea salad.</p>

        <h3>Yogurt &amp; Granola <span class="price">16</span></h3>
        <p>yogurt, granola, fresh fruit, seasonal compote, brûléed banana, maple syrup and a seedy sprinkle</p>

        <h3>Chia <span class="price">14</span></h3>
        <p>strawberry and matcha chia pudding, black pepper strawberry coulis, fresh berries, and shredded coconut.</p>
      </section>

      <section id="food-alacarte-classics-en" class="menu-section" data-section-key="a_la_carte">
        <h2 class="sr-only">À la carte</h2>
        <h3>À La Carte (Add)</h3>
        <dl class="menu-addons">
          <dt>Salad</dt><dd>10.00 or 6.00</dd>
          <dt>Bacon</dt><dd>4.00 or 3.00</dd>
          <dt>House Made Turkey Sausage</dt><dd>6.00 or 4.00</dd>
          <dt>Bread</dt><dd>2.50</dd>
          <dt>Gluten Free Bread</dt><dd>1.50</dd>
          <dt>Egg</dt><dd>2.50 or 1.50</dd>
        </dl>
        <div class="section-spacer" aria-hidden="true"></div>
      </section>
    `,
        fr: `
      <section id="food-classics-fr" class="menu-section" data-section-key="all_day">
        <h2 class="sr-only">Menu toute la journée</h2>
        <h3>Sandwich<br />Petit-Déjeuner <span class="price">12</span></h3>
        <p>petit pain brioche, fromage cheddar fumé, mayo à l'ail végétalienne, avocat, oeuf miroir, oignons marinés, micro-pousses.</p>
        <p><strong>Option :</strong> Ajouter bacon ou saucisse! (+)</p>

        <h3>"Smash Burger" <span class="price">16</span></h3>
        <p>pain brioché, beurre, deux boulettes smash, oignon, sauce maison, cornichons maison à l'ail et à l'aneth, cheddar.</p>

        <h3>Classique Pain Doré <span class="price">19</span></h3>
        <p>pain doré avec sucre à la cannelle, compote de saison, baies fraîches, et sirop d'érable.</p>

        <h3>Le "Staff Meal" <span class="price">24</span></h3>
        <p>deux oeufs miroirs, salade saisonnière, avocat, pain de campagne avec fromage à la crème aux herbes, bacon.</p>

        <h3>Sandwich Deli <span class="price">17</span></h3>
        <p>ciabatta, dinde fumée, salami, jambon capocollo, fromage provolone, mayo à l'ail végétalienne, moutarde dijon, piments forts, micro-pousses.</p>

        <h3>Sandwich Végé <span class="price">15</span></h3>
        <p>ciabatta, fromage cheddar fumé, mayo à l'ail végétalienne, avocat, salade de pois chiches, oignons marinés, micro-pousses.</p>

        <h3>"Toast" Avocat <span class="price">18</span></h3>
        <p>pain de campagne, mayo à l'ail végétalienne, avocat, tomates cerises, sel, poivre et huile de basilic.</p>
        <p><strong>Option :</strong> Ajouter bacon et/ou un oeuf! (+).</p>

        <h3>Bol Poke Palmier <span class="price">25</span></h3>
        <p>riz sushi, thon, avocat, salade saisonnière, mayo épicé. *option végétalienne avec salade de pois chiches.</p>

        <h3>Yogourt &amp; Granola <span class="price">16</span></h3>
        <p>yogourt, granola, fruits frais, compote de saison, banane brûlée, sirop d'érable, et mélange de grains</p>

        <h3>Chia <span class="price">14</span></h3>
        <p>pudding aux fraises et au chia matcha, coulis de fraises au poivre noir, baies fraîches et noix de coco râpée.</p>
      </section>

      <section id="food-alacarte-classics-fr" class="menu-section" data-section-key="a_la_carte">
        <h2 class="sr-only">À la carte</h2>
        <h3>À La Carte (Ajouter)</h3>
        <dl class="menu-addons">
          <dt>Salade</dt><dd>10.00 ou 6.00</dd>
          <dt>Bacon</dt><dd>4.00 ou 3.00</dd>
          <dt>Saucisse de dinde faite maison</dt><dd>6.00 ou 4.00</dd>
          <dt>Pain</dt><dd>2.50</dd>
          <dt>Pain sans gluten</dt><dd>1.50</dd>
          <dt>Oeuf</dt><dd>2.50 ou 1.50</dd>
        </dl>
        <div class="section-spacer" aria-hidden="true"></div>
      </section>
    `
      }
    }
  };

  // Toggle this to 'full' when ready to show the updated food menu.
  const ACTIVE_FOOD_MENU_VARIANT = 'full';

  function getActiveFoodMenuVariant() {
    return FOOD_MENU_VARIANTS[ACTIVE_FOOD_MENU_VARIANT] || FOOD_MENU_VARIANTS.full;
  }

  function getActiveFoodSections() {
    const sections = getActiveFoodMenuVariant().sections;
    return Array.isArray(sections) ? sections : [];
  }

  function getActiveFoodMenuTemplates() {
    return getActiveFoodMenuVariant().menus || {};
  }

  function getDefaultFoodSectionKey() {
    const sections = getActiveFoodSections();
    return sections.length ? sections[0].key : null;
  }

  const teaImage = document.getElementById('teaImage');
  const coffeeImage = document.getElementById('coffeeImage');
  const foodMenuEn = document.getElementById('foodMenuEn');
  const foodMenuFr = document.getElementById('foodMenuFr');
  const legendGfPill = document.getElementById('legendGfPill');
  const legendGfText = document.getElementById('legendGfText');
  const legendVegetarianText = document.getElementById('legendVegetarianText');
  const legendVeganText = document.getElementById('legendVeganText');
  let currentFoodSectionKey = getDefaultFoodSectionKey();

  const teaImages = {
    en: 'Assets/menus/tea-eng.png',
    fr: 'Assets/menus/tea-fra.png'
  };

  const coffeeImages = {
    en: 'Assets/menus/coffee-eng.png',
    fr: 'Assets/menus/coffee-fra.png'
  };

  function getFoodSectionLabel(key, lang = currentLang) {
    if (!key) return '';
    const section = getActiveFoodSections().find(item => item.key === key);
    if (!section) return '';
    return section.labels?.[lang] || section.labels?.en || '';
  }

  function ensureValidFoodSectionKey() {
    const sections = getActiveFoodSections();
    if (!sections.length) {
      currentFoodSectionKey = null;
      return;
    }
    const hasKey = sections.some(section => section.key === currentFoodSectionKey);
    if (!hasKey) {
      currentFoodSectionKey = sections[0].key;
    }
  }

  function renderFoodSectionList() {
    if (!foodSectionList) return;
    ensureValidFoodSectionKey();
    foodSectionList.innerHTML = '';
    const sections = getActiveFoodSections();
    sections.forEach(section => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.sectionKey = section.key;
      button.textContent = getFoodSectionLabel(section.key);
      button.classList.toggle('active', section.key === currentFoodSectionKey);
      button.addEventListener('click', () => {
        scrollToFoodSection(section.key);
        setFoodSectionDropdown(false);
      });
      foodSectionList.appendChild(button);
    });
    updateFoodSectionLabel();
    setFoodSectionDropdown(false);
  }

  function updateFoodSectionLabel() {
    ensureValidFoodSectionKey();
    if (foodSectionLabel) {
      foodSectionLabel.textContent = getFoodSectionLabel(currentFoodSectionKey) || '';
    }
    if (foodSectionList) {
      foodSectionList.querySelectorAll('button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sectionKey === currentFoodSectionKey);
      });
    }
  }

  function setFoodSectionDropdown(open) {
    const dropdown = foodSectionToggle?.closest('.section-dropdown');
    if (open) {
      foodSectionDropdownOpen = true;
      if (foodSectionToggle) {
        foodSectionToggle.setAttribute('aria-expanded', 'true');
      }
      if (foodSectionList) {
        foodSectionList.setAttribute('aria-hidden', 'false');
        foodSectionList.querySelectorAll('button').forEach(btn => {
          btn.tabIndex = 0;
        });
      }
      if (dropdown) {
        dropdown.classList.remove('closing');
        dropdown.classList.add('open');
      }
      return;
    }

    if (foodSectionToggle) {
      foodSectionToggle.setAttribute('aria-expanded', 'false');
    }
    if (foodSectionList) {
      foodSectionList.querySelectorAll('button').forEach(btn => {
        btn.tabIndex = -1;
      });
    }
    foodSectionDropdownOpen = false;

    if (!dropdown) {
      finalizeDropdownClose();
      return;
    }

    dropdown.classList.add('closing');
    if (dropdown.classList.contains('open')) {
      requestAnimationFrame(() => dropdown.classList.remove('open'));
    }
    window.setTimeout(finalizeDropdownClose, 200);
  }

  function finalizeDropdownClose() {
    const dropdown = foodSectionToggle?.closest('.section-dropdown');
    if (dropdown) {
      dropdown.classList.remove('closing');
      dropdown.classList.remove('open');
    }
    if (foodSectionList) {
      foodSectionList.setAttribute('aria-hidden', 'true');
    }
  }

  function toggleFoodSectionDropdown() {
    setFoodSectionDropdown(!foodSectionDropdownOpen);
  }

  function getActiveFoodSectionElement(key) {
    const container = currentLang === 'en' ? foodMenuEn : foodMenuFr;
    if (!container || container.hidden) return null;
    return container.querySelector(`[data-section-key="${key}"]`);
  }

  function scrollToFoodSection(key) {
    const sectionEl = getActiveFoodSectionElement(key);
    if (!sectionEl || !foodPage) return;
    currentFoodSectionKey = key;
    updateFoodSectionLabel();
    const headerHeight = foodHeader ? foodHeader.offsetHeight : 0;
    const pageRect = foodPage.getBoundingClientRect();
    const targetRect = sectionEl.getBoundingClientRect();
    const offset = targetRect.top - pageRect.top + foodPage.scrollTop - headerHeight - 12;
    foodPage.scrollTo({ top: offset, behavior: 'smooth' });
  }

  function updateFoodSectionFromScroll() {
    const container = currentLang === 'en' ? foodMenuEn : foodMenuFr;
    if (!container || container.hidden) return;
    const sections = container.querySelectorAll('.menu-section');
    if (!sections.length) return;
    const headerBottom = foodHeader ? foodHeader.getBoundingClientRect().bottom : 0;
    const threshold = headerBottom + 48;
    let nextKey = sections[0].getAttribute('data-section-key');

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= threshold) {
        nextKey = section.getAttribute('data-section-key');
      }
    });

    if (nextKey && nextKey !== currentFoodSectionKey) {
      currentFoodSectionKey = nextKey;
      updateFoodSectionLabel();
    }
  }

  function setTeaImage() {
    if (!teaImage) return;
    const src = teaImages[currentLang] || teaImages.en;
    teaImage.src = src;
    teaImage.alt = currentLang === 'en' ? 'Tea menu (English)' : 'Menu de thé (français)';
  }

  function setCoffeeImage() {
    if (!coffeeImage) return;
    const src = coffeeImages[currentLang] || coffeeImages.en;
    coffeeImage.src = src;
    coffeeImage.alt = currentLang === 'en' ? 'Coffee menu (English)' : 'Menu de café (français)';
  }

  function setFoodMenu() {
    if (!foodMenuEn || !foodMenuFr) return;
    const templates = getActiveFoodMenuTemplates();
    foodMenuEn.innerHTML = templates.en || '';
    foodMenuFr.innerHTML = templates.fr || '';
    foodMenuEn.hidden = currentLang !== 'en';
    foodMenuFr.hidden = currentLang !== 'fr';
    ensureValidFoodSectionKey();
    updateFoodSectionFromScroll();
    collectMenuIcons();
  }

  function setLegendLanguage() {
    if (legendGfPill) {
      legendGfPill.textContent = legendTranslations.glutenPill[currentLang] || legendTranslations.glutenPill.en;
    }
    if (legendGfText) {
      legendGfText.textContent = legendTranslations.glutenText[currentLang] || legendTranslations.glutenText.en;
    }
    if (legendVegetarianText) {
      legendVegetarianText.textContent = legendTranslations.vegetarianText[currentLang] || legendTranslations.vegetarianText.en;
    }
    if (legendVeganText) {
      legendVeganText.textContent = legendTranslations.veganText[currentLang] || legendTranslations.veganText.en;
    }
  }

  function setLanguage(lang) {
    currentLang = lang;
    syncLanguageSwitchers();
    updateLabels();
    setTeaImage();
    setCoffeeImage();
    setFoodMenu();
    setLegendLanguage();
    renderFoodSectionList();
    updateFoodSectionLabel();
    updateFoodSectionFromScroll();
  }

  function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'fr' : 'en');
  }

  langSwitchers.forEach(sw => {
    sw.addEventListener('click', (event) => {
      event.preventDefault();
      toggleLanguage();
    });
  });

  const TOUCH_HANDLER_DELAY = 400;
  const TOUCH_MOVE_TOLERANCE = 12;
  let lastTouchTime = 0;

  function getTouchById(touchList, id) {
    if (!touchList) return null;
    for (let i = 0; i < touchList.length; i += 1) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
    return null;
  }

  function attachTapHandler(element, handler) {
    if (!element || typeof handler !== 'function') return;

    let touchState = null;

    element.addEventListener('click', (event) => {
      if (Date.now() - lastTouchTime < TOUCH_HANDLER_DELAY) return;
      handler(event);
    });

    element.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches?.[0];
      if (!touch) return;
      touchState = {
        id: touch.identifier,
        startX: touch.clientX,
        startY: touch.clientY,
        moved: false
      };
    }, { passive: true });

    element.addEventListener('touchmove', (event) => {
      if (!touchState) return;
      const touch = getTouchById(event.touches, touchState.id);
      if (!touch) return;
      const deltaX = Math.abs(touch.clientX - touchState.startX);
      const deltaY = Math.abs(touch.clientY - touchState.startY);
      if (deltaX > TOUCH_MOVE_TOLERANCE || deltaY > TOUCH_MOVE_TOLERANCE) {
        touchState.moved = true;
      }
    }, { passive: true });

    element.addEventListener('touchend', (event) => {
      if (event.touches && event.touches.length > 0) return;
      if (!touchState) return;
      const touch = getTouchById(event.changedTouches, touchState.id);
      if (!touch) return;
      const moved = touchState.moved;
      touchState = null;
      lastTouchTime = Date.now();
      if (moved) return;
      handler(event);
      event.preventDefault();
    }, { passive: false });

    element.addEventListener('touchcancel', () => {
      touchState = null;
    });
  }

  const pressReleaseTimers = new Map();
  const activeTransitionTriggers = new Set();
  const DEFAULT_PRESS_RELEASE_DELAY = 220;
  const TRANSITION_PRESS_RELEASE_DELAY = 600;
  const PAGE_TRANSITION_DELAY = 110;
  const pointerStates = new Map();

  function registerPressed(el) {
    if (!el) return;
    clearTimeout(pressReleaseTimers.get(el));
    el.classList.add('pressed');
  }

  function schedulePressedRelease(el, delay = DEFAULT_PRESS_RELEASE_DELAY) {
    if (!el) return;
    clearTimeout(pressReleaseTimers.get(el));
    const timer = window.setTimeout(() => {
      el.classList.remove('pressed');
      pressReleaseTimers.delete(el);
    }, delay);
    pressReleaseTimers.set(el, timer);
  }

  function forcePressedRelease(el) {
    if (!el) return;
    clearTimeout(pressReleaseTimers.get(el));
    pressReleaseTimers.delete(el);
    el.classList.remove('pressed');
  }

  function holdPressedDuringTransition(el, delay = TRANSITION_PRESS_RELEASE_DELAY) {
    if (!el) return;
    schedulePressedRelease(el, delay);
  }

  function releaseTransitionTrigger(el, delay = TRANSITION_PRESS_RELEASE_DELAY) {
    if (!el) return;
    activeTransitionTriggers.delete(el);
    schedulePressedRelease(el, delay);
  }

  function runAfterPressVisual(callback, delay = PAGE_TRANSITION_DELAY) {
    if (delay <= 0) {
      callback();
      return;
    }

    const start = performance.now();
    function tick() {
      const elapsed = performance.now() - start;
      if (elapsed >= delay) {
        callback();
      } else {
        window.requestAnimationFrame(tick);
      }
    }

    window.requestAnimationFrame(tick);
  }

  function setupPressEffects() {
    const pressTargets = document.querySelectorAll('.social-btn, .tile, .large-button, .review-card, .back-button, .nav-btn, .shelf-card');

    pressTargets.forEach(el => {
      if (window.PointerEvent) {
        el.addEventListener('pointerdown', (event) => {
          if (event.pointerType === 'mouse' && event.button !== 0) return;
          if (event.pointerType !== 'mouse') {
            pointerStates.set(event.pointerId, {
              el,
              startX: event.clientX,
              startY: event.clientY,
              moved: false
            });
          }
          registerPressed(el);
        });
        el.addEventListener('pointermove', (event) => {
          if (event.pointerType === 'mouse') return;
          const state = pointerStates.get(event.pointerId);
          if (!state) return;
          const deltaX = Math.abs(event.clientX - state.startX);
          const deltaY = Math.abs(event.clientY - state.startY);
          if (deltaX > TOUCH_MOVE_TOLERANCE || deltaY > TOUCH_MOVE_TOLERANCE) {
            state.moved = true;
          }
        });
        el.addEventListener('pointerup', (event) => {
          const state = pointerStates.get(event.pointerId);
          const moved = state?.moved;
          pointerStates.delete(event.pointerId);
          if (moved) {
            schedulePressedRelease(el, TRANSITION_PRESS_RELEASE_DELAY);
            return;
          }
          if (event.pointerType !== 'mouse' && activeTransitionTriggers.has(el)) {
            return;
          }
          const delay = DEFAULT_PRESS_RELEASE_DELAY;
          schedulePressedRelease(el, delay);
        });
        el.addEventListener('pointercancel', (event) => {
          const state = pointerStates.get(event.pointerId);
          const moved = state?.moved;
          pointerStates.delete(event.pointerId);
          if (event.pointerType !== 'mouse' && activeTransitionTriggers.has(el)) {
            return;
          }
          if (moved || event.pointerType !== 'mouse') {
            const delay = moved ? TRANSITION_PRESS_RELEASE_DELAY : DEFAULT_PRESS_RELEASE_DELAY;
            schedulePressedRelease(el, delay);
          } else {
            forcePressedRelease(el);
          }
        });
        el.addEventListener('pointerleave', (event) => {
          const state = pointerStates.get(event.pointerId);
          const moved = state?.moved;
          pointerStates.delete(event.pointerId);
          if (event.pointerType !== 'mouse' && activeTransitionTriggers.has(el)) {
            return;
          }
          if (event.pointerType === 'mouse') {
            forcePressedRelease(el);
          } else {
            schedulePressedRelease(el);
          }
        });
      } else {
        let legacyTouchState = null;
        el.addEventListener('touchstart', (event) => {
          const touch = event.changedTouches?.[0];
          if (!touch) return;
          legacyTouchState = {
            startX: touch.clientX,
            startY: touch.clientY,
            moved: false
          };
          registerPressed(el);
        });
        el.addEventListener('touchmove', (event) => {
          if (!legacyTouchState) return;
          const touch = event.changedTouches?.[0];
          if (!touch) return;
          const deltaX = Math.abs(touch.clientX - legacyTouchState.startX);
          const deltaY = Math.abs(touch.clientY - legacyTouchState.startY);
          if (deltaX > TOUCH_MOVE_TOLERANCE || deltaY > TOUCH_MOVE_TOLERANCE) {
            legacyTouchState.moved = true;
          }
        });
        el.addEventListener('mousedown', (event) => {
          if (event.button !== 0) return;
          registerPressed(el);
        });
        el.addEventListener('touchend', () => {
          const moved = legacyTouchState?.moved;
          legacyTouchState = null;
          if (moved) {
            schedulePressedRelease(el, TRANSITION_PRESS_RELEASE_DELAY);
            return;
          }
          if (activeTransitionTriggers.has(el)) return;
          schedulePressedRelease(el);
        });
        el.addEventListener('touchcancel', () => {
          const moved = legacyTouchState?.moved;
          legacyTouchState = null;
          if (activeTransitionTriggers.has(el)) return;
          if (moved) {
            schedulePressedRelease(el, TRANSITION_PRESS_RELEASE_DELAY);
          } else {
            forcePressedRelease(el);
          }
        });
        el.addEventListener('mouseup', () => {
          if (activeTransitionTriggers.has(el)) return;
          schedulePressedRelease(el);
        });
        el.addEventListener('mouseleave', () => {
          if (activeTransitionTriggers.has(el)) return;
          forcePressedRelease(el);
        });
      }
    });
  }
  setupPressEffects();

  const homePage = document.getElementById('homePage');
  const foodPage = document.getElementById('foodPage');
  const teaPage = document.getElementById('teaPage');
  const coffeePage = document.getElementById('coffeePage');
  const cocktailsPage = document.getElementById('cocktailsPage');
  const shelfPage = document.getElementById('shelfPage');

  const foodBtn = document.getElementById('foodBtn');
  const teaBtn = document.getElementById('teaBtn');
  const coffeeBtn = document.getElementById('coffeeBtn');
  const cocktailsBtn = document.getElementById('cocktailsBtn');
  const shelfBtn = document.getElementById('shelfBtn');
  const reviewBtn = document.getElementById('reviewBtn');
  const foodSectionToggle = document.getElementById('foodSectionToggle');
  const foodSectionLabel = document.getElementById('foodSectionLabel');
  const foodSectionList = document.getElementById('foodSectionList');
  const foodHeader = document.querySelector('#foodPage .food-header');
  let menuIcons = [];
  let iconRotationScheduled = false;
  const scrollContainer = foodPage || document.documentElement;

  function getScrollTop() {
    if (foodPage) return foodPage.scrollTop;
    return window.pageYOffset || document.documentElement.scrollTop || 0;
  }

  function getViewportHeight() {
    if (foodPage) return foodPage.clientHeight || window.innerHeight || 1;
    return window.innerHeight || 1;
  }

  function updateIconRotation() {
    if (!menuIcons.length) return;
    const vh = getViewportHeight() || 1;
    const scrollTop = getScrollTop();
    menuIcons.forEach((icon) => {
      const anchor = parseFloat(icon.dataset.anchor || '0');
      const centerY = anchor - scrollTop;
      const progress = Math.min(Math.max(centerY / vh, 0), 1); // 1 at bottom, 0 at top
      const angle = -45 * progress; // 0° at top, -45° at bottom
      icon.style.transform = `rotate(${angle}deg)`;
    });
  }

  function scheduleIconRotation() {
    if (iconRotationScheduled) return;
    iconRotationScheduled = true;
    requestAnimationFrame(() => {
      iconRotationScheduled = false;
      updateIconRotation();
    });
  }

  function collectMenuIcons() {
    menuIcons = Array.from(document.querySelectorAll('.menu-icon'));
    const scrollTop = getScrollTop();
    menuIcons.forEach((icon) => {
      const rect = icon.getBoundingClientRect();
      const anchor = rect.top + scrollTop + rect.height / 2;
      icon.dataset.anchor = anchor;
    });
    document.querySelectorAll('.food-menu-image').forEach((img) => {
      img.addEventListener('load', () => {
        collectMenuIcons();
        scheduleIconRotation();
      }, { once: true, passive: true });
    });
    updateIconRotation();
    requestAnimationFrame(updateIconRotation);
  }

  let foodSectionDropdownOpen = false;

  const backFoodBtn = document.getElementById('backHome');
  const backTeaBtn = document.getElementById('backTea');
  const backCoffeeBtn = document.getElementById('backCoffee');
  const backCocktailsBtn = document.getElementById('backCocktails');
  const backShelfBtn = document.getElementById('backShelf');
  const pageOpeners = {
    food: openFoodPage,
    tea: openTeaPage,
    coffee: openCoffeePage,
    cocktails: openCocktailsPage,
    shelf: openShelfPage
  };
  const pageClosers = {
    food: closeFoodPage,
    tea: closeTeaPage,
    coffee: closeCoffeePage,
    cocktails: closeCocktailsPage,
    shelf: closeShelfPage
  };
  const HOME_STATE = { page: 'home' };
  history.replaceState(HOME_STATE, '', window.location.href);
  let currentPage = HOME_STATE.page;

  function clearPressed() {
    pressReleaseTimers.forEach(timer => clearTimeout(timer));
    pressReleaseTimers.clear();
    activeTransitionTriggers.clear();
    document.querySelectorAll('.pressed').forEach(el => el.classList.remove('pressed'));
  }

  function hideAllPages() {
    [foodPage, teaPage, coffeePage, cocktailsPage, shelfPage].forEach(page => {
      if (page) {
        page.classList.remove('show');
        page.style.display = 'none';
      }
    });
  }

  function showPage(page) {
    if (!page) return;
    page.style.display = 'block';
    requestAnimationFrame(() => page.classList.add('show'));
  }

  function prepareTriggerForTransition(event) {
    const trigger = event?.currentTarget;
    if (trigger) {
      activeTransitionTriggers.add(trigger);
      if (!trigger.classList.contains('pressed')) {
        registerPressed(trigger);
      }
      holdPressedDuringTransition(trigger);
    }
    return trigger;
  }

  function openFoodPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      hideAllPages();
      setFoodMenu();
      showPage(foodPage);
      homePage.style.display = 'none';
      if (mainLangSwitcher) mainLangSwitcher.style.display = 'none';
      currentFoodSectionKey = getDefaultFoodSectionKey();
      ensureValidFoodSectionKey();
      updateFoodSectionLabel();
      setFoodSectionDropdown(false);
      if (foodPage) {
        foodPage.scrollTop = 0;
      }
      updateFoodSectionFromScroll();
      releaseTransitionTrigger(trigger);
    });
  }

  function closeFoodPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      if (!foodPage) {
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        return;
      }
      foodPage.classList.remove('show');
      setTimeout(() => {
        if (foodPage) foodPage.style.display = 'none';
        homePage.style.display = 'block';
        if (mainLangSwitcher) mainLangSwitcher.style.display = '';
        setFoodSectionDropdown(false);
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        clearPressed();
      }, 400);
    });
  }

  function openTeaPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      hideAllPages();
      setTeaImage();
      showPage(teaPage);
      homePage.style.display = 'none';
      if (mainLangSwitcher) mainLangSwitcher.style.display = 'none';
      syncLanguageSwitchers();
      releaseTransitionTrigger(trigger);
    });
  }

  function closeTeaPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      if (!teaPage) {
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        return;
      }
      teaPage.classList.remove('show');
      setTimeout(() => {
        if (teaPage) teaPage.style.display = 'none';
        homePage.style.display = 'block';
        if (mainLangSwitcher) mainLangSwitcher.style.display = '';
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        clearPressed();
      }, 400);
    });
  }

  function openCoffeePage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      hideAllPages();
      setCoffeeImage();
      showPage(coffeePage);
      homePage.style.display = 'none';
      if (mainLangSwitcher) mainLangSwitcher.style.display = 'none';
      syncLanguageSwitchers();
      releaseTransitionTrigger(trigger);
    });
  }

  function closeCoffeePage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      if (!coffeePage) {
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        return;
      }
      coffeePage.classList.remove('show');
      setTimeout(() => {
        if (coffeePage) coffeePage.style.display = 'none';
        homePage.style.display = 'block';
        if (mainLangSwitcher) mainLangSwitcher.style.display = '';
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        clearPressed();
      }, 400);
    });
  }

  function openCocktailsPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      hideAllPages();
      showPage(cocktailsPage);
      homePage.style.display = 'none';
      if (mainLangSwitcher) mainLangSwitcher.style.display = 'none';
      releaseTransitionTrigger(trigger);
    });
  }

  function closeCocktailsPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      if (!cocktailsPage) {
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        return;
      }
      cocktailsPage.classList.remove('show');
      setTimeout(() => {
        if (cocktailsPage) cocktailsPage.style.display = 'none';
        homePage.style.display = 'block';
        if (mainLangSwitcher) mainLangSwitcher.style.display = '';
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        clearPressed();
      }, 400);
    });
  }

  function openShelfPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      hideAllPages();
      showPage(shelfPage);
      homePage.style.display = 'none';
      if (mainLangSwitcher) mainLangSwitcher.style.display = 'none';
      releaseTransitionTrigger(trigger);
    });
  }

  function closeShelfPage(event) {
    const trigger = prepareTriggerForTransition(event);
    runAfterPressVisual(() => {
      if (!shelfPage) {
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        return;
      }
      shelfPage.classList.remove('show');
      setTimeout(() => {
        if (shelfPage) shelfPage.style.display = 'none';
        homePage.style.display = 'block';
        if (mainLangSwitcher) mainLangSwitcher.style.display = '';
        releaseTransitionTrigger(trigger, DEFAULT_PRESS_RELEASE_DELAY);
        clearPressed();
      }, 400);
    });
  }

  function navigateToPage(page, event) {
    if (!page || currentPage === page) return;
    const opener = pageOpeners[page];
    if (!opener) return;
    currentPage = page;
    history.pushState({ page }, '', window.location.href);
    opener(event);
  }

  function navigateHome() {
    if (currentPage === 'home') return;
    history.back();
  }

  function handlePopState(event) {
    const nextPage = event.state?.page || 'home';
    if (nextPage === currentPage) return;
    const previousPage = currentPage;
    currentPage = nextPage;

    if (nextPage === 'home') {
      const closer = pageClosers[previousPage];
      if (closer) {
        closer();
      } else {
        hideAllPages();
        homePage.style.display = 'block';
        if (mainLangSwitcher) mainLangSwitcher.style.display = '';
      }
      return;
    }

    const opener = pageOpeners[nextPage];
    if (opener) {
      opener();
      return;
    }

    currentPage = 'home';
    history.replaceState(HOME_STATE, '', window.location.href);
    hideAllPages();
    homePage.style.display = 'block';
    if (mainLangSwitcher) mainLangSwitcher.style.display = '';
  }
  window.addEventListener('popstate', handlePopState);

  attachTapHandler(foodBtn, (event) => navigateToPage('food', event));
  attachTapHandler(backFoodBtn, navigateHome);

  attachTapHandler(teaBtn, (event) => navigateToPage('tea', event));
  attachTapHandler(backTeaBtn, navigateHome);

  attachTapHandler(coffeeBtn, (event) => navigateToPage('coffee', event));
  attachTapHandler(backCoffeeBtn, navigateHome);

  attachTapHandler(cocktailsBtn, (event) => navigateToPage('cocktails', event));
  attachTapHandler(backCocktailsBtn, navigateHome);

  attachTapHandler(shelfBtn, (event) => navigateToPage('shelf', event));
  attachTapHandler(backShelfBtn, navigateHome);

  if (foodSectionToggle) {
    foodSectionToggle.addEventListener('click', (event) => {
      event.preventDefault();
      toggleFoodSectionDropdown();
    });
  }

  document.addEventListener('click', (event) => {
    if (!foodSectionDropdownOpen) return;
    const target = event.target;
    if (foodSectionToggle?.contains(target) || foodSectionList?.contains(target)) {
      return;
    }
    setFoodSectionDropdown(false);
  });

  if (foodPage) {
    foodPage.addEventListener('scroll', () => {
      if (foodSectionDropdownOpen) {
        setFoodSectionDropdown(false);
      }
      updateFoodSectionFromScroll();
    });
  }

  const REVIEW_URL = 'https://www.google.com/search?sca_esv=f60ecab60e0aa489&sxsrf=AE3TifOqxmle3mCawmW8QMBLC3AjyoMUhg:1761669360921&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8q7DkqADv5wRTdBpYumF5gqCEfO6tp_bZRoBSIm_7g3w6n0sxuVia957VyiU3Lyx1bNyMTgKWSmBKbTs44Z0-tiwanV&q=Palmier+Reviews&sa=X&ved=2ahUKEwiYr-DjqceQAxXmFjQIHeLbDtkQ0bkNegQILhAD&biw=1457&bih=817&dpr=2';
  function openReview() {
    window.open(REVIEW_URL, '_blank', 'noopener,noreferrer');
  }
  if (reviewBtn) {
    attachTapHandler(reviewBtn, openReview);
    reviewBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openReview();
      }
    });
  }

  if (foodPage) {
    foodPage.addEventListener('scroll', scheduleIconRotation, { passive: true });
  } else {
    window.addEventListener('scroll', scheduleIconRotation, { passive: true });
  }
  window.addEventListener('resize', () => {
    collectMenuIcons();
    updateIconRotation();
  });

  setLanguage('en');
});
