// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews");

let isOpen : boolean

const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function showReviewTotal (value : number) {
  return 'review total ' + value.toString()
}

function mostRecentViewer(value: number, name: string, loyaltyUser: boolean) {
    const reviewTotal = showReviewTotal(value);
    const star = loyaltyUser ? '⭐' : '';
    reviewTotalDisplay.innerHTML = `${reviewTotal} | Recent viewer: ${name}   ${star}`;
}

mostRecentViewer(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
}

function populateUser(isReturning: boolean, userName: { firstName: string; lastName: string }) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back ' + userName.firstName;
    }
    userNameDisplay.innerHTML = userName.lastName;
}

populateUser(you.isReturning, you.userName)