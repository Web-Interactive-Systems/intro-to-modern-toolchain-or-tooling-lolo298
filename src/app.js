import folio from './folio.json'
import { format, formatDistanceToNow } from 'date-fns'

const elements = {
  firstName: document.querySelector('.firstName'),
  lastName: document.querySelector('.lastName'),
  age: document.querySelector('.age'),
  interests: document.querySelector('.interests span'),
  skills: document.querySelector('.skills'),
  projects: document.querySelector('.projects'),
  json: document.querySelector('.json'),
}

elements.firstName.innerText = folio.firstName
elements.lastName.innerText = folio.lastName
elements.age.innerText = formatDistanceToNow(new Date(folio.birthday), {
  addSuffix: true,
})

elements.interests.innerText = folio.interests.join(', ')

elements.skills.innerHTML = folio.skills.map((skill) => `<li>${skill.name} ${skill.level}/5</li>`).join('')

elements.projects.innerHTML = folio.projects
  .map(
    (project) => `
  <li class="card">
  <img src="${project.thumbnail}" alt="${project.name}" />
  <div class="card-content">
    <h3>${project.name}</h3>
    <p class="project-date">${format(new Date(project.date), 'yyyy-MM-LL')}</p>
    <p>${project.description}</p>
    <a href="${project.url}" target="_blank">View</a>
  </div>
  </li>
  `
  )
  .join('')

elements.json.innerText = JSON.stringify(folio, null, 2)
