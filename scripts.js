function productList() {
    document.querySelector("#product-grid").style.display = "none";
    document.querySelector("#product-list").style.display = "block";

    const table = document.querySelector("#product-table");

    for (let row of table.rows) {
        row.addEventListener("click", () => {
            location.href = "https://www.myminifactory.com/object/3d-print-rise-of-the-redscales-complete-miniature-pack-330066";
        })
    }
}

function productGrid() {
    document.querySelector("#product-list").style.display = "none";
    document.querySelector("#product-grid").style.display = "";
}

