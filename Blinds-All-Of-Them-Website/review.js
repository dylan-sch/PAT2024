// Define the API URL
const apiUrlReviews = "http://127.0.0.1:3000/reviews";

// Make a GET request
fetch(apiUrlReviews)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })

  .then((data) => {
    data.forEach((element) => {
      reviewCol(element.name, element.review);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function reviewCol(name, review) {
  const container = document.getElementById("testimonials");

  // Create the container div with class "col"
  const colDiv = document.createElement("div");
  colDiv.classList.add("col");

  // Create the img element
  const img = document.createElement("img");
  img.src = "images/misc/stars.png";
  img.alt = "stars";

  // Create the h3 element for the name
  const nameHeader = document.createElement("h3");
  nameHeader.textContent = name;

  // Create the p element for the review
  const reviewP = document.createElement("p");
  reviewP.textContent = review;

  // Append the img, name, and review to the container div
  colDiv.appendChild(img);
  colDiv.appendChild(nameHeader);
  colDiv.appendChild(reviewP);

  // Now append the colDiv to a parent element in the DOM, for example, a section with an id of "reviews"
  container.appendChild(colDiv);
}
