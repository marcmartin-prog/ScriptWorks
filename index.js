/* portfolio section script*/

  var firstButton = document.getElementById("button1");
	var secondButton = document.getElementById("button2");
	var thirdButton = document.getElementById("button3");
	var slide1 = document.getElementById("portItem1");
	var slide2 = document.getElementById("portItem2");
	var slide3 = document.getElementById("portItem3");


document.getElementById("button1").addEventListener("click", function(){
  firstButton.classList.remove("faded");
	secondButton.classList.add("faded");
	thirdButton.classList.add("faded");
	slide1.classList.remove("portfolio-item-off")
	slide1.classList.remove("portfolio-item-after");
	slide2.classList.add("portfolio-item-second");
	slide2.classList.remove("portfolio-item-after")
	slide3.classList.add("portfolio-item-third")
})

document.getElementById("button2").addEventListener("click", function(){
  secondButton.classList.remove("faded");
	firstButton.classList.add("faded");
	thirdButton.classList.add("faded");
	slide1.classList.add("portfolio-item-after");
	slide1.classList.remove("portfolio-item-off")
	slide2.classList.remove("portfolio-item-second");
	slide2.classList.remove("portfolio-item-after")
	slide3.classList.remove("portfolio-item-third");
	slide3.classList.add("portfolio-item-second");
})

document.getElementById("button3").addEventListener("click", function(){
	firstButton.classList.add("faded");
	secondButton.classList.add("faded");
	thirdButton.classList.remove("faded");
	slide1.classList.add("portfolio-item-off");
	slide2.classList.remove("portfolio-item-second");
	slide2.classList.add("portfolio-item-after");
	slide3.classList.remove("portfolio-item-third");
	slide3.classList.remove("portfolio-item-second");
});

var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');

function turnOffArrows(){
  if(slide2.classList.contains('portfolio-item-second')){
    leftArrow.style.display = "none";
  } else if(slide2.classList.contains('portfolio-item-after')){
    rightArrow.style.display = "none";
  }else{
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  }
};



document.getElementById("left-arrow").addEventListener("click", function(){
  if(slide3.classList.contains('portfolio-item-second')){
    firstButton.classList.remove("faded");
    secondButton.classList.add("faded");
    thirdButton.classList.add("faded");
    slide1.classList.remove("portfolio-item-off")
    slide1.classList.remove("portfolio-item-after");
    slide2.classList.add("portfolio-item-second");
    slide2.classList.remove("portfolio-item-after");
    slide3.classList.add("portfolio-item-third");
  } else if(slide2.classList.contains('portfolio-item-after')){
    secondButton.classList.remove("faded");
    firstButton.classList.add("faded");
    thirdButton.classList.add("faded");
    slide1.classList.add("portfolio-item-after");
    slide1.classList.remove("portfolio-item-off")
    slide2.classList.remove("portfolio-item-second");
    slide2.classList.remove("portfolio-item-after")
    slide3.classList.remove("portfolio-item-third");
    slide3.classList.add("portfolio-item-second");
  }
});

document.getElementById("right-arrow").addEventListener("click", function(){
  if(slide2.classList.contains('portfolio-item-second')){
    secondButton.classList.remove("faded");
  	firstButton.classList.add("faded");
  	thirdButton.classList.add("faded");
  	slide1.classList.add("portfolio-item-after");
  	slide1.classList.remove("portfolio-item-off")
  	slide2.classList.remove("portfolio-item-second");
  	slide2.classList.remove("portfolio-item-after")
  	slide3.classList.remove("portfolio-item-third");
  	slide3.classList.add("portfolio-item-second");
  } else if (slide3.classList.contains('portfolio-item-second')){
    firstButton.classList.add("faded");
    secondButton.classList.add("faded");
    thirdButton.classList.remove("faded");
    slide1.classList.add("portfolio-item-off");
    slide2.classList.remove("portfolio-item-second");
    slide2.classList.add("portfolio-item-after");
    slide3.classList.remove("portfolio-item-third");
    slide3.classList.remove("portfolio-item-second");
  }
});


/*prices slider on mobile and tablet sizes*/

var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");

document.getElementById("pr-left-arrow").addEventListener("click", function(){
  if(item1.classList.contains("item1-after")){
    item1.classList.remove("item1-after");
    item2.classList.remove("item2-on");
    item2.classList.add("item2-before");
    item3.classList.remove("item3-before");
  } else if(item3.classList.contains("item3-on")){
    item3.classList.remove("item3-on");
    item3.classList.add("item3-before");
    item2.classList.add("item2-on");
    item2.classList.remove("item2-after");
    item1.classList.remove("item1-off");
    item1.classList.add("item1-after");
  }
});

document.getElementById("pr-right-arrow").addEventListener("click", function(){
  if(item2.classList.contains("item2-before")){
    item1.classList.add("item1-after");
    item2.classList.remove("item2-before");
    item2.classList.add("item2-on");
    item3.classList.add("item3-before");
  } else if(item2.classList.contains("item2-on")){
    item1.classList.add("item1-off");
    item1.classList.remove("item1-after");
    item2.classList.remove("item2-on");
    item2.classList.add("item2-after");
    item3.classList.add("item3-on");
    item3.classList.remove("item3-before");
  }
});


/*responsive mobile menu script*/

var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

var mobileMenu = document.getElementById("mobile-menu");
document.getElementById("menu-button").addEventListener("click", function(){
	if (mobileMenu.style.display === "block"){
		mobileMenu.style.display = "none";
    line1.classList.remove("line1clicked");
    line2.classList.remove("line2clicked");
    line3.classList.remove("line3clicked");
	} else {
		mobileMenu.style.display = "block";
    line1.classList.add("line1clicked");
    line2.classList.add("line2clicked");
    line3.classList.add("line3clicked");

	}
})


/*make the menu close after clicking menu item*/
var menuItem = document.getElementsByClassName("menu-item");

for (var i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function(){
		if (mobileMenu.style.display === "block"){
			mobileMenu.style.display = "none";
      line1.classList.remove("line1clicked");
      line2.classList.remove("line2clicked");
      line3.classList.remove("line3clicked");
		} else {
			mobileMenu.style.display = "block";
		}
	})

}

/*notice after form submission*/
