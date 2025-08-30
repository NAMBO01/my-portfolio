export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">Phạm Hải Nam</h1>

        <ul className="flex items-center space-x-8">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
