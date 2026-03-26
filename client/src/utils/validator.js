export const usernameValidator = (username) => {
  if (!username.trim()) {
    return { isValid: false, errorMessage: "Username is required" };
  }

  if (username.length < 3) {
    return { isValid: false, errorMessage: "Min 3 characters required" };
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return { isValid: false, errorMessage: "Only letters, numbers & _ allowed" };
  }

  return { isValid: true, errorMessage: "" };
};
export const passwordValidator = (password) => {
  if (!password) {
    return { isValid: false, errorMessage: "Password is required" };
  }

  if (password.length < 6) {
    return { isValid: false, errorMessage: "Min 6 characters required" };
  }

  return { isValid: true, errorMessage: "" };
};
