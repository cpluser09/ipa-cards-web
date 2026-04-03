// 国际音标数据
const ipaData = {
  vowels: [
    { symbol: '/i:/', name: '长衣音', pinyin: '衣（拉长）', pronunciation: '舌尖靠近下齿，舌前部抬起，嘴唇向两旁张开成扁平形', examples: 'sheep, green, please', examplesHighlight: ['ee', 'ee', 'ea'] },
    { symbol: '/ɪ/', name: '短衣音', pinyin: '衣（短促）', pronunciation: '舌尖靠近下齿，舌前部抬起，但比 /i:/ 低，嘴唇向两旁张开成扁平形，但比 /i:/ 略窄', examples: 'bit, ship, city', examplesHighlight: ['i', 'i', 'i'] },
    { symbol: '/e/', name: '半开口前元音', pinyin: '', pronunciation: '舌尖靠近下齿，舌前部抬起，比 /ɪ/ 低，嘴唇向两旁张开，宽度中等', examples: 'bed, ten, head', examplesHighlight: ['e', 'e', 'ea'] },
    { symbol: '/æ/', name: '大口开口前元音', pinyin: '', pronunciation: '舌尖靠近下齿，舌前部降到最低，嘴唇向两旁张开，呈扁平形，开口最大', examples: 'cat, hat, bad', examplesHighlight: ['a', 'a', 'a'] },
    { symbol: '/ɜ:/', name: '长厄音', pinyin: '厄（拉长）', pronunciation: '舌身平放，舌中部略抬起，双唇扁平，肌肉放松，口腔半开', examples: 'bird, girl, third', examplesHighlight: ['ir', 'ir', 'ir'] },
    { symbol: '/ə/', name: '中元音', pinyin: '厄（短促）', pronunciation: '舌身平放，舌中部略抬起，双唇扁平，肌肉放松，口腔半开，但比 /ɜ:/ 开口略大', examples: 'about, father, mother', examplesHighlight: ['a', 'er', 'er'] },
    { symbol: '/ɑ:/', name: '长啊音', pinyin: '啊（拉长）', pronunciation: '口张大，舌身平放，舌中部略低，双唇自然张开，不圆唇', examples: 'car, far, arm', examplesHighlight: ['ar', 'ar', 'ar'] },
    { symbol: '/ʌ/', name: '短啊音', pinyin: '啊（短促）', pronunciation: '舌中部抬起，比 /ə/ 略低，双唇自然张开，不圆唇，口腔半开', examples: 'but, cup, up', examplesHighlight: ['u', 'u', 'u'] },
    { symbol: '/ɔ:/', name: '长哦音', pinyin: '哦（拉长）', pronunciation: '舌后部抬起，口张大，双唇收圆并向前突出，肌肉紧张', examples: 'door, floor, more', examplesHighlight: ['oo', 'oo', 'ore'] },
    { symbol: '/ɒ/', name: '短哦音', pinyin: '哦（短促）', pronunciation: '舌后部抬起，比 /ɔ:/ 低，口张大，双唇收圆并向前突出，但比 /ɔ:/ 略放松', examples: 'hot, dog, not', examplesHighlight: ['o', 'o', 'o'] },
    { symbol: '/u:/', name: '长乌音', pinyin: '乌（拉长）', pronunciation: '舌后部抬起，口尽量小，双唇收圆并向前突出，肌肉紧张', examples: 'moon, blue, school', examplesHighlight: ['oo', 'ue', 'oo'] },
    { symbol: '/ʊ/', name: '短乌音', pinyin: '乌（短促）', pronunciation: '舌后部抬起，比 /u:/ 低，口尽量小，双唇收圆并向前突出，但比 /u:/ 略放松', examples: 'book, look, good', examplesHighlight: ['oo', 'oo', 'oo'] },
    { symbol: '/eɪ/', name: '合口双元音', pinyin: '诶（由e到i）', pronunciation: '从 /e/ 向 /ɪ/ 滑动，舌尖稍微抬起，嘴唇向两旁张开，然后收圆', examples: 'day, way, make', examplesHighlight: ['ay', 'ay', 'ake'] },
    { symbol: '/aɪ/', name: '合口双元音', pinyin: '爱（由a到i）', pronunciation: '从 /ɑ:/ 向 /ɪ/ 滑动，口张开，然后收圆', examples: 'time, sky, why', examplesHighlight: ['i', 'y', 'y'] },
    { symbol: '/ɔɪ/', name: '合口双元音', pinyin: '奥伊（由ɔ到i）', pronunciation: '从 /ɔ:/ 向 /ɪ/ 滑动，口张开，双唇收圆，然后放松', examples: 'boy, toy, voice', examplesHighlight: ['oy', 'oy', 'oi'] },
    { symbol: '/əʊ/', name: '合口双元音', pinyin: '欧（由ə到u）', pronunciation: '从 /ə/ 向 /ʊ/ 滑动，口张开，双唇收圆', examples: 'no, go, home', examplesHighlight: ['o', 'o', 'o_e'] },
    { symbol: '/aʊ/', name: '合口双元音', pinyin: '奥（由a到u）', pronunciation: '从 /ɑ:/ 向 /ʊ/ 滑动，口张开，然后收圆', examples: 'now, house, out', examplesHighlight: ['ow', 'ou', 'ou'] },
    { symbol: '/ɪə/', name: '集中双元音', pinyin: '衣厄（由i到ə）', pronunciation: '从 /ɪ/ 向 /ə/ 滑动，口张开，双唇扁平', examples: 'ear, near, here', examplesHighlight: ['ear', 'ear', 'ere'] },
    { symbol: '/eə/', name: '集中双元音', pinyin: '（由e到ə）', pronunciation: '从 /e/ 向 /ə/ 滑动，口张开，双唇扁平', examples: 'air, pair, there', examplesHighlight: ['air', 'air', 'ere'] },
    { symbol: '/ʊə/', name: '集中双元音', pinyin: '乌厄（由u到ə）', pronunciation: '从 /ʊ/ 向 /ə/ 滑动，口张开，双唇收圆', examples: 'poor, tour, sure', examplesHighlight: ['oo', 'ou', 'ure'] }
  ],
  consonants: [
    { symbol: '/p/', name: '双唇爆破音', pinyin: '坡', pronunciation: '双唇紧闭，然后突然分开，气流冲出口腔', examples: 'pen, pet, play', examplesHighlight: ['p', 'p', 'p'] },
    { symbol: '/b/', name: '双唇爆破音', pinyin: '波', pronunciation: '双唇紧闭，然后突然分开，气流冲出口腔，声带振动', examples: 'bed, bag, big', examplesHighlight: ['b', 'b', 'b'] },
    { symbol: '/t/', name: '齿龈爆破音', pinyin: '特', pronunciation: '舌尖抵住上齿龈，然后突然分开，气流冲出口腔', examples: 'top, take, time', examplesHighlight: ['t', 't', 't'] },
    { symbol: '/d/', name: '齿龈爆破音', pinyin: '的', pronunciation: '舌尖抵住上齿龈，然后突然分开，气流冲出口腔，声带振动', examples: 'door, day, dog', examplesHighlight: ['d', 'd', 'd'] },
    { symbol: '/k/', name: '软腭爆破音', pinyin: '克', pronunciation: '舌后部抬起，抵住软腭，然后突然分开，气流冲出口腔', examples: 'key, cat, car', examplesHighlight: ['k', 'c', 'c'] },
    { symbol: '/g/', name: '软腭爆破音', pinyin: '哥', pronunciation: '舌后部抬起，抵住软腭，然后突然分开，气流冲出口腔，声带振动', examples: 'go, get, good', examplesHighlight: ['g', 'g', 'g'] },
    { symbol: '/f/', name: '唇齿摩擦音', pinyin: '夫', pronunciation: '上齿轻触下唇，气流从缝隙中逸出，形成摩擦音', examples: 'four, five, fine', examplesHighlight: ['f', 'f', 'f'] },
    { symbol: '/v/', name: '唇齿摩擦音', pinyin: '屋', pronunciation: '上齿轻触下唇，气流从缝隙中逸出，形成摩擦音，声带振动', examples: 'very, voice, five', examplesHighlight: ['v', 'v', 'f'] },
    { symbol: '/θ/', name: '齿间摩擦音', pinyin: '思', pronunciation: '舌尖轻轻抵住上齿背，气流从舌尖与上齿间的缝隙中逸出，形成摩擦音', examples: 'think, three, thank', examplesHighlight: ['th', 'th', 'th'] },
    { symbol: '/ð/', name: '齿间摩擦音', pinyin: '兹', pronunciation: '舌尖轻轻抵住上齿背，气流从舌尖与上齿间的缝隙中逸出，形成摩擦音，声带振动', examples: 'this, that, there', examplesHighlight: ['th', 'th', 'th'] },
    { symbol: '/s/', name: '齿龈摩擦音', pinyin: '丝', pronunciation: '舌尖靠近上齿龈，气流从舌尖与上齿龈间的缝隙中逸出，形成摩擦音', examples: 'say, see, sing', examplesHighlight: ['s', 's', 's'] },
    { symbol: '/z/', name: '齿龈摩擦音', pinyin: '兹', pronunciation: '舌尖靠近上齿龈，气流从舌尖与上齿龈间的缝隙中逸出，形成摩擦音，声带振动', examples: 'zero, zoo, busy', examplesHighlight: ['z', 'z', 'z'] },
    { symbol: '/ʃ/', name: '齿龈后摩擦音', pinyin: '西', pronunciation: '舌前部抬起，靠近硬腭，气流从缝隙中逸出，形成摩擦音', examples: 'she, show, ship', examplesHighlight: ['sh', 'sh', 'sh'] },
    { symbol: '/ʒ/', name: '齿龈后摩擦音', pinyin: '日', pronunciation: '舌前部抬起，靠近硬腭，气流从缝隙中逸出，形成摩擦音，声带振动', examples: 'measure, pleasure, vision', examplesHighlight: ['s', 's', 's'] },
    { symbol: '/h/', name: '声门摩擦音', pinyin: '喝', pronunciation: '气流从声门逸出，形成摩擦音', examples: 'hi, he, how', examplesHighlight: ['h', 'h', 'h'] },
    { symbol: '/r/', name: '齿龈后近音', pinyin: '日', pronunciation: '舌尖抬起，靠近上齿龈，气流从缝隙中逸出，声带振动', examples: 'red, run, read', examplesHighlight: ['r', 'r', 'r'] },
    { symbol: '/m/', name: '双唇鼻音', pinyin: '姆', pronunciation: '双唇紧闭，气流从鼻腔中逸出，声带振动', examples: 'man, moon, make', examplesHighlight: ['m', 'm', 'm'] },
    { symbol: '/n/', name: '齿龈鼻音', pinyin: '恩', pronunciation: '舌尖抵住上齿龈，气流从鼻腔中逸出，声带振动', examples: 'no, not, now', examplesHighlight: ['n', 'n', 'n'] },
    { symbol: '/ŋ/', name: '软腭鼻音', pinyin: '嗯', pronunciation: '舌后部抬起，抵住软腭，气流从鼻腔中逸出，声带振动', examples: 'sing, song, long', examplesHighlight: ['ng', 'ng', 'ng'] },
    { symbol: '/l/', name: '齿龈边音', pinyin: '乐', pronunciation: '舌尖抵住上齿龈，气流从舌的两侧逸出，声带振动', examples: 'like, love, look', examplesHighlight: ['l', 'l', 'l'] },
    { symbol: '/w/', name: '双唇圆唇半元音', pinyin: '乌', pronunciation: '双唇收圆，向前突出，舌后部抬起，气流从口中逸出，声带振动', examples: 'water, where, what', examplesHighlight: ['w', 'wh', 'wh'] },
    { symbol: '/j/', name: '硬腭半元音', pinyin: '衣', pronunciation: '舌前部抬起，靠近硬腭，气流从缝隙中逸出，声带振动', examples: 'yes, you, year', examplesHighlight: ['y', 'y', 'y'] },
    { symbol: '/ts/', name: '齿龈塞擦音', pinyin: '此', pronunciation: '舌尖抵住上齿龈，阻碍气流，然后舌尖突然分开，气流冲出口腔，形成塞擦音', examples: 'cats, hits, sets', examplesHighlight: ['ts', 'ts', 'ts'] },
    { symbol: '/dz/', name: '齿龈塞擦音', pinyin: '姿', pronunciation: '舌尖抵住上齿龈，阻碍气流，然后舌尖突然分开，气流冲出口腔，声带振动，形成塞擦音', examples: 'beds, needs, reads', examplesHighlight: ['ds', 'ds', 'ds'] },
    { symbol: '/tr/', name: '齿龈塞擦音', pinyin: '戳', pronunciation: '舌尖抵住上齿龈，阻碍气流，然后舌尖突然分开，气流冲出口腔，形成塞擦音', examples: 'tree, try, true', examplesHighlight: ['tr', 'tr', 'tr'] },
    { symbol: '/dr/', name: '齿龈塞擦音', pinyin: '桌', pronunciation: '舌尖抵住上齿龈，阻碍气流，然后舌尖突然分开，气流冲出口腔，声带振动，形成塞擦音', examples: 'dream, drive, drink', examplesHighlight: ['dr', 'dr', 'dr'] },
    { symbol: '/tʃ/', name: '硬腭塞擦音', pinyin: '吃', pronunciation: '舌尖抬起，靠近硬腭，阻碍气流，然后舌尖突然分开，气流冲出口腔，形成塞擦音', examples: 'chair, chat, check', examplesHighlight: ['ch', 'ch', 'ch'] },
    { symbol: '/dʒ/', name: '硬腭塞擦音', pinyin: '知', pronunciation: '舌尖抬起，靠近硬腭，阻碍气流，然后指尖突然分开，气流冲出口腔，声带振动，形成塞擦音', examples: 'joy, joke, jump', examplesHighlight: ['j', 'j', 'j'] }
  ]
};

