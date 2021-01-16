let lookup, idx
const search = {
  form: document.querySelector('.header-form'),
  query: document.querySelector('.form-finder'),
  results: ''
}
fetch('/index.json')
.then(res => res.json())
.then(res => {
  idx = lunr(function () {
    this.ref('url')
    this.field('title')
    this.field('content')
    this.field('tags')
    lookup = {}
    res.forEach(function (doc) {
      this.add(doc)
      lookup[doc.url] = doc
    }, this)
  })
  search.form.onsubmit = () => {
    search.results = idx.search(search.query.value)
  }

  const result = idx.search("ssh")
  result.forEach(x => {
    console.log(lookup[x.ref].content)
  })
})
