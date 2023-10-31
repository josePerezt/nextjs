import Card from "@/app/components/card/Card";

const fectUser = async () => {
  const res = await fetch("https://reqres.in/api/users");

  const { data } = await res.json();
  return data;
};

const allUsers = async () => {
  const data = await fectUser();
  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map((items) => {
        return <Card items={items} key={items.id} />;
      })}
    </div>
  );
};

export default allUsers;
