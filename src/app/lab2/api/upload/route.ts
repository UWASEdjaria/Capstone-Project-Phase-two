import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("image") as File;

  const bytes = await file.arrayBuffer();

  const uploadResult = await new Promise<unknown>((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      {
        folder: "posts",
      },
      (error: unknown, result: unknown) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    ).end(Buffer.from(bytes));
  });

  return NextResponse.json({ url: (uploadResult as { secure_url: string }).secure_url });
}
