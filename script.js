//Side menu function
const sideMenuClick = document.querySelector(".sideMenu");
const sideMenBar = document.querySelector(".sideMenuTemplateParent");
const closeXmark = document.querySelector(".closeMark");
const closeMenuClick2 = document.querySelector(".sideMenuBarFirst");
const mainPage = document.querySelector(".mainPage");
const hollPage = document.querySelector(".hollPage");

//Slide Menu
sideMenuClick.addEventListener("click", () => {
  sideMenBar.classList.remove("sideMenuIsNotVisible");
  sideMenBar.classList.toggle("sideMenuVisible");
  mainPage.style.filter = "blur(10px)";
});

closeXmark.addEventListener("click", () => {
  mainPage.style.filter = "none";
  sideMenBar.classList.remove("sideMenuVisible");
  sideMenBar.classList.toggle("sideMenuIsNotVisible");
});

closeMenuClick2.addEventListener("click", () => {
  mainPage.style.filter = "none";
  sideMenBar.classList.remove("sideMenuVisible");
  sideMenBar.classList.toggle("sideMenuIsNotVisible");
});

//Slide Bellow menu
const listLiAll = document.querySelector(".listLi");
const list1 = document.querySelector(".firstLi");
const circle1 = document.querySelector(".circleDiv1");
const li1 = document.querySelector(".liDiv1");
const list2 = document.querySelector(".secondLi");
const circle2 = document.querySelector(".circleDiv2");
const li2 = document.querySelector(".liDiv2");
const list3 = document.querySelector(".thirdLi");
const circle3 = document.querySelector(".circleDiv3");
const li3 = document.querySelector(".liDiv3");
const list4 = document.querySelector(".forthLi");
const circle4 = document.querySelector(".circleDiv4");
const li4 = document.querySelector(".liDiv4");
const list5 = document.querySelector(".fifthLi");
const circle5 = document.querySelector(".circleDiv5");
const li5 = document.querySelector(".liDiv5");
const list6 = document.querySelector(".sixthLi");
const circle6 = document.querySelector(".circleDiv6");
const li6 = document.querySelector(".liDiv6");
const list7 = document.querySelector(".seventhLi");
const circle7 = document.querySelector(".circleDiv7");
const li7 = document.querySelector(".liDiv7");
const list8 = document.querySelector(".eightLi");
const circle8 = document.querySelector(".circleDiv8");
const li8 = document.querySelector(".liDiv8");

function addClass(circleEventAdd, liEventAdd) {
  circleEventAdd.classList.toggle("circleDivEnter");
  liEventAdd.classList.toggle("liDivEnter");
}
function removeClass(circleEventRemove, liEventRemove) {
  circleEventRemove.classList.toggle("circleDivOut");
  liEventRemove.classList.toggle("liDivOut");
}
function resetClassEnter(circleEventAddReset, liEventAddReset) {
  circleEventAddReset.classList.remove("circleDivOut");
  liEventAddReset.classList.remove("liDivOut");
}
function resetClassOut(circleEventRemoveReset, liEventRemoveReset) {
  circleEventRemoveReset.classList.remove("circleDivEnter");
  liEventRemoveReset.classList.remove("liDivEnter");
}

list1.addEventListener("mouseenter", () => {
  resetClassEnter(circle1, li1);

  addClass(circle1, li1);
});
list1.addEventListener("mouseout", () => {
  resetClassOut(circle1, li1);

  removeClass(circle1, li1);
});

list2.addEventListener("mouseenter", () => {
  resetClassEnter(circle2, li2);

  addClass(circle2, li2);
});
list2.addEventListener("mouseout", () => {
  resetClassOut(circle2, li2);

  removeClass(circle2, li2);
});
list3.addEventListener("mouseenter", () => {
  resetClassEnter(circle3, li3);

  addClass(circle3, li3);
});
list3.addEventListener("mouseout", () => {
  resetClassOut(circle3, li3);

  removeClass(circle3, li3);
});
list4.addEventListener("mouseenter", () => {
  resetClassEnter(circle4, li4);

  addClass(circle4, li4);
});
list4.addEventListener("mouseout", () => {
  resetClassOut(circle4, li4);

  removeClass(circle4, li4);
});
list5.addEventListener("mouseenter", () => {
  resetClassEnter(circle5, li5);

  addClass(circle5, li5);
});
list5.addEventListener("mouseout", () => {
  resetClassOut(circle5, li5);

  removeClass(circle5, li5);
});
list6.addEventListener("mouseenter", () => {
  resetClassEnter(circle6, li6);

  addClass(circle6, li6);
});
list6.addEventListener("mouseout", () => {
  resetClassOut(circle6, li6);

  removeClass(circle6, li6);
});
list7.addEventListener("mouseenter", () => {
  resetClassEnter(circle7, li7);

  addClass(circle7, li7);
});
list7.addEventListener("mouseout", () => {
  resetClassOut(circle7, li7);

  removeClass(circle7, li7);
});

