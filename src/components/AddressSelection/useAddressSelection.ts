import { useSelect } from "downshift";
import { useState, useEffect } from "react";
import { useConnection } from "state/hooks";
import { useSendForm } from "hooks";
import { CHAINS_SELECTION, isValidAddress, isL2 } from "utils";

export default function useAddressSelection() {
  const { isConnected } = useConnection();
  const { toChain, toAddress, fromChain, setToChain, setToAddress } =
    useSendForm();
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  const downshiftState = useSelect({
    items: CHAINS_SELECTION,
    defaultSelectedItem: toChain,
    selectedItem: toChain,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        setToChain(selectedItem);
      }
    },
  });

  // keep the address in sync with the form address
  useEffect(() => {
    if (toAddress) {
      setAddress(toAddress);
    }
  }, [toAddress]);
  // modal is closing, reset address to the current toAddress
  const toggle = () => {
    if (!isConnected) return;
    if (open) setAddress(toAddress || address);
    setOpen((prevOpen) => !prevOpen);
  };
  const clearInput = () => {
    setAddress("");
  };

  const handleAddressChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(evt.target.value);
  };
  const isValid = !address || isValidAddress(address);
  const handleSubmit = () => {
    if (isValid && address) {
      setToAddress(address);
      toggle();
    }
  };

  const isL1toL2 = !isL2(fromChain);

  return {
    ...downshiftState,
    handleSubmit,
    handleAddressChange,
    clearInput,
    isL1toL2,
    isValid,
    toAddress,
    toChain,
    fromChain,
    toggle,
    open,
    address,
    isConnected,
  };
}
