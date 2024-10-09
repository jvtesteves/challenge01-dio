export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  // Método para acessar o saldo
  getBalance = (): number => {
    return this.balance
  }

  // Método protegido para alterar o saldo
  protected setBalance = (money: number): void => {
    this.balance = money
  }

  // Métodos para depósito e saque
  deposit = (money: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.balance + money)
      console.log(`You have successfully deposited $${money}. Current balance: $${this.getBalance()}.`)
    }
  }

  withdraw = (money: number): void => {
    if (this.validateStatus()) {
      if (money <= this.balance) {
        this.setBalance(this.balance - money)
        console.log(`You have successfully withdrawn $${money}. Remaining balance: $${this.getBalance()}.`)
      } else {
        console.log('Insufficient funds to complete the withdrawal.')
      }
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Invalid account')
  }
}
