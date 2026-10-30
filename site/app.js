

const GH_REPO = "sausi-7/games";
const DEFAULT_LOCALE = "fa";
const LOCALE_STORAGE_KEY = "language";
const I18N = {
  en: {
    "brand.name": "Games Fax Hub",
    "hero.titleLine1": "Welcome to the Big",
    "hero.titleLine2": "Fax Hub Entertainment Collection 🎮",
    "hero.subtitle": "140+ games, no installation required. Choose one and start playing! 🎮",
    "cta.playRandom": "Play random",
    "cta.browseAll": "Browse all",
    "search.placeholder": "Search games — name, tag, category…",
    "empty.noMatches": "No games match this search.",
    "empty.clearFilters": "Clear filters",
    "footer.builtBy": "Built by",
    "footer.collection": "Fax Hub Collection",
    "footer.language": "Language:",
    "footer.press": "Press",
    "footer.toSearch": "to search",
    "footer.toClose": "to close",
    "footer.forRandom": "for random",
    "language.english": "English",
    "language.hindi": "Hindi",
    "modal.defaultTitle": "—",
    "aria.toggleTheme": "Toggle theme",
    "aria.viewSourceGithub": "View source on GitHub",
    "aria.filterGames": "Filter games",
    "aria.categories": "Categories",
    "aria.toggleFullscreen": "Toggle fullscreen",
    "aria.restartGame": "Restart game",
    "aria.openInNewTab": "Open in new tab",
    "aria.close": "Close",
    "title.fullscreen": "Fullscreen",
    "title.restart": "Restart",
    "title.openInNewTab": "Open in new tab",
    "title.close": "Close",
    "title.game": "Game",
    "errors.registryLoad": "Couldn't load <code>games/registry.json</code>. Are you serving over HTTP? Try <code>python -m http.server</code>.",
    "stats.games": "games",
    "filters.all": "All",
    "card.tech.phaser": "Phaser",
    "card.tech.three": "Three.js",
    "card.tech.html": "HTML5",
    "card.aria.play": "Play {name}",
  },
  fa: {
    "brand.name": "Games Fax Hub",
    "hero.titleLine1": "به مجموعه بزرگ سرگرمی",
    "hero.titleLine2": "فکس هاب خوش آمدید 🎮",
    "hero.subtitle": "بیش از ۱۴۰ بازی، بدون نصب و کاملاً آماده‌ی بازی. انتخاب کن و شروع کن! 🎮",
    "cta.playRandom": "بازی تصادفی",
    "cta.browseAll": "مشاهده همه",
    "search.placeholder": "جستجوی بازی — نام، برچسب یا دسته‌بندی…",
    "empty.noMatches": "بازی‌ای با این جستجو پیدا نشد.",
    "empty.clearFilters": "پاک کردن فیلترها",
    "footer.builtBy": "ساخته‌شده توسط",
    "footer.collection": "مجموعه Fax hub",
    "footer.language": "زبان:",
    "footer.press": "کلید",
    "footer.toSearch": "برای جستجو",
    "footer.toClose": "برای بستن",
    "footer.forRandom": "برای بازی تصادفی",
    "language.english": "English",
    "language.persian": "فارسی",
    "modal.defaultTitle": "—",
    "aria.toggleTheme": "تغییر تم",
    "aria.viewSourceGithub": "مشاهده کد در GitHub",
    "aria.filterGames": "فیلتر بازی‌ها",
    "aria.categories": "دسته‌بندی‌ها",
    "aria.toggleFullscreen": "تمام‌صفحه",
    "aria.restartGame": "شروع دوباره بازی",
    "aria.openInNewTab": "باز کردن در تب جدید",
    "aria.close": "بستن",
    "title.fullscreen": "تمام‌صفحه",
    "title.restart": "شروع دوباره",
    "title.openInNewTab": "باز کردن در تب جدید",
    "title.close": "بستن",
    "title.game": "بازی",
    "errors.registryLoad": "فهرست بازی‌ها بارگذاری نشد. سایت را از طریق HTTP اجرا کنید.",
    "stats.games": "بازی",
    "filters.all": "همه",
    "card.tech.phaser": "Phaser",
    "card.tech.three": "Three.js",
    "card.tech.html": "HTML5",
    "card.aria.play": "اجرای {name}",
  },
  hi: {
    "brand.name": "गेम्स हब",
    "hero.titleLine1": "140+ गेम्स।",
    "hero.titleLine2": "एक रिपो। बिना किसी इंस्टॉलेशन के।",
    "hero.subtitle": "ब्राउज़र-आधारित HTML5 गेम्स का बढ़ता कलेक्शन — Phaser, Three.js और vanilla JS से बना। किसी भी कार्ड पर क्लिक करें और तुरंत खेलें।",
    "cta.playRandom": "रैंडम खेलें",
    "cta.browseAll": "सभी देखें",
    "search.placeholder": "गेम खोजें — नाम, टैग, श्रेणी…",
    "empty.noMatches": "इस खोज से कोई गेम नहीं मिला।",
    "empty.clearFilters": "फिल्टर हटाएं",
    "footer.builtBy": "निर्माता",
    "footer.collection": "Fax Hub Collection",
    "footer.language": "भाषा:",
    "footer.press": "दबाएं",
    "footer.toSearch": "खोजने के लिए",
    "footer.toClose": "बंद करने के लिए",
    "footer.forRandom": "रैंडम के लिए",
    "language.english": "अंग्रेज़ी",
    "language.hindi": "हिंदी",
    "modal.defaultTitle": "—",
    "aria.toggleTheme": "थीम बदलें",
    "aria.viewSourceGithub": "GitHub पर सोर्स देखें",
    "aria.filterGames": "गेम फिल्टर करें",
    "aria.categories": "श्रेणियां",
    "aria.toggleFullscreen": "फुलस्क्रीन बदलें",
    "aria.restartGame": "गेम रीस्टार्ट करें",
    "aria.openInNewTab": "नए टैब में खोलें",
    "aria.close": "बंद करें",
    "title.fullscreen": "फुलस्क्रीन",
    "title.restart": "रीस्टार्ट",
    "title.openInNewTab": "नए टैब में खोलें",
    "title.close": "बंद करें",
    "title.game": "गेम",
    "errors.registryLoad": "<code>games/registry.json</code> लोड नहीं हो सका। क्या आप HTTP सर्वर चला रहे हैं? <code>python -m http.server</code> आज़माएं।",
    "stats.games": "गेम्स",
    "filters.all": "सभी",
    "card.tech.phaser": "Phaser",
    "card.tech.three": "Three.js",
    "card.tech.html": "HTML5",
    "card.aria.play": "{name} खेलें",
  },
};

