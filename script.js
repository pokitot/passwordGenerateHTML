const generateBtn = document.getElementById('generateBtn');
const passwordDisplay = document.getElementById('passwordDisplay');

generateBtn.addEventListener('click', () => {
  const password = generatePassword();
  passwordDisplay.textContent = password;
});

function generatePassword() {
  const passwordLength = 12;
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const otherChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < 3; i++) {
    const specialCharIndex = Math.floor(Math.random() * specialChars.length);
    password += specialChars.charAt(specialCharIndex);
  }

  for (let i = 0; i < passwordLength - 3; i++) {
    const otherCharIndex = Math.floor(Math.random() * otherChars.length);
    password += otherChars.charAt(otherCharIndex);
  }

  return shuffle(password);
}

function shuffle(str) {
  let arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
