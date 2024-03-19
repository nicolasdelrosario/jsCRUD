import deleteData from './deleteData'

const userList = document.getElementById('userList')

function displayData(data) {
	let htmlContent = ''
	const filteredData = data.filter(user => user.active)

	filteredData.forEach(user => {
		const element = `
    <li>
      <p>Name: ${user.name}</p>
      <p>Last Name: ${user.lastname}</p>
      <p>Age: ${user.age}</p>
      <ion-icon id="edit-${user.id}" name="create-outline"></ion-icon>
      <ion-icon id="delete-${user.id}" name="close-outline"></ion-icon>
    </li>
    `
		htmlContent += element
	})

	userList.innerHTML = htmlContent

	filteredData.forEach(user => {
		const deleteIcon = document.getElementById(`delete-${user.id}`)
		deleteIcon.addEventListener('click', user => {
			deleteData(filteredData, user)
		})
	})
}

export default displayData