// per-category emoji used as the visual on cards
const CATEGORY_EMOJI_FALLBACK = {
  puzzle: "🧩",
  arcade: "🕹️",
  shooter: "🎯",
  racing: "🏎️",
  sports: "⚽",
  platformer: "🏃",
  casual: "🎈",
  board: "♟️",
  "word-quiz": "📝",
  "3d": "🌐",
};

// per-category gradient pair for the card art
const CATEGORY_GRAD = {
  puzzle:     ["#7c3aed", "#4c1d95"],
  arcade:     ["#ec4899", "#831843"],
  shooter:    ["#ef4444", "#7f1d1d"],
  racing:     ["#f59e0b", "#7c2d12"],
  sports:     ["#10b981", "#064e3b"],
  platformer: ["#06b6d4", "#0c4a6e"],
  casual:     ["#f472b6", "#831843"],
  board:      ["#64748b", "#1e293b"],
  "word-quiz":["#3b82f6", "#1e3a8a"],
  "3d":       ["#8b5cf6", "#4c1d95"],
};

// per-game emoji overrides (fall back to category emoji)
const GAME_EMOJI = {
  "2048": "🔢", "tetris": "🟦", "snake": "🐍", "curve-snake": "🐍",
  "snake-and-ladder": "🎲", "chess": "♟️", "ludo": "🎲", "tic-tac-toe": "⭕",
  "rock-paper-scissors": "✊", "carrom": "🪙", "sudoku": "🔢",
  "memory": "🧠", "memory-cards": "🧠", "pacman": "👻", "flappy": "🐤",
  "mario": "🍄", "doodle-jump": "⬆️", "bubble-shooter": "🫧", "bubble-pop": "🫧",
  "candy-crush": "🍬", "candy-crusher": "🍬", "fruit-merge": "🍇",
  "fruit-basket": "🧺", "fruit-cosmics": "🍓", "cooking": "👨‍🍳",
  "buttermilk": "🥛", "wordle": "🅰️", "words-of-wonder": "🔠",
  "math-quest": "➕", "quiz": "❓", "football": "⚽", "basketball": "🏀",
  "bowling": "🎳", "cricket-123": "🏏", "table-tennis": "🏓",
  "archer": "🏹", "penalty": "🥅",
  "bird-shooter": "🐦", "alien-battle": "👾", "fighter-jet": "✈️",
  "fighter-fury": "✈️", "sniper": "🔭", "shooter": "🔫", "shoot-enemy": "🎯",
  "cannon-blaster": "💥", "robot-destruction": "🤖", "vaccine-shooter": "💉",
  "tower-shooter": "🗼", "tee-shooter": "🏌️", "thunder-god": "⚡",
  "shadow-shooter": "🌑", "space-fighter": "🚀", "trench-defence": "🪖",
  "gunman": "🤠", "gun-run": "🔫", "projectile-enemy": "🎯",
  "survivor": "🧟",
  "car-race": "🏎️", "road-fighter": "🚗", "one-car": "🚙", "two-cars": "🚗",
  "two-cars-ai": "🤖", "endless-runner": "🏃", "forest-runner": "🌲",
  "shadow-runner": "🌑", "survival-run": "🏃", "straight-rush": "💨",
  "antigravity": "🌀", "cool-platformer": "🦘", "flip-jump": "🔄",
  "parkour": "🤸", "devil-king": "😈", "level-devil": "😈",
  "that-level-again-1": "🔁", "that-level-again-2": "🔁",
  "that-level-again-3": "🔁", "that-level-again-4": "🔁",
  "that-level-again-5": "🔁",
  "stack-tower": "🏗️", "cosmic-cleaner": "🧹", "orbital-outpost": "🛰️",
  "planet-visitor": "🪐", "planet-war": "🪐",
  "hex-puzzle": "⬡", "cut-rope": "✂️", "connected": "🔗", "link": "🔗",
  "laser-bounce": "💡", "circuit-bulb": "💡", "signal-circuit": "📡",
  "colour-pour": "🧪", "screw-master": "🔩", "shape-fitter": "🧩",
  "shape-collector": "🔷", "perfect-square": "⬜", "tile-tap": "🎹",
  "slide-puzzle": "🧩", "pathfinder": "🧭", "number-merge": "🔢",
  "four-dots": "🔵", "cargo-stack": "📦", "pairing": "🃏",
  "line-trap": "✏️", "unruly": "⚪", "6oct": "🔶", "square-one": "🔲",
  "circle-path": "⭕", "color-dash": "🎨", "balance-stack": "📚",
  "bomb-blast": "💣", "boom-dots": "💥", "bug-smasher": "🐛",
  "whack-a-bug": "🐞", "tap-target": "🎯", "kaiju-krush": "🦖",
  "crowd-control": "👥", "crossy-road": "🛣️", "road-cross": "🛣️",
  "red-light-green-light": "🚦", "glass-step": "🪟", "swipe-assassin": "🗡️",
  "fly-monkey": "🐒", "hungry-player": "😋", "jump-dot": "⬆️",
  "demon": "👹", "abhita": "✨", "ellars": "✨", "dream-weaver": "💭",
  "endless-mafia": "🕴️", "dodge-enemy": "💨", "dodge-master": "💨",
  "catch-me-if-you-can": "🏃", "collector": "💎", "pirates": "🏴‍☠️",
  "spaceman": "👨‍🚀", "space-waves": "🌊", "sky-high": "🪂",
  "luma-bounce": "🟡", "stick-game": "🪵", "stick-toss": "🪵",
  "breakoid": "🧱", "window-shooter": "🪟", "tile": "🎹",
};

