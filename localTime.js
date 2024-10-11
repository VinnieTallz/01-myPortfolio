//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////      Get Local Time        /////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(timeanddate,1000)
//Run this functin once, every 1 second (1000ms)

    function timeanddate () 
    {
        const dateDiv = document.getElementById("date");
        const timeDiv = document.getElementById("clock");
        //Get the date and time divs, save as variables.  Using 2 seperate so they can be styled seperately

        let localTime= new Date().toLocaleString().split(",");
        //Use date() method to get date and time.  UseLocaleString instead of regulas string because theyre comma separated and easier to handle in this case
        //We use split() method to seperate date and time into array items

        dateDiv.textContent = localTime[0];
        timeDiv.textContent = localTime[1].split("").join(" ");
        //Send first element of array localTime to the date div
        //Send second element of array localTime to the time div
        /////////////// Due to the janky 7-segment LED font I'm using I need to add a space between the characters.  Split the characters 
        /////////////// of the string into an array the string into an array and then re-joined with a space in between each character
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////