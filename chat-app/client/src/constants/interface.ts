export interface User {
  _id?: string | undefined,
  email?: string,
  fullName?: string,
  password?: string,
  profilePicture?: string
}

export interface Chat {
  createdAt?: string,
  chat?: string,
  sender?: string,
  reciever?: string,
  files?: string
}

export interface Search {
  sender: string | undefined,
  keyword: string | number
}

export interface Group {
  _id?: string,
  groupName?: string,
  sender?: string | undefined,
  reciever?: User[]
}

export interface activeChat {
  _id?: string,
  groupName?: string,
  sender?: string,
  reciever?: User[],
  fullName?: string,
  profilePicture?: string,
  isGroupChat?: boolean,
  groupAdmin?: string
}