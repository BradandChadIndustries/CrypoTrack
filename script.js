const apiKey = '865E580E-3D78-44EA-8763-36960976BFD6';
const bitcoinSymbol = 'BTC';
const apiUrl = `https://rest.coinapi.io/v1/exchangerate/${bitcoinSymbol}/USD`;

const priceElement = document.getElementById('price');

fetch(apiUrl, {
  headers: {
    'X-CoinAPI-Key': apiKey
  }
})
.then(response => response.json())
.then(data => {
  const bitcoinPrice = data.rate.toFixed(2);
  priceElement.innerHTML = `$${bitcoinPrice}`;
})
.catch(error => console.error('Error fetching Bitcoin price:', error));
