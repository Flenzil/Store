function productList() {
    document.getElementById("product-grid").style.visibility = "hidden";
    document.getElementById("product-grid").style.display = "none";
    document.getElementById("product-list").style.visibility = "visible";
    document.getElementById("product-list").style.display = "";
}

function productGrid() {
    document.getElementById("product-container").style.flexDirection = "column";
    document.getElementById("product-list").style.visibility = "hidden";
    document.getElementById("product-list").style.display = "none";
    document.getElementById("product-grid").style.visibility = "visible";
    document.getElementById("product-grid").style.display = "";
}
