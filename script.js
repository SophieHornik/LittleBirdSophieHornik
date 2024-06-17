//Team Member Data
const teamMembers = [
    {
        name: 'Wooden Airplane',
        ageRange: 'Toddlers',
        description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W',
        img1: 'plane1.jpg',
    },
    {
        name: 'Wooden Train Set',
        ageRange: '3+',
        description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.',
        img1: 'train1.jpg',
    },
    {
        name: 'Darth Vader',
        ageRange: 'Human',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img1: 'vader.png',
    },
    {
        name: 'Darth Vader',
        ageRange: 'Human',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img1: 'vader.png',
    },
    {
        name: 'Darth Vader',
        ageRange: 'Human',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img1: 'vader.png',
    },
    {
        name: 'Darth Vader',
        ageRange: 'Human',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img1: 'vader.png',
    },


]

function generateTeamCards() {

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3', 'm-3')




        let backgroundColor = ''

        switch (member.ageRange.toLowerCase()) {
            case 'toddlers':
                backgroundColor = "#ff914d"
                break
            case 'allAges':
                backgroundColor = "white"
                break
            case '3+':
                backgroundColor = "gray+"
                break
            case '':
                backgroundColor = "transparent"
                break
        }


        card.innerHTML = `
        <div class="card m-1" >
            <div class = "card-header text-center" >
           
      <img src="${member.img1}" class="d-block w-100" alt="...">
    
         ${member.name}
            </div>
            <div class="card-body" style="background-color:${backgroundColor};>
            <p><strong class="chcolor"><strong>Age Range:</strong> ${member.ageRange}</p>
            <p><strong class="chcolor">Description
            :</strong> ${member.description}</p>
            </div>
        </div>
      
        `
        for (let i = 1; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor;
        }



        teamCardsContainer.appendChild(card)
    });
}
window.onload = generateTeamCards()