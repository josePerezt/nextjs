const { default: Link } = require("next/link");

const detailUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();
  return data;
};
const Users = async ({ params: { id } }) => {
  const user = await detailUser(id);
  return (
    <div className="flex flex-col justify-center items-center  w-120 h-full  my-32  ">
      <h1 className="text-white font-extrabold text-7xl">
        {user.first_name} {user.last_name}
      </h1>
      <h3 className="text-orange-400 text-center my-3">{user.email}</h3>
      <img src={user.avatar} className="w-48 h-48 my-5 rounded-lg" />
      <Link href={"/users"}>
        <button className="border-2 border-orange-400 rounded-lg w-24 h-8 text-white font-bold bg-sky-950 hover:bg-blue-800 duration-700">
          BACK
        </button>
      </Link>
    </div>
  );
};

export default Users;
