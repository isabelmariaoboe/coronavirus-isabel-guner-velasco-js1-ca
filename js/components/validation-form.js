// Form validation //

const form = document.querySelector("#contactForm");
const Name = document.querySelector("#Name");
const NameError = document.querySelector("#NameError");
const Subject = document.querySelector("#Subject");
const SubjectError = document.querySelector("#SubjectError");
const Email = document.querySelector("#Email");
const EmailError = document.querySelector("#EmailError");
const Address = document.querySelector("#Address");
const AddressError = document.querySelector("#AddressError");

function checkLength(value, len) {
    return value.trim().length > len
}

form.onsubmit = function () {
    event.preventDefault();

    if (checkLength(Name.value, 0) === true) {
        NameError.style.display = "none";
    }else{
        NameError.style.display = "block";
    }

    if (checkLength(Subject.value, 0) === true) {
        SubjectError.style.display = "none";
    }else{
        SubjectError.style.display = "block";
    }

    if (validateEmail(Email.value) === true) {
        EmailError.style.display = "none";
    }else{
        EmailError.style.display = "block";
    }

    if (checkLength(Address.value, 5) === true) {
        AddressError.style.display = "none";
    }else{
        AddressError.style.display = "block";
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

