//landing
const app = document.querySelector('.app')
const signer = document.querySelector('.signer')

const signerSwitch = document.querySelector('.signer .switch')
const signerBack = document.querySelector('.signer .back')
const entryBtn = document.querySelectorAll('.sign-btns .btn')
const navLandBtns = document.querySelectorAll('.landing .nav-item')
const landForm = document.querySelector('.landing .footer form')
const xLandPop = document.querySelector('.landing .pop-up .btn')


function moveToSigner(param, i) {
	param.addEventListener('click', () => {
		app.classList.toggle('user')
		if (i) signer.classList.toggle('log')
	})
}
entryBtn.forEach((entryBtn, i) => moveToSigner(entryBtn, i))
navLandBtns.forEach((navLandBtns, i) => moveToSigner(navLandBtns, i))

signerSwitch.addEventListener('click', () => signer.classList.toggle('log'))

signerBack.addEventListener('click', () => {
	app.classList.toggle('user')
	if (signer.classList.contains('log')) signer.classList.toggle('log')
})

landForm.addEventListener('submit', (e) => {
	e.preventDefault()
	app.classList.toggle('pop')
})
xLandPop.addEventListener('click', () => app.classList.toggle('pop'))
