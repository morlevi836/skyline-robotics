export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="w-full bg-white shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">My App</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl font-bold mb-4">Welcome to My React App</h2>
          <p className="text-gray-600 mb-6">
            This is a simple starter page built with React + Tailwind CSS.
          </p>
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">⚡ Fast</h3>
            <p className="text-gray-600">
              Powered by Vite for super fast dev and builds.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🎨 Styled</h3>
            <p className="text-gray-600">
              Tailwind gives you utility-first styling out of the box.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🔒 Typed</h3>
            <p className="text-gray-600">
              TypeScript ensures safe and scalable development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
