const charactersAPI = new APIHandler('http://localhost:8000');
//const router     = require("express").Router();
//const ApiService = require("../services/api.services");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(characters => {
      let cards = ``;
      characters.data.forEach(character => {
        cards += `
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon ? "Yes" : "No"}</div>
          <div class="weapon">${character.weapon}</div>
        <div>`
      });
      const container     = document.createElement("div");
      container.innerHTML = cards;
      document.getElementsByClassName("characters-container")[0].appendChild(container);
    })
    .catch(err => console.log(err))
    // Eliminate placeholder container
    // Improve container
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.getElementById("select-character").value;
    charactersAPI.getOneRegister(characterId)
    .then(character => {
        let data = character.data;
        document.getElementById("name-char").innerText    = data.name;
        document.getElementById("occup-char").innerText   = data.occupation;
        document.getElementById("cartoon-char").innerText = data.cartoon;
        document.getElementById("weapon-char").innerText  = data.weapon;
    })
    .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.getElementById("select-character-delete").value;
    charactersAPI.deleteOneRegister(characterId)
    .then(character => {
      console.log("log", character)
    })
    .catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
