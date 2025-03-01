const Navbar = () => {
    return (
      <nav className="bg-dark p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-accent text-2xl font-bold">Bookish</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-primary hover:text-accent">Home</a></li>
            <li><a href="#" className="text-primary hover:text-accent">Profile</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;