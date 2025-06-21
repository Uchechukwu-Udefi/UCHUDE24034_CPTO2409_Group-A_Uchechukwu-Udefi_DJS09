import { LoyaltyUser } from "./enums";
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

function showReviewTotal (value : number) {
  return value.toString() + ` Review` + makeMultiple(value)
}

export function mostRecentViewer(value: number, name: string, loyaltyUser: LoyaltyUser) {
    const reviewTotal = showReviewTotal(value);
    const star = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = `${reviewTotal} | Recent viewer: ${name}   ${star}`;
}


export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning === true){
        returningUserDisplay.innerHTML = 'back '
    }
    userNameDisplay.innerHTML = userName;
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}
