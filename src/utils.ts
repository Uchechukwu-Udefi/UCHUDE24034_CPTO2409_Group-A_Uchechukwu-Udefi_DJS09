const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

function showReviewTotal (value : number) {
  return 'review total ' + value.toString()
}

export function mostRecentViewer(value: number, name: string, loyaltyUser: boolean) {
    const reviewTotal = showReviewTotal(value);
    const star = loyaltyUser ? '⭐' : '';
    reviewTotalDisplay.innerHTML = `${reviewTotal} | Recent viewer: ${name}   ${star}`;
}


export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning === true){
        returningUserDisplay.innerHTML = 'back '
    }
    userNameDisplay.innerHTML = userName;
}