// 将元音和辅音合并成一个数组
const allCards = [...ipaData.vowels, ...ipaData.consonants];

// 状态变量（全局作用域，以便调试和测试）
// DOM元素
const phoneticSymbol = document.getElementById('phoneticSymbol');
const phoneticName = document.getElementById('phoneticName');
const phoneticPinyin = document.getElementById('phoneticPinyin');
const pronunciationRule = document.getElementById('pronunciationRule');
const exampleWords = document.getElementById('exampleWords');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const seqBtn = document.getElementById('seqBtn');
const randBtn = document.getElementById('randBtn');
const favBtn = document.getElementById('favBtn');
const pauseBtn = document.getElementById('pauseBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const hideBtn = document.getElementById('hideBtn');
const infoSection = document.querySelector('.info-section');
const indexSectionVowels = document.getElementById('indexSectionVowels');
const indexSectionConsonants = document.getElementById('indexSectionConsonants');

window.currentIndex = 0;
window.playbackMode = 'paused'; // 'sequential', 'random', 'favorites', 'paused'
window.playbackInterval = null;

// 收藏状态（本地存储）
window.favorites = JSON.parse(localStorage.getItem('ipa_favorites')) || [];

// 初始化页面
function initPage() {
  // 渲染当前卡片
  renderCard(window.currentIndex);

  // 渲染索引按钮
  renderIndexButtons();

  // 绑定事件
  bindEvents();
}

// 渲染卡片
function renderCard(index) {
  const card = allCards[index];
  phoneticSymbol.textContent = card.symbol;
  phoneticName.textContent = card.name;
  phoneticPinyin.textContent = card.pinyin;
  pronunciationRule.textContent = card.pronunciation;
  exampleWords.textContent = ``;
  const examples = card.examples.split(', ');
  const highlights = card.examplesHighlight || [];

  examples.forEach((word, i) => {
    const strong = document.createElement('strong');
    const highlight = highlights[i] || '';

    if (highlight) {
      // 查找高亮文本在单词中的位置（只匹配第一个）
      const highlightIndex = word.toLowerCase().indexOf(highlight.toLowerCase());
      if (highlightIndex !== -1) {
        const endIndex = highlightIndex + highlight.length;
        // 添加高亮前的文本
        if (highlightIndex > 0) {
          strong.appendChild(document.createTextNode(word.slice(0, highlightIndex)));
        }
        // 添加高亮文本
        const span = document.createElement('span');
        span.className = 'highlight';
        span.textContent = word.slice(highlightIndex, endIndex);
        strong.appendChild(span);
        // 添加高亮后的文本
        if (endIndex < word.length) {
          strong.appendChild(document.createTextNode(word.slice(endIndex)));
        }
      } else {
        // 未找到高亮文本，显示整个单词
        strong.textContent = word;
      }
    } else {
      strong.textContent = word;
    }

    exampleWords.appendChild(strong);
    if (i < examples.length - 1) {
      exampleWords.appendChild(document.createTextNode(', '));
    }
  });

  // 更新收藏按钮状态
  updateFavoriteButton();

  // 更新索引按钮的激活状态
  updateIndexButtons(index);

  // 更新按钮的禁用状态
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === allCards.length - 1;
}

// 渲染索引按钮
function renderIndexButtons() {
  indexSectionVowels.innerHTML = '';
  indexSectionConsonants.innerHTML = '';

  // 渲染元音按钮
  ipaData.vowels.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = 'index-btn';
    btn.textContent = item.symbol;
    btn.dataset.globalIndex = index;
    btn.addEventListener('click', () => {
      goToIndex(index);
    });
    indexSectionVowels.appendChild(btn);
  });

  // 渲染辅音按钮
  ipaData.consonants.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = 'index-btn';
    btn.textContent = item.symbol;
    btn.dataset.globalIndex = ipaData.vowels.length + index;
    btn.addEventListener('click', () => {
      goToIndex(ipaData.vowels.length + index);
    });
    indexSectionConsonants.appendChild(btn);
  });

  updateFavoriteButtons();
}

