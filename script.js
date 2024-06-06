//Team Member Data
const teamMembers = [
    {
        name: 'Darth Vader',
        species: 'Human',
        saberColor: 'red',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img: 'vader.png'
    },
    {
        name: 'Darth Vader',
        species: 'Human',
        saberColor: 'red',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img: 'vader.png'
    },
    {
        name: 'Darth Vader',
        species: 'Human',
        saberColor: 'red',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img: 'vader.png'
    },
    {
        name: 'Darth Vader',
        species: 'Human',
        saberColor: 'red',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img: 'vader.png'
    },
    {
        name: 'Darth Vader',
        species: 'Human',
        saberColor: 'red',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img: 'vader.png'
    },
    {
        name: 'Darth Vader',
        species: 'Human',
        saberColor: 'red',
        description: 'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
        img: 'vader.png'
    },


]

function generateTeamCards() {

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3', 'm-3')




        let backgroundColor = ''

        switch (member.saberColor.toLowerCase()) {
            case 'red':
                backgroundColor = "red"
                break
            case 'blue':
                backgroundColor = "blue"
                break
            case 'green':
                backgroundColor = "green"
                break
            case 'purple':
                backgroundColor = "purple"
                break
            case '':
                backgroundColor = "gray"
                break
        }


        card.innerHTML = `
        <div class="card m-1">
            <div class = "card-header text-center">
            <img src="${member.img}" class="img-fluid card-img">
          ${member.name}
            </div>
            <div class="card-body" style="background-color:${backgroundColor};">
            <p><strong class="chcolor">Species:</strong> ${member.species}</p>
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