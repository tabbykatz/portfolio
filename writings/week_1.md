---
title: "Week 1"
date: "2021-07-10"
og:
  description: "My first week at Techtonica"
  image: "./techpic.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_My first week at Techtonica was intense!_


# Week 1

The program began July 13th, a Tuesday, which made the first week a short one. I am exhausted and grateful for the ease-in. The bulk of the work this week was adjustment and getting up to speed with the variety of tools the program uses. My cohort is 14 women. Our days offer many opportunities to get to know one another, and I suspect we will become quite close over these months.

Though I am new to Javascript I am not experiencing it the way I did when I first learned C or Python. It seems similar to both and while it has it's idiosyncrasies I have yet to come across a concept that does not make sense. We are also dabbling in HTML and CSS, which I am no stranger to but am not overly fond of.

## Mentors Rule

I love being a mentee! With the start of the program we shifted focus to learning good teaching & communication skills, but we found time later in the week to explore API/ system design. I am an alloy of awe/curiosity/enthusiasm during sessions like these. I am continually impressed by K's ability to raise the bar while leaving me with the feeling that I am absolutely capable.

## Reading

Oh, remember those books I was reading? No time for those. Instead I am reading Javascript: The Good Parts and a flood of curriculum and articles. Actually, I have made time for a bit of my own reading, but my books list looks like this:

```js
const bookList = [
`Javascript: The Good Parts`,
`Modern JavaScript for the Impatient`,
`The Principals of Object-Oriented Javascript`,
`Crucial Conversations`,
`Goodbye, again`,
`Ready Player 2`,
`Attack Surface`,
`FLOW`,
`Effective Python`
];
```
This is one more book than I like to be reading at once. I am almost finished with Principles & Goodbye.

# What's next?

I was given a bit of homework for the weekend. Homework, lol. It's all home work these days. At any rate, I finished it.

