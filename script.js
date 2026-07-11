const api = "/api/users";

// Load all users
async function loadUsers() {
    const response = await fetch(api);
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user, index) => {
        userList.innerHTML += `
            <li>
                ${user.name} - ${user.email}
                <button onclick="deleteUser(${index})">Delete</button>
            </li>
        `;
    });
}

// Add a new user
async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please enter both name and email.");
        return;
    }

    await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    loadUsers();
}

// Delete a user
async function deleteUser(id) {
    await fetch(`${api}/${id}`, {
        method: "DELETE"
    });

    loadUsers();
}

// Load users when page opens
loadUsers();