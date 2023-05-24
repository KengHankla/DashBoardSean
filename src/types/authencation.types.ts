export interface ITFPostLogin {
  userId: string;
  password: string;
  lang: string;
}

export interface ITFResponsePostLogin {
  success: boolean;
  message: null;
  accessToken: string;
  refreshToken: string;
  userId: string;
}
