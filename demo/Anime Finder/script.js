function cari() {

  let keyword = document.getElementById("keyword").value;
  const apiUrl = "https://api.jikan.moe/v3/search/anime?q=" + keyword;

  getApi(apiUrl);
}


async function getApi(apiUrl) {

  const response = await fetch(apiUrl);

  var data = await response.json();
  console.log(data);

  if (response) {
    hideDummy();
  }

  show(data);
}


function showDummy() {

  let dummy = '';

  for (let x = 0; x <= 10; x++)
    dummy +=
  `<div class="card my-4">
  <div class="dummy dummy-img"></div>
  <div class="card-body">
  <div class="dummy dummy-title mb-4"></div>
  <div class="row mb-2">
  <div class="col-3">
  <div class="dummy dummy-text"></div>
  </div>
  <div class="col-3">
  <div class="dummy dummy-text"></div>
  </div>
  <div class="col-3">
  <div class="dummy dummy-text"></div>
  </div>
  </div>
  <div class="row">
  <div class="col-lg mb-1">
  <div class="dummy dummy-text"></div>
  </div>
  </div>
  <div class="row">
  <div class="col-lg mb-1">
  <div class="dummy dummy-text"></div>
  </div>
  </div>
  <div class="row">
  <div class="col-lg mb-1">
  <div class="dummy dummy-text"></div>
  </div>
  </div>
  </div>
  </div>`

  document.getElementById('hasil').innerHTML = dummy;
}


function hideDummy() {
  let dummy = '';
}


function show(data) {

  let hasil = '';

  for (let x of data.results) {
    hasil +=
    `<div class="card neu my-4">
    <img class="card-img-top" src="${x.image_url}"/>
    <div class="card-body">
    <h5 class="card-title">${x.title}</h5>
    <p class="card-text">
    <i class="icofont-ui-folder"></i> ${x.type}
    <i class="icofont-badge ml-2"></i> ${x.score}
    <i class="icofont-hand ml-2"></i> ${x.rated}<br />
    <b>Synopsis</b> : ${x.synopsis}
    </p>
    </div>
    <div class="card-footer">
    <a href="${x.url}">Full View</a>
    </div>
    </div>`;
  }
  document.getElementById("hasil").innerHTML = hasil;
}