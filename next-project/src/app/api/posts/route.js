const { NextResponse } = require("next/server");

export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return NextResponse.json(data);
};

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: "Agregando Datos..." });
};

export const PUT = () => {
  return NextResponse.json({ message: "Actualizando Datos..." });
};

export const DELETE = () => {
  return NextResponse.json({ message: "Eliminando Datos..." });
};