// 更新索引按钮的激活状态
function updateIndexButtons(activeIndex) {
  const allButtons = [
    ...indexSectionVowels.querySelectorAll('.index-btn'),
    ...indexSectionConsonants.querySelectorAll('.index-btn')
  ];
  allButtons.forEach((btn) => {
    const globalIndex = parseInt(btn.dataset.globalIndex);
    if (globalIndex === activeIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 更新收藏按钮状态
function updateFavoriteButtons() {
  const allButtons = [
    ...indexSectionVowels.querySelectorAll('.index-btn'),
    ...indexSectionConsonants.querySelectorAll('.index-btn')
  ];
  allButtons.forEach((btn) => {
    const globalIndex = parseInt(btn.dataset.globalIndex);
    if (window.favorites.includes(globalIndex)) {
      btn.classList.add('favorite');
    } else {
      btn.classList.remove('favorite');
    }
  });
}

// 更新禁用按钮状态
function updateDisabledButtons() {
  const allButtons = [
    ...indexSectionVowels.querySelectorAll('.index-btn'),
    ...indexSectionConsonants.querySelectorAll('.index-btn')
  ];
  allButtons.forEach((btn) => {
    const globalIndex = parseInt(btn.dataset.globalIndex);
    if (window.playbackMode === 'favorites' && !window.favorites.includes(globalIndex)) {
      btn.classList.add('disabled');
    } else {
      btn.classList.remove('disabled');
    }
  });
}

// 更新收藏按钮状态
function updateFavoriteButton() {
  console.log('updateFavoriteButton called');
  console.log('typeof currentIndex:', typeof window.currentIndex);
  console.log('currentIndex:', window.currentIndex);
  console.log('typeof favorites:', typeof window.favorites);
  console.log('favorites:', window.favorites);
  
  const isFavorite = window.favorites.includes(window.currentIndex);
  console.log('isFavorite:', isFavorite);
  
  if (isFavorite) {
    favoriteBtn.classList.add('active');
    console.log('Added active class');
  } else {
    favoriteBtn.classList.remove('active');
    console.log('Removed active class');
  }
  
  console.log('favoriteBtn.classList:', favoriteBtn.classList);
}

// 收藏/取消收藏卡片
function toggleFavorite() {
  console.log('toggleFavorite called');
  if (window.favorites.includes(window.currentIndex)) {
    // 取消收藏
    window.favorites = window.favorites.filter(index => index !== window.currentIndex);
  } else {
    // 收藏
    window.favorites.push(window.currentIndex);
  }
  localStorage.setItem('ipa_favorites', JSON.stringify(window.favorites));
  updateFavoriteButton();
  updateFavoriteButtons();
}

// 切换隐藏/显示音标名称和中文谐音
function toggleInfo() {
  const infoSection = document.querySelector('.info-section');
  if (infoSection) {
    const isHidden = infoSection.classList.toggle('hidden');
    if (hideBtn) {
      hideBtn.classList.toggle('active', isHidden);
      hideBtn.setAttribute('aria-label', isHidden ? '显示音标信息' : '隐藏音标信息');
      hideBtn.setAttribute('title', isHidden ? '显示音标信息' : '隐藏音标信息');
    }
  }
}

// 绑定事件
function bindEvents() {
  if (hideBtn) {
    hideBtn.addEventListener('click', toggleInfo);
  }

  // 键盘事件
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    }
  });

  // 触摸事件（用于滑动切换）
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50; // 滑动阈值
    if (touchStartX - touchEndX > swipeThreshold) {
      nextCard();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevCard();
    }
  }
}

