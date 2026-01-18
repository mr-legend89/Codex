const menuItems = [
  {
    name: "Velvet Bloom",
    notes: "Rose, cacao nib, cherry",
    price: "$8",
    origin: "Ethiopia",
    intensity: "Light",
  },
  {
    name: "Midnight Ember",
    notes: "Dark plum, toasted sugar",
    price: "$9",
    origin: "Colombia",
    intensity: "Bold",
  },
  {
    name: "Honey Drift",
    notes: "Apricot, raw honey",
    price: "$7",
    origin: "Costa Rica",
    intensity: "Medium",
  },
  {
    name: "Aurora Pour",
    notes: "Citrus zest, jasmine",
    price: "$8",
    origin: "Kenya",
    intensity: "Bright",
  },
];

const demos = [
  {
    title: "Slow Bloom V60",
    detail: "A 20-minute guided pour-over with your own recipe card.",
    time: "11:00 AM",
  },
  {
    title: "Milk Texture Lab",
    detail: "Practice microfoam and latte art with our baristas.",
    time: "2:30 PM",
  },
  {
    title: "Night Roastery Tour",
    detail: "See tonight's roast drop and sample barrels.",
    time: "7:00 PM",
  },
];

const menuGrid = document.getElementById("menuGrid");
const demoGrid = document.getElementById("demoGrid");

menuItems.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-header">
      <h3>${item.name}</h3>
      <span class="card-tag">${item.intensity}</span>
    </div>
    <p>${item.notes}</p>
    <div class="card-footer">
      <span>${item.origin}</span>
      <strong>${item.price}</strong>
    </div>
  `;
  menuGrid.appendChild(card);
});

demos.forEach((demo) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div>
      <h3>${demo.title}</h3>
      <p>${demo.detail}</p>
    </div>
    <div class="card-footer">
      <span>${demo.time}</span>
      <button class="secondary">Reserve</button>
    </div>
  `;
  demoGrid.appendChild(card);
});

const loginTrigger = document.getElementById("loginTrigger");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const modalDemoLogin = document.getElementById("modalDemoLogin");
const demoLogin = document.getElementById("demoLogin");
const loginForm = document.getElementById("loginForm");

const openModal = () => {
  loginModal.classList.add("open");
  loginModal.setAttribute("aria-hidden", "false");
};

const closeModalFn = () => {
  loginModal.classList.remove("open");
  loginModal.setAttribute("aria-hidden", "true");
};

loginTrigger.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFn);
loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    closeModalFn();
  }
});

const fillDemoLogin = () => {
  const [emailInput, passwordInput] = loginForm.querySelectorAll("input");
  emailInput.value = "demo@emberbloom.com";
  passwordInput.value = "latteart";
  closeModalFn();
};

modalDemoLogin.addEventListener("click", fillDemoLogin);

demoLogin.addEventListener("click", fillDemoLogin);

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Welcome back! Your demo booking has been refreshed.");
});
