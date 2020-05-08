var submitBox = $('#submit-box');
var nameBox = $('#name-box');
var emailBox = $('#email-box');
var submitBtn = $('#submit');

$(submitBtn).on('click', (event) => {
    event.preventDefault();
    localStorage.setItem("Name", nameBox.val().trim());
    localStorage.setItem("Email", emailBox.val().trim());
    localStorage.setItem("Comments", submitBox.val());
    localStorage.setItem("Info", localStorage.getItem("Name") + " " + localStorage.getItem("Email"));
    var name = localStorage.getItem("Name");
    var info = localStorage.getItem("Info").valueOf();
    console.log(info);
})