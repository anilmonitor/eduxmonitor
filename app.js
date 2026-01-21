const lectures = [
  {
    day: "Day 1",
    link: "https://drive.google.com/your-link-1"
  },
  {
    day: "Day 2",
    link: "https://drive.google.com/your-link-2"
  },
  {
    day: "Day 3",
    link: "https://drive.google.com/your-link-3"
  },
  {
    day: "Day 4",
    link: "https://drive.google.com/your-link-4"
  }
];

const grid = document.getElementById("lectureGrid");

lectures.forEach(lecture => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${lecture.day}</h2>
    <a href="${lecture.link}" target="_blank">Download</a>
  `;

  grid.appendChild(card);
});
