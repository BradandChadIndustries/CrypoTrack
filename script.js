const apiKey = '865E580E-3D78-44EA-8763-36960976BFD6';
const apiUrl = 'https://rest.coinapi.io/v1/exchangerate';
const priceElement = document.getElementById('price');
const nameElement = document.getElementById('crypto-name');
const selectElement = document.getElementById('crypto-select');

// Fetch the price for Bitcoin on page load. Bitcoin will be the default displayed crypto.
fetch(`${apiUrl}/BTC/USD`, {
  headers: {
    'X-CoinAPI-Key': apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    const bitcoinPrice = data.rate.toFixed(2);
    priceElement.innerHTML = `$${bitcoinPrice}`;
  })
  .catch(error => console.error('Error fetching cryptocurrency price:', error));

// An event listener for the dropdown menu
selectElement.addEventListener('change', () => {
  const selectedCrypto = selectElement.value;

  // Update the cryptocurrency name
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedName = selectedOption.text;
  nameElement.innerHTML = selectedName;

  // Fetch the price for the selected cryptocurrency
  const apiUrlWithCrypto = `${apiUrl}/${selectedCrypto}/USD`;
  fetch(apiUrlWithCrypto, {
    headers: {
      'X-CoinAPI-Key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      const cryptoPrice = data.rate.toFixed(2);
      priceElement.innerHTML = `$${cryptoPrice}`;
    })
    .catch(error => console.error('Error fetching cryptocurrency price:', error));
});