//third Page Click Function
const peraDivAll = document.querySelectorAll(".subDiv");
const peraImageAll = document.querySelectorAll(".peraImage");
const peraAll = document.querySelectorAll(".pagePera");

const peraDiv1 = document.querySelector(".thirdPagePeraSubDiv1");
const pera1 = document.querySelector(".thirdPagePera1");
const image1 = document.querySelector(".image1");

const peraDiv2 = document.querySelector(".thirdPagePeraSubDiv2");
const pera2 = document.querySelector(".thirdPagePera2");
const imageDiv = document.querySelector(".thirdImageDiv");
const image2 = document.querySelector(".image2");

const peraDiv3 = document.querySelector(".thirdPagePeraSubDiv3");
const pera3 = document.querySelector(".thirdPagePera3");
const image3 = document.querySelector(".image3");

function PeraDivOneVisible() {
  peraDivAll[0].style.overflow = "visible";
  peraDivAll[0].style.opacity = "1";
  peraDivAll[0].style.height = "200px";
  peraAll[0].style.visibility = "visible";
  peraImageAll[0].style.display = "inline-block";
  peraDivAll[0].style.transition = "all 0.9s ease";
}
function PeraDivOneHide() {
  peraDivAll[0].style.overflow = "none";
  peraDivAll[0].style.opacity = "0.6";
  peraDivAll[0].style.height = "60px";
  peraAll[0].style.visibility = "hidden";
  peraImageAll[0].style.display = "none";
  peraDivAll[0].style.transition = "all 0.9s ease";
}
function PeraDivTwoVisible() {
  peraDivAll[1].style.overflow = "visible";
  peraDivAll[1].style.opacity = "1";
  peraDivAll[1].style.height = "200px";
  peraAll[1].style.visibility = "visible";
  peraImageAll[1].style.display = "inline-block";
  peraDivAll[1].style.transition = "all 0.9s ease";
}
function PeraDivTwoHide() {
  peraDivAll[1].style.overflow = "none";
  peraDivAll[1].style.opacity = "0.6";
  peraDivAll[1].style.height = "60px";
  peraAll[1].style.visibility = "hidden";
  peraImageAll[1].style.display = "none";
  peraDivAll[1].style.transition = "all 0.9s ease";
}
function PeraDivThreeVisible() {
  peraDivAll[2].style.overflow = "visible";
  peraDivAll[2].style.opacity = "1";
  peraDivAll[2].style.height = "140px";
  peraAll[2].style.visibility = "visible";
  peraImageAll[2].style.display = "inline-block";
  peraDivAll[2].style.transition = "all 0.9s ease";
}
function PeraDivThreeHide() {
  peraDivAll[2].style.overflow = "none";
  peraDivAll[2].style.opacity = "0.6";
  peraDivAll[2].style.height = "60px";
  peraAll[2].style.visibility = "hidden";
  peraImageAll[2].style.display = "none";
  peraDivAll[2].style.transition = "all 0.9s ease";
}

PeraDivOneVisible();
peraDiv1.addEventListener("click", () => {
  console.log(peraImageAll.length);
  PeraDivThreeHide();
  PeraDivOneVisible();
  PeraDivTwoHide();
});
peraDiv2.addEventListener("click", () => {
  PeraDivOneHide();
  PeraDivTwoVisible();
  PeraDivThreeHide();
});
peraDiv3.addEventListener("click", () => {
  PeraDivTwoHide();
  PeraDivThreeVisible();
  PeraDivOneHide();
});

