function maskEmail(email) {
  let atIndex = email.indexOf("@");

  let first = email[0];
  let last = email[atIndex - 1];

  let masked = "*".repeat(atIndex - 2);

  return first + masked + last + email.slice(atIndex);
}
let email="freecodecamp@example.com";
console.log(maskEmail(email));