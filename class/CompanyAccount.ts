import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (money: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + money)
      console.log(`You have successfully taken a loan of $${money}. New balance: $${this.getBalance()}.`)
    }
  }
  
}
