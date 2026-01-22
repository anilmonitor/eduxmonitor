const lectures = [
  {
    day: "Day 1",
    link: "https://drive.google.com/file/d/13YOI7df6t6sBUPvRmu2TVfbDUF6vIYTc/view?usp=sharing"
  },
  {
    day: "Day 2",
    link: "https://drive.google.com/file/d/1khaUDBmigvH0-Bsi-G-SxIli0qtkd5SX/view?usp=sharing"
  },
  {
    day: "Day 3",
    link: "https://drive.google.com/file/d/1Z9ngtO0YuSw7WE111mF01HTy9iwoIaWm/view?usp=sharing"
  },
  {
    day: "Day 4",
    link: "https://drive.google.com/file/d/1FaJ_-4UKukPgjb_eauSpUK91ydlc26DF/view?usp=sharing"
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
