import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DogAccount } from './class/DogAccount'

// Test PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'JV', 10)
console.log('--- Testing PeopleAccount ---')

// Deposit money
peopleAccount.deposit(1000)
console.log(`After deposit of 1000, balance is: $${peopleAccount.getBalance()}`)

// Withdraw money within balance
peopleAccount.withdraw(100)
console.log(`After withdrawal of 100, balance is: $${peopleAccount.getBalance()}`)

// Attempt to withdraw more than the balance
peopleAccount.withdraw(2000)
console.log(`After attempting to withdraw 2000, balance is: $${peopleAccount.getBalance()}`)

// Test CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('JV_DEV', 20)
console.log('--- Testing CompanyAccount ---')

// Deposit money in the company account
companyAccount.deposit(500)
console.log(`After deposit of 500, balance is: $${companyAccount.getBalance()}`)

// Take a loan
companyAccount.getLoan(1000)
console.log(`After taking a loan of 1000, balance is: $${companyAccount.getBalance()}`)

// Test DogAccount
const dogAccount: DogAccount = new DogAccount('Dora', 30)
console.log('--- Testing DogAccount ---')

// Deposit money in the dog account
dogAccount.deposit(100)
console.log(`After deposit of 100 (including bonus), balance is: $${dogAccount.getBalance()}`)
