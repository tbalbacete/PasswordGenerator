export const generatePassword = (passwordLength: number) => {
  const charset =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const symbolCharset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  let hasNumber = false;
  let numSymbols = 0;
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    const char = charset[randomIndex];
    if (!hasNumber && /[0-9]/.test(char)) {
      hasNumber = true;
    }
    if (symbolCharset.includes(char) && numSymbols < 2) {
      numSymbols++;
    }
    password += char;
  }
  if (!hasNumber) {
    const randomIndex = Math.floor(Math.random() * passwordLength);
    const randomNumber = Math.floor(Math.random() * 10);
    password =
      password.slice(0, randomIndex) +
      randomNumber +
      password.slice(randomIndex + 1);
  }
  if (numSymbols < 2) {
    let i = 0;
    while (numSymbols < 2) {
      const randomIndex = Math.floor(Math.random() * passwordLength);
      const char = password[randomIndex];
      if (!symbolCharset.includes(char)) {
        password =
          password.slice(0, randomIndex) +
          symbolCharset[i] +
          password.slice(randomIndex + 1);
        i++;
        numSymbols++;
      }
    }
  }
  return password;
};
