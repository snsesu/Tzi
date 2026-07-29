import { NextResponse } from "next/server";
import { titlesRepository } from "@/lib/repositories/titlesRepository";
import { telegramService } from "@/lib/services/telegramService";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const title = await titlesRepository.getBySlug(params.id);

  if (!title) {
    return NextResponse.json({ error: "Title not found" }, { status: 404 });
  }

  const link = await telegramService.createAccessLink(
    title.telegram_file_id ?? ""
  );

  return NextResponse.json({ link });
}