//Forth page function
const slider = document.querySelectorAll(".slide");
const slider1 = document.querySelector(".slideDiv1");
const slider2 = document.querySelector(".slideDiv2");
const slider3 = document.querySelector(".slideDiv3");
const rightClickOne = document.querySelector(".rightArrowButton");
const leftClickOne = document.querySelector(".leftArrowButton");
let currentClick = 0;

let current = 0;

rightClickOne.addEventListener("click", (event) => {
  if (current == 0) {
    leftClickOne.style.visibility = "visible";
    slider1.style.marginLeft = "0px";
    slider1.style.transition = "all 0.4s ease-out";
    current++;
    return current;
  }
  if (current == 1) {
    slider1.style.marginLeft = "-2200px";
    slider1.style.transition = "all 0.4s ease-out";

    rightClickOne.style.visibility = "hidden";
    current--;
    return current;
  }
});
leftClickOne.addEventListener("click", () => {
  if (current == 0) {
    rightClickOne.style.visibility = "visible";

    slider1.style.marginLeft = "0px";
    slider1.style.transition = "all 0.4s ease-out";
    current++;
    return current;
  }
  if (current == 1) {
    slider1.style.marginLeft = "2200px";
    slider1.style.transition = "all 0.4s ease-out";
    leftClickOne.style.visibility = "hidden";
    current--;
  }
});

//Fifth page function
let allMemberPera = document.querySelectorAll(".fifthPera");
let memberOne = document.querySelector(".fifthPageSubDiv2");
let memberOnePera = document.querySelector(".fifthPagePera1");
let memberTwo = document.querySelector(".fifthPageSubDiv3");
let memberTwoPera = document.querySelector(".fifthPagePera2");
let memberThree = document.querySelector(".fifthPageSubDiv4");
let memberThreePera = document.querySelector(".fifthPagePera3");
let memberUnderLine = document.querySelectorAll(".underLine");
let memberPeraCurent = 0;
//Member one

function resetMember() {
  for (let i = 1; i < allMemberPera.length; i++)
    allMemberPera[i].style.opacity = "0.4";
  memberUnderLine[0].style.visibility = "visible";
}
resetMember();

memberOne.addEventListener("click", () => {
  if (memberPeraCurent == 0) {
    slider[0].style.marginLeft = "2200px";
    slider[0].style.transition = "all 0.5s ease-out";
    memberUnderLine[0].style.visibility = "visible";
    memberUnderLine[1].style.visibility = "hidden";
    memberUnderLine[2].style.visibility = "hidden";
    memberOnePera.style.opacity = "0.9";
    leftClickOne.style.visibility = "hidden";
    rightClickOne.style.visibility = "visible";
    memberTwoPera.style.opacity = "0.4";
    memberThreePera.style.opacity = "0.4";
  }
});

memberTwo.addEventListener("click", () => {
  if (memberPeraCurent == 0) {
    slider[0].style.marginLeft = "0px";
    slider[0].style.transition = "all 0.5s ease-out";
    memberUnderLine[0].style.visibility = "hidden";
    memberUnderLine[1].style.visibility = "visible";
    memberUnderLine[2].style.visibility = "hidden";
    memberTwoPera.style.opacity = "0.9";
    memberOnePera.style.opacity = "0.4";
    memberThreePera.style.opacity = "0.4";
    leftClickOne.style.visibility = "visible";
    rightClickOne.style.visibility = "visible";
  }
});

memberThree.addEventListener("click", () => {
  console.log(memberPeraCurent);
  if (memberPeraCurent == 0) {
    slider[0].style.marginLeft = "-2200px";
    slider[0].style.transition = "all 0.5s ease-out";
    memberUnderLine[0].style.visibility = "hidden";
    memberUnderLine[1].style.visibility = "hidden";
    memberUnderLine[2].style.visibility = "visible";
    memberThreePera.style.opacity = "0.9";
    leftClickOne.style.visibility = "visible";
    rightClickOne.style.visibility = "hidden";
    memberTwoPera.style.opacity = "0.4";
    memberOnePera.style.opacity = "0.4";
  }
});
//Sixth page function
let allPera = document.querySelectorAll(".sixthPera");
let allLink = document.querySelectorAll(".linkSpan");
let linkSpan1 = document.querySelector(".linkSpan1");
let linkSpan2 = document.querySelector(".linkSpan2");
let linkSpan3 = document.querySelector(".linkSpan3");
let linkSpan4 = document.querySelector(".linkSpan4");
let linkSpan5 = document.querySelector(".linkSpan5");
let linkSpan6 = document.querySelector(".linkSpan6");
let linkSpan7 = document.querySelector(".linkSpan7");

