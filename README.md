## :dart: Goal of project
Automation of Web3 Decentralized finance (DeFi) Blockchain products integrating with cryptocurrency wallet Metamask 

## :thinking: :bulb: Ideation and approach:
- For any Web3 products to use as a pre-requisite it requires Web3 wallet to connect with user account and then only user can start using the product.
- Automation in Web3 (Blockchain) is one of the challenging task considering the way technology been used & products been built upon.
- Any alternate automation tool which will help to reduce effort, ease of use, less line of code, less complexity, user friendly, quick prototyping.
- It's overhead & difficult to maintain numerous accounts to test in different environment - Dev, QA, Stage, Pre-Prod
- There are not much good resources, references available to automate use case of Web3 products.

## :money_mouth_face: Business Use Case
Target application: https://app.tranche.finance/tranche

This is real time production running application

Overview : Tranche.Finance is a Web3 Decentralized finance (DeFi) product where user can put their money in 2 investment categry offering
1. Tranche : Differernt market integrated with different protocol with 2 category of investment - Tranche A & Tranche B, user earns interest apart from the invested amount
2. Stake : User can stake their money in one of the pool & earn extra rewards after pool duration ends

## :white_check_mark: Hackathon Scope: Start Small
Using askui to automate below use case, some of test script are re-usable across companies & products
1. Connecting Web3 wallet Metamask
2. Switch to different accounts : This is very useful when user wants to connect with different account based on their investment & R&D needs.
3. Tranche : Before investing in any markets user need to give their Wallet account approval to application.
4. Staking : First user need to approve user wallet account before Staking in particular pool category.
5. Broken links verification : Clicking on link, opening new tab, verifying correct link is opened, closing the new tab opened.

## :recycle: Re-usability
Test script which can be used across framework, product, companies
1. Connecting Web3 wallet Metamask : All Web3 wallet can be tested re-using same test script.
2. Switch to different accounts : We can switch between different account (e.g. Prod, QA, Dev, UAT etc) based on different use case.
3. Broken links verification : All Links present in web application are working or not


##  :gear: Pre-Requisite
1. Install metamask chrome extension from https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en
2. Create your account, refer https://support.metamask.io/hc/en-us/articles/360015489531 or any other reference
3. Note down & remember password as it will be used in running script.

## :hammer_and_wrench: How to run
1. Clone the Repo
2. Navigate to project root dir
3. Dependencies : Run npm install 
4. In .env file update 
   - PASSWORD of your metamask wallet
   - workspaceId of your askui account
   - token of your askui account
6. Run - npx jest test/web3.test.ts --config ./test/jest.config.ts --forceExit

## :ledger: Folder Structure
repoDir\test\customElement : It has all the customImage which are defined as customElement

## 🌟: Impact:
- It can be used across companies to test different Blockchain Protocols - Uniswap,Polygon, Fantom, Avalanche etc.
- It can be used across all Blockchain products where Metamask wallet is used.
- It can be used to test different Web3 Wallet e.g. Coinbase, Trustwallet.
- It can be used by Testing community who are not aware about on how to automate Web3 Blockchain Products
- It can be used by Dev Team to run the script as sanity test before releasing to next step in Build pipeline to avoid any Blocker issues.
- It will save QA tremendous amount of time, effort, line of code, ease of use compare to other tools available.
- It can be used to test different environment (Dev,QA, Stage, Pre-Prod) by just switching to different account instead of creating new wallet again.
- It can be used to detect any regression issues.
- It can be used to detect any broken link giving 400 Not Found error.
- It can be used to verify all positive, negative (insufficient fund) scenarios.
- Video tutorial can be created for learning purpose to showcase how easy it is to automate in Blockchain & share with wider audience.

## :hourglass: Future plan: Start Small & Go Big (Broad Vision)
Test script created during Hackathon can act as baseline as it touch base all product modules & can be enhanced further to cover entire product feature automation:
1. Tranche
   -  Cover all different markets : AAVE, Yearn, BENQI on different protocols - Polygon, Fantom, Avalanche. 
   -  Withdraw funds

2. Staking : 
    -  Investing in other pools
    
3. Verify all other links as well - Contact, Github etc.


## :computer: Demo : https://drive.google.com/file/d/1ljUfAfza5nwt35-0aw2iqa7C2aYKnoTY/view?usp=share_link
Let's switch to VS Code & Application Under Test
