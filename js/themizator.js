const themizator = (function () {


  window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    const mediaTheme = window.matchMedia('(prefers-color-scheme:light').matches ? 'light' : 'dark';
    const theme = storedTheme || mediaTheme;
    setTheme(theme);
    setThemeImage(theme);
  });

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const theme = (currentTheme === 'dark') ? 'light' : 'dark';
    setTheme(theme);
    setThemeImage(theme);
  }

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  function setThemeImage(theme) {
    const image = document.getElementById('theme-image');
    if (!image) return;
    image.src = (theme === 'light') ? '../svg/moon.svg' : '../svg/sun.svg';
    image.alt = (theme === 'light') ? 'Dark' : 'Light';
  }

  return {
    toggleTheme: toggleTheme,
  };
}());
