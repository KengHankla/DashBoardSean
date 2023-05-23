export interface ITFDataTableUser {
  key: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  address: string;
  lineID: string;
  phoneNumber: string;
  phoneNumberSecond: string;
  source: string;
  totalPoint: number;
  totalDeposit: number;
  totalBonus: number;
  totalWithdraw: number;
  depositAmount: number;
  bonusAmount: number;
  withdrawAmount: number;
}

export interface ITFOnFinishUser {
  firstName: string;
  lastName: string;
}

export interface ITFDataTableRandomReward {
  key: string;
  id: number;
  name: string;
  percent: number;
}

export interface ITFOnFinishRandomReward {
  firstName: string;
  lastName: string;
}
