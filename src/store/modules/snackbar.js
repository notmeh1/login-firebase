export const snackbarModule = {
  namespaced: true,
  state: {
    logInAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Has ingresado exitosamente!",
    },
    logOutAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Has salido exitosamente!",
    },
  },
};