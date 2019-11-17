//Get function that returns API data in json format

async function getProductsAsync(url) {
  let response = await fetch(`https://${url}`);
  let data = await response.json()
  return data;
}

//Passing data in jason format to the script that feeds the product list
const getProductsList = (url = 'frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1') => {
    getProductsAsync(url).then(data => injectProjects(data));
};

getProductsList();

