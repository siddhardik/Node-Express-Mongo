window.onload = ()=>{
  signupRequest();
}

const signupRequest = ()=>{
  const form = document.querySelector("#signup-form");
  form.onsubmit = (e)=>{
    e.preventDefault();
    // TO stay in the same page

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

    // get response , When response is coming from server   
    ajax.onload = ()=>{
      const data = JSON.parse(ajax.response);
      if(data.message.toLowerCase() == "match found !")
      {
        showMessage(
          "User already exists !",
          "fa fa-exclamation-circle mr-1",
          "red"
        );
      }
      else{
        form.reset();
        showMessage(
          "Signup success !",
          "fa fa-check-circle mr-1",
          "#34A853"
        );
      }
    }
  }
}

const showMessage = (message,classValue,color)=>{
  $(".toast-title").css({color:color});
  $("i",".toast-title").removeClass();
  $("i",".toast-title").addClass(classValue);
  $(".toast").toast('show');
  $(".toast").addClass("animate__animated animate__slideInRight");
  $(".toast-body").html(message);
}
