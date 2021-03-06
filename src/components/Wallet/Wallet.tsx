import { onboard } from "utils";
import { FC } from "react";
import { useConnection } from "state/hooks";

import {
  ConnectButton,
  UnsupportedNetwork,
  BalanceButton,
  Logo,
  BalanceWallet,
  Account,
  Separator,
} from "./Wallet.styles";
import { shortenAddress } from "utils";

const { init } = onboard;

interface Props {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wallet: FC<Props> = ({ setOpenSidebar }) => {
  const { account, ensName, isConnected, chainId } = useConnection();

  if (account && !isConnected && !chainId) {
    return (
      <UnsupportedNetwork>
        Unsupported network. Please change networks.
      </UnsupportedNetwork>
    );
  }

  if (!isConnected) {
    return <ConnectButton onClick={init}>Connect</ConnectButton>;
  }

  if (account && !isConnected && !chainId) {
    return (
      <UnsupportedNetwork>
        Unsupported network. Please change networks.
      </UnsupportedNetwork>
    );
  }

  return (
    <BalanceButton onClick={() => setOpenSidebar(true)}>
      <Logo />
      <BalanceWallet>0 ACX</BalanceWallet>
      {account && (
        <>
          <Separator />
          <Account>{ensName ?? shortenAddress(account, "..", 4)}</Account>
        </>
      )}
    </BalanceButton>
  );
};
export default Wallet;
