//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  getData() {
    this.getRandomUser();
    this.getRandomQuote();
    this.getRandomPokemon();
    this.getRandomText();
  }

  getRandomUser() {
    let user = {};
    let friends = [];
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7&inc=picture,name,location",
      success: (response) => {
        for (let i = 0; i < 7; i++) {
          if (i == 0) {
            user = {
              picture: response.results[i].picture.medium,
              name:
                response.results[i].name.first + response.results[i].name.last,
              city: response.results[i].location.city,
              state: response.results[i].location.state,
            };
            this.data.user = user;
          } else {
            const friend = response.results[i];
            const friendName = `${friend.name.first} ${friend.name.last}`;
            friends.push(friendName);
          }
        }
      },
      error: function (xhr, text, error) {
        console.log("text");
      },
    });
    this.data.friends = friends;
  }

  getRandomQuote() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      success: (response) => {
        const quote = response;
        this.data.qoute = quote;
      },
      error: function (xhr, text, error) {
        console.log("text");
      },
    });
  }

  getRandomPokemon() {
    let id = Math.floor(Math.random() * (948 - 1 + 1)) + 1;
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      success: (response) => {
        let pokemone = {
          name: response.name,
          picture: response.sprites.front_default,
        };
        this.data.pokemon = pokemone;
      },
      error: function (xhr, text, error) {
        if (xhr.status === 404) {
          this.getRandomPokemon();
          console.log(error);
        }
      },
    });
  }
  getRandomText() {
    let paragraphs = {};
    let aboutMeText = [];
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=all-meat&paras=3",
      success: (response) => {
        for (let paragraph of response) {
          paragraphs = { aboutMeParagraph: paragraph };
          aboutMeText.push(paragraphs);
        }

        this.data.aboutMeText = aboutMeText;
      },
      error: function (xhr, text, error) {
        console.log("text");
      },
    });
  }
  getUser() {
    return this.data;
  }
}
