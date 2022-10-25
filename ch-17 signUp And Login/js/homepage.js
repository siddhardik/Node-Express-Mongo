window.onload = ()=>{
  signupRequest();
  loginRequest();
  showUser();
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

    // show loader
    ajax.onreadystatechange = ()=>{
      if(ajax.readyState == 2)
      {
        $(".loader").removeClass("d-none");
      }
    }

    // get response
    ajax.onload = ()=>{
      // hide loader
      $(".loader").addClass("d-none");

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

const loginRequest = ()=>{
  const form = document.querySelector("#login-form");
  form.onsubmit = (e)=>{
    e.preventDefault();
    const checkbox = document.querySelector("#remember-me");
    const login_email = document.querySelector("#login-email").value;
    const login_password = document.querySelector("#login-password").value;

    const user = JSON.stringify({
      username: login_email,
      password: login_password
    });

    if(checkbox.checked)
    {
      localStorage.setItem("user",user);
    }
    else{

    }
  }
}

const showUser = ()=>{
  if(localStorage.getItem("user") != null)
  {
    const user = JSON.parse(localStorage.getItem("user"));
    const login_email = document.querySelector("#login-email");
    const login_password = document.querySelector("#login-password");
    const checkbox = document.querySelector("#remember-me");

    // writing data
    login_email.value = user.username;
    login_password.value = user.password;
    checkbox.checked = true;
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
