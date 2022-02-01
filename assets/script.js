const credit = document.querySelector("#credit");

const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");

const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");

const sugarCookieAdd = document.querySelector("#add-sugar");
const sugarCookieMinus = document.querySelector("#minus-sugar");

const gingerBreadQty = document.querySelector("#qty-gb");
const chocolateChipQty = document.querySelector("#qty-cc");
const sugarSprinkleQty = document.querySelector("#qty-sugar");

// Set variable to track counts
let yourName = "Chase Jones";
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let total = 0; //Total of all cookies

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb++;
  total++;
  gingerBreadQty.innerHTML = gb;
  updateTotal(total);
});
// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener("click", function () {
  if (gb > 0) {
    gb--;
    total--;
  }
  gingerBreadQty.innerHTML = gb;
  updateTotal(total);
});

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener("click", function () {
  cc++;
  total++;
  chocolateChipQty.innerHTML = cc;
  updateTotal(total);
});
// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener("click", function () {
  if (cc > 0) {
    cc--;
    total--;
  }
  chocolateChipQty.innerHTML = cc;
  updateTotal(total);
});

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarCookieAdd.addEventListener("click", function () {
  sugar++;
  total++;
  sugarSprinkleQty.innerHTML = sugar;
  updateTotal(total);
});
// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
sugarCookieMinus.addEventListener("click", function () {
  if (sugar > 0) {
    sugar--;
    total--;
  }
  sugarSprinkleQty.innerHTML = sugar;
  updateTotal(total);
});

//function to update the total that is displayed in the HTML document.
function updateTotal(displayTotal) {
  let totalCookies = document.querySelector("#qty-total");
  totalCookies.innerHTML = displayTotal;
}
