const Navbar = () => {
  console.log(window.location);
  return (
    <nav className="flex flex-row justify-between w-full items-center bg-indigo-500 text-white">
      <a href="/" className="text-2xl font-bold ">
        My site
      </a>
      <ul className="flex flex-row justify-end text-lg mt-0 px-6 py-3 text-md font-semibold">
        <li className="active:text-yellow-950">
          <a href="/about" className="pr-2 active:text-yellow-950">
            About
          </a>
        </li>
        <li className="active:bg-slate-400">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
