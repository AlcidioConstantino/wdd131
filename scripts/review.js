const reviewCountKey = "productReviewCount";
const submittedReview = new URLSearchParams(window.location.search);
const reviewCountElement = document.querySelector("#reviewCount");
let reviewCount = Number(localStorage.getItem(reviewCountKey) || 0);

if (submittedReview.has("productName") && submittedReview.has("rating") && submittedReview.has("installDate")) {
    reviewCount += 1;
    localStorage.setItem(reviewCountKey, reviewCount);
}

reviewCountElement.textContent = reviewCount;
