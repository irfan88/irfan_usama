
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Smart Contract

Its located inside the Smart Contract Directory.
You can Copy everything and paste it on remix.ethereum.org and can compile, make changes and deploy.

Mint Fee is Changed on Line 1831.\
Use Wei amount here i.e. if amount is 1 use 1000000000000000000
https://eth-converter.com/

Total Supply is changed on line 1852.\

Presale start and endtime on line 1853 & 1854.\
Use EPOCH calculated times for refference use the website
https://www.epochconverter.com/

public sale end time on line 1855.\
Use EPOCH calculated times for refference use the website
https://www.epochconverter.com/

NFTs Name and symbol is changed on line 1848.\
format is constructor() ERC721("ADD Name Here", "Add Symbol Here") {

You can Mint admin NFTs by calling mintAdminNFTSale() function

FOR REFFERENCE DEPLOYED CONTRACT: https://testnet.bscscan.com/address/0xc5d802253ffb291199365d99dcec4f8c7a17d331