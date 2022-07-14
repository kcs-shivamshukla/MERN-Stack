export interface User {
    _id?: string,
    email: string,
    fullName?: string,
    password?: string
  }

export interface Chat {
  chat?: string,
  sender?: string,
  reciever?: string
}