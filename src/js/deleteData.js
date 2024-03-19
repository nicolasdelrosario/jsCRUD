import displayData from './displayData'

function deleteData(data, user) {
	const userId = parseInt(user.target.getAttribute('id').split('-')[1])

	const userToDelete = data.find(user => user.id === userId)
	userToDelete.active = false

	displayData(data)
}

export default deleteData
