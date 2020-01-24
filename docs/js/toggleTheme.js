let toggleTheme = function() {
  if (isDark) {
    for (let key in darkTheme) {
      let elems = document.querySelectorAll(`.${darkTheme[key]}`);
      elems.forEach(elem => elem.classList.add(lightTheme[key]));
      elems.forEach(elem => elem.classList.remove(darkTheme[key]));
      themeColor.content = "#000000"
    }
    isDark = !isDark;
  } else {
    for (let key in darkTheme) {
      let elems = document.querySelectorAll(`.${darkTheme[key]}`);
      elems.forEach(elem => elem.classList.add(lightTheme[key]));
      elems.forEach(elem => elem.classList.remove(darkTheme[key]));
      themeColor.content = "#000000"
    }
    isDark = !isDark;
  }
};
