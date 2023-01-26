import { erc20ABI } from 'wagmi';
import styled from 'styled-components';

console.log('log from lib2', erc20ABI);
export const thing: string = 'thing to log';
export const forward = erc20ABI;
export const StyledDivThing = styled.div`
  padding: 10px;
  background-color: red;
  `;

