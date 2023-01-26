import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { thing2, forward2 } from 'lib1';
import { thing, forward } from 'lib2';
import { erc20ABI } from 'wagmi';

console.log(thing, thing2, forward, forward2, erc20ABI);

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
