const d = document
const name = d.getElementById('name')
const lastname = d.getElementById('lastname')
const age = d.getElementById('age')

function addData(data) {
	if (validation()) {
		data.push({
			id: data.length + 1,
			name: name.value,
			lastname: lastname.value,
			age: age.value,
			active: true,
		})
	}
}

function validation() {
	const regex = /^[A-Za-z\s]+$/
	if (!regex.test(name.value) || !regex.test(lastname.value)) {
		console.log(`Numbers are not allowed in the name and last name fields.`)
		return false
	}

	if (!name.value || !lastname.value || !age.value) {
		console.log('Fields cannot be empty.')
		return false
	}

	const ageValue = parseInt(age.value)
	if (isNaN(ageValue) || ageValue <= 0 || ageValue >= 120) {
		console.log('Please enter a valid age between 1 and 120.')
		return false
	}

	return true
}

export default addData
