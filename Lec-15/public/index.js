const signupForm = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
function addUser(email, password) {
    let newUser = {
        email: email,
        password: password
    };
    fetch("/adduser", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}
addUser("purusharth0606@gmail.com","123");