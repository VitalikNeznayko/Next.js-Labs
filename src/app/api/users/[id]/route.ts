import { prisma } from "@/lib/prisma";

type params = { params: { id: string } };

export async function GET(request: Request, { params }: params) {
  const { id }: { id: string } = await params;
  const userId = Number(id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return Response.json(user);
}

export async function PATCH(request: Request, { params }: params) {
  const { id }: { id: string } = await params;
  const userId = Number(id);
  const body = await request.json();

  const user = await prisma.user.update({
    where: { id: userId },
    data: body,
  });

  return Response.json(user);
}

export async function DELETE(request: Request, { params }: params) {
  const { id } = await params;
  const userId = Number(id);

  try {
    await prisma.$transaction(async (tx) => {
      await tx.post.deleteMany({
        where: { authorId: userId },
      });

      await tx.user.delete({
        where: { id: userId },
      });
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
