const experiencesList = document.querySelector(".experiences");

const experiencesData = [
  {
    year: "2022",
    workplace: "lamanu",
    job: "- Formation développeur web et mobile",
  },
  {
    year: "2022",
    workplace: "udemy",
    job: "- Formation en auto didacte SCSS / JAVASCRIPT / REACT",
  },
  {
    year: "2021",
    workplace: "piercing spirit",
    job: "- Web designer",
  },
  {
    year: "2021",
    workplace: "lamanu",
    job: "- Formation web design et communication digitale",
  },
  {
    year: "2019",
    workplace: "valeo",
    job: "- Conducteur de machine industrielle",
  },
];

const displayExperiences = () => {
  experiencesList.innerHTML = experiencesData
    .map(
      (experience) =>
        `<li>
          <span class="border-black box-shadow date">${experience.year}</span>
            <div class="border-black box-shadow accordion">
              <h4>${experience.workplace}</h4>
              <p>${experience.job}</p>
          </div>
        </li>`
    )
    .join("");
};

displayExperiences();
