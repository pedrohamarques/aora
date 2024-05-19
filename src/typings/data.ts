import { Database } from "@services/types";

export type VideoProps = {
    creatorId: {
        username: string | null;
        avatar: string | undefined;
    };
    prompt: string | null;
    thumbnail: string;
    title: string;
    video: string;
    videoId: string | null;
    createdAt: string | null;
};

export type UserProps = Database["public"]["Tables"]["users"]["Row"];
