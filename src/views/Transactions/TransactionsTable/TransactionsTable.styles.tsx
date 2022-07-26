import styled from "@emotion/styled";
import { ReactComponent as AcrossPlusIcon } from "assets/across-plus-icon.svg";
import { QUERIES } from "utils";
import {
  BaseTableWrapper,
  BaseWrapper,
  BaseTitle,
  BaseEmptyRow,
  BaseTableHeadRow,
  BaseTableBody,
  BaseTableRow,
  BaseHeadCell,
  BaseTableCell,
} from "components/Table";

export const Wrapper = styled(BaseWrapper)`
  max-width: 1425px;
`;

export const Title = BaseTitle;

export const TableWrapper = BaseTableWrapper;

export const TableBody = BaseTableBody;

export const TableHeadRow = BaseTableHeadRow;

export const TableRow = BaseTableRow;

export const EmptyRow = BaseEmptyRow;

export const TableCell = styled(BaseTableCell)`
  &:first-of-type {
    min-width: 175px;
  }
`;

export const HeadCell = styled(BaseHeadCell)`
  &:first-of-type {
    min-width: 175px;
  }
`;

export const TableLogo = styled.img`
  height: 15px;
  margin-right: 4px;
`;

export const TableLink = styled.a`
  color: var(--color-primary);
  &:hover {
    opacity: 0.7;
  }
`;

export const MobileWrapper = styled(Wrapper)`
  width: 100%;
  min-width: 300px;
`;

export const MobileTableHeadRow = styled(TableHeadRow)`
  width: 100%;
`;

export const MobileTableRow = styled(TableRow)`
  width: 100%;
  cursor: pointer;
  &:first-of-type {
    margin-bottom: 0px;
  }
  &:not(:first-of-type) {
    margin: 1px 0;
  }
`;

export const MobileCell = styled(TableCell)`
  &:nth-of-type(4) {
    justify-content: right;
  }
`;

export const MobileChevron = styled.div`
  text-align: right;
  margin-right: 24px;
  cursor: pointer;
  svg {
    color: var(--color-primary);
  }
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccordionRow = styled.div`
  display: flex;
  > div {
    padding: 8px 0;
  }
  > div:first-of-type {
    flex: 1 0 60px;
    background-color: var(--color-black);
    border-bottom: 1px solid #2c2f33;
    text-indent: 24px;
  }
  > div:nth-of-type(2) {
    flex: 3 0 130px;
    background: rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid #2c2f33;
    text-indent: 12px;
  }
  &:nth-of-type(6) > div {
    border-bottom: none;
  }
`;

export const MobileTableLink = styled(TableLink)`
  border-bottom: none;
`;

export const PaginationWrapper = styled.div`
  max-width: 1425px;
  margin: auto;

  @media ${QUERIES.mobileAndDown} {
    padding: 0 ${20 / 16}rem;
  }
`;

export const StyledPlus = styled(AcrossPlusIcon)`
  cursor: pointer;
  float: right;
  margin-top: 8px;
  margin-right: 4px;
`;
