import MainLayout from "@/components/layouts/MainLayout";
const logoUrl = "https://play.google.com/store/apps/details?id=app.phantom&hl=es_MX&gl=US";
import WalletContextProvider from "../components/WalletContextProvider"
import { AppBar } from "../components/AppBar"
import { BalanceDisplay } from "../components/BalanceDisplay"
import { SendSolForm } from "../components/SendSolForm"


export default function Home() {
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full my-16">
        <div className="wrapper max-w-7xl">
            <h1 className="text-2xl text-center font-bold">
              RedPando 🐼 <br /> Payments + Wallets in group!{" "}
            </h1>
            <br></br>
            <br></br>
            <div className="text-2xl text-center">
            <p>Hey! Welcome to 🐼. A Wallet connect with Phanton (install this first)</p>
            </div>
        </div>
        <div className="wrapper max-w-7xl">
          <br></br>
          
        </div>
        
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter Example" />
      
      <WalletContextProvider>
        <AppBar />
        <div>
          <BalanceDisplay />
          <SendSolForm />
        </div>
      </WalletContextProvider>
      </div>
    </MainLayout>
  );
}
