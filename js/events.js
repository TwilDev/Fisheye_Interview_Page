

//create event listener for dom load
window.addEventListener('DOMContentLoaded', (event) => {

    //assign modal to const 
    const modal =  document.getElementsByClassName('modal-section')[0];

    //add event listener for on click event for the subscribe button
    var modalForm = document.getElementById('mailing-subscribe-checkout').addEventListener("click", function() {
        //display modal
        modal.style.display = "block";
    });

    //add event listener for on click event for close buttom
    var modalClose = document.getElementById('close-subscribe-modal').addEventListener("click", function() {
        //remove modal
        modal.style.display = "none";
    });
})



