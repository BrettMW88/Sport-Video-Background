const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const climbingBtn = document.querySelector('.climbing')
const golfBtn = document.querySelector('.golf')
const hikingBtn = document.querySelector('.hiking')
const climbing = document.querySelector('.climbing-section')
const golf = document.querySelector('.golf-section')
const hiking = document.querySelector('.hiking-section')
        
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});

golfBtn.addEventListener('click', () => {
    hiking.classList.add('hidden');
    climbing.classList.add('hidden');
    golf.classList.remove('hidden');
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});

climbingBtn.addEventListener('click', () => {
    golf.classList.add('hidden');
    hiking.classList.add('hidden');
    climbing.classList.remove('hidden');
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});

hikingBtn.addEventListener('click', () => {
    climbing.classList.add('hidden');
    golf.classList.add('hidden');
    hiking.classList.remove('hidden');
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});