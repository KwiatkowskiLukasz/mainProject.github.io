import "../scss/main.scss";

console.log("HELLO 🚀");

fetch(`https://api.github.com/users/KwiatkowskiLukasz/repos?sort=created&direction=asc`)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(`.projects-grid__js`);
    for (let repo of res) {
      const { name, description, homepage, html_url } = repo;

      const template = `
      <article class="project">
      <div class="project__window">
        <span class="project__circle"></span>
        <span class="project__circle"></span>
        <span class="project__circle"></span>
      </div>
      <div class="project__content">
        <h3 class="project__grid project__title">
          <span class="project__label">project:</span>
          <span class="project__podlaski">${name}</span>
        </h3>
        <p class="project__grid">
          <span class="project__label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span
            >&lt;<a
              href="${homepage}"
              class="project__link"
              rel="noopener noreferrer"
              target="_blank"
              title="${name} - demo"
              >see here </a
            >&gt;</span
          >
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span
            >&lt;<a
              href="${html_url}"
              class="project__link"
              rel="noopener noreferrer"
              target="_blank"
              title="${name} - code"
              >source code </a
            >&gt;</span
          >
        </p>
      </div>
     </article>
     `;
       if (description){
        container.innerHTML += template;
       }; 
    
    
    }
console.log(res);
             
})
 .catch((e) => console.log(e));
