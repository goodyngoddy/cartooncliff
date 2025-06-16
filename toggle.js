//landing
const app = document.querySelector('.app')
const signer = document.querySelector('.signer')

const signerSwitch = document.querySelector('.signer .switch')
const signerBack = document.querySelector('.signer .back')
const entryBtn = document.querySelectorAll('.sign-btns .btn')
const navLandBtns = document.querySelectorAll('.landing .nav-item')
const landForm = document.querySelector('.landing .footer form')
const xLandPop = document.querySelector('.landing .pop-up .btn')

//signer

const loginData = {
	username: 'username',
	password: 'password'
}

const username = document.querySelector('.signer .log-in-el #username')
const password = document.querySelector('.signer .log-in-el #password')
const logInForm = document.querySelector('.signer .log-in-el form')


logInForm.addEventListener('submit', (e) => {
	e.preventDefault()
	
	if (username.value === loginData.username && password.value === loginData.password) {
		app.classList.toggle('lin')
		app.classList.toggle('user')
	} else {
		alert('Invalid credentials')
	}
})

//landing
function moveToSigner(param, i) {
	param.addEventListener('click', () => {
		app.classList.toggle('user')
		if (i) signer.classList.toggle('log')
	})
}
entryBtn.forEach((entryBtn, i) => moveToSigner(entryBtn, i))
navLandBtns.forEach((navLandBtn, i) => moveToSigner(navLandBtn, i))
signerSwitch.addEventListener('click', () => signer.classList.toggle('log'))
signerBack.addEventListener('click', () => {
	app.classList.toggle('user')
	if (signer.classList.contains('log')) signer.classList.toggle('log')
})
landForm.addEventListener('submit', (e) => {
	e.preventDefault()
	app.classList.toggle('pop')
})
xLandPop.addEventListener('click', () => {
	app.classList.toggle('pop')
	window.open('/')
})

//app main
const appBody = document.querySelector('.app-body')
const myPics = document.querySelector('.wrk-btn')
const appNavBtns = document.querySelectorAll('.foot-bar .ft-item')
const meNavBtns = document.querySelectorAll('.cont-me ul li')


myPics.addEventListener('click', () => appBody.classList.toggle('me'))

appNavBtns.forEach((appNavBtn, i) => {
	appNavBtn.addEventListener('click', () => {
		if (i) {
			if (1 == 1) appBody.classList.remove('me')
			if (i == 2 && !appBody.classList.contains('me')) appBody.classList.add('me')
		}
	})
})

meNavBtns.forEach((meNavBtn, i) => {
	meNavBtn.addEventListener('click', () => {
		console.log(meNavBtn.textContent)
	})
})

