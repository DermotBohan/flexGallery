function toggleActive(e) {
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

function toggleOpen(){
  this.classList.toggle('open');
}

const panels = document.querySelectorAll('.panel');

for (var i = 0; i < panels.length; i++) {
  panels[i].addEventListener('click', toggleOpen);
  panels[i].addEventListener('transitionend', toggleActive);
}
// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
