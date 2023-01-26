import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { anotherThing } from 'lib1';
import { thing } from 'lib2';

export default function App({ Component, pageProps }: AppProps) {
    console.log(thing, anotherThing);
    return <Component {...pageProps} />;
}
