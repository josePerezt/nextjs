const { NextResponse } = require("next/server");

export const GET = () => {
  return NextResponse.json({ message: "obteniendo datos..." });
};

export const POST = () => {
  return NextResponse.json({ message: "Agregando Datos..." });
};

export const PUT = () => {
  return NextResponse.json({ message: "Actualizando Datos..." });
};

export const DELETE = () => {
  return NextResponse.json({ message: "Eliminando Datos..." });
};
