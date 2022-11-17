function SendMail() {
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("text").value
  }
  emailjs.send("service_kjypwkb", "template_4tmaryu", params).then(function (res) {
  alert("success!" + res.status);
})
}
