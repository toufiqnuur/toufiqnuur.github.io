var lookup, idx = null
window.addEventListener("DOMContentLoaded", event => {
  const form = document.querySelector(".header-form")
  const query = document.querySelector(".form-finder")
  
  const target = {
    isList: document.querySelector("#article-list"),
    isSingle: document.querySelector("#single")
  }
  
  function fetchData() {
    fetch("https://toufiqnuur.github.io/index.json")
    .then(results => results.json())
    .then(results => {
      idx = lunr(function(doc) {
        this.ref('url')
        this.field('title')
        this.field('content')
        this.field('tags')
        this.field('date')
      })
      lookup = {}
      results.forEach(function (doc) {
        this.add(doc)
        lookup[doc.uri] = doc
      }, this)
    })
  }
  
  form.addEventListener("submit",() => {
    alert(isSingle)
    target.isSingle.style.display = "none"
    let results = idx.search(query.value)
    updateUI(results)
  })
  
  function updateUI(results) {
    for(let result of results) {
      let item = lookup[result.ref]
      let search_result = `
        <article class="card --box-shadow-sm">
          <img class="card-image" src="${item.thumb}" alt="${item.title}" />
          <small class="card-tag">
            <a href="{{ "/tag/" | relURL }}{{ . | urlize}}">{{ . }}</a>
          </small>

    <h2 class="card-title"><a href="${item.url}">${item.title}</a></h2>
    <p class="card-content --tx-muted">
      <img src="{{ .Params.profile }}" alt="{{ .Params.author }}" /> <span>{{ .Params.author }}</span>&nbsp;on {{ .PublishDate.Format "02 Jan 2006" }}
    </p>
  </article>`
    }
        target.isSingle.innerHTML = search_result
      if(target.isSingle) {
      } else {
        target.isList.innerHTML = search_result
      }
  }
})