//lida com assuntos ligados aos produtos
async function getFullName(codeId, productName) {
  console.log("\n");
  console.log("products: " + codeId + " " + productName);
}

async function getProductName(productName) {
  console.log("product: " + productName);
}

module.exports = {
  getFullName,
  getProductName,
};
