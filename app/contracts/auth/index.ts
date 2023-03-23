
export interface LoginFormValuesInterface {
  email: string;
  password: string;
}


export interface RegisterFormValuesInterFace {
  name: string;
  email: string;
  password: string;
}

export interface RegisterNumberFormValuesInterface {
  phone?: string;
}

export interface LoginNumberFormValuesInterface {
  phone?: string;
}
export interface VerifyNumberFormValuesInterface {
  code?: string;
}