const formCreate = document.querySelector("#form-create");
const formUpdate = document.querySelector("#form-update");
const formDelete = document.querySelector("#form-delete");

const btnShowUSers = document.querySelector('#show-users');
const userContainer = document.querySelector('#users-container');
const users = []
const getUSers = async ()  => {
  const response =  await fetch('https://crudcrud.com/api/bbf4ffc11ba84917b2c9fda4ecf3a6a6/users');
  const data = await response.json();
  users.push(data)
  console.log( users);

  users[0].map((item) => {
    
    userContainer.innerHTML += `
    <div class="border-2 border-blue-500 m-5 p-5 w-90  bg-black text-white font-bold">
    
    <p>id:${item._id}</p>
    <h1>nombre:${item.username}</h1>
    
    
    </div>
  `
  })
}


const postUSer = async (e) => {
  e.preventDefault();
  const userName = document.querySelector("#username-input").value;
  const userPassword = document.querySelector("#userpassword-input").value;
  console.log(userName, userPassword);
  try {
    const response = await fetch("https://crudcrud.com/api/bbf4ffc11ba84917b2c9fda4ecf3a6a6/users", {

      headers: {
        'Content-Type': 'application/json; charset=utf-8',

      },
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: userPassword
      }),
    });
    const data = await response.json();
    console.log("Data", data);
  } catch (error) {
    console.log(error)
  }
};



const updateUSer = async (e) => {
  e.preventDefault();
  const id = document.querySelector("#id-input-update").value;
  const userName = document.querySelector("#username-input-update").value;
  const userPassword = document.querySelector('#userpassword-input-update').value;
  console.log(userName, userPassword,id)
  fetch(`https://crudcrud.com/api/bbf4ffc11ba84917b2c9fda4ecf3a6a6/users/${id}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',

    },
    method: "PUT",
    body: JSON.stringify({
      username: userName,
      password: userPassword
    }),
  });
};

const deleteUSer = (e) => {
  e.preventDefault();
  const id = document.querySelector('#id-input-delete').value;
  fetch(`https://crudcrud.com/api/bbf4ffc11ba84917b2c9fda4ecf3a6a6/users/${id}`, {
    
    method: "DELETE",
    
  });
};



formCreate.addEventListener('submit', (e) => postUSer(e));
formUpdate.addEventListener('submit', (e) => updateUSer(e));
formDelete.addEventListener('submit', (e) => deleteUSer(e));
btnShowUSers.addEventListener('click',()=>getUSers())
