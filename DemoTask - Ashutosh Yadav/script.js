const btn_right = document.getElementById("btn_cleft");
const btn_left = document.getElementById("btn_cright");
const carousel = document.getElementById("carousel");
const imagetwo = document.getElementById("imagetwo");
const imageone = document.getElementById("imageone");
const imagethree = document.getElementById("imagethree");
const imgone_content = document.getElementById("imgone_content");
const ans1 = document.getElementById("ans1");
const btn_ans1 = document.getElementById("btn_ans1");


btn_left.addEventListener("click", moveleftside);
btn_right.addEventListener("click", moverightside);
btn_ans1.addEventListener('click', expand_function);



imageone.addEventListener("mouseover", () => {
    imageone.style.width = "750px";
    imagetwo.style.width = "150px";
    imagetwo.style.width = "150px";

    imgone_content.innerText = 'Browse Leveled SMBs each listed after through due diligence and operator has been put in place.';

});
imagetwo.addEventListener("mouseover", () => {
    imageone.style.width = "150px";
    imagetwo.style.width = "750px";
    imagethree.style.width = "150px";
    imgone_content.innerText = '';

})
imagethree.addEventListener("mouseover", () => {
    imageone.style.width = "150px";
    imagetwo.style.width = "150px";
    imagethree.style.width = "750px";
    imgone_content.innerText = '';
})


let counter = 1
btn_right.style.opacity = '50%';

function moveleftside() {
    if (counter == 1) {
        carousel.style.transform = `translateX(-300px)`;
        btn_right.style.opacity = '100%';
        btn_left.style.opacity = '50%';
    }
}

function moverightside() {
    if (counter == 1) {
        carousel.style.transform = `translateX(0px)`;
        btn_right.style.opacity = '50%';
        btn_left.style.opacity = '100%';
    } else {
        carousel.style.transform = `translateX(100px)`;
        btn_left.style.opacity = '100%';
    }
}

let counter1 = 1;
function expand_function() {

    if (counter1 == 1) {
        ans1.style.display = 'flex';
        btn_ans1.style.rotate = '-40deg'
        counter1 = 0
    } else {
        ans1.style.display = 'none';
        btn_ans1.style.rotate = '0deg'
        counter1 = 1;
    }
}
