const ToggleButton = document.getElementById('toggle-exp') as HTMLButtonElement
const Experience = document.getElementById('experience') as HTMLElement

ToggleButton.addEventListener("click", () => {
  if(Experience.style.display === 'none'){
    Experience.style.display = 'block'
  }else{
    Experience.style.display = 'none'
  }
})

const darkModeButton = document.getElementById('toggle-dark') as HTMLButtonElement

const DarkMode = document.getElementsByTagName('body')

darkModeButton.addEventListener('click', () => {
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode')
    }else{
        document.body.classList.add('dark-mode')
    }
})
