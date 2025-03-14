const projectCards = [
    {
        image :"./assets/images/Snapshoot Portfolio (9).png",
        description: 'An interactive gallery that showcase my This Java project is a very efficient & easy way to conduct an examination and store the results in the database.',
        tittle: "Multi-post Stories Gain+Glory",
        technologies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#",
        githublink:"#",
        liveserverlink:"#",



    },
    {image :"./assets/images/Snapshoot Portfolio (9).png",
        description: 'An interactive gallery that showcase my project',
        tittle: "Multi-post Stories Gain+Glory",
        technologies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#",
        githublink:"#",
        liveserverlink:"#",


    },
    {image :"./assets/images/Snapshoot Portfolio (9).png",
     description: 'An interactive gallery that showcase my project',
        tittle: "Multi-post Stories Gain+Glory",
        technologies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
            'HTML'
        ],
        link:"#",
        githublink:"#",
        liveserverlink:"#",


    },
    {image :"./assets/images/Snapshoot Portfolio (9).png",
        description: 'An interactive gallery that showcase my project',
        tittle: "Multi-post Stories Gain+Glory",
        technologies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#",
        githublink:"#",
        liveserverlink:"#",


    },
    {image :"./assets/images/Snapshoot Portfolio (9).png",
        description: 'An interactive gallery that showcase my project',
        tittle: "Multi-post Stories Gain+Glory",
        technologies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#",
        githublink:"#",
        liveserverlink:"#",


    },
    {image :"./assets/images/Snapshoot Portfolio (9).png",
        description: 'An interactive gallery that showcase my project',
        tittle: "Multi-post Stories Gain+Glory",
        technologies: [
            "Ruby On Rails",
            "CSS",
            "JavaScript",
        ],
        link:"#",
        githublink:"#",
        liveserverlink:"#",


    }


]

// function to create the modal

function closeModal(){
    const modal = document.getElementById("projectmodal");
    if (modal){
        modal.remove();
    }

}
// function for the modal
function openModal(project){
    const modal = document.createElement('div')
    //  modal.textContent="modals are so cool omg"
     modal.classList.add('modal')
     modal.id='projectModal'



     const modalContent = document.createElement('div')
     modal.classList.add('modalContent')

     const closeBtn = document.createElement('span')
     closeBtn.classList.add('closeBtn')
     closeBtn.innerHTML='&times'
     closeBtn.addEventListener('click',() =>closeModal())
     modalContent.appendChild(closeBtn)



     const modalImage = document.createElement('img')
     modalImage.src=project.image
     modalImage.alt=project.tittle
     modalContent.appendChild(modalImage)


    
     


     const modalTitle =document.createElement('h2')
     modalTitle.textContent=project.tittle
     modalContent.appendChild(modalTitle)
    


     const modalList =document.createElement('ul')
      modalList.id="modalListId"
      project.technologies.forEach((element)=>{
        const listItem = document.createElement("li")
        listItem.innerHTML=element
        modalList.appendChild(listItem)

        
      })
     
      modalContent.appendChild(modalList)

      const discriptionModal=document.createElement("p")
      discriptionModal.innerHTML=project.description
      modalContent.appendChild(discriptionModal)

      const modalLinks = document .createElement("div")
      modalLinks.classList.add("modallinks")

      const githublink = document .createElement("a")
      githublink.classList.add("gitHubLinks")
      githublink.href=project.githublink
      githublink.target="_blank"
      githublink.innerHTML='see source'
      modalLinks.appendChild(githublink)

      const liveLinks = document .createElement("a")
      liveLinks.classList.add("gitHubLinks")
     liveLinks.href=project.liveserverlink
      liveLinks.target="_blank"
      liveLinks.innerHTML='see live'
      modalLinks.appendChild(liveLinks)
      modalContent.appendChild(modalLinks)
      modal.appendChild(modalContent)




      




    //  modal.style.backgroundColor="red"
     document.body.appendChild(modal)
     
}
function closeModal(){
    const projectModal=document.getElementById('projectModal')
    projectModal.remove()
}


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
    project.technologies.forEach((technology)=>{
        const listitem = document.createElement("li");
        listitem.innerHTML = technology;
        list.appendChild(listitem)
    })
    card.appendChild(list);
    const cardBtn = document.createElement("button");
    card.appendChild(cardBtn);
    cardBtn.innerHTML = 'See Project';
    cardBtn.addEventListener('click',()=>openModal(project)
      
     )
    return card;
}
// function to display proiject card
function displayProjectCard(){
    const createProjectCardsContainer = document.querySelector('.projects_cards');
    projectCards.forEach((project)=>{
        const projectCard = createProjectCards(project);
        createProjectCardsContainer.appendChild(projectCard)
    });

}
// document.addEventListener('DOMContentLoaded', displayProjectCard);
displayProjectCard(); 

// mobile_menu
const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click",() =>{
const desktopMenu = document.getElementById("desktop_menu");
desktopMenu.classList.toggle("active");
mobileMenu.classList.toggle("active");
    }
)


     var heading1 = document.getElementById("me")
     heading1.textContent="please click here"
     heading1.style.backgroundColor="red"
     heading1.addEventListener("click",()=>{
      console.log("welcome to my dream coming to pass")  
     }
       
     )
     
