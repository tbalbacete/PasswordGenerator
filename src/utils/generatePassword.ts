export const generatePassword = (
  passwordLength: number,
  shouldHaveLetters: boolean,
  shouldHaveDigits: boolean,
  shouldHaveSymbols: boolean
) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let charset = "";
  if (shouldHaveLetters) {
    charset = [charset, ...letters.split("")].join("");
  }
  if (shouldHaveDigits) {
    charset = [charset, ...numbers.split("")].join("");
  }
  if (shouldHaveSymbols) {
    charset = [charset, ...symbols.split("")].join("");
  }
  let password = "";
  let hasNumber = false;
  let numSymbols = 0;
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    const char = charset[randomIndex];
    if (!hasNumber && /[0-9]/.test(char)) {
      hasNumber = true;
    }
    if (symbols.includes(char) && numSymbols < 2) {
      numSymbols++;
    }
    password += char;
  }
  if (!hasNumber && shouldHaveDigits) {
    const randomIndex = Math.floor(Math.random() * passwordLength);
    const randomNumber = Math.floor(Math.random() * 10);
    password =
      password.slice(0, randomIndex) +
      randomNumber +
      password.slice(randomIndex + 1);
  }
  if (numSymbols < 2 && shouldHaveSymbols) {
    let i = 0;
    while (numSymbols < 2) {
      const randomIndex = Math.floor(Math.random() * passwordLength);
      const char = password[randomIndex];
      if (!symbols.includes(char)) {
        password =
          password.slice(0, randomIndex) +
          symbols[i] +
          password.slice(randomIndex + 1);
        i++;
        numSymbols++;
      }
    }
  }
  return password;
};
