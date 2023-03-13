import { aui } from './helper/jest.setup';
import { UiControlClient, UiController, LogLevels } from 'askui';
import dotenv from 'dotenv'
dotenv.config()

describe('Automation of Web3 Decentralized finance (DeFi) Blockchain products integrating with cryptocurrency wallet Metamask using askui', () => {

  let uiController: UiController;
  
  beforeAll(async () => {
    uiController = new UiController({

      // download the latest version of the server
      binaryVersion: 'latest',

      // start askui UI Controller as minimized application
      minimize: true,

      // using error loglevel
      logLevel: LogLevels.ERROR,

      // Set the action delay lower than the default
      actionDelayInMs: 200,

    });
  })

 
 /*
  Below step will:
  launch chrome browser
  */
  it('should launch chrome browser', async () => {
   
    await aui.execOnShell("start chrome").exec();
    await aui.click().text().withText('Search Google or type a URL').exec();

  });


  /*
  Below step will: 
  1.	Enter application URL
  2.	Land in application home page

  */
  
  it('should enter application URL & land it', async () => {

    await aui.type(process.env.URL).exec();
    await aui.pressKey('enter').exec();
    await aui.pressTwoKeys('command','up').exec();

  });

  /*
  Below step will: 
  1.	Enter password
  2.	Unlock account
  3.	Connect with Metamask Wallet
  4.	Connect will change to Account1 address
  */
  
  it('should connect with Metamask wallet', async () => {
    await aui.click().withText("CONNECT").exec();
    await aui.click().withText("MetaMask").exec();
    await aui.click().text().withText("MetaMask Notification").exec()
    await aui.moveMouseTo().textfield().below().text().withText('Password').exec()
    await aui.type(process.env.PASSWORD).exec();
    await aui.click().withText("Unlock").exec();
  });


   /*
  Below step will: 
  1. It change user account from account1 to account2 i.e. Production account to Test account
  2. It use customElement to click on chrome extension
  */
  it('should change from Account1 to Account2', async () => {
    await aui.click().customElement({customImage: './test/customElement/metamask.png'}).exec();
    /* Below step is a bug in askUI, sometime it work sometime it won't
      It's unreliable
      It clicked on other extension present on right side which also has "circle" icon
      so I have switched to using custom element step
      await aui.click().icon().withText('circle').rightOf().text().withExactText('Ethereum Mainnet').exec(); 
     */
    await aui.click().customElement({customImage: './test/customElement/account1.png'}).exec();
    await aui.click().text().withExactText("Account").below().text().withExactText('Account').exec();
    await aui.click().text().withText("Connect").exec()
    await aui.click().text().withText("Tranche Markets").exec()
  
      });

  /*
  Below step will: 
  1.	Navigate to Compound Market, DAI token, Fixed rate
  2.	Expand the particular row
  3.	Click on Approve button
  4.	Popup dialog will come to show details
  5.	Click on Approve
  6.	Switch to Metamask notification window
  7.	Scroll down
  8.	As this account doesn't have sufficient funds, it will give error message
  9.	We are asserting this error message
  10.	Rejecting transaction
  11.	We are asserting this error message
  12.	Closing the dialog pop-up
  */

  it('should Approve the Deposit in particular Tranche market', async () => {
    
    await aui.click().withText("acDAI").exec();
    await aui.click().withText("APPROVE").exec();
    await aui.click().text().withExactText("Approve").exec();
    await aui.click().text().withText("MetaMask Notification").exec()
    await aui.click().text().withText("Give permission to access").exec()
    await aui.scroll(10,-300).exec();
    await aui.expect().text().withText("You do not have enough ETH in your account to pay").exists;
    await aui.expect().customElement({customImage: './test/customElement/Confirm.png'}).exists().exec();
    await aui.click().text().withText("Reject").exec();
    await aui.expect().text().withText("Transaction Rejected").exists;
    await aui.click().customElement({customImage: './test/customElement/close.png'}).exec();
    await aui.scroll(0,500).exec();

  });



/*
  Below step will: 
  1.	Navigate to Staking tab
  2.	Scroll down to SLICE Staking Pools
  3.	In PLATINUM HANDS
  4.	Click on STAKE button
  5.	Click on Approve Staking button
  6.	Switch to Metamask notification window
  7.	Scroll down
  8.	As this account doesn't have sufficient funds, it will give error message
  9.	We are asserting this error message
  10.	Rejecting transaction
  11.	Closing the dialog pop-up
  */

  it('should Approve Staking in particular pool', async () => {
    await aui.click().withText('STAKE').exec()
    await aui.scroll(0,-450).exec();
    await aui.click().withText("(STAKE)").exec();
    await aui.click().withExactText("Approve Staking").exec();
    await aui.click().text().withText("MetaMask Notification").exec()
    await aui.click().text().withText("Give permission to access").exec()
    await aui.scroll(10,-300).exec();
    await aui.expect().text().withText("You do not have enough ETH in your account to pay").exists;
    await aui.expect().customElement({customImage: './test/customElement/Confirm.png'}).exists().exec();
    await aui.click().text().withText("Reject").exec();
    await aui.click().customElement({customImage: './test/customElement/close.png'}).exec();
    await aui.scroll(0,500).exec();

    });


  /*
  Below step will: 
  1.	Click on Documentation
  2.	Verify correct link is opened using assertion
  3.	Close opened tab
 */   

 it('should click on link, verify & close tab', async () => {
   
      await aui.click().text().withText('DOCUMENTATION').exec();
      await aui.expect().text().withText("Participate in SLICE & SLICE-LP Staking").exists;
      await aui.click().customElement({customImage: './test/customElement/closeTab.png'}).exec();
  });

});