const els = {
  grid: document.getElementById("grid"),
  empty: document.getElementById("empty"),
  search: document.getElementById("search-input"),
  filters: document.getElementById("filters"),
  stats: document.getElementById("stats"),
  themeToggle: document.getElementById("theme-toggle"),
  themeIcon: document.querySelector(".theme-icon"),
  starCount: document.getElementById("star-count"),
  randomBtn: document.getElementById("random-game"),
  clearFilters: document.getElementById("clear-filters"),
  modal: document.getElementById("modal"),
  modalTitle: document.getElementById("modal-title"),
  modalChip: document.getElementById("modal-chip"),
  modalFrame: document.getElementById("modal-frame"),
  modalOpen: document.getElementById("modal-open"),
  modalReload: document.getElementById("modal-reload"),
  modalFs: document.getElementById("modal-fullscreen"),
  languageSelect: document.getElementById("language-select"),
};

const state = {
  games: [],
  categories: [],
  q: "",
  category: "all",
  locale: DEFAULT_LOCALE,
  renderedCardsLocale: null,
};

// ---------- Init ----------
init();

async function init() {
  state.locale = loadLanguage();
  document.documentElement.lang = state.locale;
  document.documentElement.dir = state.locale === "fa" ? "rtl" : "ltr";
  loadTheme();
  applyI18n();
  if (els.languageSelect) els.languageSelect.value = state.locale;
  attachUiEvents();

  try {
    const res = await fetch("games/registry.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`registry fetch ${res.status}`);
    const data = await res.json();
    state.games = data.games || [];
    state.categories = data.categories || [];
  } catch (err) {
    console.error("Failed to load registry:", err);
    els.grid.innerHTML = `<p style="grid-column:1/-1;color:var(--text-dim);text-align:center;padding:40px">
      ${t("errors.registryLoad")}</p>`;
    return;
  }

  renderStats();
  renderFilters();
  renderGrid();
  hydrateFromHash();
  fetchStarCount();
}

// ---------- Theme ----------
function loadTheme() {
  const saved = localStorage.getItem("theme");
  const initial = saved || "light";
  setTheme(initial);
}
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  els.themeIcon.textContent = t === "light" ? "☀️" : "🌙";
  localStorage.setItem("theme", t);
}

// ---------- UI events ----------
function attachUiEvents() {
  if (els.languageSelect) {
    els.languageSelect.addEventListener("change", (e) => {
      const lang = e.target.value === "en" ? "en" : "fa";
      setLanguage(lang);
      state.renderedCardsLocale = null;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
      applyI18n(document);
      renderStats();
      renderFilters();
      renderGrid();
      if (typeof faxRenderShelves === "function") faxRenderShelves();
      if (typeof faxLabels === "function") faxLabels();
    });
  }
  els.themeToggle.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
  });
  let searchFrame = 0;
  els.search.addEventListener("input", (e) => {
    state.q = e.target.value.trim().toLowerCase();
    cancelAnimationFrame(searchFrame);
    searchFrame = requestAnimationFrame(() => renderGrid());
  });
  els.randomBtn.addEventListener("click", playRandom);
  if (els.clearFilters) {
    els.clearFilters.addEventListener("click", () => {
      state.q = "";
      state.category = "all";
      els.search.value = "";
      renderFilters();
      renderGrid();
    });
  }

  // Modal close buttons
  els.modal.querySelectorAll("[data-close]").forEach((el) =>
    el.addEventListener("click", closeModal)
  );
  els.modalReload.addEventListener("click", () => {
    const src = els.modalFrame.getAttribute("src");
    els.modalFrame.setAttribute("src", "about:blank");
    requestAnimationFrame(() => els.modalFrame.setAttribute("src", src));
  });
  els.modalFs.addEventListener("click", () => {
    const target = els.modal.querySelector(".modal__panel");
    if (!document.fullscreenElement) target.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.modal.hidden) {
      closeModal();
      return;
    }
    if (e.target.matches("input, textarea")) return;
    if (e.key === "/") { e.preventDefault(); els.search.focus(); }
    else if (e.key.toLowerCase() === "r" && els.modal.hidden) playRandom();
  });

  // Hash changes
  window.addEventListener("hashchange", hydrateFromHash);
}

// Locale helpers used by every dynamically-rendered section.
function faxNum(value) { return Number(value).toLocaleString("en-US"); }
function faxTechLabel(tech) {
  if (state.locale === "fa") return tech === "phaser" ? "فیزر" : tech === "three" ? "تری‌جی‌اس" : "اچ‌تی‌ام‌ال۵";
  return tech === "phaser" ? "Phaser" : tech === "three" ? "Three.js" : "HTML5";
}

// ---------- Stats ----------
function renderStats() {
  const counts = {};
  for (const g of state.games) counts[g.category] = (counts[g.category] || 0) + 1;
  const top = state.categories
    .map((c) => ({ c, n: counts[c.id] || 0 }))
    .sort((a, b) => b.n - a.n)
    .slice(0, 4);
  els.stats.innerHTML = `
    <span class="stat"><span class="stat__num">${faxNum(state.games.length)}</span> ${t("stats.games")}</span>
    ${top.map(({ c, n }) => `<span class="stat"><span class="stat__num">${faxNum(n)}</span> ${c.emoji} ${escapeHtml(faxLocalizedCategoryLabel(c))}</span>`).join("")}
  `;
}

