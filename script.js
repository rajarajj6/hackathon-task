// const url = "https://cataas.com/api/cats";
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })









async function search(){
    let users;
    try {
        const data = await fetch("https://61ea3a267bc0550017bc65e5.mockapi.io/users",{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
        }
        );
        users = await data.json();
        //console.log(users);
    }catch(err) {
        console.log(err);
    }
return users;
} 

//    search();



async function displayUsers() {
    let users = await search();
    console.log(users);
    const userList = document.querySelector(".user-list");
    userList.innerHTML= "";
    
    users.forEach((user) => {
       // console.log(user.id);
        userList.innerHTML +=`
        <div className="user-container">
        <img class ="user-avatar" src="${user.avatar}" alt="avatar">
        <div>
         <h3>${user.id}</h3>
         <p>${user.created_at}</p>
        
        </div>
        </div>
        `;
    });
    };

displayUsers();



function search() {
    const usersearch= document.querySelector(".add-userId").value;
const userAvatar= document.querySelector(".add-userAvatar").value;
console.log(userAvatar,usersearch);
}

search();