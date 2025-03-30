
const applyButton = document.querySelector('.apply-button');

if (applyButton) {
    applyButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Apply Now button clicked!');
    });
}

const searchInput = document.querySelector('.search input');

if (searchInput) {
    searchInput.addEventListener('input', function () {
        console.log('Search query:', searchInput.value);
    });
}

var applyForm = document.getElementById('appleForm')
document.getElementById('apply-button').addEventListener('click', function () {
    applyForm.style.display = "block"
    applyForm.style.visibility = "visible"
    alert('Apply Now for web development Internship!');
});

function subFormData(){
    const applyForm = document.getElementById('applyForm');
    applyForm.style.display = "none";
}

var contentHide = document.getElementById("moreInfo");
document.getElementById('learnMoreBtn').addEventListener('click', function () {
    if (contentHide.style.visibility === "visible") {
        contentHide.style.visibility = "hidden";
        contentHide.style.display = "none";
    } else {
        contentHide.style.visibility = "visible";
        contentHide.style.display = "flex"; // or flex, grid, etc.
    }
});


contentHide.addEventListener("click", function (){
    contentHide.style.visibility = "hidden";
    contentHide.style.display = "none";
})