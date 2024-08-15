function ShowHide(){
    var container=document.getElementsByClassName('container')[0];

    if (container.style.visibility =="visible"){
        container.style.visibility ="hidden";

    }else{
        container.style.visibility ="visible";
    }
}

const listaUsuarios = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tableBody = ``;
        users.forEach((user, index) => {
        tableBody+=`<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        <td>${user.address.street + ", " + user.address.suite + ", " + user.address.city }</td>
        <td>${user.phone}</td>
        </tr>`;
    });
    //document.getElementById("tableBody_Users").innerHTML= tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function(){
    listaUsuarios();

})
