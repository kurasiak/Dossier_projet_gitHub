function CheckboxDarkMod() {
  const CHECKBOX_DARK_MOD = document.getElementById('changeLightModToDarkMod')
  const ROOT = document.documentElement

  CHECKBOX_DARK_MOD.addEventListener('click', () => {
    const SET_THEME = CHECKBOX_DARK_MOD.checked ? 'dark' : 'light'
    ROOT.setAttribute('data-theme', SET_THEME)
  })
}