// ---------- Filters ----------
const FAX_CATEGORY_LABELS_FA = {
  "puzzle": "معمایی",
  "arcade": "آرکید",
  "shooter": "تیراندازی",
  "racing": "مسابقه‌ای",
  "sports": "ورزشی",
  "platformer": "سکوبازی",
  "casual": "تفننی",
  "board": "تخته‌ای",
  "word-quiz": "کلمات و آزمون",
  "3d": "سه‌بعدی"
};

function faxLocalizedCategoryLabel(category) {
  if (state.locale === "fa") {
    return FAX_CATEGORY_LABELS_FA[category.id] || category.label || category.id;
  }
  return category.label || category.id;
}

function renderFilters() {
  const counts = {};
  for (const g of state.games) counts[g.category] = (counts[g.category] || 0) + 1;
  const all = `<button class="chip" type="button" data-cat="all" aria-pressed="${state.category === "all"}">
    ${t("filters.all")} <span class="chip__count">${faxNum(state.games.length)}</span>
  </button>`;
  const cats = state.categories
    .map((c) => `<button class="chip" type="button" data-cat="${c.id}" aria-pressed="${state.category === c.id}">
      <span aria-hidden="true">${c.emoji}</span> ${escapeHtml(faxLocalizedCategoryLabel(c))}
      <span class="chip__count">${faxNum(counts[c.id] || 0)}</span>
    </button>`)
    .join("");
  const favCount = faxJson(FAX_FAV_KEY, []).length;
  const favorites = `<button class="chip" type="button" data-cat="favorites" aria-pressed="${state.category === "favorites"}">
    ❤️ ${state.locale === "fa" ? "علاقه‌مندی‌ها" : "Favorites"} <span class="chip__count">${faxNum(favCount)}</span>
  </button>`;
  els.filters.innerHTML = all + favorites + cats;
  els.filters.querySelectorAll(".chip").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      renderFilters();
      renderGrid();
    })
  );
}


function localizedGame(g) {
  if (state.locale !== "fa") {
    const category = state.categories.find((c) => c.id === g.category) || {id:g.category,label:g.category};
    return {
      name: g.name || g.slug,
      description: g.description || "",
      category: category.label || category.id,
      tags: (g.tags || []).filter(tag => !/[\u0600-\u06FF]/.test(tag))
    };
  }
  const fa = g.i18n?.fa || {};
  return {
    name: fa.name || g.name,
    description: fa.description || g.description || "",
    category: fa.category || faxLocalizedCategoryLabel(state.categories.find((c) => c.id === g.category) || {id:g.category,label:g.category}),
    tags: fa.tags || g.tags || []
  };
}

// ---------- Grid ----------
function renderGrid() {
  const filtered = state.games.filter((g) => {
    if (state.category !== "all" && g.category !== state.category) return false;
    if (!state.q) return true;
    const lg = localizedGame(g);
    const hay = `${g.name} ${g.category} ${(g.tags || []).join(" ")} ${g.description} ${lg.name} ${lg.category} ${(lg.tags || []).join(" ")} ${lg.description}`.toLowerCase();
    return hay.includes(state.q);
  });

  if (!filtered.length) {
    els.grid.innerHTML = "";
    els.empty.hidden = false;
    return;
  }
  els.empty.hidden = true;

  els.grid.innerHTML = filtered.map(renderCard).join("");
  els.grid.querySelectorAll(".card").forEach((card) =>
    card.addEventListener("click", () => openGame(card.dataset.slug))
  );
}

function renderCard(g) {
  const emoji = GAME_EMOJI[g.slug] || CATEGORY_EMOJI_FALLBACK[g.category] || "🎮";
  const grad = CATEGORY_GRAD[g.category] || ["#444", "#222"];
  const cat = state.categories.find((c) => c.id === g.category);
  const lg = localizedGame(g);
  const techLabel = faxTechLabel(g.tech);
  return `
    <button class="card" data-slug="${g.slug}" data-category="${g.category}"
      style="--card-c1:${grad[0]};--card-c2:${grad[1]}" aria-label="${escapeAttr(t("card.aria.play", { name: lg.name }))}">
      <div class="card__art">
        <span class="card__emoji" aria-hidden="true">${emoji}</span>
        <span class="card__play" aria-hidden="true">▶</span>
      </div>
      <div class="card__body">
        <h3 class="card__title">${escapeHtml(lg.name)}</h3>
        <p class="card__desc">${escapeHtml(lg.description || "")}</p>
        <div class="card__meta">
          <span class="card__chip">${cat?.emoji || ""} ${escapeHtml(lg.category)}</span>
          <span class="card__tech">${techLabel}</span>
        </div>
      </div>
    </button>
  `;
}

// ---------- Modal player ----------
function openGame(slug) {
  const g = state.games.find((x) => x.slug === slug);
  if (!g) return;
  const cat = state.categories.find((c) => c.id === g.category);
  els.modalTitle.textContent = g.name;
  els.modalChip.textContent = `${cat?.emoji || ""} ${faxLocalizedCategoryLabel(cat || {id:g.category,label:g.category})}`;
  els.modalChip.style.background = CATEGORY_GRAD[g.category]?.[0] || "var(--accent)";
  els.modalFrame.setAttribute("src", g.path);
  els.modalOpen.setAttribute("href", g.path);
  els.modal.hidden = false;
  document.body.style.overflow = "hidden";
  if (location.hash !== `#play=${slug}`) {
    history.replaceState(null, "", `#play=${slug}`);
  }
}

function closeModal() {
  els.modal.hidden = true;
  els.modalFrame.setAttribute("src", "about:blank");
  document.body.style.overflow = "";
  if (location.hash.startsWith("#play=")) {
    history.replaceState(null, "", location.pathname + location.search);
  }
  if (document.fullscreenElement) document.exitFullscreen?.();
}

