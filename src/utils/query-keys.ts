import { ethers } from "ethers";
import { ChainId } from "./constants";

/**
 * Generates query keys for react-query `useQuery` hook, used in the `useLatestBlock` hook.
 * @param chainId The chain Id of the chain to poll for new blocks.
 * @returns An array of query keys for react-query `useQuery` hook.
 */
export function latestBlockQueryKey(chainId: ChainId) {
  return ["block", chainId];
}

/**
 * Generates query keys for react-query `useQuery` hook, used in the `useBalance` hook.
 * @param chainId  The chain Id of the chain to execute the query on.
 * @param token  The token to fetch the balance of.
 * @param account  The account to query the balance of.
 * @param blockNumber  The block number to execute the query on.
 * @returns An array of query keys for react-query `useQuery` hook.
 */
export function balanceQueryKey(
  account: string,
  blockNumber?: number,
  chainId?: ChainId,
  token?: string
) {
  return ["balance", chainId, token, account, blockNumber];
}

/**
 * @param tokenSymbol  The token symbol to check bridge fees for.
 * @param amount  The amount to check bridge fees for.
 * @param blockNumber  The block number to execute the query on.
 * @returns An array of query keys for react-query `useQuery` hook.
 */
export function bridgeFeesQueryKey(
  tokenSymbol: string,
  amount: ethers.BigNumber,
  chainId: ChainId,
  blockNumber: number
) {
  return ["bridgeFees", tokenSymbol, amount, chainId, blockNumber];
}

export function bridgeLimitsQueryKey(
  token: string,
  fromChainId: ChainId,
  toChainId: ChainId
) {
  return ["bridgeLimits", token, fromChainId, toChainId];
}

/**
 * Generates query keys for react-query `useQuery` hook, used in the `useAllowance` hook.
 * @param chainId  The chain Id of the chain to execute the query on.
 * @param token  The token to fetch the allowance of.
 * @param owner  The owner in the allowance call.
 * @param spender  The spender in the allowance call.
 * @param blockNumber  The block number to execute the query on.
 * @returns An array of query keys for react-query `useQuery` hook.
 */
export function allowanceQueryKey(
  owner: string,
  spender: string,
  blockNumber: number,
  chainId?: ChainId,
  tokenSymbol?: string
) {
  return ["allowance", chainId, tokenSymbol, owner, spender, blockNumber];
}

/**
 * Generates query keys for react-query `useQuery` hook, used in the `useReferrals` hook.
 * @param account  The address that referrals are being queried for.
 * @param limit The limit on the number of results that are returned (page size).
 * @param offset The number of elements to omit before returning results.
 * @returns An array of query keys for react-query `useQuery` hook.
 */
export function referralsQueryKey(
  account: string,
  limit: number,
  offset: number
) {
  return ["referrals", account, limit, offset];
}

/**
 * Generates query keys for react-query `useQuery` hook, used in the `useReferralSummary` hook.
 * @param account  The address that referral summary is being queried for.
 * @returns An array of query keys for react-query `useQuery` hook.
 */
export function referralSummaryQueryKey(account: string) {
  return ["referralSummary", account];
}
