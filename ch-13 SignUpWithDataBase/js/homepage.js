window.onload = ()=>{
  //When Page is Completely Loaded
  signupRequest();
}

const signupRequest = ()=>{
  const form = document.querySelector("#signup-form");
  form.onsubmit = (e)=>{
    e.preventDefault();
    // For not Showing new Page 

    // get form data
    const formdata = JSON.stringify({
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      mobile: document.querySelector("#mobile").value,
      password: document.querySelector("#password").value,
    });


    // What is AJAX?
    //web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page
    //AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers
    // ajax request  communicate with server
    const ajax = new XMLHttpRequest();
    ajax.open("POST","http://localhost:8080/api/signup",true);
    ajax.send(formdata);

    // get response
    // When Server response comes SuccessFully
    // ajax.onload = ()=>{
    //   // const data = JSON.parse(ajax.response);
    //   // console.log(data);
    //   alert("Success");
    // }

    //Alternative of ajax.onload

    // ajax.onreadystatechange = ()=>{
    //   if(ajax.readyState ===4){
    //     ajax.send(ajax.responseText);
    //   }
    // }

    // get response
    ajax.onload = ()=>{
      const data = JSON.parse(ajax.response);
      console.log(ajax.response);
      if(ajax.response=="Internal Server Error 500 Means Data not Stored Successfully"){
        alert("Data insert Failed !");
      }
      else{
        alert(`Data insert Successfully`);
      }
    }  
  }   
}