function hydrateFromHash() {
  const m = location.hash.match(/^#play=([\w-]+)/);
  if (m) openGame(m[1]);
  else if (!els.modal.hidden) closeModal();
}

function playRandom() {
  if (!state.games.length) return;
  const pool = state.category === "all"
    ? state.games
    : state.games.filter((g) => g.category === state.category);
  const pick = pool[Math.floor(Math.random() * pool.length)];
  openGame(pick.slug);
}

// ---------- Star count (cached 1h) ----------
async function fetchStarCount() {
  const cached = readCache("gh_stars", 60 * 60 * 1000);
  if (cached != null) return showStars(cached);
  try {
    const res = await fetch(`https://api.github.com/repos/${GH_REPO}`);
    if (!res.ok) return;
    const data = await res.json();
    if (typeof data.stargazers_count === "number") {
      writeCache("gh_stars", data.stargazers_count);
      showStars(data.stargazers_count);
    }
  } catch {}
}
function showStars(n) {
  els.starCount.hidden = false;
  els.starCount.querySelector("em").textContent = formatNum(n);
}
function readCache(key, maxAgeMs) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { v, t } = JSON.parse(raw);
    if (Date.now() - t > maxAgeMs) return null;
    return v;
  } catch { return null; }
}
function writeCache(key, v) {
  try { localStorage.setItem(key, JSON.stringify({ v, t: Date.now() })); } catch {}
}
function formatNum(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
}

// ---------- Helpers ----------
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

function loadLanguage() {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved && I18N[saved]) return saved;
  return DEFAULT_LOCALE;
}

function setLanguage(locale) {
  state.locale = I18N[locale] ? locale : DEFAULT_LOCALE;
  localStorage.setItem(LOCALE_STORAGE_KEY, state.locale);
  document.documentElement.lang = state.locale;
}

function t(key, vars = {}) {
  const dict = I18N[state.locale] || I18N[DEFAULT_LOCALE];
  let text = dict[key] ?? key;
  for (const [name, value] of Object.entries(vars)) {
    text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}

function applyI18n(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
  });
  root.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle));
  });
}


/* Games Fax Hub: isolated settings add-on. Original game/card code above is unchanged. */
(() => {
  const THEMES = {
    default:["#f5f6fb","#ffffff","#7c87ff","#171827"],
    dark:["#15161c","#202129","#8b93ff","#f6f7fb"],
    midnight:["#07111f","#0d1b2d","#4f8cff","#eaf2ff"],
    neon:["#080b0d","#101719","#00f5a0","#ecfff9"],
    ocean:["#eaf8ff","#ffffff","#0077b6","#073b4c"],
    purple:["#f5efff","#ffffff","#7b2cbf","#29143d"],
    emerald:["#effcf6","#ffffff","#059669","#12372a"],
    sunset:["#fff5ed","#ffffff","#f97316","#431407"],
    rose:["#fff1f5","#ffffff","#e11d48","#4c0519"],
    cyber:["#0c0715","#171025","#f000ff","#fff7ff"]
  };
  const names={default:"Default",dark:"Dark",midnight:"Midnight",neon:"Neon",ocean:"Ocean",purple:"Purple",emerald:"Emerald",sunset:"Sunset",rose:"Rose",cyber:"Cyber"};
  const box=document.getElementById("fax-settings"), open=document.getElementById("fax-settings-toggle"), grid=document.getElementById("fax-theme-grid");
  if(!box||!open||!grid) return;

  function applyTheme(vals, save=true){
    const [bg,card,accent,text]=vals;
    document.documentElement.style.setProperty("--fax-bg",bg);
    document.documentElement.style.setProperty("--fax-card",card);
    document.documentElement.style.setProperty("--fax-accent",accent);
    document.documentElement.style.setProperty("--fax-text",text);
    document.documentElement.classList.add("fax-themed");
    if(save) localStorage.setItem("faxThemeValues",JSON.stringify(vals));
  }
  Object.entries(THEMES).forEach(([k,v])=>{
    const b=document.createElement("button");
    b.type="button"; b.className="fax-theme"; b.dataset.theme=k;
    b.innerHTML=`<span><i style="background:${v[0]}"></i><i style="background:${v[2]}"></i><i style="background:${v[1]}"></i></span><b>${names[k]}</b>`;
    b.onclick=()=>{applyTheme(v);localStorage.setItem("faxThemeName",k)};
    grid.appendChild(b);
  });
  open.onclick=()=>{box.hidden=false};
  box.querySelectorAll("[data-fax-close]").forEach(x=>x.onclick=()=>box.hidden=true);

  function setLang(lang){
    lang=lang==="en"?"en":"fa";
    localStorage.setItem("language",lang);
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==="fa"?"rtl":"ltr";
    const aboutLink=document.getElementById("about-link");
    if(aboutLink){
      const label=lang==="fa"?"درباره ما":"About Us";
      aboutLink.setAttribute("aria-label",label);
      aboutLink.setAttribute("title",label);
    }
    if(typeof setLanguage==="function" && typeof applyI18n==="function"){
      setLanguage(lang);
      state.locale = lang;
      state.renderedCardsLocale = null;
      applyI18n(document);
      if(typeof renderStats==="function") renderStats();
      if(typeof renderFilters==="function") renderFilters();
      if(typeof renderGrid==="function") renderGrid();
      if(typeof faxRenderShelves==="function") faxRenderShelves();
      if(typeof faxLabels==="function") faxLabels();
      const original=document.getElementById("language-select");
      if(original) original.value=lang;
    }
    document.getElementById("fax-settings-title").textContent=lang==="fa"?"تنظیمات":"Settings";
    document.getElementById("fax-language-title").textContent=lang==="fa"?"🌐 زبان":"🌐 Language";
    document.getElementById("fax-theme-title").textContent=lang==="fa"?"🎨 تم":"🎨 Theme";
    document.getElementById("fax-custom-title").textContent=lang==="fa"?"ساخت تم اختصاصی":"Custom theme";
    // Update all static and dynamic UI in-place; do not depend on a reload or
    // a potentially stale Service Worker response to change card languages.
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    if (typeof renderStats === "function") renderStats();
    if (typeof renderFilters === "function") renderFilters();
    if (typeof renderGrid === "function") renderGrid();
    if (typeof faxRenderShelves === "function") faxRenderShelves();
    if (typeof faxLabels === "function") faxLabels();
    const search = document.getElementById("search");
    if (search) search.placeholder = lang === "fa" ? "جستجوی بازی — نام، برچسب یا دسته‌بندی…" : "Search games — name, tag, category…";
    const settingsButton = document.getElementById("fax-settings-toggle");
    if (settingsButton) { settingsButton.title = lang === "fa" ? "تنظیمات" : "Settings"; settingsButton.setAttribute("aria-label", settingsButton.title); }
    const fullscreenButton = document.getElementById("page-fullscreen-toggle");
    if (fullscreenButton) { fullscreenButton.title = lang === "fa" ? "تمام‌صفحه" : "Fullscreen"; fullscreenButton.setAttribute("aria-label", fullscreenButton.title); }
  }
  box.querySelectorAll("[data-fax-lang]").forEach(b=>b.onclick=()=>setLang(b.dataset.faxLang));

  document.getElementById("fax-apply-custom").onclick=()=>{
    const c={}; box.querySelectorAll("[data-fax-color]").forEach(i=>c[i.dataset.faxColor]=i.value);
    applyTheme([c.bg,c.card,c.accent,c.text]); localStorage.setItem("faxThemeName","custom");
  };
  document.getElementById("fax-reset-theme").onclick=()=>{applyTheme(THEMES.default);localStorage.setItem("faxThemeName","default")};

  try{
    const saved=JSON.parse(localStorage.getItem("faxThemeValues")||"null");
    if(saved) applyTheme(saved,false);
  }catch(e){}
  // Persian on first visit only; preserve user's previous selection afterward.
  if(!localStorage.getItem("language")) localStorage.setItem("language","fa");
})();


