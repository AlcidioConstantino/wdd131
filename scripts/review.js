const reviewCountKey = "productReviewCount";
const reviewCount = Number(localStorage.getItem(reviewCountKey) || 0) + 1;
localStorage.setItem(reviewCountKey, reviewCount);
document.querySelector("#reviewCount").textContent = reviewCount;
