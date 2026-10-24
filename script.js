// 1. Funkcjonalność JS: Rozwijane menu mobilne
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  hamburgerBtn.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
  hamburgerBtn.textContent = isOpen ? '×' : '☰';
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', 'Otwórz menu');
    hamburgerBtn.textContent = '☰';
  });
});


const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️ Zmień motyw';
  } else {
    themeToggleBtn.textContent = '🌙 Zmień motyw';
  }
});


const artists = [
  {
    id: 'lady-pank',
    name: 'Lady Pank',
    genre: 'Rock',
    description: 'Lady Pank to zespół założony w Warszawie w 1981 roku przez gitarzystę Jana Borysewicza i autora tekstów Andrzeja Mogielnickiego. Ich piosenki takie jak Mniej niż zero czy Kryzysowa narzeczona natychmiast trafiły na szczyty list przebojów i stały się głosem ówczesnej młodzieży. Nazwa zespołu powstała przypadkowo z błędu redakcyjnego w gazecie, która zapowiadała koncert grupy pod nazwą Mała Lady Punk.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Lady_Pank_2007.jpg',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Lady_Pank_2007.jpg',
    credit: 'Bartek Banachowski — CC BY 3.0'
  },
  {
    id: 'dzem',
    name: 'Dżem',
    genre: 'Blues rock',
    description: 'Dżem powstał w Tychach pod koniec lat 70., a jego twarzą i legendarnym wokalistą stał się Ryszard Riedel. Ich muzyka to mieszanka bluesa i rocka, która przyciągała tłumy na festiwale w Jarocinie. Utwory pokroju Whisky czy Wehikuł czasu zna chyba każdy. Ryszard Riedel nie znał nut i nie uczył się śpiewu w szkołach, a teksty pisał często na zwykłych skrawkach papieru tuż przed nagraniem.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/D%C5%BCem%2C_Opera_Le%C5%9Bna%2C_30.08.2024_22.jpg',
    imageSource: 'https://commons.wikimedia.org/wiki/File:D%C5%BCem,_Opera_Le%C5%9Bna,_30.08.2024_22.jpg',
    credit: 'Wojciech Pędzich — CC BY 4.0'
  },
  {
    id: 'perfect',
    name: 'Perfect',
    genre: 'Rock',
    description: 'Perfect zaczął działać pod koniec lat 70., ale prawdziwą popularność przyniósł mu początek lat 80. z Grzegorzem Markowskim na wokalu. Autentyczne hymny pokolenia, czyli Autobiografia czy Nie płacz Ewka, do dziś lecą w radiu. Ciekawostka wiąże się z samym utworem Autobiografia, do którego muzykę napisał Perfect, a słowa dopisał Jacek Cygan, gdy kompozycja była już gotowa.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Perfect19112010.JPG',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Perfect19112010.JPG',
    credit: 'Stefaniak — domena publiczna'
  },
  {
    id: 'republika',
    name: 'Republika',
    genre: 'New wave, rock',
    description: 'Grupa powstała w Toruniu na początku lat 80. i szybko stała się symbolem rocka intelektualnego. Zespół wyróżniał się minimalistycznym brzmieniem opartym na instrumentach klawiszowych oraz charakterystycznym wizerunkiem w biało-czarne pasy. Liderem i autorem wszystkich tekstów był Grzegorz Ciechowski.Ciekawostka: W stanie wojennym utwory Republiki były cenzurowane, a sam zespół znajdował się pod lupą władz. Oficjalne zakazy sprawiły jednak, że stali się jeszcze bardziej popularni, a ich kasety krążyły w tysiącach kopii z drugiego obiegu.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Grzegorz_Ciechowski.jpg',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Grzegorz_Ciechowski.jpg',
    credit: 'Zdjęcie z zasobu IPN — domena publiczna'
  },
  {
    id: 'maanam',
    name: 'Maanam',
    genre: 'Rock',
    description: 'To jeden z najważniejszych zespołów w historii polskiej muzyki rockowej, który zadebiutował na początku lat 80. Na czele grupy stała Kora, czyli Olga Sipowicz, jedna z najbardziej wyrazistych wokalistek w kraju. Ich muzyka łączyła nowofalowe brzmienia z chwytliwymi melodiami, a utwory takie jak "Boskie Buenos" czy "Cykady na Cykladach" znał każdy.Ciekawostka: Kora początkowo nie planowała kariery piosenkarki. Teksty, które pisała, były tak unikalne, że szybko stały się poezją śpiewaną w rockowej oprawie, a zespół na koncertach potrafił porwać tłumy do masowej ekstazy.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Maanam_-_Kora.jpg',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Maanam_-_Kora.jpg',
    credit: 'Marcin Bajor — CC BY 2.0'
  },
  {
    id: 'kult',
    name: 'Kult',
    genre: 'Rock',
    description: 'Kult założył Kazik Staszewski w Warszawie w 1982 roku. Zespół szybko wyróżnił się charakterystycznym brzmieniem opartym na rozbudowanej sekcji dętej oraz zaangażowanymi tekstami. Ich regularne koncerty gromadzą wielopokoleniową publiczność. Kazik na scenie od lat występuje w stałym stylu, zakładając elegancką koszulę lub garnitur, w których gra nawet najbardziej energetyczne utwory.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Kult_-_concert_in_Warsaw.jpg',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Kult_-_concert_in_Warsaw.jpg',
    credit: 'Framz — CC BY-SA 3.0'
  },
  {
    id: 'budka-suflera',
    name: 'Budka Suflera',
    genre: 'Rock',
    description: 'Budka Suflera powstała w Lublinie w 1974 roku i przez dekady dominowała na polskiej scenie rockowej dzięki takim artystom jak Krzysztof Cugowski i Romuald Lipko. Kawałek Jolka, Jolka pamiętasz to absolutny klasyk polskiej muzyki rozrywkowej. Na początku swojej drogi muzycy grali głównie covery zachodnich wykonawców, a przełomem stał się dla nich dopiero autorski utwór Cień wielkiej góry.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Budka_Suflera_02.jpg',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Budka_Suflera_02.jpg',
    credit: 'Kasia (dłuuuuugie nazwisko):):):) — CC BY 2.0'
  },
  {
    id: 'banda-i-wanda',
    name: "Banda i Wanda",
    genre: "Rock",
    description: "Banda i Wanda to projekt muzyczny, który Wanda Kwietniewska powołała do życia w 1982 roku po odejściu z grupy Maanam. Utwory takie jak Hi-Fi czy Nie doczekanie twoje stały się hitami dyskotek i radiowych list przebojów. Wanda była jedną z nielicznych kobiet w tamtym okresie, które twardo rządziły męskim zespołem i same w pełni odpowiadały za kierunek artystyczny oraz wizerunek grupy.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Wanda_i_Banda%2C_Zadzwo%C5%84cie_po_milicj%C4%99%2C_Polsat_Plus_Arena_Gdynia_25.01.2025_10.jpg/1280px-Wanda_i_Banda%2C_Zadzwo%C5%84cie_po_milicj%C4%99%2C_Polsat_Plus_Arena_Gdynia_25.01.2025_10.jpg?utm_source=pl.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    imageSource: "https://commons.wikimedia.org/wiki/User:Wojciech_P%C4%99dzich", 
    credit: "Wojciech Pędzik"
  },
  {
    id: 'hey',
    name: 'Hey',
    genre: 'Rock',
    description: 'To czołówka polskiej sceny muzycznej lat 90. Zespół powstał w Szczecinie, a jego wokalistką została Katarzyna Nosowska, której nieszablonowy głos i teksty zdefiniowały tamtą dekadę. Debiutancki album "Fire" z 1993 roku sprzedał się w ogromnym nakładzie i pokazał, że polska muzyka alternatywna może brzmieć nowocześnie i światowo.Ciekawostka: Nosowska w wywiadach często wspominała, że na początku drogi była niezwykle nieśmiała i nie wierzyła, że jej głos spodoba się szerszej publiczności. Dziś jej teksty u jednych budzą nostalgię, a u innych są uznawane za literaturę współczesną.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Hey%2C_Rocket_Festiwal_2013_04.jpg/1280px-Hey%2C_Rocket_Festiwal_2013_04.jpg?utm_source=pl.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    imageSource: "https://creativecommons.org/licenses/by-sa/3.0",
    credit: 'Adam Kliczek'
  },
  {
    id: 'sztywny-pal-azji',
    name: "Sztywny Pal Azji",
    genre: 'Rock',
    description: 'Zespół zawiązał się w Trzebini w połowie lat 80. i błyskawicznie stał się gwiazdą festiwalu w Jarocinie. Ich piosenki idealnie oddawały nastroje młodych ludzi dorastających w szarych realiach schyłkowego PRL-u. Kawałki takie jak "Nie płać Ewo" na stałe weszły do kanonu polskiego rocka.Ciekawostka: Sama nazwa zespołu wzięła się z luźnej rozmowy założycieli i miała być tylko żartem, ale tak bardzo zapadła wszystkim w pamięć, że została z nimi na stałe.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Sztywny_Pal_Azji_Rockowizna_2022_Gda%C5%84sk_28.jpg/1280px-Sztywny_Pal_Azji_Rockowizna_2022_Gda%C5%84sk_28.jpg?utm_source=pl.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    imageSource: '"https://commons.wikimedia.org/wiki/User:Wojciech_P%C4%99dzich',
    credit: 'Wojciech Pędzik'
  }
  ];

