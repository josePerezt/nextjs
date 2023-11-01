const { default: Link } = require("next/link");

const NavBar = () => {
  return (
    <div>
      <ul className="text-white font-bold flex justify-evenly bg-slate-600 h-10 items-center">
        <Link href={"/"}>
          <li className="hover:text-cyan-300">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="hover:text-cyan-300">About</li>
        </Link>
        <Link href={"/users"}>
          <li className="hover:text-cyan-300">Users</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