// 上一张卡片（根据当前播放模式切换）
function prevCard() {
  // 暂停自动播放
  pausePlayback();  // 根据当前播放模式切换卡片
  if (window.playbackMode === "random") {
    // 随机切换
    let randomIndex;
    if (allCards.length === 1) {
      randomIndex = 0;
    } else {
      do {
        randomIndex = Math.floor(Math.random() * allCards.length);
      } while (randomIndex === window.currentIndex); // 避免重复
    }
    window.currentIndex = randomIndex;
  } else if (window.playbackMode === "favorites") {
    // 收藏播放
    if (window.favorites.length > 0) {
      const currentFavIndex = window.favorites.indexOf(window.currentIndex);
      if (currentFavIndex > 0) {
        window.currentIndex = window.favorites[currentFavIndex - 1];
      } else if (currentFavIndex === 0) {
        window.currentIndex = window.favorites[window.favorites.length - 1];
      } else {
        // 当前卡片不在收藏列表中，跳到最后一张收藏
        window.currentIndex = window.favorites[window.favorites.length - 1];
      }
    }
  } else if (window.playbackMode === "sequential") {
    // 顺序播放模式下的上一张（不循环）
    if (window.currentIndex > 0) {
      window.currentIndex--;
    }
    // 如果已经是第一张，不做任何操作
  } else {
    // 默认暂停模式下的上一张（不循环）
    if (window.currentIndex > 0) {
      window.currentIndex--;
    }
    // 如果已经是第一张，不做任何操作
  }
  
  renderCard(window.currentIndex);
}

