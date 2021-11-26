import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './replicate.css';
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './hooks/useWeb3';
import useAuth from '../src/hooks/useAuth'
import openSea from './Assests/opensea-logo.svg';
import { MintContract } from './utils/contractHelpers'
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

function App() {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const [open, setOpen] = useState(true);
    const [status, setStatus] = useState();
    const [price, setPrice] = useState();
    const [supply, setSupply] = useState();
    const [inputs, setInputs] = useState({
        payableAmount: '',
    })
    const { login, logout } = useAuth();
    console.log("ACCOUINT", account)

    const ConnectionHandler = () => {
        if (account) {
            logout()
            localStorage.setItem('flag', false)
        } else {
            login("injected")
            localStorage.setItem('flag', true)
            localStorage.setItem('injected', "injected")
        }
    }

    const handleChange1 = (e) => {

        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    console.log("inputs", inputs)

    const data = async() =>{
        const tokenAddress = '0xC7D94c26B724f4ebF29D9232e12a55Be32e0E799';
        const contract = await MintContract(tokenAddress, web3);
        const MINT_NFT_FEE = await contract.methods.MINT_NFT_FEE().call();
        const totalSupply = await contract.methods.totalSupply().call();
        setPrice(MINT_NFT_FEE)
        setSupply(totalSupply)
    }


    const Mint = async () => {
        setOpen(true)
        const tokenAddress = '0xC7D94c26B724f4ebF29D9232e12a55Be32e0E799';
        const contract = await MintContract(tokenAddress, web3);
        const MINT_NFT_FEE = await contract.methods.MINT_NFT_FEE().call();
        const mint = await contract.methods.bachMint(account,1, "")
        .send({ from: account, value:MINT_NFT_FEE })
        .then((res)=>{
            console.log("response",res)
            setStatus(res.status)
        })
        // return mint.events.Transfer.returnValues.tokenId;
    }

    useEffect(() => {
        if(account){
            data()
        }
    })

    console.log("price",status)

  

    return (
        <>
         <Backdrop className="loader" sx={{ color: '#000' }} open={open}><CircularProgress color="inherit" /></Backdrop>
            <section className="container">
                <div className='btn-div'>
                    <button type="button" onClick={ConnectionHandler}>{account ? "Disconnect Wallet" : "Connect Wallet"}</button>
                </div>
                <div className="card-div">
                    <div className='card'>
                        <p>Amount To Mint</p>
                        <input type="number" name="payableAmount"  value="1" className='counter' readOnly />
                        {/* <span className='calIcon'>-</span> <span className="count">1</span> <span className='calIcon'>+</span> */}
                        {account ?  <button className="mintBtn" onClick={Mint}>MINT NOW</button> : <h6>Please Connect account</h6> }
                       
                        <p className=" colerGrey">{supply ? supply : 0}/1111</p>
                        <p className=" colerGrey">{price ?price/(10**18) : 0} <span className=' colerGrey'> BSC EACH</span></p>


                        <button className="openSeaBtn"><img src={openSea} className="openSeaImg" alt="" /></button> </div>
                </div>
            </section>
        </>
    );
}

export default App;
