let value = 0;
const valueElement = document.getElementById("value");

function incrementValue() {
	value++;
	valueElement.innerHTML = value;
}