// 下一张卡片（根据当前播放模式切换）
function nextCard() {
  // 暂停自动播放
  pausePlayback();

  // 根据当前播放模式切换卡片
  if (window.playbackMode === "random") {
    // 随机切换
    let randomIndex;
    if (allCards.length === 1) {
      randomIndex = 0;
    } else {
      do {
        randomIndex = Math.floor(Math.random() * allCards.length);
      } while (randomIndex === window.currentIndex); // 避免重复
    }
    window.currentIndex = randomIndex;
  } else if (window.playbackMode === "favorites") {
    // 收藏播放
    if (window.favorites.length > 0) {
      const currentFavIndex = window.favorites.indexOf(window.currentIndex);
      if (currentFavIndex >= 0 && currentFavIndex < window.favorites.length - 1) {
        window.currentIndex = window.favorites[currentFavIndex + 1];
      } else if (currentFavIndex === window.favorites.length - 1) {
        window.currentIndex = window.favorites[0];
      } else {
        // 当前卡片不在收藏列表中，跳到第一张收藏
        window.currentIndex = window.favorites[0];
      }
    }
  } else if (window.playbackMode === "sequential") {
    // 顺序播放模式下的下一张（循环）
    if (window.currentIndex < allCards.length - 1) {
      window.currentIndex++;
    } else {
      window.currentIndex = 0; // 循环到第一张
    }
  } else {
    // 默认暂停模式下的下一张（不循环）
    if (window.currentIndex < allCards.length - 1) {
      window.currentIndex++;
    }
    // 如果已经是最后一张，不做任何操作
  }
  
  renderCard(window.currentIndex);
}

