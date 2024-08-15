function ShowHide(){
    var container=document.getElementsByClassName('container')[0];

    if (container.style.visibility =="visible"){
        container.style.visibility ="hidden";

    }else{
        container.style.visibility ="visible";
    }
}

$(document).ready(function() {
    const usersList = $("#usersList");

    $.get("https://jsonplaceholder.typicode.com/users", function(response) {
      const users = response;
      console.log(response)
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
    })
    

})

