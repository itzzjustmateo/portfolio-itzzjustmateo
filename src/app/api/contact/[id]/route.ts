import { NextResponse } from "next/server";

type ContactForm = {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
};

// Must be the same in-memory storage as the main route
let contactForms: ContactForm[] = [];

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const index = contactForms.findIndex((f) => f.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  contactForms.splice(index, 1);
  return NextResponse.json({ success: true });
}
