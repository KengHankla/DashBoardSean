export interface ITFDataTableUser {
  key: string;
  firstName: string;
  lastName: string;
  userId: string;
  password: string;
  address: string;
  lineId: string;
  phoneNumber: string;
  phoneNumberSecond: string;
  source: string;
  totalPoint: number;
  totalDeposit: number;
  totalBonus: number;
  totalWithdraw: number;
  depositAmount: number;
  bonusAmount: number;
  withDrawAmount: number;
  role: string;
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
