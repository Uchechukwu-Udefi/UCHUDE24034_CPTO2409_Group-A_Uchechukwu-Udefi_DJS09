// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
import { mostRecentViewer, populateUser, } from './utils'
import { LoyaltyUser } from './enums'; 

let isOpen : boolean

// Reviews
/*const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}*/const reviews: any [] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

// User
const you: {
  firstName: string; 
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
    firstName: 'Bobby', 
    lastName: 'Brown',
    isReturning: true,
    age: 30,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
}

const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
  {
    image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true 
  },
  {
    image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
  },
  {
    image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
  },
]

//Function
mostRecentViewer(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// Add properties to Dashboard
const propertyContainer = document.querySelector('.properties');
for (let i = 0; i < properties.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = properties[i].title
        const image = document.createElement('img')
        image.setAttribute('src', properties[i].image)
        card.appendChild(image)
        propertyContainer.appendChild(card)
    };

const footer = document.querySelector('.footer')
let currentLocation: [string, string, number] = ['Cape Town', '11:35', 17]
footer.innerHTML = currentLocation[0] + '|' + currentLocation[1] + '|' + currentLocation[2] + '°'
