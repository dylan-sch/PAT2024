const apiUrlPromise = "http://127.0.0.1:3000/promise";

fetch(apiUrlPromise)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      promiseCol(element.icon, element.title, element.desc);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  

function promiseCol(icon, title, desc) {
  const container = document.getElementById("promise");

  const col = document.createElement("div");
  col.classList.add("col");

  const iconElement = document.createElement("img");
  iconElement.src = icon;

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const descElement = document.createElement("p");
  descElement.textContent = desc;

  col.appendChild(iconElement);
  col.appendChild(titleElement);
  col.appendChild(descElement);

  container.appendChild(col);
}