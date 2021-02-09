/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const collections = document.querySelectorAll(".collection");
const locationInfo = collections[0];
const browserInfo = collections[1];
const screenInfo = collections[2];
const historyInfo = collections[3];
let property;

// Display the BOM Information on the innerHTML of the elements
// location information
for (const loc of locationInfo.children) {
    property = loc.childNodes[0].wholeText;
    property = property.charAt(0).toLowerCase() + property.slice(1);
    loc.querySelector(".badge").innerHTML = eval(`location.${property}`);
}

//  browser information
for (const brow of browserInfo.children) {
    property = brow.childNodes[0].wholeText;
    property = property.charAt(0).toLowerCase() + property.slice(1);
    brow.querySelector(".badge").innerHTML = eval(`navigator.${property}`);
}

// screen information
for (const scre of screenInfo.children) {
    property = scre.childNodes[0].wholeText;
    property = property.charAt(0).toLowerCase() + property.slice(1);
    scre.querySelector(".badge").innerHTML = eval(`screen.${property}`);
}

// browsing history information
for (const hist of historyInfo.children) {
    property = hist.childNodes[0].wholeText;
    property = property.charAt(0).toLowerCase() + property.slice(1);
    hist.querySelector(".badge").innerHTML = eval(`history.${property}`);
}