let currentLink = 0;

function resetLink() {
  for (let i = 0; i < allPera.length; i++) {
    allPera[i].style.display = "none";
  }
}

linkSpan1.addEventListener("click", () => {
  resetLink();
  if (currentLink == 0) {
    allPera[0].style.display = "block";
  }
});

linkSpan2.addEventListener("click", () => {
  resetLink();
  if (currentLink == 0) {
    allPera[1].style.display = "block";
  }
});
linkSpan3.addEventListener("click", () => {
  resetLink();
  if (currentLink == 0) {
    allPera[2].style.display = "block";
  }
});
linkSpan4.addEventListener("click", () => {
  resetLink();
  if (currentLink == 0) {
    allPera[3].style.display = "block";
  }
});
linkSpan5.addEventListener("click", () => {
  resetLink();
  if (currentLink == 0) {
    allPera[4].style.display = "block";
  }
});
linkSpan6.addEventListener("click", () => {
  resetLink();
  if (currentLink == 0) {
    allPera[5].style.display = "block";
  }
});
//Seventh page function
const listPera = document.querySelector(".radioButtonDiv");
const radioPera = document.querySelector(".radioPera");
const downIcon = document.querySelector("#downIcon");
const radioLiDiv = document.querySelectorAll(".radioLiDiv");
const radioButton = document.querySelectorAll(".radioDiv");
const radioLiDetails = document.querySelectorAll(".radioLiDetails");
const applyButton = document.querySelector(".radioButtonApply");
const emailButton = document.querySelector(".emailDiv");
const followPera = document.querySelector(".seventhLastPera2");

let radioValue = 0;

listPera.addEventListener("click",(event)=>{
  let value = event.target.tagName
  if(value == "P"){
  emailButton.style.visibility = 'hidden';
  downIcon.style.transform = "rotate(180deg)";
  downIcon.style.transition = "all 0.6s ease"
  listPera.style.height = "340px";
  radioValue++;
}
})
function resetRadioButton(){
  for(let i =0;i<radioButton.length;i++){
    radioButton[i].style.backgroundColor = "white";
  }
}
radioLiDiv[0].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[0].textContent;
  radioPera.textContent = value;
  radioButton[0].style.backgroundColor = "#284849";
})
radioLiDiv[1].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[1].textContent;
  radioPera.textContent = value;
  radioButton[1].style.backgroundColor = "#284849";
})
radioLiDiv[2].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[2].textContent;
  radioPera.textContent = value;
  radioButton[2].style.backgroundColor = "#284849";
})
radioLiDiv[3].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[3].textContent;
  radioPera.textContent = value;
  radioButton[3].style.backgroundColor = "#284849";
})
radioLiDiv[4].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[4].textContent;
  radioPera.textContent = value;
  radioButton[4].style.backgroundColor = "#284849";
})
radioLiDiv[5].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[5].textContent;
  radioPera.textContent = value;
  radioButton[5].style.backgroundColor = "#284849";
})
radioLiDiv[6].addEventListener("click",()=>{
  resetRadioButton();
  const value = radioLiDetails[6].textContent;
  radioPera.textContent = value;
  radioButton[6].style.backgroundColor = "#284849";
})
applyButton.addEventListener("click",(event)=>{
  let value = event.target.tagName
  if(value == "BUTTON"){
  listPera.style.height = "46px";
  downIcon.style.transform = "rotate(0)";
  downIcon.style.transition = "all 0.6s ease"
  emailButton.style.visibility = "visible";
}
})
let emailInput = document.querySelector(".inputEmail");
let singupButton = document.querySelector(".buttonEmail");

singupButton.addEventListener("click", () => {
  singupButton.textContent = "Success";
  singupButton.style.color = "#ffffff";
  emailInput.style.opacity = "0.5";
  singupButton.style.opacity = "0.5";
});
