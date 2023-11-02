const Post = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return (
    <div className=" ">
      <h1 className="text-white  text-center font-bold my-5">POST</h1>

      <div className="border-20 grid grid-cols-3">
        {data.map((items) => {
          return (
            <div
              key={items.id}
              className="border-2 border-sky-500 rounded p-4 m-4 bg-slate-500"
            >
              <h2 className="text-white text-center font-mono font-bold text-xl">
                {items.id}. {items.title}
              </h2>
              <p className="text-neutral-400 mx-2">{items.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
