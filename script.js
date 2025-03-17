const projectCards = [
  {
    image: './assets/images/Snapshoot Portfolio (9).png',
    description: 'An interactive gallery that showcase my This Java project is a very efficient & easy way to conduct an examination and store the results in the database.',
    tittle: 'Multi-post Stories Gain+Glory',
    technologies: [
      'Ruby On Rails',
      'CSS',
      'JavaScript',
    ],
    link: '#',
    githublink: '#',
    liveserverlink: '#',

  },
  {
    image: './assets/images/Snapshoot Portfolio (9).png',
    description: 'An interactive gallery that showcase my project',
    tittle: 'Multi-post Stories Gain+Glory',
    technologies: [
      'Ruby On Rails',
      'CSS',
      'JavaScript',
    ],
    link: '#',
    githublink: '#',
    liveserverlink: '#',

  },
  {
    image: './assets/images/Snapshoot Portfolio (9).png',
    description: 'An interactive gallery that showcase my project',
    tittle: 'Multi-post Stories Gain+Glory',
    technologies: [
      'Ruby On Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    link: '#',
    githublink: '#',
    liveserverlink: '#',

  },
  {
    image: './assets/images/Snapshoot Portfolio (9).png',
    description: 'An interactive gallery that showcase my project',
    tittle: 'Multi-post Stories Gain+Glory',
    technologies: [
      'Ruby On Rails',
      'CSS',
      'JavaScript',
    ],
    link: '#',
    githublink: '#',
    liveserverlink: '#',

  },
  {
    image: './assets/images/Snapshoot Portfolio (9).png',
    description: 'An interactive gallery that showcase my project',
    tittle: 'Multi-post Stories Gain+Glory',
    technologies: [
      'Ruby On Rails',
      'CSS',
      'JavaScript',
    ],
    link: '#',
    githublink: '#',
    liveserverlink: '#',

  },
  {
    image: './assets/images/Snapshoot Portfolio (9).png',
    description: 'An interactive gallery that showcase my project',
    tittle: 'Multi-post Stories Gain+Glory',
    technologies: [
      'Ruby On Rails',
      'CSS',
      'JavaScript',
    ],
    link: '#',
    githublink: '#',
    liveserverlink: '#',

  },

];
// close modal
function closeModal() {
  const projectModal = document.getElementById('projectModal');
  projectModal.remove();
}
// function for the modal
function openModal(project) {
  const modal = document.createElement('div');
  //  modal.textContent="modals are so cool omg"
  modal.classList.add('modal');
  modal.id = 'projectModal';

  const modalContent = document.createElement('div');
  modal.classList.add('modalContent');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('closeBtn');
  closeBtn.innerHTML = '&times';
  closeBtn.addEventListener('click', () => closeModal());
  modalContent.appendChild(closeBtn);

  const modalImage = document.createElement('img');
  modalImage.classList.add('modal_image');
  modalImage.src = project.image;
  modalImage.alt = project.tittle;
  modalContent.appendChild(modalImage);

  const modalTitle = document.createElement('h2');
  modalTitle.textContent = project.tittle;
  modalContent.appendChild(modalTitle);

  const modalList = document.createElement('ul');
  modalList.id = 'modalListId';
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    modalList.appendChild(listItem);
  });

  modalContent.appendChild(modalList);

  const discriptionModal = document.createElement('p');
  discriptionModal.innerHTML = project.description;
  modalContent.appendChild(discriptionModal);

  const modalLinks = document.createElement('div');
  modalLinks.classList.add('modallinks');

  const githublink = document.createElement('a');
  const text = document.createElement('span');
  const githubIcon = document.createElement('img');

  githublink.classList.add('gitHubLinks');
  githubIcon.classList.add('githubIcon');
  text.classList.add('text');
  githublink.href = project.githublink;
  githublink.target = '_blank';
  text.innerHTML = 'see live';
  githubIcon.src = './assets/images/Icon2.png';
  githubIcon.alt = 'github icon';
  githublink.appendChild(text);
  githublink.appendChild(githubIcon);
  modalLinks.appendChild(githublink);

  const liveLinks = document.createElement('a');
  const text1 = document.createElement('span');
  const gitHubIcon2 = document.createElement('img');
  liveLinks.classList.add('see_source');
  gitHubIcon2.src = './assets/images/github icon.png';
  gitHubIcon2.classList.add('github_icon');
  gitHubIcon2.alt = 'github icon';
  liveLinks.href = project.liveserverlink;
  liveLinks.target = '_blank';
  text1.innerHTML = 'see source';
  text1.classList.add('text');

  liveLinks.appendChild(text1);
  liveLinks.appendChild(gitHubIcon2);
  modalLinks.appendChild(liveLinks);
  modalContent.appendChild(modalLinks);
  modal.appendChild(modalContent);

  //  modal.style.backgroundColor="red"
  document.body.appendChild(modal);
}

// function to create the above card
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const picture = document.createElement('img');
  picture.src = project.image;
  picture.alt = project.tittle;
  card.appendChild(picture);
  const titre = document.createElement('h3');
  titre.innerHTML = project.tittle;
  card.appendChild(titre);
  const list = document.createElement('ul');
  project.technologies.forEach((technology) => {
    const listitem = document.createElement('li');
    listitem.innerHTML = technology;
    list.appendChild(listitem);
  });
  card.appendChild(list);
  const cardBtn = document.createElement('button');
  card.appendChild(cardBtn);
  cardBtn.innerHTML = 'See Project';
  cardBtn.addEventListener('click', () => openModal(project));
  return card;
}
// function to display proiject card
function displayProjectCard() {
  const createProjectCardsContainer = document.querySelector('.projects_cards');
  projectCards.forEach((project) => {
    const projectCard = createProjectCards(project);
    createProjectCardsContainer.appendChild(projectCard);
  });
}
// document.addEventListener('DOMContentLoaded', displayProjectCard);
displayProjectCard();

// mobile_menu
const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});