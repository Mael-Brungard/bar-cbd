const products = [
    {
        name: "Infusion Relax Menthe CBD",
        price: 6.5,
        category: "infusion",
        img: "https://i.pinimg.com/1200x/8a/72/0e/8a720e53c4251fd3ef20748cfb0c5e7c.jpg"
    },
    {
        name: "Thé Vert Detox CBD",
        price: 5.5,
        category: "infusion",
        img: "https://i.pinimg.com/1200x/74/eb/11/74eb11bfe223256ca55aeea7c65642f7.jpg"
    },
    {
        name: "Latte Vanillé CBD",
        price: 7.0,
        category: "boisson",
        img: "https://i.pinimg.com/1200x/d2/0c/e6/d20ce6b882f53f35c58738dab963434b.jpg"
    },
    {
        name: "Smoothie Tropical CBD",
        price: 8.0,
        category: "boisson",
        img: "https://i.pinimg.com/736x/7f/52/7d/7f527d055e1d5c1d4cbaecc8cba511f3.jpg"
    },
    {
        name: "Brownie chocolat CBD",
        price: 6.0,
        category: "dessert",
        img: "https://i.pinimg.com/1200x/2a/99/9c/2a999cea7ff02b371c857639993b82d7.jpg"
    },
    {
        name: "Cookie noisette CBD",
        price: 4.5,
        category: "dessert",
        img: "https://i.pinimg.com/736x/78/c2/d7/78c2d759514c7494abb2b93828f5bde2.jpg"
    }
];

const list = document.getElementById("product-list");
const search = document.getElementById("search");
const category = document.getElementById("category");
const sort = document.getElementById("sort");

function render() {
    let filtered = [...products];

    if (category.value !== "all") {
        filtered = filtered.filter(p => p.category === category.value);
    }

    if (search.value.trim() !== "") {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search.value.toLowerCase())
        );
    }

    if (sort.value === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    }
    if (sort.value === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    }

    list.innerHTML = filtered.map(p => `
    <article class="product appear">
      <img src="${p.img}">
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.price.toFixed(2)}€</p>
      </div>
    </article>
  `).join("");
}

search.addEventListener("input", render);
category.addEventListener("change", render);
sort.addEventListener("change", render);

render();
