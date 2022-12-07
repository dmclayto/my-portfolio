 //NAVIGATION PART
 //
 // Define Global Variables
/*
 //variable to select the Unordered List element.
    const navUl = document.getElementById('navbar__list');
    
    //variables for creating a list item in the unordered list.
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');
    
   
    //array to name each list section.
const newArray = ["About Me", "Projects", "Contact"];


// variable to select html sections. used for active state of webpage.
const secHighlight = document.querySelectorAll('section');

//variables to create anchor tag and scroll from Ul to sections.the href links to the other section for scrolling.
const anchorTag1 = document.createElement('a');
anchorTag1.href = '#section1';
const anchorTag2 = document.createElement('a');
anchorTag2.href = '#section2';
const anchorTag3 = document.createElement('a');
anchorTag3.href = "#section3";





//build navigation bar headings/buttons.



  navUl.appendChild(listItem1);
   listItem1.appendChild(anchorTag1).append(newArray [0]);
   

   
  navUl.appendChild(listItem2);
  listItem2.appendChild(anchorTag2).append(newArray [1]);

  
  navUl.appendChild(listItem3);
   listItem3.appendChild(anchorTag3).append(newArray [2]);

   
 



//styling the navigation bar with css 
    
   /*navUl.style.cssText = 'list-style: none; display: flex; flex-direction: row; justify-content: space-evenly; ' */


 

// variable to select html sections. used for active state of webpage.
const secHighlight = document.querySelectorAll('section');






//SECTION ACTIVE STATE PART. activates when scrolling on top of each section and scrolling off it disables.


window.addEventListener('scroll', () =>{
let glow = '';


secHighlight.forEach (section =>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
  
    
    // removing active state. (bubble animation stops and menu button lights up)
    if (pageYOffset > sectionTop){
        glow = section.classList.remove('your-active-class');
        
        document.querySelector(`a[href='#${section.id}`).classList.add('active');
        
    }
// adding active state (stops bubble animation).
        else if (pageYOffset < sectionTop){
            glow = section.classList.add ('your-active-class');
            
            document.querySelector(`a[href='#${section.id}`).classList.remove('active');
            
    }
    
    })
})
    






// Scroll to anchor ID using scrollTO event


document.querySelectorAll('a[href^= "#').forEach(scroll =>{
    scroll.addEventListener("click", function (s){
        s.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
        
    });
});


//image slider function
//project 1
function imgSlider1(anything) {
            
      
    document.getElementById('projectimage1').src = anything;
}

//project 2
function imgSlider2(anything) {
    
    document.getElementById('projectimage2').src = anything;
}


//project 3
function imgSlider3(anything) {
    
    document.getElementById('projectimage3').src = anything;
}



//project 4
function imgSlider4(anything) {
            
      
    document.getElementById('projectimage4').src = anything;
}


//project 5
function imgSlider5(anything) {
            
      
    document.getElementById('projectimage5').src = anything;
}

//project 6
function imgSlider6(anything) {
            
      
    document.getElementById('projectimage6').src = anything;
}