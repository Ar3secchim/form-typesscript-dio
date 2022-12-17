export interface IFormLogin {
  Email: string;
  Password: string;
}

export const defaultValues: IFormLogin = {
  Email: '',
  Password: ''
}