/* v11: favorites, recent/popular, advanced filters, game info/share, backup and PWA */
const FAX_FAV_KEY="faxFavorites", FAX_RECENT_KEY="faxRecent", FAX_PLAYS_KEY="faxPlayCounts";
function faxJson(key, fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
function faxSave(key,v){localStorage.setItem(key,JSON.stringify(v))}
let faxFavCache=new Set(faxJson(FAX_FAV_KEY,[]));
function faxFavs(){return faxFavCache}
function faxIsFav(slug){return faxFavCache.has(slug)}
function faxToggleFav(slug,button){
  const wasFav=faxFavCache.has(slug);
  wasFav?faxFavCache.delete(slug):faxFavCache.add(slug);
  faxSave(FAX_FAV_KEY,[...faxFavCache]);

  // Instant visual response; don't rebuild all 142 cards on every tap.
  if(button){
    const active=!wasFav;
    button.classList.toggle("is-active",active);
    button.setAttribute("aria-pressed",String(active));
    button.innerHTML=`<span class="fax-fav-icon">${active?"♥":"♡"}</span>`;
  }

  renderFilters();
  if(state.category==="favorites"){
    const card=button?.closest(".fax-card");
    if(card && wasFav){
      card.classList.add("fax-card-removing");
      setTimeout(()=>renderGrid(),140);
    }else{
      renderGrid();
    }
  }
}
function faxTrack(slug){let r=faxJson(FAX_RECENT_KEY,[]).filter(x=>x!==slug);r.unshift(slug);faxSave(FAX_RECENT_KEY,r.slice(0,8));let p=faxJson(FAX_PLAYS_KEY,{});p[slug]=(p[slug]||0)+1;faxSave(FAX_PLAYS_KEY,p);faxRenderShelves()}
function faxFiltered(){
  return state.games.filter(g=>{
    if(state.category==="favorites" && !faxIsFav(g.slug)) return false;
    if(state.category!=="all" && state.category!=="favorites" && g.category!==state.category) return false;
    if(!state.q) return true;
    const lg=localizedGame(g),hay=`${g.name} ${g.category} ${(g.tags||[]).join(" ")} ${g.description||""} ${lg.name} ${lg.category} ${(lg.tags||[]).join(" ")} ${lg.description||""}`.toLowerCase();
    return hay.includes(state.q);
  });
}
// Reconcile cards by slug instead of rebuilding the entire grid on every search/filter.
function renderGrid(){
  const filtered=faxFiltered();
  els.empty.hidden=filtered.length>0;
  // Existing card nodes are intentionally reused for performance. Their text
  // must be rebuilt once when the locale changes, otherwise they retain the
  // previous language until a full page refresh.
  if(state.renderedCardsLocale !== state.locale){
    // Clear every direct child (including any legacy card markup) before
    // rebuilding from the current locale. This is intentionally limited to
    // language changes; search and favorite updates still reuse card nodes.
    els.grid.replaceChildren();
    state.renderedCardsLocale = state.locale;
  }
  const wanted=new Set(filtered.map(g=>g.slug));
  const existing=new Map([...els.grid.querySelectorAll(":scope > .fax-card")].map(card=>[card.dataset.slug,card]));
  for(const [slug,card] of existing){if(!wanted.has(slug))card.remove();}
  // Only insert nodes whose position actually changed; unchanged cards stay untouched.
  filtered.forEach((game,index)=>{
    let card=existing.get(game.slug);
    if(!card){const holder=document.createElement("div");holder.innerHTML=renderCard(game);card=holder.firstElementChild;faxWireCards(card);}
    const at=els.grid.children[index];
    if(at!==card)els.grid.insertBefore(card,at||null);
  });
}
function renderCard(g){
  const emoji=GAME_EMOJI[g.slug]||CATEGORY_EMOJI_FALLBACK[g.category]||"🎮",
    grad=CATEGORY_GRAD[g.category]||["#444","#222"],
    cat=state.categories.find(c=>c.id===g.category),
    lg=localizedGame(g),
    tech=faxTechLabel(g.tech),
    fav=faxIsFav(g.slug),
    favLabel=state.locale==="fa"?(fav?"حذف از علاقه‌مندی‌ها":"افزودن به علاقه‌مندی‌ها"):(fav?"Remove from favorites":"Add to favorites"),
    infoLabel=state.locale==="fa"?"اطلاعات بازی":"Game info";
  return `<article class="card fax-card" data-slug="${g.slug}" data-category="${g.category}" style="--card-c1:${grad[0]};--card-c2:${grad[1]}">
    <div class="fax-card-actions">
      <button class="fax-card-action fax-fav${fav?" is-active":""}" type="button" data-fav="${g.slug}" aria-label="${favLabel}" title="${favLabel}" aria-pressed="${fav}">
        <span class="fax-fav-icon">${fav?"♥":"♡"}</span>
      </button>
      <button class="fax-card-action fax-info-btn" type="button" data-info="${g.slug}" aria-label="${infoLabel}" title="${infoLabel}">
        <span class="fax-info-icon">i</span>
      </button>
    </div>
    <button class="fax-card-main" type="button" data-play="${g.slug}" aria-label="${escapeAttr(t("card.aria.play",{name:lg.name}))}">
      <div class="card__art"><span class="card__emoji">${emoji}</span><span class="card__play">▶</span></div>
      <div class="card__body"><h3 class="card__title">${escapeHtml(lg.name)}</h3><p class="card__desc">${escapeHtml(lg.description||"")}</p><div class="card__meta"><span class="card__chip">${cat?.emoji||""} ${escapeHtml(lg.category)}</span><span class="card__tech">${tech}</span></div></div>
    </button>
  </article>`
}
function faxWireCards(root){root.querySelectorAll("[data-play]").forEach(b=>b.onclick=()=>openGame(b.dataset.play));root.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();faxToggleFav(b.dataset.fav,b)});root.querySelectorAll("[data-info]").forEach(b=>b.onclick=e=>{e.stopPropagation();faxShowInfo(b.dataset.info)})}
function openGame(slug){const g=state.games.find(x=>x.slug===slug);if(!g)return;faxTrack(slug);const cat=state.categories.find(c=>c.id===g.category),lg=localizedGame(g);els.modalTitle.textContent=lg.name;els.modalChip.textContent=`${cat?.emoji||""} ${lg.category}`;els.modalChip.style.background=CATEGORY_GRAD[g.category]?.[0]||"var(--accent)";els.modalFrame.setAttribute("src",g.path);els.modalOpen.setAttribute("href",g.path);els.modal.hidden=false;document.body.style.overflow="hidden";if(location.hash!==`#play=${slug}`)history.replaceState(null,"",`#play=${slug}`)}
function playRandom(){let pool=faxFiltered();const rc=document.getElementById("random-category")?.value||"all";if(rc!=="all")pool=pool.filter(g=>g.category===rc);if(!pool.length)pool=state.games;if(pool.length)openGame(pool[Math.floor(Math.random()*pool.length)].slug)}
function faxMini(g,count){const lg=localizedGame(g);return `<button class="fax-mini" data-play="${g.slug}"><span>${GAME_EMOJI[g.slug]||CATEGORY_EMOJI_FALLBACK[g.category]||"🎮"}</span><b>${escapeHtml(lg.name)}</b>${count?`<small>▶ ${faxNum(count)}</small>`:""}</button>`}
function faxRenderShelves(){const recent=faxJson(FAX_RECENT_KEY,[]).map(s=>state.games.find(g=>g.slug===s)).filter(Boolean).slice(0,6),p=faxJson(FAX_PLAYS_KEY,{}),popular=Object.entries(p).sort((a,b)=>b[1]-a[1]).map(([s,n])=>[state.games.find(g=>g.slug===s),n]).filter(x=>x[0]).slice(0,6);const rs=document.getElementById("recent-shelf"),ps=document.getElementById("popular-shelf"),rg=document.getElementById("recent-grid"),pg=document.getElementById("popular-grid");if(rs){rs.hidden=!recent.length;rg.innerHTML=recent.map(g=>faxMini(g)).join("");faxWireCards(rg)}if(ps){ps.hidden=!popular.length;pg.innerHTML=popular.map(([g,n])=>faxMini(g,n)).join("");faxWireCards(pg)}}
let faxInfoSlug=null;function faxShowInfo(slug){const g=state.games.find(x=>x.slug===slug);if(!g)return;faxInfoSlug=slug;const lg=localizedGame(g),cat=state.categories.find(c=>c.id===g.category);document.getElementById("game-info-content").innerHTML=`<div class="fax-info-emoji">${GAME_EMOJI[g.slug]||CATEGORY_EMOJI_FALLBACK[g.category]||"🎮"}</div><h2>${escapeHtml(lg.name)}</h2><p>${escapeHtml(lg.description||"")}</p><p><b>${cat?.emoji||""} ${escapeHtml(lg.category)}</b> · ${escapeHtml(faxTechLabel(g.tech))}</p><div class="fax-tags">${(lg.tags||[]).map(x=>`<span>${escapeHtml(x)}</span>`).join("")}</div>`;document.getElementById("game-info").hidden=false}
function faxCloseInfo(){document.getElementById("game-info").hidden=true}
function faxShare(){if(!faxInfoSlug)return;const g=state.games.find(x=>x.slug===faxInfoSlug),url=`${location.origin}${location.pathname}#play=${faxInfoSlug}`,data={title:g?.name||"Games Fax Hub",text:g?.description||"",url};if(navigator.share)navigator.share(data).catch(()=>{});else navigator.clipboard?.writeText(url).then(()=>alert(state.locale==="fa"?"لینک کپی شد ✓":"Link copied ✓"))}
function faxSetupPageFullscreen(){
  const button=document.getElementById("page-fullscreen-toggle");
  if(!button)return;
  const fa=()=>state.locale==="fa";
  const sync=()=>{const active=!!document.fullscreenElement;button.textContent=active?"⤢":"⛶";button.title=active?(fa()?"خروج از تمام‌صفحه":"Exit fullscreen"):(fa()?"تمام‌صفحه":"Fullscreen");button.setAttribute("aria-label",button.title);button.setAttribute("aria-pressed",String(active));};
  button.addEventListener("click",async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(_){button.title=fa()?"تمام‌صفحه در این مرورگر پشتیبانی نمی‌شود":"Fullscreen is not supported by this browser";}});
  document.addEventListener("fullscreenchange",sync);sync();
}
function faxSetupV11(){document.getElementById("modal-back").onclick=closeModal;document.getElementById("modal-info").onclick=()=>{const m=location.hash.match(/^#play=([\w-]+)/);if(m)faxShowInfo(m[1])};document.querySelectorAll("[data-info-close]").forEach(x=>x.onclick=faxCloseInfo);document.getElementById("info-play").onclick=()=>{faxCloseInfo();openGame(faxInfoSlug)};document.getElementById("info-share").onclick=faxShare;faxRenderShelves();faxSetupBackup();faxSetupInstall();faxSetupPageFullscreen();faxLabels()}
function faxLabels(){const fa=state.locale==="fa",set=(id,s)=>{const e=document.getElementById(id);if(e)e.textContent=s};set("recent-title",fa?"🕘 اخیراً بازی‌شده":"🕘 Recently played");set("popular-title",fa?"🔥 محبوب‌ترین‌ها روی این دستگاه":"🔥 Most played on this device");set("modal-back",fa?"← بازگشت":"← Back");set("modal-info",fa?"ⓘ اطلاعات":"ⓘ Info");set("fax-data-title",fa?"💾 اطلاعات و نصب":"💾 Data & install");set("fax-export",fa?"خروجی تنظیمات":"Export data");set("fax-import",fa?"ورود تنظیمات":"Import data");document.querySelectorAll(".fax-theme").forEach(b=>{const k=b.dataset.theme;const faNames={default:"پیش‌فرض",dark:"تیره",midnight:"نیمه‌شب",neon:"نئونی",ocean:"اقیانوسی",purple:"بنفش",emerald:"زمردی",sunset:"غروب",rose:"رز",cyber:"سایبری"};const enNames={default:"Default",dark:"Dark",midnight:"Midnight",neon:"Neon",ocean:"Ocean",purple:"Purple",emerald:"Emerald",sunset:"Sunset",rose:"Rose",cyber:"Cyber"};const label=b.querySelector("b");if(label)label.textContent=(fa?faNames:enNames)[k]||k});set("fax-apply-custom",fa?"اعمال تم اختصاصی":"Apply custom theme");set("fax-reset-theme",fa?"بازنشانی":"Reset");set("info-play",fa?"▶ بازی":"▶ Play");set("info-share",fa?"🔗 اشتراک‌گذاری":"🔗 Share");set("fax-install",fa?"📱 نصب Games Fax Hub":"📱 Install Games Fax Hub");document.querySelectorAll("[data-fax-color]").forEach(input=>{const label=input.closest("label");if(label){const names=fa?{bg:"پس‌زمینه",card:"کارت",accent:"رنگ اصلی",text:"متن"}:{bg:"Background",card:"Card",accent:"Accent",text:"Text"};label.childNodes[0].textContent=names[input.dataset.faxColor]+" "}})}
function faxSetupBackup(){document.getElementById("fax-export").onclick=()=>{const keys=["language","theme","faxThemeValues","faxThemeName",FAX_FAV_KEY,FAX_RECENT_KEY,FAX_PLAYS_KEY],data={version:1,app:"Games Fax Hub"};keys.forEach(k=>data[k]=localStorage.getItem(k));const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));a.download="games-fax-hub-backup.json";a.click();URL.revokeObjectURL(a.href)};const input=document.getElementById("fax-import-file");document.getElementById("fax-import").onclick=()=>input.click();input.onchange=async()=>{try{const d=JSON.parse(await input.files[0].text());if(d.app!=="Games Fax Hub")throw 0;Object.entries(d).forEach(([k,v])=>{if(!["version","app"].includes(k)&&v!==null)localStorage.setItem(k,v)});location.reload()}catch{alert("Invalid backup file")}}}
let faxInstallPrompt=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();faxInstallPrompt=e;document.getElementById("fax-install")?.removeAttribute("disabled")});function faxSetupInstall(){const b=document.getElementById("fax-install");b.disabled=!faxInstallPrompt;b.onclick=async()=>{if(faxInstallPrompt){faxInstallPrompt.prompt();await faxInstallPrompt.userChoice;faxInstallPrompt=null}else alert(state.locale==="fa"?"اگر مرورگر اجازه نصب بدهد، گزینه نصب اینجا فعال می‌شود. سایت باید روی localhost یا HTTPS اجرا شود.":"Install becomes available here when supported. Serve the site on localhost or HTTPS.")};if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{})}
const faxOldInit=init; // init has already been called above; attach after registry finishes
window.addEventListener("load",()=>{const wait=setInterval(()=>{if(state.games.length){clearInterval(wait);faxSetupV11()}},80);setTimeout(()=>clearInterval(wait),10000)});
