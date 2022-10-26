window.onload = ()=>{
  verifyToken();
  logout();
}

const verifyToken = ()=>{
  const data = location.href.split("?")[1];
  const ajax = new XMLHttpRequest();
  ajax.open("POST","http://localhost:8080/api/verifyToken");
  ajax.send(data);

  // get response
  ajax.onload = ()=>{
    const response = JSON.parse(ajax.response);
    if(response.isVerified)
    {
      $(".loader").addClass("d-none");
      $(".profile-page").removeClass("d-none");
    }
    else{
      localStorage.removeItem("__token");
      localStorage.removeItem("__secret_id");
      window.location = "http://localhost:8080";
    }
  }
}

const logout = ()=>{
  const logout_btn = document.getElementById("logout-btn");
  logout_btn.onclick = ()=>{
    // remove token and secretId from localStorage
    localStorage.removeItem("__token");
    localStorage.removeItem("__secret_id");

    // redirect
    window.location = "http://localhost:8080";
  }
}
