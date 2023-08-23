export default function Home() {

  return (
<>
    <nav className="bg-slate-900">

      <ul>
        <li>
          <a href = "#">
          <h1 className="font-bold text-center line-clamp-1 ">Fiap Series</h1>
          </a>
        </li>
        <li>
          <a href = "#">
            Series
          </a>
          </li>
        </ul>
    </nav>
    <title>em alta</title>

    <div id ="card" className='flex flex-col w-40 justify-center items-center'>
        <img className='rounded' src="https://via.placeholder.com/250x250" alt="" />
        <span className='font-bold text-center line-clamp-1'>titulo do filem card</span>
      <div>
        <span>6.0</span>
      </div>
      <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>

      <title>Lançamento</title>
      <title>Favoritos</title>
    </div>
  
</>
)

}