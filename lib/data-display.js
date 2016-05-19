export default (data) => {
    var image = document.querySelector('#image')
    image.innerHTML = `<img class="center-image pure-img" src="${data.src}" alt="${data.alt}">`
    var description = document.querySelector('#description')
    description.innerHTML = `${data.description}`
    var credit = document.querySelector('#credit')
    credit.innerHTML = `${data.credit}`
}
img => console.log(img)
