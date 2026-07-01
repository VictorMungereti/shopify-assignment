// Add to  cart

function addToCart(btn) {
  const isAdded = btn.classList.toggle("added");
  const badge = document.getElementById("cart-badge");
  let count = parseInt(badge.textContent);

  if (isAdded) {
    btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Added to cart';
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "white";
    count++;
  } else {
    btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
    btn.style.backgroundColor = "var(--btn-color)";
    btn.style.color = "white";
    count--;
  }
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// favorite button

function changeIcon(icon) {
  const isLiked = icon.classList.toggle("active");
  const badge = document.getElementById("fav-badge");
  let count = parseInt(badge.textContent);

  if (isLiked) {
    icon.classList.replace("fa-regular", "fa-solid");
    count++;
  } else {
    icon.classList.replace("fa-solid", "fa-regular");
    count--;
  }
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// date function

const today = new Date(); // its used by both date at top and discount

// Show today's full date at the top
document.getElementById("dateDisplay").textContent = today.toLocaleDateString(
  "en-US",
  {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  },
);

// discount

document.querySelectorAll(".card-description").forEach(function (card) {
  const original = Number(card.dataset.original);
  const discounted = Number(card.dataset.discounted);

  const discountPercent = Math.round(
    ((original - discounted) / original) * 100,
  );

  card.querySelector(".discount").textContent = "-" + discountPercent + "%";
});
