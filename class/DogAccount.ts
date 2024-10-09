import { DioAccount } from './DioAccount'

export class DogAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (money: number): void => {
    if (this.validateStatus()) {
      const bonus = 10
      const newBalance = this.getBalance() + money + bonus
      this.setBalance(newBalance)
      console.log(`You have successfully deposited $${money}. With the bonus, the total deposit is $${money + bonus}. Current balance: $${this.getBalance()}.`)
    }
  }
}
