export const validName = new RegExp('^[a-zA-Z ]{3,35}$');
export const validEmail = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
// export const validPassword = new RegExp('/^(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,16}$');
