const orangeTh = document.querySelector('#orangeTheme');
// Get #orangeTheme circle element as a variable orangeTh

orangeTh.addEventListener('click', function() 
//Create an event listener.  When orange theme is clicked
//we begin to execute the function to restyle our page

    {   h6Elements = document.querySelectorAll('h6');
        h6Elements.forEach(element => {
            element.style.color = "#ff652f";})
// Get a list of all h6 elements in the document 
// Iterate over each h6 item applying  the required style to those elements//

        buttonElements = document.querySelectorAll('button');
        buttonElements.forEach(element => {
                element.style.backgroundColor = "#ff652f";});

        borderElements = document.querySelectorAll('.themedBorder');
        borderElements.forEach(element => {
                element.style.borderColor = "#ff652f";
                element.style.borderStyle = "solid";});

        background = document.querySelectorAll('body');
        background.forEach(element => {
                element.style.background = "url(images/endless-constellation-orange.svg)";
                });
                
        console.log("orange theme selected");


        
    })
// Create an event listener. When #orangeTheme is clicked, we 
// get an array of elements to style.  Then we iterate over each 
// item applying  the required style to those elements//



//Now we do it again for the Lemon theme



const lemonTh = document.querySelector('#lemonTheme');
// Get #lemonTheme circle element as a variable lemonTh

lemonTh.addEventListener('click', function() 
//Create an event listener.  When lemon theme is clicked
//we begin to execute the function to restyle our page

    {   h6Elements = document.querySelectorAll('h6');
        h6Elements.forEach(element => {
            element.style.color = "#ffe400";})
// Get a list of all h6 elements in the document 
// Iterate over each h6 item applying  the required style to those elements//

        buttonElements = document.querySelectorAll('button');
        buttonElements.forEach(element => {
                element.style.backgroundColor = "#ffe400";});

        borderElements = document.querySelectorAll('.themedBorder');
        borderElements.forEach(element => {
                element.style.borderColor = "#ffe400";
                element.style.borderStyle = "solid";});

        background = document.querySelectorAll('body');
        background.forEach(element => {
                element.style.background = "url(images/endless-constellation-lemon.svg)";
                });
                
        console.log("lemon theme selected");
        
    })
// Create an event listener. When #lemonTheme is clicked, we 
// get an array of elements to style.  Then we iterate over each 
// item applying  the required style to those elements//






//Now we do it again for the lime theme



const limeTh = document.querySelector('#limeTheme');
// Get #limeTheme circle element as a variable limeTh

limeTh.addEventListener('click', function() 
//Create an event listener.  When lime theme is clicked
//we begin to execute the function to restyle our page

    {   h6Elements = document.querySelectorAll('h6');
        h6Elements.forEach(element => {
            element.style.color = "#14a76c";})
// Get a list of all h6 elements in the document 
// Iterate over each h6 item applying  the required style to those elements//

        buttonElements = document.querySelectorAll('button');
        buttonElements.forEach(element => {
                element.style.backgroundColor = "#14a76c";});

        borderElements = document.querySelectorAll('.themedBorder');
        borderElements.forEach(element => {
                element.style.borderColor = "#14a76c";
                element.style.borderStyle = "solid";});

        background = document.querySelectorAll('body');
        background.forEach(element => {
                element.style.background = "url(images/endless-constellation-lime.svg)"
                ;});
                
        console.log("lime theme selected");
        
    })
// Create an event listener. When #limeTheme is clicked, we 
// get an array of elements to style.  Then we iterate over each 
// item applying  the required style to those elements//





//Now we do it again for the blue theme



const blueTh = document.querySelector('#blueTheme');
// Get #blueTheme circle element as a variable blueTh

blueTh.addEventListener('click', function() 
//Create an event listener.  When blue theme is clicked
//we begin to execute the function to restyle our page

    {   h6Elements = document.querySelectorAll('h6');
        h6Elements.forEach(element => {
            element.style.color = "#5680e9";})
// Get a list of all h6 elements in the document 
// Iterate over each h6 item applying  the required style to those elements//

        buttonElements = document.querySelectorAll('button');
        buttonElements.forEach(element => {
                element.style.backgroundColor = "#5680e9";});

        borderElements = document.querySelectorAll('.themedBorder');
        borderElements.forEach(element => {
                element.style.borderColor = "#5680e9";
                element.style.borderStyle = "solid";});

        background = document.querySelectorAll('body');
        background.forEach(element => {
                element.style.background = "url(images/endless-constellation-blue.svg)";
                });
                
        console.log("blue theme selected");
        
    })
// Create an event listener. When #blueTheme is clicked, we 
// get an array of elements to style.  Then we iterate over each 
// item applying  the required style to those elements//