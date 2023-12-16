export const validateForm = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   const isuserNameVAlid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName);

  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  //   if (!isuserNameVAlid) {
  //     return "UserName is not valid";
  //   }
  return null;
};
