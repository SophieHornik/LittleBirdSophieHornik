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
        name: 'Wooden Boat',
        ageRange: 'All Ages',
        description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.',
        img1: 'boat2 (2).jpg',
    },
    {
        name: 'Wooden Animal Set',
        ageRange: 'Toddlers',
        description: 'This collection features a variety of intricately detailed animals made from genuine beech wood. With dimensions of 84cm L x 15cm H x 10cm W, the set is large enough to provide endless imaginative play. Each piece is designed with a fully ecological design, making it a perfect addition to any playroom.',
        img1: 'animal.jpg',
    },
    {
        name: 'Wooden Block Set',
        ageRange: '3+',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).',
        img1: 'block.jpg',
    },
    {
        name: 'Wooden Car',
        ageRange: 'All Ages',
        description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
        img1: 'car.jpg',
    },


]

function generateTeamCards() {

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4', 'col-sm-6','col-lg-3','m-3')




        let backgroundColor = ''

        switch (member.ageRange.toLowerCase()) {
            case 'toddlers':
                backgroundColor = "#ff914d"
                break
            case 'allAges':
                backgroundColor = "white"
                break
            case '3+':
                backgroundColor = "gray"
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