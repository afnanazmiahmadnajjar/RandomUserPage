const renderer = new Renderer();
const apiManager = new APIManager();

$("#load").on("click", function () {
  apiManager.getData();
});

$("#Display").on("click", function () {
  let displayData = apiManager.getUser();
  renderer.render(displayData);
});
