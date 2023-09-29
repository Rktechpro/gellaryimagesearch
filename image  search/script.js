const Accesskey = 'W48A18-WnO88Hh66TUK1yFcSD1_XTxie1_bMAx47PH4';
const form = document.querySelector('form');
const input = document.querySelector('input');
const card = document.querySelector('.card');
const show_more = document.querySelector('.show_more');
const container = document.querySelector(".container")
let keyword = "";
let page = 1
function clear() {
   card.innerHTML = " "
}
async function searchImage() {
   keyword = input.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}&per_page=12`;

   const respons = await fetch(url);
   const data = await respons.json();
   const results = data.results

   results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imagelink = document.createElement("a");
      imagelink.href = result.links.html;
      imagelink.target = "_blank";
      imagelink.appendChild(image);
      card.appendChild(imagelink);
   });

   show_more.style.display = "block";
   // console.log(data);
}
form.addEventListener("submit", (e) => {
   e.preventDefault();
   page = 1;
   clear()
   searchImage();
});

show_more.addEventListener("click", () => {
   page++;

   searchImage();

})