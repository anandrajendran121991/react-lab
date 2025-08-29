function Navbar() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo aligned left */}
        <div className="text-2xl font-bold">React Lab</div>

        {/* Nav items aligned right */}
        <nav className="flex gap-6">
          <span className="hover:text-gray-300 cursor-default">Dashboard</span>
          <span className="hover:text-gray-300 cursor-default">Profile</span>
          <span className="hover:text-gray-300 cursor-default">Settings</span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
