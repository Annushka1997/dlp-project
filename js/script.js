const bgAnimation = document.querySelector("#bgAnimation");
const wrapper = document.querySelector(".wrapper-item");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement("div");

    colorBox.classList.add("colorBox");
    bgAnimation.append(colorBox);
}

registerLink.addEventListener("click", () => {
    console.log("HI");
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    console.log("HI");
    wrapper.classList.remove("active");
});