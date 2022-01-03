//Created an array in order to store all the items the user wants to save.
let savedItemsArr = [];

$(function(){

    //Created a variable and set it to zero
    let i = 0;

    //If statements that checks if the page has loaded before.
    if (localStorage.getItem("loadedBefore") === null) {

        //If page has not loaded before then it will inisialise the empty array to be saved to local storage.
        localStorage.setItem("savedItems", JSON.stringify(savedItemsArr));

        //Set storage item "count" that will act as the the counter for how many items the user has in their folder.
        localStorage.setItem("count", i);

        //Sets the page loaded before to true, so on next load it will be true.
        localStorage.setItem("loadedBefore", true);
        
        
    } 
    
    //If the page has loaded before:  
    else {
        //Retrieves the storage item "savedItems" and pushes it back into the array created above in order to be manipulated.
        savedItemsArr = JSON.parse(localStorage.getItem("savedItems"));

        //Retrieves the storage item "count" and pushes it back into the variable "i" created above in order to be manipulated.
        i = localStorage.getItem("count");
    }
    
    //Hides the body on load and then makes it fade in over a period of three seconds.
    $("body").hide();
    $("body").fadeIn(3000);

    //Chained animations on the logo in the navigation bar, used setInterval function in order for it to loop every two seconds.
    setInterval(function(){

        $(".logo").fadeOut(500).fadeIn(500).animate({"font-size":"200%"}, 500).animate({"font-size":"170%"},500);

    }, 2000);

       

    //Created array of colours.
    let backgroundCol = ["#111111", "white"];
    let col = ["white" , "#111111"];

    //Created index variable and set it to 0.
    let indexColours = 0;
        
    //Used the set interval function in order to loop through the array.
    setInterval(function () {
            
        //Adds the colour of wherever the index is at the time inside of the "backgroundCol" array to the background of the table.
        //Adds the colour of wherever the index is at the time inside of the "col" array to the text colour of the table.
        $("table").css({backgroundColor: backgroundCol[indexColours], color: col[indexColours]});

        //If the index is equal to the array length of each array, then the index gets set back to zero.
        if (indexColours == backgroundCol.length && indexColours == col.length) {
            indexColours = 0;
        }

        //If the index is smaller than the array length, then the index adds 1.
        else {
            indexColours++;
        }

        //Will loop through a new colour every 2000ms.
    }, 2000);
    

    //Created a function that allows users to save items from the webpage.
    function save(element){

        //Retrieves the storage item "savedItems" and pushes it to the array created in the first line.
        savedItemsArr = JSON.parse(localStorage.getItem("savedItems"));
      
        //If the user has already saved an item then it will alert the following message.
        if(savedItemsArr.includes(element)){
            alert("You have already added this item to your save for later folder.")
        }

        else{
            //If saves an item, that item gets pushed into the "savedItemArr".
            savedItemsArr.push(element);

            //Retrieves the storage item "count" and sets it to the variable "i".
            i = (localStorage.getItem("count"));

            //Increases "i" by one.
            i++;

            //Sets the storage item "count" equal to varible "i".
            localStorage.setItem("count", i);

            //Alert that displays to the user how many items they have in their folder.
            alert("You have " + i + " items in your save for later folder");

            //Sets storage item "savedItems" equal to a stringified version of the "savedItemArr"
            localStorage.setItem("savedItems", JSON.stringify(savedItemsArr));
        }
       
    }

    //Targets items with specific class names.
    //When clicked it will call the save function.
    //The save function's target element is specific to the button's with these classnames.
    $(".saveImage, .saveTxt").click(function(){
        element = $(this).parent().html();
        save(element); 
    });

    //Same as above.
    $(".saveGuideTxt, #saveTable").click(function(){
        element = $(this).prev().parent().html();
        save(element);

    });

    //Display all the items the user saved on the save for later page.
    $("#displaySave").show(function(){
        
        //Retrieves the storage item "saveItems" and parses into "savedItemArr" in order to be manipulated.
        savedItemsArr = JSON.parse(localStorage.getItem("savedItems"));
        
        //For loop the will display each item in "savedItemArr" onto the save for later page.
        for(let i=0; i<savedItemsArr.length; i++){
            $(this).append(savedItemsArr[i]);
        }
    });

    //Function that hides certain items on click.
    $("#hide").click(function(){
        $(".userComment1, .userComment2, .userComment3").hide();
    });

    //Function that shows certain items on click.
    $("#show").click(function(){
        $(".userComment1, .userComment2, .userComment3").show();
    });

    //Drop down menu on hover, when user hovers off of the designated zone then the drop down menu will slide up.
    $(".navList").hover(
        function(){
        $(".navList > ul").slideDown(400);
        
    },  
        function(){
        $(".navList > ul").slideUp(400);
         
    });
    
    //Button that toggles the class of the button on click.
    //When class is toggles new css properties get added.
    $("#likeBtn").click(function(){
        $(this).toggleClass("liked");
    });

    //Same as the hide and show function above, using slide up and slide down instead of hide and show.
    $("#slideUp").click(function(){
        $(".commentContainer").slideUp(300);
    });

    $("#slideDown").click(function(){
        $(".commentContainer").slideDown(300);
    });
    

});

//I have added some more HTML and CSS properties in order for the webpages to look and flow a little better.