

function App() {

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#1f1f1f] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              ✉ mail@yourcompany.com
            </span>
            <span className="flex items-center gap-2">
              ☎ +896 120 5889 (Toll free)
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500">f</a>
            <a href="#" className="hover:text-red-500">t</a>
            <a href="#" className="hover:text-red-500">in</a>
            <a href="#" className="hover:text-red-500">ig</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="bg-red-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <div className="text-white text-2xl font-bold flex items-center gap-2">
            ⛽ PETROIL
          </div>

          {/* MENU */}
          <ul className="flex gap-8 text-white font-medium">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Services</a></li>
            <li><a href="#" className="hover:text-gray-200">Gallery</a></li>
            <li><a href="#" className="hover:text-gray-200">Blog</a></li>
          </ul>

          {/* CONTACT BUTTON */}
          <a
            href="#"
            className="border-2 border-white text-white px-5 py-2 font-semibold hover:bg-white hover:text-red-600 transition"
          >
            CONTACT
          </a>
        </div>
      </header>
    </>
  )
}

export default App
