const projectCards = [
    {Image :"",
        tittle: "Multi-post Stories Gain+Glory",
        technoloies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#",



    },
    {image :"",
        tittle: "Multi-post Stories Gain+Glory",
        technoloies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#"

    },
    {image :"",
        tittle: "Multi-post Stories Gain+Glory",
        technoloies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#"

    },
    {image :"",
        tittle: "Multi-post Stories Gain+Glory",
        technoloies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#"

    },
    {image :"",
        tittle: "Multi-post Stories Gain+Glory",
        technoloies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#"

    },
    {image :"",
        tittle: "Multi-post Stories Gain+Glory",
        technoloies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#"

    }
]
// function to create the above card
function createProjectCards(project){
    const card = document.createElement('div');
    card.classList.add("project_card");
    const picture = document.createElement("img");
    picture.src = project.image;
    picture.alt = project.tittle;
    card.appendChild(picture);
    const titre  = document.createElement("h3")
    titre.innerHTML = project.tittle;
    card.appendChild(titre);
    const list = document.createElement ("ul");
    project.technoloies.forEach(element =>{
        const listitem = document.createElement("li");
        listitem.innerHTML = element;
        list.appendChild(listitem)
    })
    card.appendChild(list);
    const cardBtn = document.createElement("button");
    card.appendChild(cardBtn);
    cardBtn.innerHTML = 'See Project';
    return card;
}
// function to display proiject card
function displayProjectCard(){
    const createProjectCardsContainer = document.querySelector('.projects_cards');
    projectCards.forEach((project)=>{
        const projectCard = createProjectCards(project);
        createProjectCardsContainer.appendChild(projectCard)
    })
}
document.addEventListener('DOMContentLoaded', displayProjectCard);

// mobile_menu
const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click",() =>{
const desktopMenu = document.getElementById("desktop_menu");
desktopMenu.classList.toggle("active");
mobileMenu.classList.toggle("active");
    }
)