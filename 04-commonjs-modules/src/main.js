const products = require("../services/products.js");
const config = require("../services/config.js");

async function main() {
  console.log("Olã meu nome e system!");

  products.getFullName("001", "Mouse-G20-Pro");
  products.getProductName("Mouse Pad");

  console.log(config.devArea);
  console.log(config.client);
}

main();
