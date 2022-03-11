import React from "react";
import { formatUnits } from "utils";
import { Section, SectionTitle } from "../Section";

import {
  RoundBox,
  Wrapper,
  Menu,
  Item,
  InputGroup,
  ToggleButton,
  Logo,
  ToggleIcon,
  MaxButton,
  Input,
  ErrorBox,
} from "./CoinSelection.styles";
import useCoinSelection from "./useCoinSelection";
import { AnimatePresence } from "framer-motion";

const CoinSelection = () => {
  const {
    isConnected,
    isOpen,
    getLabelProps,
    getToggleButtonProps,
    getItemProps,
    getMenuProps,
    selectedItem,
    handleMaxClick,
    tokenList,
    inputAmount,
    handleChange,
    errorMsg,
    error,
    showError,
    balances,
  } = useCoinSelection();
  return (
    <AnimatePresence>
      <Section>
        <Wrapper>
          <SectionTitle>Asset</SectionTitle>
          <InputGroup>
            <RoundBox as="label" {...getLabelProps()}>
              <ToggleButton type="button" {...getToggleButtonProps()}>
                <Logo src={selectedItem?.logoURI} alt={selectedItem?.name} />
                <div>{selectedItem?.symbol}</div>
                <ToggleIcon />
              </ToggleButton>
            </RoundBox>
            <RoundBox
              as="label"
              htmlFor="amount"
              style={{
                // @ts-expect-error TS does not likes custom CSS vars
                "--color": error
                  ? "var(--color-error-light)"
                  : "var(--color-white)",
                "--outline-color": error
                  ? "var(--color-error)"
                  : "var(--color-primary)",
              }}
            >
              <MaxButton onClick={handleMaxClick} disabled={!isConnected}>
                max
              </MaxButton>
              <Input
                placeholder="0.00"
                id="amount"
                value={inputAmount}
                onChange={handleChange}
              />
            </RoundBox>
            <Menu {...getMenuProps()} isOpen={isOpen}>
              {isOpen &&
                tokenList.map((token, index) => (
                  <Item
                    {...getItemProps({ item: token, index })}
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    key={token.address}
                  >
                    <Logo src={token.logoURI} alt={token.name} />
                    <div>{token.name}</div>
                    <div>
                      {balances &&
                        formatUnits(
                          balances[index] || "0",
                          tokenList[index].decimals
                        )}
                    </div>
                  </Item>
                ))}
            </Menu>
          </InputGroup>
          {showError && <ErrorBox>{errorMsg}</ErrorBox>}
        </Wrapper>
      </Section>
    </AnimatePresence>
  );
};

export default CoinSelection;
