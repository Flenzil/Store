let products = [
    {
        "productName": "Rise of the Redscales: Complete Miniature Pack",
        "productPrice": "$45.00",
        "productImage": "images/RiseOfTheRedscales.jpg",
        "productAlt": "Rise of the Redscales",
        "productLink": "https://www.myminifactory.com/object/3d-print-rise-of-the-redscales-complete-miniature-pack-330066"
    },
    {
        "productName": "Basalisk",
        "productPrice": "$3.50",
        "productImage": "images/Basalisk.jpg",
        "productAlt": "Basalisk",
        "productLink": "https://www.myminifactory.com/object/3d-print-basilisk-330043"
    },
    {
        "productName": "Chain Devil",
        "productPrice": "$2.50",
        "productImage": "images/Chain Devil.jpg",
        "productAlt": "Chain Devil",
        "productLink": "https://www.myminifactory.com/object/3d-print-chain-devil-330045"
    },
    {
        "productName": "Manticore",
        "productPrice": "$3.50",
        "productImage": "images/Manticore.jpg",
        "productAlt": "Manticore",
        "productLink": "https://www.myminifactory.com/object/3d-print-manticore-330052"
    },
    {
        "productName": "Owlbear",
        "productPrice": "$3.00",
        "productImage": "images/Owlbear.jpg",
        "productAlt": "Owlbear",
        "productLink": "https://www.myminifactory.com/object/3d-print-owlbear-330053"
    },
    {
        "productName": "Spawn Of Juiblex",
        "productPrice": "$5.00",
        "productImage": "images/Spawn of Juiblex.jpg",
        "productAlt": "Spawn of Juiblex",
        "productLink": "https://www.myminifactory.com/object/3d-print-spawn-of-juiblex-giant-slime-330056"
    },
    {
        "productName": "Young Dragon",
        "productPrice": "$5.00",
        "productImage": "images/Young Blue Dragon.jpg",
        "productAlt": "Young Dragon",
        "productLink": "https://www.myminifactory.com/object/3d-print-young-dragon-330058"
    },
    {
        "productName": "Dragonborn Scientist",
        "productPrice": "$2.50",
        "productImage": "images/The alchemist.jpg",
        "productAlt": "Dragonborn Scientist",
        "productLink": "https://www.myminifactory.com/object/3d-print-dragonborn-scientist-330039"
    },
];

function initPage() {
    makeProductGrid();
    makeProductList();
}

function productList() {
    document.querySelector("#product-list").style.display = "block";
    document.querySelector("#product-grid").style.display = "none";
    document.querySelector("#button-list").setAttribute("id", "button-list-active");
}

function productGrid() {
    document.querySelector("#product-list").style.display = "none";
    document.querySelector("#product-grid").style.display = "";
}


function makeProductGrid() {
    const productGrid = document.createElement("div")
    productGrid.setAttribute("id", "product-grid");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.setAttribute("class", "product")

        const productLink = document.createElement("a");
        productLink.href = product.productLink;

        const productImg = document.createElement("img");
        productImg.src = product.productImage;
        productImg.alt = product.productAlt;

        const productDescription = document.createElement("div")
        productDescription.innerHTML = product.productName;
        productDescription.setAttribute("class", "description");

        productLink.appendChild(productImg);
        productLink.appendChild(productDescription);
        productDiv.appendChild(productLink);
        productGrid.appendChild(productDiv);

        document.querySelector("#product-container").appendChild(productGrid);
    })
}

function makeProductList() {
    const productList = document.createElement("div");
    productList.setAttribute("id", "product-list");

    const table = document.createElement("table");
    table.setAttribute("id", "product-table");

    products.forEach((product) => {
        let row = table.insertRow();

        const productImg = document.createElement("img");
        productImg.src = product.productImage;

        const productDescription = document.createElement("h2");
        productDescription.setAttribute("class", "description");
        productDescription.innerHTML = product.productName.toUpperCase();

        const productPrice = document.createElement("h2");
        productPrice.setAttribute("class", "price");
        productPrice.innerHTML = product.productPrice;

        row.insertCell().appendChild(productImg);
        row.insertCell().appendChild(productDescription);
        row.insertCell().appendChild(productPrice);
        row.addEventListener("click", () => {
            location.href = product.productLink;
        })
    })

    productList.appendChild(table);
    console.log(productList);
    document.querySelector("#product-container").appendChild(productList);
}

