async function fetchData(url) {
  return await fetch('https://localhost:1313/index.json')
  .then(res => res.json())
}

const documents = fetchData()

console.log(documents)