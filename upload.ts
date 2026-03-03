import "dotenv/config";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import fs from "fs";
import mime from "mime-types";
import path from "path";

// node upload.ts ./public/sam-inventions-short.mp4 sam-vance-website/sam-inventions-short.mp4

// Load from .env
const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } =
  process.env;

// Create an S3-compatible client pointed to R2
const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID as string,
    secretAccessKey: R2_SECRET_ACCESS_KEY as string,
  },
});

interface UploadParams {
  Bucket: string;
  Key: string;
  Body: Buffer | Uint8Array | Blob | string;
  ContentType?: string;
  CacheControl?: string;
}

async function upload(
  filePath: string,
  key: string = path.basename(filePath),
): Promise<void> {
  console.log("Bucket:", process.env.R2_BUCKET);

  const file: Buffer = fs.readFileSync(filePath);
  const detectedType = mime.lookup(filePath);

  const uploadParams: UploadParams = {
    Bucket: R2_BUCKET as string,
    Key: key, // e.g. "clientA/logo.png"
    Body: file,
    ContentType: detectedType || "application/octet-stream",
    CacheControl: "public, max-age=31536000, immutable",
  };

  try {
    await r2.send(new PutObjectCommand(uploadParams));
    console.log(
      `✅ Uploaded image/video at https://cdn.briannavance.com/${key}`,
    );
  } catch (err: unknown) {
    console.error("❌ Upload failed:", err);
  }
}

// Example usage: node upload.ts ./poster.png clientA/poster.png
const [, , localPath, remoteKey] = process.argv;
if (!localPath) {
  console.error("Usage: node upload.ts <local-file> [remote-key]");
  process.exit(1);
}
await upload(localPath, remoteKey);
