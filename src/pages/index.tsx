export default function Home() {
  return (
    <>
      <header className="flex justify-center my-4">
        <h1 className="text-center text-2xl font-bold mb-5">Alerta de preços para o site Madeira Madeira</h1>
      </header>
      <div className="flex h-screen justify-center shadow-lg">
        <form method="POST" action="https://www.formbackend.com/">
          <div className="mb-4">
            <label htmlFor="product" className="block text-white-700 font-bold mb-2">Link para o produto</label>
            <input
              type="text"
              id="product"
              name="product"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="https://www.madeiramadeira.com.br"
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="email" className="block text-white-700 font-bold mb-2">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="seu@email.com" 
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="price" className="block text-white-700 font-bold mb-2">Preço mínimo para alertar</label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="R$ 100,00"
            >
            </input>
          </div>

          <div className='flex justify-center'>
          <button
              className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              type="submit">Registrar</button>
          </div>
        </form>
    </div>
    </>
  )
}
