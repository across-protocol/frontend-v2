import { FC } from "react";
import {
  StyledTableWrapper,
  StyledHeadRow,
  StyledBody,
  StyledRow,
  StyledCell,
  Wrapper,
  Title,
  LoadingWrapper,
} from "./TransactionsTable.styles";
import { ICell, IRow } from "components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface TxTableIRow extends IRow {
  onClick?: () => void;
}

interface Props {
  rows: TxTableIRow[];
  headers: ICell[];
  title: string;
  initialLoading: boolean;
}

const TransactionsTable: FC<Props> = ({
  rows,
  headers,
  title,
  initialLoading,
}) => {
  return (
    <Wrapper>
      {initialLoading && (
        <LoadingWrapper>
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size="lg" />
          <div>Loading...</div>
        </LoadingWrapper>
      )}
      {!rows.length && !initialLoading && (
        <div>
          No transactions found. Data is loading or no transactions have been
          made.
        </div>
      )}
      {!rows.length && !initialLoading ? (
        <>
          <Title>{title}</Title>

          <StyledTableWrapper>
            <StyledHeadRow>
              {headers.map((cell, index) => {
                return (
                  <StyledCell
                    key={index}
                    className={cell.cellClassName ?? ""}
                    size={cell.size}
                  >
                    {cell.value}
                  </StyledCell>
                );
              })}
            </StyledHeadRow>
            <StyledBody>
              {rows.length
                ? rows.map((row, ridx) => {
                    return (
                      <StyledRow key={ridx}>
                        {row.cells.map((cell, cidx) => {
                          return (
                            <StyledCell
                              className={cell.cellClassName ?? ""}
                              key={cidx}
                              size={cell.size}
                            >
                              {cell.value}
                            </StyledCell>
                          );
                        })}
                      </StyledRow>
                    );
                  })
                : null}
            </StyledBody>
          </StyledTableWrapper>
        </>
      ) : null}
    </Wrapper>
  );
};

export default TransactionsTable;
