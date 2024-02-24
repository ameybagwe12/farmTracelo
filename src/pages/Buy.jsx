import React from 'react'
import Navbar from '../Components/Nav'
export default function Buy({ account, connectWallet }) {
  return (<>
    <Navbar account={account} connectWallet={connectWallet} />
    </>
    
  )
}