const artistGrid = document.getElementById('artist-grid');
const artistDetail = document.getElementById('artist-detail');

function createArtistCard(artist) {
  const card = document.createElement('button');
  const image = document.createElement('img');

  card.className = 'artist-card';
  card.type = 'button';
  card.setAttribute('aria-label', artist.name);
  card.setAttribute('aria-pressed', 'false');
  image.src = artist.image;
  image.alt = `Zespół ${artist.name}`;
  image.loading = 'lazy';
  card.append(image);
  card.addEventListener('click', () => {
    const hash = `#artist-${artist.id}`;
    if (window.location.hash === hash) {
      showArtist(artist);
    } else {
      window.location.hash = hash;
    }
  });

  return card;
}

function showArtist(artist) {
  artistGrid.querySelectorAll('.artist-card').forEach((card, index) => {
    card.setAttribute('aria-pressed', String(artists[index] === artist));
  });

  const heading = document.createElement('h3');
  heading.textContent = artist.name;

  const description = document.createElement('p');
  description.textContent = artist.description;

  const source = document.createElement('a');
  source.href = artist.imageSource;
  source.target = '_blank';
  source.rel = 'noopener noreferrer';
  source.textContent = `Wikimedia Commons (${artist.credit})`;
  
  const credit = document.createElement('p');
  credit.className = 'artist-credit';
  credit.append('Zdjęcie: ', source);

  artistDetail.replaceChildren(heading, description, credit);
}

