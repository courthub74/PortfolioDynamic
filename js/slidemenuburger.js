// MY MENU STYLE PSUEDO-CODE

// query the burger button to set it to dissapearing class

// query the button space to change the innerHTML

// store that query in a variable

// set a class in css to make the burger img dissapear

// set a class to be toggled on for the button innerHTML

// set an eventlistener to the wholebutton and write a click function for the query

// toggle the class of the burger img upon the onclick

// change the innerHTML of the button space upon the onclick

// toggle the innerHTML off 

// set the burger position to RELATIVE

// set the close text position to ABSOLUTE

// FOR SLIDE MENU

// query the slide in menu

// toggle the css class to slide in


// HOME SECTION

const hamburger = document.querySelector('.tabletburger');

const buttonx = document.querySelector('.tabletclose');

const wholebutton = document.querySelector('.hamburgertablet');

const slide_menu_home = document.querySelector('.tablet-nav-home');

// select the body body
const bodybody = document.querySelector('.body');

// apply the click function to the wholebutton
wholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the burger button");
    // toggle the is-gone class on the burger
    hamburger.classList.toggle('is-gone');
    // toggle the X to is-shown when the button is active
    buttonx.classList.toggle('is-shown');
    // toggle the slide in menu css class on to slide-in
    slide_menu_home.classList.toggle('slide-in');
    // change the body
    bodybody.classList.toggle('no-scroll');
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// PORTFOLIO APP SLIDE INS


/////////////////////////

// APP 1

// query the app1 button
const app1 = document.querySelector('.app1');

// query the slide in description
const app1description = document.querySelector('.app-1-description');

// query the close button
const closeapp1 = document.querySelector('.back_arrow_one');

// select the whole body by ID
const wholetablet = document.querySelector('.tabletcontainer');

// select the body body
// const bodybody = document.querySelector('.body');

// query the portfolio section
const wholeportfolio = document.getElementById('portfoliotabletdiv');

// TOP
const portfoliotops = document.querySelector('.topportfoliotablet');

// apply the Event Listener to the app1 button
app1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app1 button");
    // toggle the is-active class on the slide in menu to on
        // so it slides in
    app1description.classList.toggle('slide-in');
    // change the portfolio section
    portfoliotops.classList.toggle('darker');
    // test print
    console.log(portfoliotops);
    // Remove the Scroll from the body
    bodybody.classList.toggle('no-scroll');
});


// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeapp1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app1 back arrow button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    app1description.classList.toggle('slide-in');
    // change the portfolio section
    // portfoliotops.classList.toggle('darker');
    // turn on darker 2
    portfoliotops.classList.toggle('darker2');
    // Turn Scroll back on
    bodybody.classList.toggle('no-scroll');
});


/////////////////////////

// APP 2

// query the app2 button
const app2 = document.querySelector('.app2');

// query the slide in 2 description
const app2description = document.querySelector('.app-2-description');

// query the close 2 button
const closeapp2 = document.querySelector('.back_arrow_two');

// apply the Event Listener to the app1 button
app2.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app2 button");
    // toggle the is-active class on the slide in menu to on
        // so it slides in
    app2description.classList.toggle('slide-in');
    // change the portfolio section
    portfoliotops.classList.toggle('darker');
    // Remove the Scroll from the body
    bodybody.classList.toggle('no-scroll');
});


// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeapp2.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app2 back arrow button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    app2description.classList.toggle('slide-in');
    // change the portfolio section
    portfoliotops.classList.toggle('darker2');
    // Turn Scroll back on
    bodybody.classList.toggle('no-scroll');
});


// APP 3


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// BLOG SECTION

// BLOG 1

// query the blog1 button
const blog1 = document.querySelector('.blogcontent');

// query the slide in blog1
const blog1slidein = document.querySelector('.blogone-slide-in');

// query the close button
const closeblog1 = document.querySelector('.closeblog1');

// Blog Top
const blogtops = document.querySelector('.topblogtablet');

// apply the Event Listener to the app1 button
blog1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the blog1 button");
    // apply an Event Listener to the close button
        // to toggle the app1description class to off
    blog1slidein.classList.toggle('slide-in');
    // darken the header
    blogtops.classList.toggle('darker');
    // Remove the Scroll from the body
    bodybody.classList.toggle('no-scroll');
});

// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeblog1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the blog1 back arrow button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    blog1slidein.classList.toggle('slide-in');
    // turn on darker 2
    blogtops.classList.toggle('darker2');
    // Turn Scroll back on
    bodybody.classList.toggle('no-scroll');
});


// BLOG 2
// query the blog1 button
// const blog2 = document.querySelector('.blogcontent');
const blog2 = document.getElementById('blogbutton2');

// query the slide in blog1
const blog2slidein = document.querySelector('.blogtwo-slide-in');

// query the close button
const closeblog2 = document.querySelector('.closeblog2');

// apply the Event Listener to the app1 button
blog2.addEventListener('click', function () {
    // test print
    console.log("You've pressed the blog2 button");
    // apply an Event Listener to the close button
        // to toggle the app1description class to off
    blog2slidein.classList.toggle('slide-in');
    // darken the header
    blogtops.classList.toggle('darker');
    // Remove the Scroll from the body
    bodybody.classList.toggle('no-scroll');
});

// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeblog2.addEventListener('click', function () {
    // test print
    console.log("You've pressed the blog2 back arrow button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    blog2slidein.classList.toggle('slide-in');
    // turn on darker 2
    blogtops.classList.toggle('darker2');
     // Turn Scroll back on
     bodybody.classList.toggle('no-scroll');
});

