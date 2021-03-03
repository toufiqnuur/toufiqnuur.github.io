class Tabbar {
        constructor(props) {
          this.props = document.querySelectorAll(props)
        }
        enable(index, props) {
          this.current = this.props[index]
          this.props.forEach(tab => {
            tab.onclick = () => {
              if(this.current) {
                this.current.classList.remove(props)
              }
              this.current = tab
              this.current.classList.add(props)
            }
          })
        }
      }
      let bottomBar, mediumBar;
      bottomBar = new Tabbar('.navbar.fixed-bottom a')
      mediumBar = new Tabbar('.navbar .nav-link')
      bottomBar.enable(0,'actived')
      mediumBar.enable(null,'actived')

let byMonth, byYear
byMonth = document.querySelector('#month')
byYear = document.querySelector('#year')
arsipList = document.querySelector('#arsip-list')

byMonth.onchange = event => {
  arsipList.innerHTML = event.target.value
  //arsipList.innerHTML = arsipList.children
}