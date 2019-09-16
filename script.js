/*Toggle between adding and removing the "responsive" class to topNav when the user clicks on the icon*/
function myFunction() {
    const x = document.getElementById("myTopNav");
    const isClosed = x.className === "topNav";
    if (isClosed) {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}