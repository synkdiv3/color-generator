const colors = ["#C48971", "#948B7D", "#686C50", "#8C7E60", "#644A32", "#494E31","#493E28", "#A3A4A4", "#AC4C3C"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]  
    color.textContent = colors[randomNumber]  
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)  
}