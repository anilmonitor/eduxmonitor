

const grid = document.getElementById("lectureGrid");

lectures.forEach(lecture => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${lecture.day}</h2>
    <a href="${lecture.link}" >Download</a>
  `;

  grid.appendChild(card);
});
