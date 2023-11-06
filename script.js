class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAgeWith(secondUser) {
    if (this.age < secondUser.age) {
      return `${this.firstName} è più giovane di ${secondUser.firstName}`;
    } else if (this.age > secondUser.age) {
      return `${this.firstName} è più vecchio di ${secondUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${secondUser.firstName}`;
    }
  }
}

const person1 = new User("Mario", "Rossi", 30, "Milano");
const person2 = new User("Luigi", "Verdi", 25, "Roma");

const compareAge = person1.compareAgeWith(person2);
console.log(compareAge);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(newPet) {
    return this.ownerName === newPet.ownerName;
  }
}

petArr = [];

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  petArr.push(newPet);

  const sameOwnerPets = petArr.filter((pet) => pet.ownerName === ownerName);
  if (sameOwnerPets.length > 1) {
    console.log(sameOwnerPets.length + " cani hanno lo stesso proprietario");
  }
  const petList = document.getElementById("petList");
  const li = document.createElement("li");
  li.textContent = `Nome dell'animale: ${newPet.petName}, Proprietario: ${newPet.ownerName}, Specie: ${newPet.species}, Razza: ${newPet.breed}`;
  petList.appendChild(li);

  event.target.reset();
});
