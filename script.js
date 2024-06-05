//Team Member Data
const teamMembers = [
    {
        name: 'Darth Vader',
        ageRange: 'Toddler',
        description:'dc',
        img:'vader.png',
        dimensions:'343',
    },
    {
        name: 'Darth Vader',
        ageRange: '3+',
        description:'dc',
        img:'vader.png',
        dimensions:'343',
    },
    {
        name: 'Darth Vader',
        ageRange: 'everyone',
        description:'dc',
        img:'vader.png',
        dimensions:'343',
    },

    ]
    
    function generateTeamCards(){
    
    const teamCardsContainer = document.getElementById('teamCards')
    
    teamMembers.forEach(member => {
        const card = document.createElement('div')
    
    
        let aliveStatus
    
        if(member.alive){
            aliveStatus = "Living"
        } else {
            aliveStatus = "Deceased"
        }
    
    
    
    
    
    //style the background color of the card based off position
    let backgroundColor
    
    switch(member.ageRange.toLowerCase()){
        case 'toddler':
            backgroundColor = "#ff914d"
            break
            case '3+':
            backgroundColor = "gray"
            break
            case 'everyone':
            backgroundColor = "white"
            break
            case '':
            backgroundColor = "(223, 223, 223)"
            break
    }
    card.style.backgroundColor = backgroundColor
    
    
        card.innerHTML= `
        <div class="card m-5">
            <div class = "card-header text-center">
            <img src="${member.img}" class="img-fluid card-img">
          ${member.name}
            </div>
            <div class="card-body" style="background-color:${backgroundColor};">
            <p><strong class="chcolor">Age Range:</strong> ${member.ageRange}</p>
            <p><strong class="chcolor">Dimensions:</strong> ${member.dimensions}</p>
            <p><strong class="chcolor">Description
            :</strong> ${member.description}</p>
            </div>
        </div>
      
        `
        
        teamCardsContainer.appendChild(card)
    });
    }
    window.onload = generateTeamCards()