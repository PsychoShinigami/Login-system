console.log("System Initialized...");
const btnSubmit=document.getElementById("submit-btn");

if (btnSubmit){
    btnSubmit.addEventListener("click", ()=>{
        const username = document.querySelector('input[type="text"]').value;
        const passwords = document.querySelectorAll('input[type="password"]');
        if (passwords.length>1){
            const key1=passwords[0].value;
            const key2=passwords[1].value;

            if (key1==="" || key2===""){
                alert("The Death Key cannot be empty!");
            } else if (key1!==key2){
                alert("The Death Keys do not match!");
            } else if (key1.length<8){
                alert("The Death Key must be at least 8 characters long!");
            } else if (username===""){
                alert("Username cannot be empty!");
            } else if (key1===key2 && username!==""){
                localStorage.setItem(username, key1);
                alert("Soul Registered! You may now login.");
                window.location.href = "index.html";

            } else {
                alert("An unknown error occurred. Please try again.");
            }
        } else {
            const key=passwords[0].value;
            const savedKey=localStorage.getItem(username);

            if (savedKey === null) {
                alert("No soul found with that username. Please register first.");
            } else if (key === savedKey) {
                alert("Access Granted, " + username + " Welcome to the Realm!");
                window.location.href = "https://reaperly.com";
            } else {
                alert("Incorrect Death Key. Access Denied.");
            } 
        }
    });
}