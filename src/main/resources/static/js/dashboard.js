const BASE_URL = "http://localhost:8080/user";

window.onload = function () {
    loadUsers();
};

async function loadUsers() {

    const response = await fetch(BASE_URL + "/all");
    const users = await response.json();

    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";

    users.forEach(user => {

        tbody.innerHTML += `
        <tr>

            <td>${user.id}</td>

            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>
                <button class="edit-btn"
                onclick="editUser(${user.id},'${user.name}','${user.email}','${user.password}')">
                ✏ Edit
                </button>
            </td>

            <td>
                <button class="delete-btn"
                onclick="deleteUser(${user.id})">
                ❌ Delete
                </button>
            </td>

        </tr>
        `;

    });

}

async function saveUser() {

    const id = document.getElementById("id").value;

    const user = {

        id: id,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        verified: true

    };

    let url = BASE_URL + "/add";
    let method = "POST";

    if(id!=""){
        url = BASE_URL + "/update";
        method = "PUT";
    }

    await fetch(url,{

        method:method,

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)

    });

    alert(id=="" ? "User Added Successfully" : "User Updated Successfully");

    clearFields();

    loadUsers();

}

function editUser(id,name,email,password){

    document.getElementById("id").value=id;
    document.getElementById("name").value=name;
    document.getElementById("email").value=email;
    document.getElementById("password").value=password;

}

async function deleteUser(id){

    if(!confirm("Delete this user?")){
        return;
    }

    await fetch(BASE_URL+"/delete/"+id,{
        method:"DELETE"
    });

    alert("User Deleted Successfully");

    loadUsers();

}

function clearFields(){

    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";

}

function logout(){

    localStorage.clear();

    window.location.href="login.html";

}