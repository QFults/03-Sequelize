axios.get('/api/owners')
  .then(({ data: owners }) => {

    owners.forEach(owner => {
      let ownerElem = document.createElement('div')
      ownerElem.innerHTML = `
        <p>${owner.name}</p>
        <p>${owner.email}</p>
        <p>${owner.phone}</p>
        <p><b>Pets:</b></p>
      `
      owner.pets.forEach(pet => {
        let petElem = document.createElement('p')
        petElem.textContent = `${pet.name}, ${pet.age} years old, ${pet.breed}`
        ownerElem.append(petElem)
      })

      let lineBreak = document.createElement('hr')
      ownerElem.append(lineBreak)

      document.getElementById('owners').append(ownerElem)
    })
  })

axios.get('/api/pets')
  .then(({ data: pets }) => {

    pets.forEach(pet => {
      let petElem = document.createElement('div')
      petElem.innerHTML = `
        <p>${pet.name}</p>
        <p>${pet.age}</p>
        <p>${pet.breed}</p>
        <p><b>${pet.owner.name}, ${pet.owner.email}, ${pet.owner.phone}</b></p>
        <hr>
      `
      document.getElementById('pets').append(petElem)
    })
  })

document.getElementById('addOwner').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/owners', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  })
    .then(({ data: owner }) => {
      let ownerElem = document.createElement('div')
      ownerElem.innerHTML = `
        <p>${owner.name}</p>
        <p>${owner.age}</p>
        <p>${owner.breed}</p>
        <p><b>Pets:</b></p>
        <hr>
      `
      document.getElementById('owners').append(ownerElem)
    })
})

document.getElementById('addPet').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/pets', {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    breed: document.getElementById('breed').value
  })
    .then(({ data: pet }) => {
      let petElem = document.createElement('div')
      petElem.innerHTML = `
        <p>${pet.name}</p>
        <p>${pet.age}</p>
        <p>${pet.breed}</p>
        <p><b>Owner:</b></p>
        <p><b>${pet.owner.name}, ${pet.owner.email}, ${pet.owner.phone}</b></p>
        <hr>
      `
      document.getElementById('pets').append(petElem)
    })
})

