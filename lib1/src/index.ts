import { thing, forward } from 'lib2';
import { erc20ABI } from 'wagmi';

console.log('log from lib1', thing, forward, erc20ABI);
export const thing2: string = 'another thing to export';
export const forward2 = erc20ABI;
