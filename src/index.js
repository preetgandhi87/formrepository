function checkCredential(e) {
  e.preventDefault();
  console.log(e);
  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const Mobile = document.getElementById("mobile");
  const address = document.getElementById("address");
  console.log(
    `First Name = ${firstName} Last Name = ${lastName} email = ${email} Mobile = ${Mobile}`
  );
}