```js

//   _______                       __                         ______         ________         __        __    __      __
//  /       \                     /  |                       /      \       /        |       /  |      /  |  /  |    /  |
//  $$$$$$$  |  ______   _______  $$ |   __         ______  /$$$$$$  |      $$$$$$$$/______  $$ |____  $$/  _$$ |_   $$ |____    ______
//  $$ |__$$ | /      \ /       \ $$ |  /  |       /      \ $$ |_ $$/          $$ | /      \ $$      \ /  |/ $$   |  $$      \  /      \
//  $$    $$<  $$$$$$  |$$$$$$$  |$$ |_/$$/       /$$$$$$  |$$   |             $$ | $$$$$$  |$$$$$$$  |$$ |$$$$$$/   $$$$$$$  | $$$$$$  |
//  $$$$$$$  | /    $$ |$$ |  $$ |$$   $$<        $$ |  $$ |$$$$/              $$ | /    $$ |$$ |  $$ |$$ |  $$ | __ $$ |  $$ | /    $$ |
//  $$ |__$$ |/$$$$$$$ |$$ |  $$ |$$$$$$  \       $$ \__$$ |$$ |               $$ |/$$$$$$$ |$$ |__$$ |$$ |  $$ |/  |$$ |  $$ |/$$$$$$$ |
//  $$    $$/ $$    $$ |$$ |  $$ |$$ | $$  |      $$    $$/ $$ |               $$ |$$    $$ |$$    $$/ $$ |  $$  $$/ $$ |  $$ |$$    $$ |
//  $$$$$$$/   $$$$$$$/ $$/   $$/ $$/   $$/        $$$$$$/  $$/                $$/  $$$$$$$/ $$$$$$$/  $$/    $$$$/  $$/   $$/  $$$$$$$/
//
//
//
// techtonica instructions:
// * A `name` property.
// * A `balance` property set to 0.
// * A `deposit` method adding the (positive or negative) value passed as an argument to the account balance.
// * A `describe` method returning the account description.
// * A `transfer` method with two parameters: the name of the account that will receive the transfer, and the amount of money to transfer.

class Account {
    constructor(name) {
        this.name = name;
        this.isOpen = true;

        // in the future I think we should allow for someone to create an account with a starting balance, since this is more
        // realistic
        this.balance = 0;
        this.creditLine = 0;

        // debt represents how much of the credit line the account is using/ owes
        this.debt = 0;

        // welcome message
        console.log(`Welcome to the Bank of Tabitha, ${this.name}!\n`);

        // we also want to be able to close accounts
        this.closeAccount = function () {
            if (!this.isOpen) {
                console.log(`Your account is already closed.`);
                return false;
            }
            if (this.debt) {
                console.log(`Account closure failed. Please pay your credit card debt of ${this.debt} before closing your account.\n`);
                return false;
            }
            console.log(`Sorry to see you go, ${this.name}.\n`);

            if (this.balance > 0) {
                console.log(`First, let's withdraw your balance of ${this.balance}.\n`);
                this.withdraw(this.balance);
            }
            console.log(`Farewell from Bank of Tabitha.\n`);
            this.isOpen = false;
        };
        // this.creditLine is the max allowed to use as credit. Then we can have a method for starting credit line,
        // credit can max out, card declined. Right now my object has no sense of time/ doesn't retain information
        // in a database, so interest is not possible, but it would be in the future.
        // we should also be able to increase a creditline.
        // open a line of credit if you don't have one already
        this.openCredit = function (amount) {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            if (!this.creditLine) {
                this.creditLine += amount;
                console.log(`Congrats ${this.name}! You have a credit line of ${this.creditLine}.\n`);
                return true;
            }
            console.log(`Hello, ${this.name}. Your account already has a credit line of ${this.creditLine}.\n`);
            return false;
        };

        // using a credit card
        this.useCredit = function (amount) {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            if (this.debt + amount <= this.creditLine) {
                this.debt += amount;
                console.log(`Purchase approved. You are using ${this.debt} of your ${this.creditLine} credit line.\n`);
                return true;
            }
            console.log(`Card declined.\n`);
            return false;
        };

        // pay your credit card bill
        this.payCreditCardBill = function (amount) {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            if (amount <= this.debt) {
                this.debt -= amount;
                console.log(`Thanks for paying your bill, ${this.name}. Your new credit card balance is ${this.debt}.\n`);
                return true;
            }
            console.log(`Payment failed. Your balance is only ${this.debt}. Please pay that amount or less.\n`);
            return false;
        };

        // My preference is to have deposit() and withdrawal() instead of combining them, so I did.
        // Otherwise, transfers are possible even when folks have insufficient funds
        this.deposit = function (amount) {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            if (this._isPositive(amount)) {
                this.balance += amount;
                console.log(`Deposit successful. ${this.name}, your new balance is ${this.balance}.\n`);
                return true;
            }
            return false;
        };

        // not explicitly part of the assignment, but important I believe
        this.withdraw = function (amount) {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            if (this._isAllowed(amount)) {
                this.balance -= amount;
                console.log(`Withdrawal successful. ${this.name}, your new balance is ${this.balance}.\n`);
                return true;
            }
            return false;
        };

        // we need to be sure both the withdrawal and deposit are successful to confirm the transfer
        this.transfer = function (amount, account) {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            if (this.withdraw(amount) && account.deposit(amount)) {
                console.log(`Transfer successful. ${amount} has been transferred from ${this.name} to ${account.name}.\n`);
                return true;
            }
            return false;
        };

        // these methods help me keep illegal actions from taking place. Not 100% neccesary, but perhaps extensible if I create a more complex system
        this._isPositive = function (amount) {
            const isPositive = amount > 0;
            if (!isPositive) {
                console.log(`Amount must be positive! Are you trying to make a withdrawal? Use ${this.name}.withdraw().\n`);
                return false;
            }
            return true;
        };

        // reusing/ expanding these makes sense in the future, for creditLine stuff. adding parameters, etc
        this._isAllowed = function (amount) {
            if (!this._isPositive(amount))
                return false;

            const isAllowed = this.balance - amount >= 0;
            if (!isAllowed) {
                console.log(`${this.name}, you have insufficent funds! Your current balance is ${this.balance}.\n`);
                return false;
            }
            return true;
        };

        // Get some info about the account
        this.describe = function () {
            if (!this.isOpen) {
                console.log(`This account is closed.\n`);
                return false;
            }
            console.log(`${this.name}\'s account:\nBalance: ${this.balance}\nCreditline: ${this.creditLine}\nCredit Card Balance: ${this.debt}\n`);
        };
    }
};


  // Below are the requested tests:
  // - Create an account for Billy, Rosie, Jack and Jill

  let accounts = [];

  const Billy = new Account('Billy');
  const Rosie = new Account('Rosie');
  const Jack = new Account('Jack');
  const Jill = new Account('Jill');
  accounts.push(Billy, Rosie, Jack, Jill);
  accounts.forEach(account => account.describe());

  // - Give each of the accounts a deposity on money

  accounts.forEach(account => account.deposit(1000));

  // - Print a string describing the current amount of money on each account

  //this feature is built into my deposit method

  // - Transfer positive values between Billy and Jack and negative values between Rosie and Jack
  //because I have both deposit and withdraw, I will use those

  //Billy gives Jack 500

  Billy.transfer(500, Jack);

  //Jack returns the money

  Jack.transfer(500, Billy);

  // Rosie withdraws 200

  Rosie.withdraw(200);

  // Jack withdraws 400

  Jack.withdraw(400);

  // new status

  accounts.forEach(account => account.describe());

  // Let's give these people a line of credit!

  accounts.forEach(account => account.openCredit(1500));

  // Now, some spending on their credit cards

  Billy.useCredit(450);
  Rosie.useCredit(175);
  Jack.useCredit(25);
  Jill.useCredit(1000);

  //Jill tries to use their card for more shopping

  Jill.useCredit(1200);

  // oops, card declined!

  //Let's look at the accounts again

  accounts.forEach(account => account.describe());

  // How can they pay off their credit cards?
  // I think deposit could handle this but we would have to change the method to accept a second
  // parameter: which account. <aybe in the future. For now I will add a method for
  // payCreditCardBill()

  accounts.forEach(account => account.payCreditCardBill(50));

  // You can see that Jack's payment failed because it was more than their balance.

  // let's close the accounts now

  accounts.forEach(account => account.closeAccount());

  // Ooops! can't close the account without paying your credit card bill first
  // Pay off the debt:

  accounts.forEach(account => account.payCreditCardBill(account.debt));

  // close them. you'll see that the balance is first withdrawn.

  accounts.forEach(account => account.closeAccount());

  // last minute add of a check for account status (open, closed). messy but it works.

  accounts.forEach(account => account.describe());
  // I think that about covers it. In the future we'd add time stamps, interest rates, payment cycles, and save history to a database.
```


