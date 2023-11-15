// (function(){
//     const spanEl = document.querySelector("main h2 span");
//     const txtArr = [];
//     let index = 0;
//     let currentTxt = txtArr[index].split("");
//     function writeTxt(){
//         spanEl.textContent +=currentTxt.shift();
//         if(currentTxt.length !==0){
//             setTimeout(writeTxt,Math.floor(Math.random()*300));
//         }else{
//             currentTxt = spanEl.textContent.split("");
//             setTimeout(deleteTxt,3000);
//         }
//     }
//     function deleteTxt(){
//         currentTxt.pop();
//         spanEl.textContent = currentTxt.join("");
//         if(currentTxt.length !==0){
//             setTimeout(deleteTxt,Math.floor(Math.random()*100))
//         }else{
//             index = (index+1) % txtArr.length;
//             currentTxt = txtArr[index].split("");
//             writeTxt();
//         }
//     }    
//     writeTxt();
// })();        
/*스크롤을 내릴때 ,header부분이 따라서 내려가게 한다 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollcheck);
});
function scrollcheck(){
    let browerScrolly = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrolly>0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}
/* 애니메이션 스크롤 이동 */
const animationMove = function(selector){

    const targetEl = document.querySelector(selector);
    const browerScrolly = window.pageYOffset;
    const targetScrollY= targetEl.getBoundingClientRect().top + browerScrolly;
    window.scrollTo({top:targetScrollY,behavior:'smooth'});
};

const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
    const target = this.dataset.target;
    animationMove(target);
    });
}
/* 시작날자기산*/
const date1 =new Date('2023-09-14');
const date2 =new Date();
const dateDiff = date2.getTime() - date1.getTime();
const interval = dateDiff