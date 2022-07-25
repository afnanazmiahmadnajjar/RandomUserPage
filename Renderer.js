class Renderer {
  render(user) {
    this.renderUserInformation(user.user);
    this.renderQoute(user.qoute);
    this.renderPokemon(user.pokemon);
    this.renderMeat(user.aboutMeText);
    this.renderFriends(user.friends);
  }

  renderUserInformation(person) {
    let source = $("#peopleinformation").html();
    let template = Handlebars.compile(source);
    let somhtml = template(person);
    $(".user-container").empty();
    $(".user-container").append(somhtml);
  }
  renderQoute(qout) {
    let source = $("#peopleQoute").html();
    let template = Handlebars.compile(source);
    let somhtml = template(qout);
    const qouteContainerEl = $("quote-container");
    qouteContainerEl.empty();
    qouteContainerEl.append(somhtml);
  }
  renderPokemon(pokemon) {
    let source = $("#pokemon").html();
    let template = Handlebars.compile(source);
    let somhtml = template(pokemon);
    $(".pokemon-container").empty();
    $(".pokemon-container").append(somhtml);
  }
  renderMeat(aboutMeText) {
    let source = $("#Meat").html();
    let template = Handlebars.compile(source);
    let somhtml = template({ paragraphs: aboutMeText });
    $(".meat-container").empty();
    $(".meat-container").append(somhtml);
  }
  renderFriends(friends) {
    let source = $("#friend").html();
    let template = Handlebars.compile(source);
    let somhtml = template({ friendsData: friends });
    $(".friends-container").empty();
    $(".friends-container").append(somhtml);
  }
}
