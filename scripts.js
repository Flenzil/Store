let products = [
    {
        "productName": "Rise of the Redscales: Complete Miniature Pack",
        "productPrice": "$45",
        "productImage": "images/RiseOfTheRedscales.jpg",
        "productAlt": "Rise of the Redscales",
        "productLink": "https://www.myminifactory.com/object/3d-print-rise-of-the-redscales-complete-miniature-pack-330066"
    }
];

function initPage() {
    makeProductGrid();
    makeProductList();
}

function productList() {
    document.querySelector("#product-list").style.display = "block";
    document.querySelector("#product-grid").style.display = "none";
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

        const cell1 = document.createElement("td");
        const productImg = document.createElement("img");
        productImg.src = product.productImage;

        const productDescription = document.createElement("p");
        productDescription.setAttribute("class", "description");
        productDescription.innerHTML = product.productName;

        const productPrice = document.createElement("p");
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

