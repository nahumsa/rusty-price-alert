import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Alerta de preços para o site Madeira Madeira</h1>
      </header>
       <div>
      <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
        <div>
          <label>Link para o produto:</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label>Preço para alertar</label>
          <input name="message"></input>
        </div>

        <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            type="submit">Registrar</button>
      </form>
    </div>
    </>
  )
}
