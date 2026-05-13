document.addEventListener('DOMContentLoaded', () => {
  const langSwitchers = document.querySelectorAll('[data-lang-switcher]');
  const mainLangSwitcher = document.getElementById('langSwitcher');
  let currentLang = 'fr';

  const translations = {
    food:      { en: 'Food',         fr: 'Nourriture' },
    tea:       { en: 'Tea',          fr: 'Thé' },
    cocktails: { en: 'Cocktails',    fr: 'Cocktails' },
    coffee:    { en: 'Coffee',       fr: 'Café' },
    coffeeDiscover: { en: 'Discover', fr: 'Découvrir' },
    coffeeBuild: { en: 'Build', fr: 'Composer' },
    coffeeBuildStart: { en: 'Customize your drink below and see how to order it at the café', fr: 'Personnalisez votre boisson ci-dessous et voyez comment la commander au café' },
    coffeeBuildChooseBase: { en: 'Drink Base', fr: 'Base de boisson' },
    coffeeBuildChooseBeans: { en: 'Espresso Beans', fr: 'Grains espresso' },
    coffeeBuildChooseDripBeans: { en: 'Drip Beans', fr: 'Grains filtre' },
    coffeeTeaFlavorChai: { en: 'Chai', fr: 'Chai' },
    coffeeTeaFlavorMatcha: { en: 'Matcha', fr: 'Matcha' },
    coffeeTeaFlavorGinger: { en: 'Ginger Turmeric', fr: 'Gingembre curcuma' },
    coffeeTeaFlavorEarlGrey: { en: 'Earl Grey (London Fog)', fr: 'Earl Grey (London Fog)' },
    coffeeTeaFlavorSerenitea: { en: 'Serenitea', fr: 'Serenitea' },
    coffeeBuildChooseService: { en: 'Service', fr: 'Service' },
    coffeeBuildChooseTemperature: { en: 'Temperature', fr: 'Température' },
    coffeeBuildChooseMilkType: { en: 'Milk Type', fr: 'Type de lait' },
    coffeeBuildChooseFlavours: { en: 'Flavours', fr: 'Saveurs' },
    coffeeBuildChooseSteamedMilk: { en: 'Steamed milk', fr: 'Lait vapeur' },
    coffeeBuildChooseMilkQty: { en: 'Milk (oz)', fr: 'Lait (oz)' },
    coffeeBuildChooseWaterQty: { en: 'Hot Water (oz)', fr: 'Eau chaude (oz)' },
    coffeeBuildChooseWaterQtyIced: { en: 'Water (oz)', fr: 'Eau (oz)' },
    coffeeBuildChooseFoamTexture: { en: 'Foam Texture', fr: 'Texture de mousse' },
    coffeeBebeccino: { en: 'Bebeccino', fr: 'Bebeccino' },
    coffeeBaseEspresso: { en: 'Espresso', fr: 'Espresso' },
    coffeeBaseTea: { en: 'Tea Latté', fr: 'Thé latté' },
    coffeeBaseDrip: { en: 'Drip Coffee', fr: 'Café filtre' },
    coffeeBaseChocolate: { en: 'Chocolate', fr: 'Chocolat' },
    coffeeBeanPalmier: { en: 'Palmier Beans', fr: 'Grains Palmier' },
    coffeeBeanPalmierDesc: { en: 'Natural Brazilian, Chocolatty/Nutty notes', fr: 'Brésilien nature, notes chocolatées/noisettées' },
    coffeeBeanDecaf: { en: 'Decaf', fr: 'Décaf' },
    coffeeBeanDecafDesc: { en: 'Anchored coffee', fr: 'Café Anchored' },
    coffeeBeanFeature: { en: 'Feature Espresso', fr: 'Espresso vedette' },
    coffeeBeanFeatureDesc: { en: 'Changes weekly, notes are usually fruity/funky', fr: 'Change chaque semaine, notes souvent fruitées/funky' },
    coffeeDripBeanNightHawk: { en: 'Night Hawk', fr: 'Night Hawk' },
    coffeeDripBeanNightHawkDesc: { en: 'Chocolatty/Nutty best with milk', fr: 'Chocolaté/noisetté, meilleur avec lait' },
    coffeeDripBeanFeature: { en: 'Feature', fr: 'Vedette' },
    coffeeDripBeanFeatureDesc: { en: 'Changes daily, usually fruitier, best black', fr: 'Change chaque jour, souvent plus fruité, meilleur noir' },
    coffeeForHere: { en: 'For Here', fr: 'Sur place' },
    coffeeToGo: { en: 'To Go', fr: 'Emporter' },
    coffeeHot: { en: 'Hot', fr: 'Chaud' },
    coffeeIced: { en: 'Iced', fr: 'Glacé' },
    coffeeYes: { en: 'Yes', fr: 'Oui' },
    coffeeNo: { en: 'No', fr: 'Non' },
    coffeeMilkTypeHenrietta: { en: 'Henrietta 3.8%', fr: 'Henrietta 3.8%' },
    coffeeMilkTypeSoy: { en: 'Soy', fr: 'Soya' },
    coffeeMilkTypeOat: { en: 'Oat', fr: 'Avoine' },
    coffeeMilkTypeMacadamia: { en: 'Macadamia', fr: 'Macadame' },
    coffeeMilkTypeSkim: { en: 'Skim', fr: 'Écrémé' },
    coffeeMilkTypeLactoseFree: { en: 'Lactose Free', fr: 'Sans lactose' },
    coffeeFlavorVanilla: { en: 'Vanilla', fr: 'Vanille' },
    coffeeFlavorMaple: { en: 'Maple', fr: 'Érable' },
    coffeeFoamThin: { en: 'Thin (flat white foam)', fr: 'Fine (mousse flat white)' },
    coffeeFoamMedium: { en: 'Medium (latté foam)', fr: 'Moyenne (mousse latté)' },
    coffeeFoamThick: { en: 'Thick (cappuccino foam)', fr: 'Épaisse (mousse cappuccino)' },
    locationAddressLine1: { en: '40 Chem. Scott,', fr: '40 Chemin Scott,' },
    locationAddressLine2: { en: 'Chelsea, QC J9B 1R5', fr: 'Chelsea, QC J9B 1R5' },
    openIn: { en: 'Open In', fr: 'Ouvrir dans' },
    googleMaps: { en: 'Google Maps', fr: 'Google Maps' },
    appleMaps: { en: 'Apple Maps', fr: 'Plans Apple' },
    hoursTitle: { en: 'Hours', fr: 'Heures' },
    monday: { en: 'Monday', fr: 'Lundi' },
    tuesday: { en: 'Tuesday', fr: 'Mardi' },
    wednesday: { en: 'Wednesday', fr: 'Mercredi' },
    thursday: { en: 'Thursday', fr: 'Jeudi' },
    friday: { en: 'Friday', fr: 'Vendredi' },
    saturday: { en: 'Saturday', fr: 'Samedi' },
    sunday: { en: 'Sunday', fr: 'Dimanche' },
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
        { key: 'french_toast', labels: { en: 'French Toast…', fr: 'Pain doré…' } },
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

  function getCoffeeBuildLabel(key) {
    return translations[key]?.[currentLang] || translations[key]?.en || '';
  }

  function getCoffeeBuildFolder() {
    const { service, temperature } = coffeeBuildState;
    if (!service || !temperature) return null;
    if (service === 'togo' && temperature === 'hot') return 'Assets/menus/coffees/togo';
    if (service === 'stay' && temperature === 'hot') return 'Assets/menus/coffees/stay';
    if (service === 'stay' && temperature === 'iced') return 'Assets/menus/coffees/iced-stay';
    if (service === 'togo' && temperature === 'iced') return 'Assets/menus/coffees/iced-togo';
    return null;
  }

  function getCoffeeFoamProfile(path) {
    if (/\/(?:s|m|l)-latte\.png$/.test(path || '')) {
      return { defaultIndex: 1 };
    }
    if (/\/(?:flat|cort|cortado)\.png$/.test(path || '')) {
      return { defaultIndex: 0 };
    }
    if (/\/capp\.png$/.test(path || '')) {
      return { defaultIndex: 2 };
    }
    return null;
  }

  function getCoffeeBeanProfile(path, selectedBases = []) {
    const safePath = path || '';
    const espressoOnly = isEspressoOnlySelection(selectedBases);
    if (!espressoOnly && !/\/(?:spro|cort|cortado|s-latte|m-latte|l-latte|macc|flat|capp)\.png$/.test(safePath)) {
      return null;
    }
    if (/\/(?:spro|macc|cort|cortado|s-latte)\.png$/.test(safePath)) {
      return { defaultBean: 'feature' };
    }
    return { defaultBean: 'palmier' };
  }

  function getCoffeeBeanCaptionSuffix(path, selectedBases = []) {
    const beanProfile = getCoffeeBeanProfile(path, selectedBases);
    if (!coffeeBuildState.bean) return '';
    if (coffeeBuildState.bean === 'half-caf' || coffeeBuildState.bean === 'decaf') return '';
    if (!beanProfile || coffeeBuildState.bean === beanProfile.defaultBean) return '';
    if (coffeeBuildState.bean === 'feature') {
      return currentLang === 'fr' ? ' avec grains vedette' : ' with feature beans';
    }
    return currentLang === 'fr' ? ' avec grains Palmier' : ' with Palmier Beans';
  }

  function getCoffeeBeanLeadModifier(selectedBases = []) {
    if (!selectedBases.includes('espresso')) return '';
    if (coffeeBuildState.bean === 'half-caf') {
      return currentLang === 'fr' ? 'demi-caf' : 'half-caf';
    }
    if (coffeeBuildState.bean === 'decaf') {
      return currentLang === 'fr' ? 'décaféiné' : 'decaf';
    }
    return '';
  }

  function getDripBeanCaptionSuffix(selectedBases = [], path = '') {
    if (!(selectedBases.length === 1 && selectedBases[0] === 'drip')) return '';
    if (!/\/filter\.png$/.test(path)) return '';
    if (coffeeBuildState.dripBean === 'feature') {
      return currentLang === 'fr' ? ' avec grains vedette' : ' with feature bean';
    }
    return currentLang === 'fr' ? ' avec Night Hawk' : ' with Night Hawk';
  }

  function getCoffeeFoamCaptionSuffix(path) {
    const foamProfile = getCoffeeFoamProfile(path);
    if (!foamProfile || coffeeBuildState.foamIndex === foamProfile.defaultIndex) return '';
    if (coffeeBuildState.foamIndex === 0) {
      return currentLang === 'fr' ? ' avec mousse flat white' : ' with flat white foam';
    }
    if (coffeeBuildState.foamIndex === 1) {
      return currentLang === 'fr' ? ' avec mousse latté' : ' with latté foam';
    }
    if (coffeeBuildState.foamIndex === 2) {
      return currentLang === 'fr' ? ' avec mousse cappuccino' : ' with cappuccino foam';
    }
    return '';
  }

  function splitCaptionService(text) {
    if (currentLang === 'fr') {
      if (text.endsWith(' sur place')) {
        return { stem: text.slice(0, -' sur place'.length), service: ' pour ici' };
      }
      if (text.endsWith(' à emporter')) {
        return { stem: text.slice(0, -' à emporter'.length), service: ' à emporter' };
      }
      return { stem: text, service: '' };
    }
    if (text.endsWith(' for here')) {
      return { stem: text.slice(0, -' for here'.length), service: ' for here' };
    }
    if (text.endsWith(' to go')) {
      return { stem: text.slice(0, -' to go'.length), service: ' to go' };
    }
    return { stem: text, service: '' };
  }

  function getSelectedMilkTypeCaption() {
    switch (coffeeBuildState.milkType) {
      case 'soy':
        return currentLang === 'fr' ? { en: '', fr: 'lait de soya' } : { en: 'soy', fr: '' };
      case 'oat':
        return currentLang === 'fr' ? { en: '', fr: "lait davoine" } : { en: 'oat', fr: '' };
      case 'macadamia':
        return currentLang === 'fr' ? { en: '', fr: 'lait de macadame' } : { en: 'macadamia', fr: '' };
      case 'skim':
        return currentLang === 'fr' ? { en: '', fr: 'lait écrémé' } : { en: 'skim', fr: '' };
      case 'lactose-free':
        return currentLang === 'fr' ? { en: '', fr: 'lait sans lactose' } : { en: 'lactose free', fr: '' };
      default:
        return null;
    }
  }

  function formatCoffeeCaption(text, selectedBases = [], path = '', extraSuffix = '') {
    const { stem, service } = splitCaptionService(text);
    const isTeaDrink = selectedBases.includes('tea') && /\/(?:chai|matcha|ging|london|serenitea|dirty)\.png$/.test(path);
    const flavor = coffeeBuildState.flavor;
    const milkType = getSelectedMilkTypeCaption();
    const beanLead = getCoffeeBeanLeadModifier(selectedBases);
    const withUnsweetened = isTeaDrink && !flavor;

    if (currentLang === 'fr') {
      let baseText = stem;
      if (/^Glacé /i.test(baseText)) {
        baseText = `${baseText.slice(6)} glacé`;
      }
      if (beanLead) {
        baseText += ` ${beanLead}`;
      }
      if (withUnsweetened) {
        baseText += ' non sucré';
      }
      if (flavor) {
        baseText += flavor === 'maple' ? " à l'érable" : ' à la vanille';
      }
      if (milkType?.fr) {
        baseText += flavor ? ` et au ${milkType.fr}` : ` au ${milkType.fr}`;
      }
      return `${baseText}${extraSuffix}${service}`;
    }

    const prefixMatch = stem.match(/^(Small iced |Medium iced |Large iced |Iced |Small |Medium |Large )/i);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    const remainder = prefix ? stem.slice(prefix.length) : stem;
    const leadParts = [];
    if (beanLead) {
      leadParts.push(beanLead);
    }
    if (withUnsweetened) {
      leadParts.push('Unsweetened');
    }
    if (milkType?.en) {
      leadParts.push(milkType.en);
    }
    if (flavor) {
      leadParts.push(flavor === 'maple' ? 'maple' : 'vanilla');
    }
    const assembledStem = leadParts.length
      ? `${prefix}${leadParts.join(' ')} ${remainder.charAt(0).toLowerCase()}${remainder.slice(1)}`
      : stem;
    return `${assembledStem}${extraSuffix}${service}`;
  }

  function setCoffeeBuildCaptionText(text) {
    if (!coffeeBuildCaption) return;
    const safeText = String(text || '').trim();
    if (!safeText) {
      coffeeBuildCaption.textContent = '';
      return;
    }
    if (safeText === getCoffeeBuildLabel('coffeeBuildStart')) {
      coffeeBuildCaption.textContent = safeText;
      return;
    }
    coffeeBuildCaption.textContent = currentLang === 'fr'
      ? `« ${safeText} »`
      : `"${safeText}"`;
  }

  function updateCoffeeBuildCaption() {
    if (!coffeeBuildCaption) return;
    const imagePath = coffeeBuildImage?.dataset.imagePath || '';
    const selectedBases = Array.isArray(coffeeBuildState.base) ? coffeeBuildState.base : [];
    if (isEspressoOnlySelection(selectedBases) && coffeeBuildState.waterIndex > 0) {
      setCoffeeBuildCaptionText(formatCoffeeCaption(getEspressoWaterCaption(), selectedBases, imagePath));
      return;
    }
    const imageCaption = COFFEE_BUILD_IMAGE_CAPTIONS[imagePath];
    if (imageCaption) {
      const baseCaption = imageCaption[currentLang] || imageCaption.en;
      const extraSuffix = `${getDripBeanCaptionSuffix(selectedBases, imagePath)}${getCoffeeBeanCaptionSuffix(imagePath, selectedBases)}${getCoffeeFoamCaptionSuffix(imagePath)}`;
      setCoffeeBuildCaptionText(formatCoffeeCaption(baseCaption, selectedBases, imagePath, extraSuffix));
      return;
    }
    const { base, service, temperature, steamedMilk } = coffeeBuildState;
    if (!base && !service && !temperature) {
      setCoffeeBuildCaptionText(getCoffeeBuildLabel('coffeeBuildStart'));
      return;
    }
    if (steamedMilk) {
      const steamedLabel = getCoffeeBuildLabel('coffeeBebeccino');
      if (service === 'togo') {
        setCoffeeBuildCaptionText(currentLang === 'fr' ? `${steamedLabel} à emporter` : `${steamedLabel} to go`);
      } else {
        setCoffeeBuildCaptionText(steamedLabel);
      }
      return;
    }
    if (!base) {
      setCoffeeBuildCaptionText(getCoffeeBuildLabel('coffeeBuildStart'));
      return;
    }
    const baseKeyByValue = {
      espresso: 'coffeeBaseEspresso',
      tea: 'coffeeBaseTea',
      drip: 'coffeeBaseDrip',
      chocolate: 'coffeeBaseChocolate'
    };
    const orderedBases = selectedBases
      .slice()
      .sort((left, right) => {
        const order = ['espresso', 'tea', 'chocolate', 'drip'];
        return order.indexOf(left) - order.indexOf(right);
      });
    const baseLabel = orderedBases.map(item => getCoffeeBuildLabel(baseKeyByValue[item])).join(' + ');
    if (!service) {
      setCoffeeBuildCaptionText(`${baseLabel} • ${getCoffeeBuildLabel('coffeeBuildChooseService')}`);
      return;
    }
    if (!temperature) {
      const serviceLabel = service === 'stay' ? getCoffeeBuildLabel('coffeeForHere') : getCoffeeBuildLabel('coffeeToGo');
      setCoffeeBuildCaptionText(`${baseLabel} • ${serviceLabel} • ${getCoffeeBuildLabel('coffeeBuildChooseTemperature')}`);
      return;
    }
    const modifiers = [];
    if (service === 'togo') {
      modifiers.push(getCoffeeBuildLabel('coffeeToGo'));
    }
    if (temperature === 'iced') {
      modifiers.push(getCoffeeBuildLabel('coffeeIced'));
    }
    const beanSuffix = getCoffeeBeanCaptionSuffix(imagePath, selectedBases);
    if (isEspressoOnlySelection(selectedBases)) {
      const beanLead = getCoffeeBeanLeadModifier(selectedBases);
      const serviceText = service === 'togo'
        ? (currentLang === 'fr' ? ' pour emporter' : ' to go')
        : (currentLang === 'fr' ? ' pour ici' : ' for here')
      ;
      const temperatureText = temperature === 'iced'
        ? (currentLang === 'fr' ? ' glacé' : 'Iced ')
        : '';
      if (currentLang === 'fr') {
        setCoffeeBuildCaptionText(`${beanLead ? `${beanLead} ` : ''}${baseLabel}${temperatureText}${serviceText}${beanSuffix}`);
      } else {
        const englishServiceText = service === 'togo'
          ? ' to go'
        : '';
        const englishTempText = temperature === 'iced' ? 'Iced ' : '';
        setCoffeeBuildCaptionText(`${englishTempText}${beanLead ? `${beanLead} ` : ''}${baseLabel}${englishServiceText}${beanSuffix}`);
      }
      return;
    }
    setCoffeeBuildCaptionText(`${modifiers.length ? `${baseLabel} • ${modifiers.join(' • ')}` : baseLabel}${beanSuffix}`);
  }

  function setCoffeeBuildOptionState(button, active, disabled = false) {
    if (!button) return;
    button.classList.toggle('is-active', active);
    button.classList.toggle('is-disabled', disabled);
    button.disabled = false;
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    button.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  }

  function setCoffeeBuildUnavailableReason(button, reasonEn = '', reasonFr = '') {
    if (!button) return;
    if (!reasonEn && !reasonFr) {
      delete button.dataset.unavailableReasonEn;
      delete button.dataset.unavailableReasonFr;
      return;
    }
    button.dataset.unavailableReasonEn = reasonEn || '';
    button.dataset.unavailableReasonFr = reasonFr || reasonEn || '';
  }

  function setCoffeeBuildPillSwitchState(container, activeIndex, disabled = false) {
    if (!container) return;
    container.dataset.activeIndex = String(activeIndex);
    container.classList.toggle('is-disabled', disabled);
    container.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  }

  function getCoffeeBuildBaseDisabledState(selectedBases) {
    const disabled = {
      espresso: false,
      tea: false,
      drip: false,
      chocolate: false
    };

    if (!selectedBases.length) {
      return disabled;
    }

    if (selectedBases.includes('drip')) {
      disabled.espresso = true;
      disabled.tea = true;
      disabled.chocolate = true;
      return disabled;
    }

    if (selectedBases.includes('espresso') && selectedBases.includes('tea')) {
      disabled.drip = true;
      disabled.chocolate = true;
      return disabled;
    }

    if (selectedBases.includes('espresso') && selectedBases.includes('chocolate')) {
      disabled.drip = true;
      disabled.tea = true;
      return disabled;
    }

    if (selectedBases.includes('espresso')) {
      disabled.drip = true;
      return disabled;
    }

    if (selectedBases.includes('tea')) {
      disabled.drip = true;
      disabled.chocolate = true;
      if (!selectedBases.includes('espresso') && coffeeBuildState.teaFlavor && coffeeBuildState.teaFlavor !== 'chai') {
        disabled.espresso = true;
      }
      return disabled;
    }

    if (selectedBases.includes('chocolate')) {
      disabled.drip = true;
      disabled.tea = true;
      return disabled;
    }

    return disabled;
  }

  function isIcedTeaFlavorAvailable(flavor) {
    return ['chai', 'matcha', 'ginger-turmeric'].includes(flavor);
  }

  function isDirtyTeaSelection(selectedBases) {
    return selectedBases.length === 2 && selectedBases.includes('tea') && selectedBases.includes('espresso');
  }

  function getEspressoWaterImageSrc(folder) {
    if (!folder || coffeeBuildState.waterIndex <= 0) return null;
    if (coffeeBuildState.temperature === 'iced') {
      const icedWaterMap = {
        1: 's-americano.png',
        2: 'l-americano.png'
      };
      return icedWaterMap[coffeeBuildState.waterIndex] ? `${folder}/${icedWaterMap[coffeeBuildState.waterIndex]}` : null;
    }
    if (coffeeBuildState.service === 'stay') {
      if (coffeeBuildState.steamedMilk) {
        const stayMistoMap = {
          1: 'long-misto.png',
          2: 'americao-misto.png'
        };
        return stayMistoMap[coffeeBuildState.waterIndex] ? `${folder}/${stayMistoMap[coffeeBuildState.waterIndex]}` : null;
      }
      const stayWaterMap = {
        1: 'long.png',
        2: 'americano.png'
      };
      return stayWaterMap[coffeeBuildState.waterIndex] ? `${folder}/${stayWaterMap[coffeeBuildState.waterIndex]}` : null;
    }
    if (coffeeBuildState.steamedMilk) {
      const togoMistoMap = {
        1: 's-americano-misto.png',
        2: 's-americano-misto.png',
        3: 'm-americano-misto.png',
        4: 'l-americano-misto.png'
      };
      return togoMistoMap[coffeeBuildState.waterIndex] ? `${folder}/${togoMistoMap[coffeeBuildState.waterIndex]}` : null;
    }
    const togoWaterMap = {
      1: 'long.png',
      2: 's-americano.png',
      3: 'm-americano.png',
      4: 'l-americano.png'
    };
    return togoWaterMap[coffeeBuildState.waterIndex] ? `${folder}/${togoWaterMap[coffeeBuildState.waterIndex]}` : null;
  }

  function getEspressoWaterCaption() {
    if (coffeeBuildState.waterIndex <= 0) return '';
    if (coffeeBuildState.temperature === 'iced') {
      const icedWaterCaptions = {
        1: currentLang === 'fr' ? 'Petit americano glacé sur place' : 'Small iced americano for here',
        2: currentLang === 'fr' ? 'Grand americano glacé sur place' : 'Large iced americano for here'
      };
      const icedTogoWaterCaptions = {
        1: currentLang === 'fr' ? 'Petit americano glacé à emporter' : 'Small iced americano to go',
        2: currentLang === 'fr' ? 'Grand americano glacé à emporter' : 'Large iced americano to go'
      };
      return (coffeeBuildState.service === 'togo' ? icedTogoWaterCaptions : icedWaterCaptions)[coffeeBuildState.waterIndex] || '';
    }
    if (coffeeBuildState.service === 'stay') {
      if (coffeeBuildState.steamedMilk) {
        return currentLang === 'fr'
          ? (coffeeBuildState.waterIndex === 1 ? 'Long black misto sur place' : 'Americano misto sur place')
          : (coffeeBuildState.waterIndex === 1 ? 'Long black misto for here' : 'Americano misto for here');
      }
      return currentLang === 'fr'
        ? (coffeeBuildState.waterIndex === 1 ? 'Long black sur place' : 'Americano sur place')
        : (coffeeBuildState.waterIndex === 1 ? 'Long black for here' : 'Americano for here');
    }
    if (coffeeBuildState.steamedMilk) {
      const togoMistoCaptions = {
        1: currentLang === 'fr' ? 'Long black misto à emporter' : 'Long black misto to go',
        2: currentLang === 'fr' ? 'Petit americano misto à emporter' : 'Small americano misto to go',
        3: currentLang === 'fr' ? 'Moyen americano misto à emporter' : 'Medium americano misto to go',
        4: currentLang === 'fr' ? 'Grand americano misto à emporter' : 'Large americano misto to go'
      };
      return togoMistoCaptions[coffeeBuildState.waterIndex] || '';
    }
    const togoWaterCaptions = {
      1: currentLang === 'fr' ? 'Long black à emporter' : 'Long black to go',
      2: currentLang === 'fr' ? 'Petit americano à emporter' : 'Small americano to go',
      3: currentLang === 'fr' ? 'Moyen americano à emporter' : 'Medium americano to go',
      4: currentLang === 'fr' ? 'Grand americano à emporter' : 'Large americano to go'
    };
    return togoWaterCaptions[coffeeBuildState.waterIndex] || '';
  }

  function getCoffeeBuildImageSrc(selectedBases, folder) {
    const espressoWaterMode = selectedBases.length === 1 && selectedBases[0] === 'espresso' && coffeeBuildState.waterIndex > 0;
    if (coffeeBuildState.steamedMilk && !espressoWaterMode) {
      if (selectedBases.length === 1 && selectedBases[0] === 'drip') {
        return coffeeBuildState.service === 'togo'
          ? 'Assets/menus/coffees/togo/filter-misto.png'
          : 'Assets/menus/coffees/stay/filter-misto.png';
      }
      return coffeeBuildState.service === 'togo'
        ? 'Assets/menus/coffees/togo/bebe.png'
        : 'Assets/menus/coffees/stay/bebe.png';
    }
    if (!folder || !selectedBases.length) return COFFEE_BUILD_PLACEHOLDER;
    if (selectedBases.length === 1 && selectedBases[0] === 'drip') {
      return `${folder}/filter.png`;
    }
    if (isDirtyTeaSelection(selectedBases)) {
      return `${folder}/dirty.png`;
    }
    if (selectedBases.length === 1 && selectedBases[0] === 'espresso') {
      const waterImage = getEspressoWaterImageSrc(folder);
      if (waterImage) {
        return waterImage;
      }
    }
    if (selectedBases.includes('tea') && coffeeBuildState.teaFlavor) {
      const teaFlavorMap = {
        chai: {
          'Assets/menus/coffees/stay': 'chai.png',
          'Assets/menus/coffees/togo': 'chai.png',
          'Assets/menus/coffees/iced-stay': 'chai.png',
          'Assets/menus/coffees/iced-togo': 'chai.png'
        },
        matcha: {
          'Assets/menus/coffees/stay': 'matcha.png',
          'Assets/menus/coffees/togo': 'matcha.png',
          'Assets/menus/coffees/iced-stay': 'matcha.png',
          'Assets/menus/coffees/iced-togo': 'matcha.png'
        },
        'ginger-turmeric': {
          'Assets/menus/coffees/stay': 'ging.png',
          'Assets/menus/coffees/togo': 'ging.png',
          'Assets/menus/coffees/iced-stay': 'ging.png',
          'Assets/menus/coffees/iced-togo': 'ging.png'
        },
        'earl-grey': {
          'Assets/menus/coffees/stay': 'london.png',
          'Assets/menus/coffees/togo': 'london.png'
        },
        serenitea: {
          'Assets/menus/coffees/stay': 'serenitea.png',
          'Assets/menus/coffees/togo': 'serenitea.png'
        }
      };
      const teaFile = teaFlavorMap[coffeeBuildState.teaFlavor]?.[folder];
      if (teaFile) {
        return `${folder}/${teaFile}`;
      }
    }
    if (isEspressoChocolateSelection(selectedBases) && coffeeBuildState.milkIndex > 0) {
      const mochaMilkMap = {
        'Assets/menus/coffees/stay': {
          1: 's-mocha.png',
          2: 'm-mocha.png',
          3: 'l-mocha.png'
        },
        'Assets/menus/coffees/togo': {
          1: 's-mocha.png',
          2: 'm-mocha.png',
          3: 'l-mocha.png'
        },
        'Assets/menus/coffees/iced-stay': {
          1: 's-mocha.png',
          2: 'l-mocha.png'
        },
        'Assets/menus/coffees/iced-togo': {
          1: 's-mocha.png',
          2: 'l-mocha.png'
        }
      };
      const mochaFile = mochaMilkMap[folder]?.[coffeeBuildState.milkIndex];
      if (mochaFile) {
        return `${folder}/${mochaFile}`;
      }
    }
    if (selectedBases.length === 1 && selectedBases[0] === 'chocolate' && coffeeBuildState.milkIndex > 0) {
      const chocolateMilkMap = {
        'Assets/menus/coffees/stay': {
          1: 's-choc.png',
          2: 'm-choc.png',
          3: 'l-choc.png'
        },
        'Assets/menus/coffees/togo': {
          1: 's-choc.png',
          2: 'm-choc.png',
          3: 'l-choc.png'
        },
        'Assets/menus/coffees/iced-stay': {
          1: 's-choc.png',
          2: 'l-choc.png'
        },
        'Assets/menus/coffees/iced-togo': {
          1: 's-choc.png',
          2: 'l-choc.png'
        }
      };
      const chocolateFile = chocolateMilkMap[folder]?.[coffeeBuildState.milkIndex];
      if (chocolateFile) {
        return `${folder}/${chocolateFile}`;
      }
    }
    if (selectedBases.length === 1 && selectedBases[0] === 'espresso') {
      if (folder === 'Assets/menus/coffees/iced-stay' && coffeeBuildState.milkIndex > 0) {
        const icedStayMilkMap = {
          1: 'cort.png',
          2: 's-latte.png',
          3: 'l-latte.png'
        };
        const icedMilkFile = icedStayMilkMap[coffeeBuildState.milkIndex];
        if (icedMilkFile) {
          return `${folder}/${icedMilkFile}`;
        }
      }
      if (folder === 'Assets/menus/coffees/iced-togo' && coffeeBuildState.milkIndex > 0) {
        const icedToGoMilkMap = {
          1: 'cort.png',
          2: 's-latte.png',
          3: 'l-latte.png'
        };
        const icedMilkFile = icedToGoMilkMap[coffeeBuildState.milkIndex];
        if (icedMilkFile) {
          return `${folder}/${icedMilkFile}`;
        }
      }
      if (coffeeBuildState.milkIndex > 0) {
        const espressoMilkMap = {
          'Assets/menus/coffees/stay': {
            1: 'macc.png',
            2: 'cortado.png',
            3: 'flat.png',
            4: 'capp.png',
            5: 's-latte.png',
            6: 'm-latte.png',
            7: 'l-latte.png'
          },
          'Assets/menus/coffees/togo': {
            1: 'macc.png',
            2: 'cort.png',
            3: 'flat.png',
            4: 'capp.png',
            5: 's-latte.png',
            6: 'm-latte.png',
            7: 'l-latte.png'
          }
        };
        const milkFile = espressoMilkMap[folder]?.[coffeeBuildState.milkIndex];
        if (milkFile) {
          return `${folder}/${milkFile}`;
        }
      }
      return `${folder}/spro.png`;
    }
    return COFFEE_BUILD_PLACEHOLDER;
  }

  function isEspressoOnlySelection(selectedBases) {
    return selectedBases.length === 1 && selectedBases[0] === 'espresso';
  }

  function isChocolateMilkSelection(selectedBases) {
    if (!selectedBases.length) return false;
    if (selectedBases.length === 1 && selectedBases[0] === 'chocolate') return true;
    return selectedBases.length === 2 && selectedBases.includes('espresso') && selectedBases.includes('chocolate');
  }

  function isEspressoChocolateSelection(selectedBases) {
    return selectedBases.length === 2 && selectedBases.includes('espresso') && selectedBases.includes('chocolate');
  }

  function isIcedEspressoSelection(selectedBases) {
    return (
      isEspressoOnlySelection(selectedBases) &&
      coffeeBuildState.temperature === 'iced'
    );
  }

  function updateCoffeeBuildPreview() {
    let selectedBases = Array.isArray(coffeeBuildState.base) ? coffeeBuildState.base : [];
    const previousImageSrc = coffeeBuildImage?.dataset.imagePath || '';
    if (selectedBases.includes('tea') && coffeeBuildState.steamedMilk) {
      coffeeBuildState.steamedMilk = false;
    }
    if (isChocolateMilkSelection(selectedBases) && coffeeBuildState.steamedMilk) {
      coffeeBuildState.steamedMilk = false;
    }
    if (coffeeBuildState.steamedMilk && selectedBases.some(base => !['espresso', 'drip'].includes(base))) {
      coffeeBuildState.base = selectedBases.filter(base => ['espresso', 'drip'].includes(base));
      if (!coffeeBuildState.base.length) {
        coffeeBuildState.base = null;
      }
      selectedBases = Array.isArray(coffeeBuildState.base) ? coffeeBuildState.base : [];
    }
    if (selectedBases.includes('tea') && coffeeBuildState.temperature === 'iced' && coffeeBuildState.teaFlavor && !isIcedTeaFlavorAvailable(coffeeBuildState.teaFlavor)) {
      coffeeBuildState.teaFlavor = null;
    }
    if (isDirtyTeaSelection(selectedBases) && coffeeBuildState.teaFlavor !== 'chai') {
      coffeeBuildState.teaFlavor = 'chai';
    }
    if (!selectedBases.length) {
      coffeeBuildState.flavor = null;
      coffeeBuildState.flavorCustomized = false;
    } else if (selectedBases.includes('tea') && coffeeBuildState.teaFlavor === 'earl-grey' && !coffeeBuildState.flavorCustomized) {
      coffeeBuildState.flavor = 'vanilla';
    } else if (selectedBases.includes('tea') && coffeeBuildState.teaFlavor !== 'earl-grey' && !coffeeBuildState.flavorCustomized) {
      coffeeBuildState.flavor = null;
    }
    if (isChocolateMilkSelection(selectedBases) && coffeeBuildState.milkIndex < 1) {
      coffeeBuildState.milkIndex = 1;
    }
    const teaSelected = selectedBases.includes('tea');
    const teaIcedUnavailable = teaSelected && ['earl-grey', 'serenitea'].includes(coffeeBuildState.teaFlavor);
    const icedUnavailable = selectedBases.includes('drip') || coffeeBuildState.steamedMilk || teaIcedUnavailable;
    if (icedUnavailable && coffeeBuildState.temperature === 'iced') {
      coffeeBuildState.temperature = 'hot';
    }
    const folder = getCoffeeBuildFolder();
    const espressoOnly = isEspressoOnlySelection(selectedBases);
    const espressoSelected = selectedBases.includes('espresso');
    const chocolateMilkMode = isChocolateMilkSelection(selectedBases);
    const espressoChocolate = isEspressoChocolateSelection(selectedBases);
    const dirtyTeaMode = isDirtyTeaSelection(selectedBases);
    const icedEspresso = isIcedEspressoSelection(selectedBases);
    const isIcedSelection = coffeeBuildState.temperature === 'iced';
    const icedChocolate = chocolateMilkMode && isIcedSelection;
    const waterValues = icedEspresso
      ? COFFEE_WATER_VALUES_ICE
      : (coffeeBuildState.service === 'stay' ? COFFEE_WATER_VALUES_STAY : COFFEE_WATER_VALUES_TOGO);
    const hasQualifyingBaseForTemperature = selectedBases.some(base => base !== 'drip');
    const imageSrc = getCoffeeBuildImageSrc(selectedBases, folder);
    if (espressoSelected && !espressoOnly && (coffeeBuildState.bean === 'feature' || !coffeeBuildState.bean)) {
      coffeeBuildState.bean = 'palmier';
    }
    const nextBeanProfile = getCoffeeBeanProfile(imageSrc, selectedBases);
    const previousBeanProfile = getCoffeeBeanProfile(previousImageSrc, selectedBases);
    if (nextBeanProfile && !coffeeBuildState.beanCustomized) {
      coffeeBuildState.bean = nextBeanProfile.defaultBean;
    }
    if (!nextBeanProfile && previousBeanProfile) {
      coffeeBuildState.beanCustomized = false;
    }
    const nextFoamProfile = getCoffeeFoamProfile(imageSrc);
    const previousFoamProfile = getCoffeeFoamProfile(previousImageSrc);
    if (nextFoamProfile && !coffeeBuildState.foamCustomized) {
      coffeeBuildState.foamIndex = nextFoamProfile.defaultIndex;
    }
    if (!nextFoamProfile && previousFoamProfile) {
      coffeeBuildState.foamCustomized = false;
    }
    if (coffeeBuildImage) {
      coffeeBuildImage.src = imageSrc;
      coffeeBuildImage.dataset.imagePath = imageSrc;
      coffeeBuildImage.dataset.folder = folder || '';
    }
    const disabledBases = getCoffeeBuildBaseDisabledState(selectedBases);
    setCoffeeBuildOptionState(coffeeBaseEspressoBtn, selectedBases.includes('espresso'), disabledBases.espresso && !selectedBases.includes('espresso'));
    setCoffeeBuildOptionState(coffeeBaseTeaBtn, selectedBases.includes('tea'), coffeeBuildState.steamedMilk || (disabledBases.tea && !selectedBases.includes('tea')));
    setCoffeeBuildOptionState(coffeeBaseDripBtn, selectedBases.includes('drip'), disabledBases.drip && !selectedBases.includes('drip'));
    setCoffeeBuildOptionState(coffeeBaseChocolateBtn, selectedBases.includes('chocolate'), coffeeBuildState.steamedMilk || (disabledBases.chocolate && !selectedBases.includes('chocolate')));
    const steamedMilkBaseReasonEn = 'Steamed milk only works with espresso or filter coffee.';
    const steamedMilkBaseReasonFr = "Le lait vapeur fonctionne seulement avec l'espresso ou le café filtre.";
    const dripComboReasonEn = "Drip coffee can't be combined with other bases.";
    const dripComboReasonFr = "Le café filtre ne peut pas être combiné avec d'autres bases.";
    setCoffeeBuildUnavailableReason(
      coffeeBaseEspressoBtn,
      (disabledBases.espresso && !selectedBases.includes('espresso'))
        ? (teaSelected && coffeeBuildState.teaFlavor && coffeeBuildState.teaFlavor !== 'chai'
          ? 'Espresso can only be added with chai.'
          : '')
        : '',
      (disabledBases.espresso && !selectedBases.includes('espresso'))
        ? (teaSelected && coffeeBuildState.teaFlavor && coffeeBuildState.teaFlavor !== 'chai'
          ? "L'espresso peut seulement être ajouté avec le chai."
          : '')
        : ''
    );
    setCoffeeBuildUnavailableReason(
      coffeeBaseTeaBtn,
      coffeeBuildState.steamedMilk
        ? steamedMilkBaseReasonEn
        : ((disabledBases.tea && !selectedBases.includes('tea')) ? "Tea latté can't be combined with your current selection." : ''),
      coffeeBuildState.steamedMilk
        ? steamedMilkBaseReasonFr
        : ((disabledBases.tea && !selectedBases.includes('tea')) ? "Le thé latté ne peut pas être combiné avec votre sélection actuelle." : '')
    );
    setCoffeeBuildUnavailableReason(
      coffeeBaseDripBtn,
      (disabledBases.drip && !selectedBases.includes('drip')) ? dripComboReasonEn : '',
      (disabledBases.drip && !selectedBases.includes('drip')) ? dripComboReasonFr : ''
    );
    setCoffeeBuildUnavailableReason(
      coffeeBaseChocolateBtn,
      coffeeBuildState.steamedMilk
        ? steamedMilkBaseReasonEn
        : ((disabledBases.chocolate && !selectedBases.includes('chocolate')) ? "Chocolate can't be combined with your current selection." : ''),
      coffeeBuildState.steamedMilk
        ? steamedMilkBaseReasonFr
        : ((disabledBases.chocolate && !selectedBases.includes('chocolate')) ? 'Le chocolat ne peut pas être combiné avec votre sélection actuelle.' : '')
    );
    if (coffeeTeaFlavorGroup) {
      coffeeTeaFlavorGroup.hidden = !teaSelected;
    }
    const icedTeaRestriction = teaSelected && isIcedSelection;
    setCoffeeBuildOptionState(coffeeTeaFlavorChaiBtn, coffeeBuildState.teaFlavor === 'chai');
    setCoffeeBuildOptionState(coffeeTeaFlavorMatchaBtn, coffeeBuildState.teaFlavor === 'matcha', dirtyTeaMode);
    setCoffeeBuildOptionState(coffeeTeaFlavorGingerBtn, coffeeBuildState.teaFlavor === 'ginger-turmeric', dirtyTeaMode);
    setCoffeeBuildOptionState(coffeeTeaFlavorEarlGreyBtn, coffeeBuildState.teaFlavor === 'earl-grey', icedTeaRestriction || dirtyTeaMode);
    setCoffeeBuildOptionState(coffeeTeaFlavorSereniteaBtn, coffeeBuildState.teaFlavor === 'serenitea', icedTeaRestriction || dirtyTeaMode);
    const dirtyTeaReasonEn = 'You can only select chai if espresso is selected.';
    const dirtyTeaReasonFr = "Vous pouvez seulement choisir le chai si l'espresso est sélectionné.";
    const icedBagTeaReasonEn = "We only have this tea as a bag, so it can't be made iced well.";
    const icedBagTeaReasonFr = "Nous avons seulement ce thé en sachet, donc il ne se prépare pas bien en glacé.";
    setCoffeeBuildUnavailableReason(coffeeTeaFlavorChaiBtn);
    setCoffeeBuildUnavailableReason(coffeeTeaFlavorMatchaBtn, dirtyTeaMode ? dirtyTeaReasonEn : '', dirtyTeaMode ? dirtyTeaReasonFr : '');
    setCoffeeBuildUnavailableReason(coffeeTeaFlavorGingerBtn, dirtyTeaMode ? dirtyTeaReasonEn : '', dirtyTeaMode ? dirtyTeaReasonFr : '');
    setCoffeeBuildUnavailableReason(
      coffeeTeaFlavorEarlGreyBtn,
      icedTeaRestriction ? icedBagTeaReasonEn : (dirtyTeaMode ? 'You can only select Earl Grey if espresso is not selected.' : ''),
      icedTeaRestriction ? icedBagTeaReasonFr : (dirtyTeaMode ? "Vous pouvez seulement choisir l'Earl Grey si l'espresso n'est pas sélectionné." : '')
    );
    setCoffeeBuildUnavailableReason(
      coffeeTeaFlavorSereniteaBtn,
      icedTeaRestriction ? icedBagTeaReasonEn : (dirtyTeaMode ? 'You can only select Serenitea if espresso is not selected.' : ''),
      icedTeaRestriction ? icedBagTeaReasonFr : (dirtyTeaMode ? "Vous pouvez seulement choisir le Serenitea si l'espresso n'est pas sélectionné." : '')
    );
    if (coffeeBeanGroup) {
      coffeeBeanGroup.hidden = !espressoSelected;
    }
    if (coffeeBeanFeatureBtn) {
      coffeeBeanFeatureBtn.hidden = !espressoOnly;
      coffeeBeanFeatureBtn.classList.toggle('is-hidden', !espressoOnly);
    }
    const coffeeBeanCardOptions = coffeeBeanPalmierBtn?.parentElement;
    if (coffeeBeanCardOptions) {
      coffeeBeanCardOptions.classList.toggle('coffee-build-bean-card-options-three', espressoOnly);
    }
    if (coffeeDripBeanGroup) {
      coffeeDripBeanGroup.hidden = !(selectedBases.length === 1 && selectedBases[0] === 'drip');
    }
    const showMilkType = selectedBases.length > 0
      && !(espressoOnly && coffeeBuildState.milkIndex === 0 && coffeeBuildState.waterIndex === 0 && !coffeeBuildState.steamedMilk);
    const milkTypeRequired = teaSelected || chocolateMilkMode || coffeeBuildState.steamedMilk || coffeeBuildState.milkIndex > 0;
    if (!showMilkType) {
      coffeeBuildState.milkType = null;
    } else if (!coffeeBuildState.milkType) {
      coffeeBuildState.milkType = milkTypeRequired ? 'henrietta' : null;
    }
    if (coffeeMilkTypeGroup) {
      coffeeMilkTypeGroup.hidden = !showMilkType;
    }
    if (coffeeFlavorGroup) {
      coffeeFlavorGroup.hidden = !selectedBases.length;
    }
    const featureBeanSelected = espressoOnly && coffeeBuildState.bean === 'feature';
    const palmierBeanSelected = coffeeBuildState.bean === 'palmier';
    const decafBeanSelected = coffeeBuildState.bean === 'decaf';
    const halfCafSelected = coffeeBuildState.bean === 'half-caf';
    setCoffeeBuildOptionState(
      coffeeBeanPalmierBtn,
      palmierBeanSelected || halfCafSelected,
      featureBeanSelected
    );
    setCoffeeBuildOptionState(
      coffeeBeanDecafBtn,
      decafBeanSelected || halfCafSelected,
      featureBeanSelected
    );
    setCoffeeBuildOptionState(
      coffeeBeanFeatureBtn,
      featureBeanSelected,
      !espressoOnly || palmierBeanSelected || decafBeanSelected || halfCafSelected
    );
    const beanConflictReasonEn = "Feature Espresso can't be combined with Palmier or Decaf.";
    const beanConflictReasonFr = "L'espresso vedette ne peut pas être combiné avec Palmier ou décaf.";
    setCoffeeBuildUnavailableReason(
      coffeeBeanPalmierBtn,
      featureBeanSelected ? beanConflictReasonEn : '',
      featureBeanSelected ? beanConflictReasonFr : ''
    );
    setCoffeeBuildUnavailableReason(
      coffeeBeanDecafBtn,
      featureBeanSelected ? beanConflictReasonEn : '',
      featureBeanSelected ? beanConflictReasonFr : ''
    );
    setCoffeeBuildUnavailableReason(
      coffeeBeanFeatureBtn,
      (!espressoOnly || palmierBeanSelected || decafBeanSelected || halfCafSelected) ? beanConflictReasonEn : '',
      (!espressoOnly || palmierBeanSelected || decafBeanSelected || halfCafSelected) ? beanConflictReasonFr : ''
    );
    setCoffeeBuildOptionState(coffeeDripBeanNightHawkBtn, coffeeBuildState.dripBean === 'night-hawk');
    setCoffeeBuildOptionState(coffeeDripBeanFeatureBtn, coffeeBuildState.dripBean === 'feature');
    setCoffeeBuildOptionState(coffeeMilkTypeHenriettaBtn, coffeeBuildState.milkType === 'henrietta');
    setCoffeeBuildOptionState(coffeeMilkTypeSoyBtn, coffeeBuildState.milkType === 'soy');
    setCoffeeBuildOptionState(coffeeMilkTypeOatBtn, coffeeBuildState.milkType === 'oat');
    setCoffeeBuildOptionState(coffeeMilkTypeMacadamiaBtn, coffeeBuildState.milkType === 'macadamia');
    setCoffeeBuildOptionState(coffeeMilkTypeSkimBtn, coffeeBuildState.milkType === 'skim');
    setCoffeeBuildOptionState(coffeeMilkTypeLactoseFreeBtn, coffeeBuildState.milkType === 'lactose-free');
    setCoffeeBuildOptionState(coffeeFlavorVanillaBtn, coffeeBuildState.flavor === 'vanilla');
    setCoffeeBuildOptionState(coffeeFlavorMapleBtn, coffeeBuildState.flavor === 'maple');
    setCoffeeBuildOptionState(coffeeForHereBtn, coffeeBuildState.service === 'stay');
    setCoffeeBuildOptionState(coffeeToGoBtn, coffeeBuildState.service === 'togo');
    setCoffeeBuildPillSwitchState(coffeeServiceSwitch, coffeeBuildState.service === 'togo' ? 1 : 0);
    const tempDisabled = !coffeeBuildState.service || coffeeBuildState.steamedMilk || !hasQualifyingBaseForTemperature;
    const tempUnavailable = tempDisabled || icedUnavailable;
    setCoffeeBuildOptionState(coffeeHotBtn, coffeeBuildState.temperature === 'hot', tempUnavailable);
    setCoffeeBuildOptionState(coffeeIcedBtn, coffeeBuildState.temperature === 'iced', tempUnavailable);
    setCoffeeBuildPillSwitchState(coffeeTempSwitch, coffeeBuildState.temperature === 'iced' ? 1 : 0, tempUnavailable);
    let tempReasonEn = '';
    let tempReasonFr = '';
    if (!coffeeBuildState.service || !hasQualifyingBaseForTemperature) {
      tempReasonEn = 'Choose a drink base before selecting temperature.';
      tempReasonFr = 'Choisissez une base de boisson avant de choisir la température.';
    } else if (selectedBases.includes('drip')) {
      tempReasonEn = "Filter coffee can't be made iced.";
      tempReasonFr = "Le café filtre ne peut pas être préparé glacé.";
    } else if (coffeeBuildState.steamedMilk) {
      tempReasonEn = "Steamed milk mode doesn't use the temperature option.";
      tempReasonFr = "Le mode lait vapeur n'utilise pas l'option de température.";
    } else if (teaIcedUnavailable) {
      tempReasonEn = icedBagTeaReasonEn;
      tempReasonFr = icedBagTeaReasonFr;
    }
    setCoffeeBuildUnavailableReason(coffeeHotBtn, tempUnavailable ? tempReasonEn : '', tempUnavailable ? tempReasonFr : '');
    setCoffeeBuildUnavailableReason(coffeeIcedBtn, tempUnavailable ? tempReasonEn : '', tempUnavailable ? tempReasonFr : '');
    setCoffeeBuildOptionState(coffeeSteamedMilkYesBtn, coffeeBuildState.steamedMilk === true);
    setCoffeeBuildOptionState(coffeeSteamedMilkNoBtn, coffeeBuildState.steamedMilk === false);
    setCoffeeBuildPillSwitchState(coffeeSteamedMilkSwitch, coffeeBuildState.steamedMilk ? 1 : 0);
    if (coffeeEspressoOnlyControls) {
      coffeeEspressoOnlyControls.hidden = !(espressoOnly || chocolateMilkMode);
    }
    if (chocolateMilkMode && coffeeBuildState.waterIndex > 0) {
      coffeeBuildState.waterIndex = 0;
    }
    if (isIcedSelection && !icedEspresso && coffeeBuildState.waterIndex > 0) {
      coffeeBuildState.waterIndex = 0;
    }
    if (coffeeBuildState.waterIndex > waterValues.length - 1) {
      coffeeBuildState.waterIndex = waterValues.length - 1;
    }
    const waterHasQuantity = coffeeBuildState.waterIndex > 0;
    if (waterHasQuantity && coffeeBuildState.milkIndex > 0) {
      coffeeBuildState.milkIndex = 0;
    }
    const steamedGroup = document.querySelector('.coffee-build-steamed-group');
    if (steamedGroup) {
      steamedGroup.hidden = (espressoOnly && !waterHasQuantity) || chocolateMilkMode || teaSelected;
    }
    if (coffeeMilkSlider) {
      coffeeMilkSlider.min = chocolateMilkMode ? '1' : '0';
      coffeeMilkSlider.max = icedChocolate ? '2' : (icedEspresso || chocolateMilkMode) ? '3' : '7';
      if (icedEspresso && coffeeBuildState.milkIndex > 3) {
        coffeeBuildState.milkIndex = 3;
      }
      if (chocolateMilkMode) {
        if (coffeeBuildState.milkIndex < 1) {
          coffeeBuildState.milkIndex = 1;
        }
        if (coffeeBuildState.milkIndex > (icedChocolate ? 2 : 3)) {
          coffeeBuildState.milkIndex = icedChocolate ? 2 : 3;
        }
      }
      coffeeMilkSlider.value = String(coffeeBuildState.milkIndex);
    }
    if (coffeeMilkSliderSteps) {
      coffeeMilkSliderSteps.classList.toggle('coffee-build-slider-steps-short', false);
      coffeeMilkSliderSteps.classList.toggle('coffee-build-slider-steps-quad', icedEspresso);
      coffeeMilkSliderSteps.classList.toggle('coffee-build-slider-steps-triplet', chocolateMilkMode && !icedChocolate);
      coffeeMilkSliderSteps.innerHTML = icedEspresso
        ? '<span>0</span><span>3</span><span>6</span><span>10</span>'
        : icedChocolate
        ? '<span>10</span><span>14</span>'
        : chocolateMilkMode
        ? espressoChocolate
          ? '<span>6</span><span>8</span><span>10</span>'
          : '<span>8</span><span>10</span><span>12</span>'
        : '<span>0</span><span>.5</span><span>3</span><span>3.5</span><span>5.25</span><span>6</span><span>8</span><span>10</span>';
    }
    if (coffeeMilkValue) {
      const milkValues = icedEspresso
        ? COFFEE_ESPRESSO_ICE_MILK_VALUES
        : icedChocolate
        ? ['', '10', '14']
        : chocolateMilkMode
        ? (espressoChocolate ? ['', '6', '8', '10'] : ['', '8', '10', '12'])
        : COFFEE_MILK_VALUES;
      coffeeMilkValue.textContent = milkValues[coffeeBuildState.milkIndex] || milkValues[0];
    }
    const milkHasQuantity = coffeeBuildState.milkIndex > 0;
    if (coffeeMilkSliderBlock) {
      coffeeMilkSliderBlock.hidden = waterHasQuantity;
    }
    if (coffeeWaterSliderBlock) {
      coffeeWaterSliderBlock.hidden = milkHasQuantity || (isIcedSelection && !icedEspresso) || chocolateMilkMode;
    }
    if (coffeeWaterGroupLabel) {
      coffeeWaterGroupLabel.textContent = getCoffeeBuildLabel(
        icedEspresso ? 'coffeeBuildChooseWaterQtyIced' : 'coffeeBuildChooseWaterQty'
      );
    }
    const coffeeWaterSliderSteps = coffeeWaterSliderBlock?.querySelector('.coffee-build-slider-steps');
    if (coffeeWaterSliderSteps) {
      const threeStopWaterMode = waterValues.length === 3;
      coffeeWaterSliderSteps.classList.toggle('coffee-build-slider-steps-short', !threeStopWaterMode);
      coffeeWaterSliderSteps.classList.toggle('coffee-build-slider-steps-triplet', threeStopWaterMode);
      coffeeWaterSliderSteps.innerHTML = icedEspresso
        ? '<span>0</span><span>8</span><span>12</span>'
        : threeStopWaterMode
        ? '<span>0</span><span>3</span><span>8</span>'
        : '<span>0</span><span>3</span><span>6</span><span>8</span><span>10</span>';
    }
    if (coffeeFoamSliderBlock) {
      coffeeFoamSliderBlock.hidden = !milkHasQuantity || icedEspresso || chocolateMilkMode;
    }
    if (coffeeWaterSlider) {
      coffeeWaterSlider.max = String(waterValues.length - 1);
      coffeeWaterSlider.value = String(coffeeBuildState.waterIndex);
    }
    if (coffeeWaterValue) {
      coffeeWaterValue.textContent = waterValues[coffeeBuildState.waterIndex] || waterValues[0];
    }
    if (coffeeFoamSlider) {
      coffeeFoamSlider.value = String(coffeeBuildState.foamIndex);
    }
    if (coffeeFoamValue) {
      coffeeFoamValue.textContent = getCoffeeBuildLabel(COFFEE_FOAM_VALUES[coffeeBuildState.foamIndex] || COFFEE_FOAM_VALUES[0]);
    }
    if (coffeeTempSwitch) {
      coffeeTempSwitch.classList.toggle('has-unavailable-option', tempUnavailable);
    }
    updateCoffeeBuildCaption();
  }

  function setCoffeeBuildChoice(type, value) {
    if (type === 'base') {
      const selectedBases = Array.isArray(coffeeBuildState.base) ? [...coffeeBuildState.base] : [];
      const hasValue = selectedBases.includes(value);

      if (hasValue) {
        coffeeBuildState.base = selectedBases.filter(item => item !== value);
        if (!coffeeBuildState.base.length) {
          coffeeBuildState.base = null;
        }
        updateCoffeeBuildPreview();
        return;
      }

      const nextBases = new Set(selectedBases);

      if (value === 'drip') {
        coffeeBuildState.base = ['drip'];
        updateCoffeeBuildPreview();
        return;
      }

      if (value === 'espresso') {
        nextBases.delete('drip');
        nextBases.add('espresso');
        if (nextBases.has('tea') && nextBases.has('chocolate')) {
          nextBases.delete('chocolate');
        }
        coffeeBuildState.base = Array.from(nextBases);
        if (coffeeBuildState.base.includes('tea')) {
          coffeeBuildState.teaFlavor = 'chai';
        }
        updateCoffeeBuildPreview();
        return;
      }

      if (value === 'tea' || value === 'chocolate') {
        nextBases.delete('drip');
        nextBases.add(value);
        if (nextBases.has('tea') && nextBases.has('chocolate')) {
          nextBases.delete(value === 'tea' ? 'chocolate' : 'tea');
        }
        if (nextBases.size > 1) {
          nextBases.add('espresso');
          for (const item of Array.from(nextBases)) {
            if (!['espresso', value].includes(item)) {
              nextBases.delete(item);
            }
          }
        }
        coffeeBuildState.base = Array.from(nextBases);
        if (value === 'tea' && coffeeBuildState.base.includes('espresso')) {
          coffeeBuildState.teaFlavor = 'chai';
        }
        updateCoffeeBuildPreview();
        return;
      }
    }
    if (type === 'bean') {
      if (value === 'feature') {
        coffeeBuildState.bean = coffeeBuildState.bean === 'feature' ? null : 'feature';
      } else if (value === 'palmier') {
        coffeeBuildState.bean = coffeeBuildState.bean === 'palmier'
          ? null
          : (coffeeBuildState.bean === 'decaf'
            ? 'half-caf'
            : (coffeeBuildState.bean === 'half-caf' ? 'decaf' : 'palmier'));
      } else if (value === 'decaf') {
        coffeeBuildState.bean = coffeeBuildState.bean === 'decaf'
          ? null
          : (coffeeBuildState.bean === 'palmier'
            ? 'half-caf'
            : (coffeeBuildState.bean === 'half-caf' ? 'palmier' : 'decaf'));
      }
      coffeeBuildState.beanCustomized = true;
    }
    if (type === 'dripBean') {
      coffeeBuildState.dripBean = value;
    }
    if (type === 'milkType') {
      coffeeBuildState.milkType = value;
    }
    if (type === 'flavor') {
      coffeeBuildState.flavor = coffeeBuildState.flavor === value ? null : value;
      coffeeBuildState.flavorCustomized = true;
    }
    if (type === 'teaFlavor') {
      coffeeBuildState.teaFlavor = coffeeBuildState.teaFlavor === value ? null : value;
      coffeeBuildState.flavorCustomized = false;
    }
    if (type === 'service') {
      coffeeBuildState.service = value;
    }
    if (type === 'temperature') {
      if (!coffeeBuildState.service) return;
      coffeeBuildState.temperature = value;
    }
    if (type === 'steamedMilk') {
      coffeeBuildState.steamedMilk = value;
    }
    if (type === 'milkIndex') {
      coffeeBuildState.milkIndex = value;
    }
    if (type === 'waterIndex') {
      coffeeBuildState.waterIndex = value;
    }
    if (type === 'foamIndex') {
      coffeeBuildState.foamIndex = value;
      coffeeBuildState.foamCustomized = true;
    }
    updateCoffeeBuildPreview();
  }

  function toggleCoffeeBuildChoice(type) {
    if (type === 'bean') {
      setCoffeeBuildChoice('bean', coffeeBuildState.bean === 'palmier' ? 'feature' : 'palmier');
      return;
    }
    if (type === 'dripBean') {
      setCoffeeBuildChoice('dripBean', coffeeBuildState.dripBean === 'night-hawk' ? 'feature' : 'night-hawk');
      return;
    }
    if (type === 'service') {
      setCoffeeBuildChoice('service', coffeeBuildState.service === 'stay' ? 'togo' : 'stay');
      return;
    }
    if (type === 'temperature') {
      if (!coffeeBuildState.service) return;
      setCoffeeBuildChoice('temperature', coffeeBuildState.temperature === 'hot' ? 'iced' : 'hot');
      return;
    }
    if (type === 'steamedMilk') {
      setCoffeeBuildChoice('steamedMilk', !coffeeBuildState.steamedMilk);
    }
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
    updateCoffeeBuildPreview();
    const selectedBases = Array.isArray(coffeeBuildState.base) ? coffeeBuildState.base : [];
    if (!selectedBases.length && !coffeeBuildState.steamedMilk) {
      setCoffeeBuildCaptionText(getCoffeeBuildLabel('coffeeBuildStart'));
    }
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
  let lastModalDismissTime = 0;
  let lastModalOpenTime = 0;

  function registerModalDismiss(event) {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    lastModalDismissTime = Date.now();
  }

  function registerModalOpen() {
    lastModalOpenTime = Date.now();
  }

  function getOpenModalType() {
    if (coffeeInfoModal && !coffeeInfoModal.hidden) return 'coffee-info';
    if (hoursModal && !hoursModal.hidden) return 'hours';
    if (locationModal && !locationModal.hidden) return 'location';
    return null;
  }

  function dismissOpenModal(event) {
    const openModalType = getOpenModalType();
    if (!openModalType) return false;
    if (Date.now() - lastModalOpenTime < TOUCH_HANDLER_DELAY) {
      event?.preventDefault?.();
      event?.stopPropagation?.();
      return true;
    }
    if (openModalType === 'coffee-info') {
      closeCoffeeInfoModal(event);
      return true;
    }
    if (openModalType === 'hours') {
      closeHoursModal(event);
      return true;
    }
    if (openModalType === 'location') {
      closeLocationModal(event);
      return true;
    }
    return false;
  }

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

    function isInteractionDisabled() {
      if (typeof element.disabled === 'boolean' && element.disabled) return true;
      if (element.getAttribute('aria-disabled') === 'true') return true;
      if (element.closest('[aria-disabled="true"]')) return true;
      return false;
    }

    element.addEventListener('click', (event) => {
      if (isInteractionDisabled()) return;
      if (Date.now() - lastModalDismissTime < TOUCH_HANDLER_DELAY) return;
      if (Date.now() - lastTouchTime < TOUCH_HANDLER_DELAY) return;
      handler(event);
    });

    element.addEventListener('touchstart', (event) => {
      if (isInteractionDisabled()) return;
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
      if (isInteractionDisabled()) {
        touchState = null;
        return;
      }
      if (event.touches && event.touches.length > 0) return;
      if (!touchState) return;
      const touch = getTouchById(event.changedTouches, touchState.id);
      if (!touch) return;
      const moved = touchState.moved;
      touchState = null;
      lastTouchTime = Date.now();
      if (Date.now() - lastModalDismissTime < TOUCH_HANDLER_DELAY) return;
      if (moved) return;
      handler(event);
    }, { passive: true });

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
  const coffeeBuildView = document.getElementById('coffeeBuildView');
  const coffeeBuildImage = document.getElementById('coffeeBuildImage');
  const coffeeBuildCaption = document.getElementById('coffeeBuildCaption');
  const coffeeBaseEspressoBtn = document.getElementById('coffeeBaseEspressoBtn');
  const coffeeBaseTeaBtn = document.getElementById('coffeeBaseTeaBtn');
  const coffeeBaseDripBtn = document.getElementById('coffeeBaseDripBtn');
  const coffeeBaseChocolateBtn = document.getElementById('coffeeBaseChocolateBtn');
  const coffeeTeaFlavorGroup = document.getElementById('coffeeTeaFlavorGroup');
  const coffeeTeaFlavorChaiBtn = document.getElementById('coffeeTeaFlavorChaiBtn');
  const coffeeTeaFlavorMatchaBtn = document.getElementById('coffeeTeaFlavorMatchaBtn');
  const coffeeTeaFlavorGingerBtn = document.getElementById('coffeeTeaFlavorGingerBtn');
  const coffeeTeaFlavorEarlGreyBtn = document.getElementById('coffeeTeaFlavorEarlGreyBtn');
  const coffeeTeaFlavorSereniteaBtn = document.getElementById('coffeeTeaFlavorSereniteaBtn');
  const coffeeBeanGroup = document.getElementById('coffeeBeanGroup');
  const coffeeBeanSwitch = document.getElementById('coffeeBeanSwitch');
  const coffeeBeanPalmierBtn = document.getElementById('coffeeBeanPalmierBtn');
  const coffeeBeanDecafBtn = document.getElementById('coffeeBeanDecafBtn');
  const coffeeBeanFeatureBtn = document.getElementById('coffeeBeanFeatureBtn');
  const coffeeDripBeanGroup = document.getElementById('coffeeDripBeanGroup');
  const coffeeDripBeanNightHawkBtn = document.getElementById('coffeeDripBeanNightHawkBtn');
  const coffeeDripBeanFeatureBtn = document.getElementById('coffeeDripBeanFeatureBtn');
  const coffeeServiceSwitch = document.getElementById('coffeeServiceSwitch');
  const coffeeTempSwitch = document.getElementById('coffeeTempSwitch');
  const coffeeMilkTypeGroup = document.getElementById('coffeeMilkTypeGroup');
  const coffeeMilkTypeHenriettaBtn = document.getElementById('coffeeMilkTypeHenriettaBtn');
  const coffeeMilkTypeSoyBtn = document.getElementById('coffeeMilkTypeSoyBtn');
  const coffeeMilkTypeOatBtn = document.getElementById('coffeeMilkTypeOatBtn');
  const coffeeMilkTypeMacadamiaBtn = document.getElementById('coffeeMilkTypeMacadamiaBtn');
  const coffeeMilkTypeSkimBtn = document.getElementById('coffeeMilkTypeSkimBtn');
  const coffeeMilkTypeLactoseFreeBtn = document.getElementById('coffeeMilkTypeLactoseFreeBtn');
  const coffeeFlavorGroup = document.getElementById('coffeeFlavorGroup');
  const coffeeFlavorVanillaBtn = document.getElementById('coffeeFlavorVanillaBtn');
  const coffeeFlavorMapleBtn = document.getElementById('coffeeFlavorMapleBtn');
  const coffeeSteamedMilkSwitch = document.getElementById('coffeeSteamedMilkSwitch');
  const coffeeForHereBtn = document.getElementById('coffeeForHereBtn');
  const coffeeToGoBtn = document.getElementById('coffeeToGoBtn');
  const coffeeHotBtn = document.getElementById('coffeeHotBtn');
  const coffeeIcedBtn = document.getElementById('coffeeIcedBtn');
  const coffeeSteamedMilkYesBtn = document.getElementById('coffeeSteamedMilkYesBtn');
  const coffeeSteamedMilkNoBtn = document.getElementById('coffeeSteamedMilkNoBtn');
  const coffeeEspressoOnlyControls = document.getElementById('coffeeEspressoOnlyControls');
  const coffeeMilkSliderBlock = document.getElementById('coffeeMilkSliderBlock');
  const coffeeMilkSlider = document.getElementById('coffeeMilkSlider');
  const coffeeMilkSliderSteps = document.getElementById('coffeeMilkSliderSteps');
  const coffeeMilkValue = document.getElementById('coffeeMilkValue');
  const coffeeWaterSliderBlock = document.getElementById('coffeeWaterSliderBlock');
  const coffeeWaterSlider = document.getElementById('coffeeWaterSlider');
  const coffeeWaterValue = document.getElementById('coffeeWaterValue');
  const coffeeWaterGroupLabel = document.getElementById('coffeeWaterGroupLabel');
  const coffeeFoamSliderBlock = document.getElementById('coffeeFoamSliderBlock');
  const coffeeFoamSlider = document.getElementById('coffeeFoamSlider');
  const coffeeFoamValue = document.getElementById('coffeeFoamValue');

  const foodBtn = document.getElementById('foodBtn');
  const teaBtn = document.getElementById('teaBtn');
  const coffeeBtn = document.getElementById('coffeeBtn');
  const cocktailsBtn = document.getElementById('cocktailsBtn');
  const shelfBtn = document.getElementById('shelfBtn');
  const reviewBtn = document.getElementById('reviewBtn');
  const hoursBtn = document.getElementById('hoursBtn');
  const hoursModal = document.getElementById('hoursModal');
  const hoursModalBackdrop = document.getElementById('hoursModalBackdrop');
  const hoursModalClose = document.getElementById('hoursModalClose');
  const hoursModalDialog = hoursModal?.querySelector('.site-modal-dialog');
  const coffeeInfoModal = document.getElementById('coffeeInfoModal');
  const coffeeInfoModalBackdrop = document.getElementById('coffeeInfoModalBackdrop');
  const coffeeInfoModalClose = document.getElementById('coffeeInfoModalClose');
  const coffeeInfoModalText = document.getElementById('coffeeInfoModalText');
  const coffeeInfoModalDialog = coffeeInfoModal?.querySelector('.site-modal-dialog');
  const locationBtn = document.getElementById('locationBtn');
  const locationModal = document.getElementById('locationModal');
  const locationModalBackdrop = document.getElementById('locationModalBackdrop');
  const locationModalClose = document.getElementById('locationModalClose');
  const locationModalDialog = locationModal?.querySelector('.site-modal-dialog');
  const phoneBtn = document.getElementById('phoneBtn');
  const foodSectionToggle = document.getElementById('foodSectionToggle');
  const foodSectionLabel = document.getElementById('foodSectionLabel');
  const foodSectionList = document.getElementById('foodSectionList');
  const foodHeader = document.querySelector('#foodPage .food-header');
  let menuIcons = [];
  let iconRotationScheduled = false;
  const scrollContainer = foodPage || document.documentElement;
  let iconMotionEnabled = true;
  let currentCoffeeView = 'build';
  const COFFEE_BUILD_PLACEHOLDER = 'Assets/menus/coffees/placeholder.png';
  let coffeeBuildState = {
    base: null,
    teaFlavor: null,
    bean: 'palmier',
    beanCustomized: false,
    dripBean: 'night-hawk',
    milkType: null,
    flavor: null,
    flavorCustomized: false,
    service: 'stay',
    temperature: 'hot',
    steamedMilk: false,
    milkIndex: 0,
    waterIndex: 0,
    foamIndex: 0,
    foamCustomized: false
  };
  const COFFEE_MILK_VALUES = ['0', '.5', '3', '3.5', '5.25', '6', '8', '10'];
  const COFFEE_ESPRESSO_ICE_MILK_VALUES = ['0', '3', '6', '10'];
  const COFFEE_WATER_VALUES_STAY = ['0', '3', '8'];
  const COFFEE_WATER_VALUES_TOGO = ['0', '3', '6', '8', '10'];
  const COFFEE_WATER_VALUES_ICE = ['0', '8', '12'];
  const COFFEE_FOAM_VALUES = ['coffeeFoamThin', 'coffeeFoamMedium', 'coffeeFoamThick'];
  const COFFEE_BUILD_IMAGE_CAPTIONS = {
    'Assets/menus/coffees/iced-stay/cort.png': { en: 'Iced cortado for here', fr: 'Cortado glacé sur place' },
    'Assets/menus/coffees/iced-stay/cortado.png': { en: 'Iced cortado for here', fr: 'Cortado glacé sur place' },
    'Assets/menus/coffees/iced-stay/s-latte.png': { en: 'Small iced latté for here', fr: 'Petit latté glacé sur place' },
    'Assets/menus/coffees/iced-stay/m-latte.png': { en: 'Medium iced latté for here', fr: 'Moyen latté glacé sur place' },
    'Assets/menus/coffees/iced-stay/l-latte.png': { en: 'Large iced latté for here', fr: 'Grand latté glacé sur place' },
    'Assets/menus/coffees/stay/macc.png': { en: 'Macchiato for here', fr: 'Macchiato sur place' },
    'Assets/menus/coffees/stay/flat.png': { en: 'Flat white for here', fr: 'Flat white sur place' },
    'Assets/menus/coffees/stay/capp.png': { en: 'Cappuccino for here', fr: 'Cappuccino sur place' },
    'Assets/menus/coffees/stay/cortado.png': { en: 'Cortado for here', fr: 'Cortado sur place' },
    'Assets/menus/coffees/stay/s-latte.png': { en: 'Small latté for here', fr: 'Petit latté sur place' },
    'Assets/menus/coffees/stay/m-latte.png': { en: 'Medium latté for here', fr: 'Moyen latté sur place' },
    'Assets/menus/coffees/stay/l-latte.png': { en: 'Large latté for here', fr: 'Grand latté sur place' },
    'Assets/menus/coffees/togo/macc.png': { en: 'Macchiato to go', fr: 'Macchiato à emporter' },
    'Assets/menus/coffees/togo/flat.png': { en: 'Flat white to go', fr: 'Flat white à emporter' },
    'Assets/menus/coffees/togo/capp.png': { en: 'Cappuccino to go', fr: 'Cappuccino à emporter' },
    'Assets/menus/coffees/togo/cort.png': { en: 'Cortado to go', fr: 'Cortado à emporter' },
    'Assets/menus/coffees/togo/cortado.png': { en: 'Cortado to go', fr: 'Cortado à emporter' },
    'Assets/menus/coffees/togo/s-latte.png': { en: 'Small latté to go', fr: 'Petit latté à emporter' },
    'Assets/menus/coffees/togo/m-latte.png': { en: 'Medium latté to go', fr: 'Moyen latté à emporter' },
    'Assets/menus/coffees/togo/l-latte.png': { en: 'Large latté to go', fr: 'Grand latté à emporter' },
    'Assets/menus/coffees/iced-togo/cort.png': { en: 'Iced cortado to go', fr: 'Cortado glacé à emporter' },
    'Assets/menus/coffees/iced-togo/cortado.png': { en: 'Iced cortado to go', fr: 'Cortado glacé à emporter' },
    'Assets/menus/coffees/iced-togo/s-latte.png': { en: 'Small iced latté to go', fr: 'Petit latté glacé à emporter' },
    'Assets/menus/coffees/iced-togo/m-latte.png': { en: 'Medium iced latté to go', fr: 'Moyen latté glacé à emporter' },
    'Assets/menus/coffees/iced-togo/l-latte.png': { en: 'Large iced latté to go', fr: 'Grand latté glacé à emporter' },
    'Assets/menus/coffees/stay/matcha.png': { en: 'Matcha for here', fr: 'Matcha sur place' },
    'Assets/menus/coffees/stay/ging.png': { en: 'Ginger turmeric latté for here', fr: 'Latté gingembre curcuma sur place' },
    'Assets/menus/coffees/stay/london.png': { en: 'London fog for here', fr: 'London fog sur place' },
    'Assets/menus/coffees/stay/serenitea.png': { en: 'Serenitea latté for here', fr: 'Latté Serenitea sur place' },
    'Assets/menus/coffees/stay/chai.png': { en: 'Chai latté for here', fr: 'Latté chai sur place' },
    'Assets/menus/coffees/iced-stay/matcha.png': { en: 'Iced matcha for here', fr: 'Matcha glacé sur place' },
    'Assets/menus/coffees/iced-stay/ging.png': { en: 'Iced ginger turmeric latté for here', fr: 'Latté gingembre curcuma glacé sur place' },
    'Assets/menus/coffees/iced-stay/chai.png': { en: 'Iced chai latté for here', fr: 'Latté chai glacé sur place' },
    'Assets/menus/coffees/togo/matcha.png': { en: 'Matcha to go', fr: 'Matcha à emporter' },
    'Assets/menus/coffees/togo/ging.png': { en: 'Ginger turmeric latté to go', fr: 'Latté gingembre curcuma à emporter' },
    'Assets/menus/coffees/togo/london.png': { en: 'London fog to go', fr: 'London fog à emporter' },
    'Assets/menus/coffees/togo/serenitea.png': { en: 'Serenitea latté to go', fr: 'Latté Serenitea à emporter' },
    'Assets/menus/coffees/togo/chai.png': { en: 'Chai latté to go', fr: 'Latté chai à emporter' },
    'Assets/menus/coffees/iced-togo/matcha.png': { en: 'Iced matcha to go', fr: 'Matcha glacé à emporter' },
    'Assets/menus/coffees/iced-togo/ging.png': { en: 'Iced ginger turmeric latté to go', fr: 'Latté gingembre curcuma glacé à emporter' },
    'Assets/menus/coffees/iced-togo/chai.png': { en: 'Iced chai latté to go', fr: 'Latté chai glacé à emporter' },
    'Assets/menus/coffees/stay/s-choc.png': { en: 'Small hot chocolate for here', fr: 'Petit chocolat chaud sur place' },
    'Assets/menus/coffees/stay/m-choc.png': { en: 'Medium hot chocolate for here', fr: 'Moyen chocolat chaud sur place' },
    'Assets/menus/coffees/stay/l-choc.png': { en: 'Large hot chocolate for here', fr: 'Grand chocolat chaud sur place' },
    'Assets/menus/coffees/togo/s-choc.png': { en: 'Small hot chocolate to go', fr: 'Petit chocolat chaud à emporter' },
    'Assets/menus/coffees/togo/m-choc.png': { en: 'Medium hot chocolate to go', fr: 'Moyen chocolat chaud à emporter' },
    'Assets/menus/coffees/togo/l-choc.png': { en: 'Large hot chocolate to go', fr: 'Grand chocolat chaud à emporter' },
    'Assets/menus/coffees/iced-stay/s-choc.png': { en: 'Small iced hot chocolate for here', fr: 'Petit chocolat chaud glacé sur place' },
    'Assets/menus/coffees/iced-stay/l-choc.png': { en: 'Large iced hot chocolate for here', fr: 'Grand chocolat chaud glacé sur place' },
    'Assets/menus/coffees/iced-togo/s-choc.png': { en: 'Small iced hot chocolate to go', fr: 'Petit chocolat chaud glacé à emporter' },
    'Assets/menus/coffees/iced-togo/l-choc.png': { en: 'Large iced hot chocolate to go', fr: 'Grand chocolat chaud glacé à emporter' },
    'Assets/menus/coffees/stay/s-mocha.png': { en: 'Small mocha for here', fr: 'Petit moka sur place' },
    'Assets/menus/coffees/stay/m-mocha.png': { en: 'Medium mocha for here', fr: 'Moyen moka sur place' },
    'Assets/menus/coffees/stay/l-mocha.png': { en: 'Large mocha for here', fr: 'Grand moka sur place' },
    'Assets/menus/coffees/togo/s-mocha.png': { en: 'Small mocha to go', fr: 'Petit moka à emporter' },
    'Assets/menus/coffees/togo/m-mocha.png': { en: 'Medium mocha to go', fr: 'Moyen moka à emporter' },
    'Assets/menus/coffees/togo/l-mocha.png': { en: 'Large mocha to go', fr: 'Grand moka à emporter' },
    'Assets/menus/coffees/iced-stay/s-mocha.png': { en: 'Small iced mocha for here', fr: 'Petit moka glacé sur place' },
    'Assets/menus/coffees/iced-stay/l-mocha.png': { en: 'Large iced mocha for here', fr: 'Grand moka glacé sur place' },
    'Assets/menus/coffees/iced-togo/s-mocha.png': { en: 'Small iced mocha to go', fr: 'Petit moka glacé à emporter' },
    'Assets/menus/coffees/iced-togo/l-mocha.png': { en: 'Large iced mocha to go', fr: 'Grand moka glacé à emporter' },
    'Assets/menus/coffees/stay/filter.png': { en: 'Filter coffee for here', fr: 'Café filtre sur place' },
    'Assets/menus/coffees/togo/filter.png': { en: 'Filter coffee to go', fr: 'Café filtre à emporter' },
    'Assets/menus/coffees/stay/filter-misto.png': { en: 'Cafe Au Lait (Filter Misto) for here', fr: 'Café au lait (filter misto) sur place' },
    'Assets/menus/coffees/togo/filter-misto.png': { en: 'Cafe Au Lait (Filter Misto) to go', fr: 'Café au lait (filter misto) à emporter' },
    'Assets/menus/coffees/stay/dirty.png': { en: 'Dirty chai for here', fr: 'Dirty chai sur place' },
    'Assets/menus/coffees/togo/dirty.png': { en: 'Dirty chai to go', fr: 'Dirty chai à emporter' },
    'Assets/menus/coffees/iced-stay/dirty.png': { en: 'Iced dirty chai for here', fr: 'Dirty chai glacé sur place' },
    'Assets/menus/coffees/iced-togo/dirty.png': { en: 'Iced dirty chai to go', fr: 'Dirty chai glacé à emporter' }
  };

  function getScrollTop() {
    if (foodPage) return foodPage.scrollTop;
    return window.pageYOffset || document.documentElement.scrollTop || 0;
  }

  function getViewportHeight() {
    if (foodPage) return foodPage.clientHeight || window.innerHeight || 1;
    return window.innerHeight || 1;
  }

  function updateIconRotation() {
    if (!iconMotionEnabled || !menuIcons.length) return;
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

  let lastRotationTs = 0;
  const ROTATION_FRAME_MS = 120; // ~8 fps to keep it light

  function scheduleIconRotation(timestamp) {
    if (!iconMotionEnabled || iconRotationScheduled) return;
    iconRotationScheduled = true;
    requestAnimationFrame((ts) => {
      iconRotationScheduled = false;
      const now = ts || performance.now();
      if (now - lastRotationTs < ROTATION_FRAME_MS) return;
      lastRotationTs = now;
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
      setCoffeeView('build');
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

  function setCoffeeView(view) {
    currentCoffeeView = view;
    if (coffeeBuildView) {
      coffeeBuildView.hidden = false;
    }
    if (coffeePage) {
      coffeePage.scrollTop = 0;
    }
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

  function openLocationModal(event) {
    event?.preventDefault?.();
    if (!locationModal) return;
    registerModalOpen();
    locationModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLocationModal(event) {
    registerModalDismiss(event);
    if (!locationModal) return;
    locationModal.hidden = true;
    document.body.style.overflow = '';
  }

  function openHoursModal(event) {
    event?.preventDefault?.();
    if (!hoursModal) return;
    registerModalOpen();
    hoursModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeHoursModal(event) {
    registerModalDismiss(event);
    if (!hoursModal) return;
    hoursModal.hidden = true;
    document.body.style.overflow = '';
  }

  function openCoffeeInfoModal(message) {
    if (!coffeeInfoModal || !coffeeInfoModalText || !message) return;
    registerModalOpen();
    coffeeInfoModalText.textContent = message;
    coffeeInfoModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeCoffeeInfoModal(event) {
    registerModalDismiss(event);
    if (!coffeeInfoModal) return;
    coffeeInfoModal.hidden = true;
    document.body.style.overflow = '';
  }

  function attachUnavailableReasonHandler(element) {
    if (!element) return;
    element.addEventListener('click', (event) => {
      if (element.getAttribute('aria-disabled') !== 'true') return;
      const message = currentLang === 'fr'
        ? (element.dataset.unavailableReasonFr || element.dataset.unavailableReasonEn || '')
        : (element.dataset.unavailableReasonEn || '');
      if (!message) return;
      event.preventDefault();
      event.stopPropagation();
      openCoffeeInfoModal(message);
    });
  }

  function stopModalTapPropagation(event) {
    event?.stopPropagation?.();
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
  attachTapHandler(coffeeBaseEspressoBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('base', 'espresso');
  });
  attachTapHandler(coffeeBaseTeaBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('base', 'tea');
  });
  attachTapHandler(coffeeBaseDripBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('base', 'drip');
  });
  attachTapHandler(coffeeBaseChocolateBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('base', 'chocolate');
  });
  attachTapHandler(coffeeTeaFlavorChaiBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('teaFlavor', 'chai');
  });
  attachTapHandler(coffeeTeaFlavorMatchaBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('teaFlavor', 'matcha');
  });
  attachTapHandler(coffeeTeaFlavorGingerBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('teaFlavor', 'ginger-turmeric');
  });
  attachTapHandler(coffeeTeaFlavorEarlGreyBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('teaFlavor', 'earl-grey');
  });
  attachTapHandler(coffeeTeaFlavorSereniteaBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('teaFlavor', 'serenitea');
  });
  attachTapHandler(coffeeBeanPalmierBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('bean', 'palmier');
  });
  attachTapHandler(coffeeBeanDecafBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('bean', 'decaf');
  });
  attachTapHandler(coffeeBeanFeatureBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('bean', 'feature');
  });
  attachTapHandler(coffeeDripBeanNightHawkBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('dripBean', 'night-hawk');
  });
  attachTapHandler(coffeeDripBeanFeatureBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('dripBean', 'feature');
  });
  attachTapHandler(coffeeMilkTypeHenriettaBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('milkType', 'henrietta');
  });
  attachTapHandler(coffeeMilkTypeSoyBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('milkType', 'soy');
  });
  attachTapHandler(coffeeMilkTypeOatBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('milkType', 'oat');
  });
  attachTapHandler(coffeeMilkTypeMacadamiaBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('milkType', 'macadamia');
  });
  attachTapHandler(coffeeMilkTypeSkimBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('milkType', 'skim');
  });
  attachTapHandler(coffeeMilkTypeLactoseFreeBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('milkType', 'lactose-free');
  });
  attachTapHandler(coffeeFlavorVanillaBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('flavor', 'vanilla');
  });
  attachTapHandler(coffeeFlavorMapleBtn, (event) => {
    event?.preventDefault?.();
    setCoffeeBuildChoice('flavor', 'maple');
  });
  attachTapHandler(coffeeForHereBtn, (event) => {
    event?.preventDefault?.();
    toggleCoffeeBuildChoice('service');
  });
  attachTapHandler(coffeeToGoBtn, (event) => {
    event?.preventDefault?.();
    toggleCoffeeBuildChoice('service');
  });
  attachTapHandler(coffeeHotBtn, (event) => {
    event?.preventDefault?.();
    toggleCoffeeBuildChoice('temperature');
  });
  attachTapHandler(coffeeIcedBtn, (event) => {
    event?.preventDefault?.();
    toggleCoffeeBuildChoice('temperature');
  });
  attachTapHandler(coffeeSteamedMilkYesBtn, (event) => {
    event?.preventDefault?.();
    toggleCoffeeBuildChoice('steamedMilk');
  });
  attachTapHandler(coffeeSteamedMilkNoBtn, (event) => {
    event?.preventDefault?.();
    toggleCoffeeBuildChoice('steamedMilk');
  });
  if (coffeeMilkSlider) {
    coffeeMilkSlider.addEventListener('input', (event) => {
      const value = Number(event.target.value);
      setCoffeeBuildChoice('milkIndex', Number.isNaN(value) ? 0 : value);
    });
  }
  if (coffeeWaterSlider) {
    coffeeWaterSlider.addEventListener('input', (event) => {
      const value = Number(event.target.value);
      setCoffeeBuildChoice('waterIndex', Number.isNaN(value) ? 0 : value);
    });
  }
  if (coffeeFoamSlider) {
    coffeeFoamSlider.addEventListener('input', (event) => {
      const value = Number(event.target.value);
      setCoffeeBuildChoice('foamIndex', Number.isNaN(value) ? 0 : value);
    });
  }

  attachTapHandler(cocktailsBtn, (event) => navigateToPage('cocktails', event));
  attachTapHandler(backCocktailsBtn, navigateHome);

  attachTapHandler(shelfBtn, (event) => navigateToPage('shelf', event));
  attachTapHandler(backShelfBtn, navigateHome);
  attachTapHandler(hoursBtn, openHoursModal);
  attachTapHandler(hoursModal, closeHoursModal);
  attachTapHandler(hoursModalBackdrop, closeHoursModal);
  attachTapHandler(hoursModalClose, closeHoursModal);
  if (hoursModalDialog) {
    hoursModalDialog.addEventListener('click', stopModalTapPropagation);
    hoursModalDialog.addEventListener('touchstart', stopModalTapPropagation, { passive: true });
  }
  attachTapHandler(coffeeInfoModal, closeCoffeeInfoModal);
  attachTapHandler(coffeeInfoModalDialog, closeCoffeeInfoModal);
  attachTapHandler(coffeeInfoModalBackdrop, closeCoffeeInfoModal);
  attachTapHandler(coffeeInfoModalClose, closeCoffeeInfoModal);
  attachTapHandler(locationBtn, openLocationModal);
  attachTapHandler(locationModal, closeLocationModal);
  attachTapHandler(locationModalBackdrop, closeLocationModal);
  attachTapHandler(locationModalClose, closeLocationModal);
  if (locationModalDialog) {
    locationModalDialog.addEventListener('click', stopModalTapPropagation);
    locationModalDialog.addEventListener('touchstart', stopModalTapPropagation, { passive: true });
  }

  [
    coffeeBaseEspressoBtn,
    coffeeBaseTeaBtn,
    coffeeBaseDripBtn,
    coffeeBaseChocolateBtn,
    coffeeTeaFlavorChaiBtn,
    coffeeTeaFlavorMatchaBtn,
    coffeeTeaFlavorGingerBtn,
    coffeeTeaFlavorEarlGreyBtn,
    coffeeTeaFlavorSereniteaBtn,
    coffeeBeanPalmierBtn,
    coffeeBeanDecafBtn,
    coffeeBeanFeatureBtn,
    coffeeDripBeanNightHawkBtn,
    coffeeDripBeanFeatureBtn,
    coffeeHotBtn,
    coffeeIcedBtn
  ].forEach(attachUnavailableReasonHandler);

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && coffeeInfoModal && !coffeeInfoModal.hidden) {
      closeCoffeeInfoModal(event);
    }
    if (event.key === 'Escape' && hoursModal && !hoursModal.hidden) {
      closeHoursModal(event);
    }
    if (event.key === 'Escape' && locationModal && !locationModal.hidden) {
      closeLocationModal(event);
    }
  });

  if (foodPage) {
    foodPage.addEventListener('scroll', scheduleIconRotation, { passive: true });
  } else {
    window.addEventListener('scroll', scheduleIconRotation, { passive: true });
  }
  window.addEventListener('resize', () => {
    collectMenuIcons();
    updateIconRotation();
  });

  updateCoffeeBuildPreview();
  setLanguage('fr');
});
