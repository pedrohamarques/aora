import { z } from "zod";

const documentAssetSchema = z.object({
    name: z.string(),
    size: z.number().optional(),
    uri: z.string(),
    mimeType: z.string().optional(),
    lastModified: z.number().optional(),
    file: z.any().optional(),
});

export const formSchema = z.object({
    title: z.string().min(3),
    video: documentAssetSchema,
    prompt: z.string().min(10),
    thumbnail: documentAssetSchema,
});
