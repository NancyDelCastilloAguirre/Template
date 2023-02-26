import styles from "../styles/Home.module.css"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"

export const AppBar = () => {
  return (
    <div className={styles.AppHeader}>
      <div className="wrapper max-w-7xl">
       <div className="text-2xl text-center">
        <span>Sign up</span>
      <WalletMultiButton />
      </div> 
      </div>
      
      
    </div>
  )
}
