export default (data) => {
    var image = document.querySelector('#image')
    image.innerHTML = `<img src="${data.src}" alt="${data.alt}">`
    var description = document.querySelector('#description')
    description.innerHTML = `<p>${data.description}</p>`
    var credit = document.querySelector('#credit')
    credit.innerHTML = `<p>${data.credit}</p>`
}
img => console.log(img)
