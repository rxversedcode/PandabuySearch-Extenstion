const link = document.getElementById("url");
const savebtn = document.getElementById("save");

savebtn.onclick = () => {
    chrome.tabs.create({ url: "https://www.pandabuy.com/product?url=" + link.value });
}