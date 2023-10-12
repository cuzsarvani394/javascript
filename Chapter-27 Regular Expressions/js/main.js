// regexr.com

document.getElementById("phoneNum").addEventListener("input", (event) => {
    const regex = /^\(?(d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length) {
        input.classList.add("Invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("Invalid");
        input.classList.remove("block");
    }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /{()-. }/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);
})



document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = replaceAll(regex, " ").trim();
    console.log(newText);
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodedURI(newText);
    console.log(encodedInputText);
    console.log(encodedCleanText);
})