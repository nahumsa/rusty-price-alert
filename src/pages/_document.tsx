import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="bg-slate-800 text-slate-100 container mx-auto p-4"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
