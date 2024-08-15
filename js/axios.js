function ShowHide(){
    var container=document.getElementsByClassName('container')[0];

    if (container.style.visibility =="visible"){
        container.style.visibility ="hidden";

    }else{
        container.style.visibility ="visible";
    }
}

const listaUsuarios = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = response.data;
        console.log(users);
        //console.log(`${data.length} products found.`);
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

    tableBody_Users.innerHTML = tableBody;
}
    listaUsuarios();





