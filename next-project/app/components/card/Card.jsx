const { default: Link } = require("next/link");

const Card = ({ items }) => {
  return (
    <div className="flex flex-col justify-center items-center border-2  border-blue-400 w-60 h-72 shadow-2xl m-5 rounded-md bg-sky-200 p-8 skew-y-12 hover:skew-y-0 duration-300">
      <h2 className="font-bold text-center text-xl font-mono">
        {items.first_name} {items.last_name}
      </h2>
      <Link href={`/users/${items.id}`}>
        <img
          src={items.avatar}
          className="rounded-full w-32 h-32 my-7 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Card;