// 跳转到指定索引
function goToIndex(index) {
  // 暂停自动播放
  pausePlayback();
  window.currentIndex = index;
  renderCard(window.currentIndex);
}

// 设置播放模式
// 切换播放模式（不影响播放/暂停状态）
function togglePlaybackMode() {
  // 切换播放模式
  if (window.playbackMode === "sequential") {
    window.playbackMode = "random";
  } else if (window.playbackMode === "random") {
    window.playbackMode = "sequential";
  } else {
    // 初始状态或暂停状态，默认切换到顺序播放
    window.playbackMode = "sequential";
  }

  // 更新模式按钮文字
  const playModeBtn = document.getElementById("playModeBtn");
  playModeBtn.textContent = window.playbackMode === "sequential" ? "顺序" : "随机";

  // 更新按钮激活状态
  updatePlaybackButtons(window.playbackMode);

  // 如果当前正在播放，用新的模式继续播放
  if (window.playbackInterval) {
    // 清除定时器（不改变按钮状态）
    clearInterval(window.playbackInterval);
    window.playbackInterval = null;
    // 重新开始播放
    startPlayback();
  }
}
function setPlaybackMode(mode) {
  console.log('setPlaybackMode called');

  // 如果是收藏播放，检查是否有收藏的卡片
  if (mode === 'favorites' && window.favorites.length === 0) {
    alert('没有收藏的卡片');
    return;
  }

  // 设置新的播放模式
  window.playbackMode = mode;

  // 更新按钮激活状态
  updatePlaybackButtons(mode);

  // 如果当前正在播放，用新的模式继续播放
  if (window.playbackInterval) {
    // 清除定时器（不改变按钮状态）
    clearInterval(window.playbackInterval);
    window.playbackInterval = null;
    // 重新开始播放
    startPlayback();
  }
}

