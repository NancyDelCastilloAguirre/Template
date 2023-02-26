import MainLayout from "@/components/layouts/MainLayout";
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
            Molusco 🦑 <br /> Demo Page{" "}
          </h1>
        </div>
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
