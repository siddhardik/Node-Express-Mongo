window.onload = ()=>{
  signupRequest();
}

const signupRequest = ()=>{
  const form = document.querySelector("#signup-form");
  form.onsubmit = (e)=>{
    e.preventDefault();

    // get form data
    const formdata = JSON.stringify({
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      mobile: document.querySelector("#mobile").value,
      password: document.querySelector("#password").value,
    });

    // ajax request
    const ajax = new XMLHttpRequest();
    ajax.open("POST","http://localhost:8080/api/signup",true);
    ajax.send(formdata);
    //Send String Data 

    // get response
    ajax.onload = ()=>{
      const data = JSON.parse(ajax.response);
      console.log(data);
    }
  }
}
