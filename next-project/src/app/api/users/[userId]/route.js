import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  console.log(searchParams.get("nombre"));
  console.log(searchParams.getAll("nombre"));
  console.log(searchParams.get("apellido"));
  console.log(params);
  return NextResponse.json("obteniendo dato");
};
