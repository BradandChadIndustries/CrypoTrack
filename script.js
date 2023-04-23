const apiKey = '865E580E-3D78-44EA-8763-36960976BFD6 ';
const apiUrl = 'https://rest.coinapi.io/v1/exchangerate';
const volumeApiUrl = 'https://rest.coinapi.io/v1/assets';
const priceElement = document.getElementById('price');
const volumeElement = document.getElementById('volume');
const nameElement = document.getElementById('crypto-name');
const selectElement = document.getElementById('crypto-select');

// Fetch the price and volume for Bitcoin on page load. Bitcoin will be the default displayed crypto.
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

fetch(`${volumeApiUrl}/BTC`, {
    headers: {
        'X-CoinAPI-Key': apiKey
    }
})
    .then(response => response.json())
    .then(data => {
        const bitcoinVolume = data[0].volume_1day_usd.toFixed(2);
        volumeElement.innerHTML = `$${bitcoinVolume}`;
    })
    .catch(error => console.error('Error fetching cryptocurrency volume:', error));

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

    // Fetch the volume for the selected cryptocurrency
    const volumeApiUrlWithCrypto = `${volumeApiUrl}/${selectedCrypto}`;
    fetch(volumeApiUrlWithCrypto, {
        headers: {
            'X-CoinAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const cryptoVolume = data[0].volume_1day_usd.toFixed(2);
            volumeElement.innerHTML = `$${cryptoVolume}`;
        })
        .catch(error => console.error('Error fetching cryptocurrency volume:', error));
});