function renderArtistView() {
  const artistId = window.location.hash.slice('#artist-'.length);
  const artist = window.location.hash.startsWith('#artist-')
    ? artists.find((item) => item.id === artistId)
    : artists[0];

  if (artist) {
    showArtist(artist);
  }
}


const form = document.getElementById('form');

if (form) {
  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputSurname = document.getElementById('surname');
  const nameError = document.getElementById('name-error');
  const surnameError = document.getElementById('surname-error');
  const emailError = document.getElementById('email-error');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const trimmedName = inputName.value.trim();
    const trimmedSurname = inputSurname.value.trim();
    inputName.value = trimmedName;
    inputSurname.value = trimmedSurname;
    nameError.textContent = '';
    surnameError.textContent = '';
    emailError.textContent = '';
    inputName.classList.remove('is-invalid');
    inputEmail.classList.remove('is-invalid');
    formMessage.textContent = '';

    let isValid = true;

    if (trimmedName.length < 3) {
      nameError.textContent = 'Imię musi mieć co najmniej 3 znaki.';
      inputName.classList.add('is-invalid');
      isValid = false;
    }

     if (trimmedSurname.length < 2) {
      surnameError.textContent = 'Nazwisko musi mieć co najmniej 2 znaki.';
      inputSurname.classList.add('is-invalid');
      isValid = false;
    }

    if (!inputEmail.value.trim() || !inputEmail.validity.valid) {
      emailError.textContent = 'Wpisz poprawny adres e-mail.';
      inputEmail.classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) {
      formMessage.textContent = 'Popraw zaznaczone pola.';
      return;
    }

    
    form.reset();
  });
}


artists.forEach((artist) => artistGrid.append(createArtistCard(artist)));
window.addEventListener('hashchange', renderArtistView);
renderArtistView();