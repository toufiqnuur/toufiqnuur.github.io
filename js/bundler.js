const bundler = {
  create: function( {
    c
  }) {
    this.c = c
  },
  bind: function( {
    c
  }) {
    Object.keys(c).forEach(k=> {
      document.querySelectorAll(c[k]).forEach(n=> {
        this.c[k].map(p=> {
          n.classList.add(p)})})})}}