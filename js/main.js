class Highlight {
  constructor(props) {
    this.target = document.querySelectorAll(props)
  }
  active(props, path) {
    this.location = /\w+/.exec(window.location.pathname)
    if (this.location == null) {
      this.target[0].classList.add(props)
    }
    this.target[path[this.location]].classList.add(props)
  }
}

let bottomBar, mediumBar;

bottomBar = new Highlight('.navbar.fixed-bottom a')
bottomBar.active('actived', {
  'arsip': 1,
  'topic': 2,
  'search': 3
})

mediumBar = new Highlight('.navbar .nav-link')
mediumBar.active('actived', {
  'arsip': 0,
  'topic': 1,
  'search': 2
})


let byMonth, byYear
byMonth = document.querySelector('#month')
byYear = document.querySelector('#year')
arsipList = document.querySelector('#arsip-list')

arsipContent = document.querySelectorAll('li.arsip')

byMonth.onchange = event => {
  arsipList.innerHTML = ''
  arsipContent.forEach(arsip => {
    if (arsip.dataset.key.split(' ')[0] == event.target.value) {
      arsipList.appendChild(arsip)
    }
  })
}