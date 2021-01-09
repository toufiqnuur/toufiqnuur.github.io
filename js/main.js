class ButtonBar {
  constructor(props) {
    this.props = document.querySelectorAll(props)
  }
  active(props) {
    this.recent;
    this.props.forEach(button => {
      button.onclick = () => {
        if (this.recent) {
          this.recent.classList.remove(props)
        }
        this.recent = button
        this.recent.classList.add(props)
      }
    })
  }
}
class ModalBox {
  constructor(props) {
    this.props = {
      button: document.querySelector(props),
      modal: ''
    }
  }
  open(props) {
    this.props.modal = document.querySelector(props)
    this.props.button.onclick = () => {
      this.props.modal.style.display = "block"
    }
    this.close()
  }
  close() {
    window.onclick = (event) => {
      if (event.target == this.props.modal) {
        this.props.modal.style.display = "none"
      }
    }
  }
}
class ChangeMe {
  constructor(props) {
    this.props = {
      target: document.querySelector(props),
      word: [
        "Baca Artikel",
        "Nonton Video",
        "Lihat daftar tag",
        "Baca Guide",
        "Download Ebook"
      ]
    }
  }
  change() {
    this.counter = 1
    setInterval(() => {
      this.props.target.innerHTML = this.props.word[this.counter]
      this.counter++
      this.counter >= 4 ? this.counter = 0: false
    }, 3000)
  }
}
const navbar_md = new ButtonBar('.navbar-link')
navbar_md.active('active')
const navbar_sm = new ButtonBar('.menu-link')
navbar_sm.active('active')
const sm_menu = new ModalBox('.menu-button')
sm_menu.open('.header-modal')