// 更新播放按钮的激活状态
function updatePlaybackButtons(activeMode) {
  favBtn.classList.remove('active');
  // playModeBtn 和 pauseBtn 不添加 active 类，永远保持蓝色

  if (activeMode === 'favorites') {
    favBtn.classList.add('active');
  }
  // 其他模式不需要特殊处理

  // 更新索引按钮的禁用状态
  updateDisabledButtons();
}

// 开始播放
function startPlayback() {
  const interval = 3000; // 3秒切换一次卡片
  window.playbackInterval = setInterval(() => {
    if (window.playbackMode === "sequential") {
      // 顺序播放
      let nextIndex;

      // 普通顺序播放
      if (window.currentIndex < allCards.length - 1) {
        nextIndex = window.currentIndex + 1;
      } else {
        nextIndex = 0; // 循环到第一张
      }

      window.currentIndex = nextIndex;
      renderCard(window.currentIndex);
    } else if (window.playbackMode === "random") {
      // 随机播放
      let randomIndex;

      // 普通随机播放
      if (allCards.length === 1) {
        // 只有一张卡片，无法切换
        randomIndex = 0;
      } else {
        do {
          randomIndex = Math.floor(Math.random() * allCards.length);
        } while (randomIndex === window.currentIndex); // 避免重复
      }

      window.currentIndex = randomIndex;
      renderCard(window.currentIndex);
    } else if (window.playbackMode === "favorites") {
      // 收藏播放模式下的顺序播放
      if (window.favorites.length > 0) {
        const currentFavIndex = window.favorites.indexOf(window.currentIndex);
        if (currentFavIndex >= 0 && currentFavIndex < window.favorites.length - 1) {
          window.currentIndex = window.favorites[currentFavIndex + 1];
        } else {
          // 当前是最后一张收藏或不在收藏列表中，跳到第一张收藏
          window.currentIndex = window.favorites[0];
        }
        renderCard(window.currentIndex);
      }
    }
  }, interval);
}

// 暂停播放（只暂停自动播放，不改变播放模式）
function pausePlayback() {
  if (window.playbackInterval) {
    clearInterval(window.playbackInterval);
    window.playbackInterval = null;
  }

  // 更新暂停按钮文字
  const pauseBtn = document.getElementById("pauseBtn");
  pauseBtn.textContent = "播放";
}

// 切换暂停/播放状态
function togglePause() {
  if (window.playbackInterval) {
    // 已在播放，点击暂停
    pausePlayback();
  } else {
    // 已暂停，点击播放
    // 检查当前播放模式
    if (window.playbackMode === "paused") {
      // 如果是初始状态，默认使用顺序播放
      window.playbackMode = "sequential";
      // 更新模式按钮文字
      const playModeBtn = document.getElementById("playModeBtn");
      playModeBtn.textContent = "顺序";
    }
    // 开始播放（保持当前播放模式不变）
    startPlayback();

    // 更新按钮状态
    updatePlaybackButtons(window.playbackMode);
    // 更新暂停按钮文字（永远保持蓝色，只改文字）
    const pauseBtn = document.getElementById("pauseBtn");
    pauseBtn.textContent = "暂停";
  }
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", initPage);
