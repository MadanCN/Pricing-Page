
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    const scrollThreshold = 1;
    const scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});



// Currency customization
const currencyDropdown = document.getElementById('currency');

document.querySelectorAll('.pricing-plan').forEach(plan => {
    plan.addEventListener('click', () => {
        plan.classList.toggle('active');
    });
});

currencyDropdown.addEventListener('change', () => {
    const selectedCurrency = currencyDropdown.value;
    updatePrices(selectedCurrency);
});

unitDropdown.addEventListener('change', () => {
    const selectedUnit = unitDropdown.value;
    updateUnits(selectedUnit);
});

function updatePrices(currency) {
    document.querySelectorAll('.price').forEach(priceElement => {
        const currentPrice = priceElement.textContent;
        const newPrice = currentPrice.replace(/^\D+/g, currency);
        priceElement.textContent = newPrice;
    });
}

