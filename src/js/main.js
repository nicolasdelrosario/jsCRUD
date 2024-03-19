import userData from './userData'
import displayData from './displayData'
import addData from './addData'

const createUser = document.getElementById('btnCreateUser')

createUser.addEventListener('click', event => {
	event.preventDefault()
	addData(userData)
	displayData(userData)
})

displayData(userData)
