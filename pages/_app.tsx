/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css';
import '../styles/buscardor.css'
import type { AppProps } from 'next/app';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"></script>
      <script src="https://kit.fontawesome.com/8b56fd849d.js"></script>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
