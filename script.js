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
                fetch('http://127.0.0.1:5000/register',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({"username": username, "password": key1})
                })
                .then(res => res.json())
                .then(data => {
                    alert(data.message);
                    window.location.href = "http://127.0.0.1:5500/index.html";
                });               
            } else {
                alert("An unknown error occurred. Please try again.");
            }
        } else {
            const key=passwords[0].value;
            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ "username": username, "password": key })
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    alert("Access Granted, " + username + " Welcome to the Realm!");
                    window.location.href = "https://reaperly.com";
                } else {
                alert(data.message);
                }
            })
            .catch(err => console.error("Server is likely offline:", err));
             
        }
    });
}