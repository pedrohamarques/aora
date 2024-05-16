export type VideoProps = {
    creatorId: {
        username: string | null;
        avatar: string | undefined;
    };
    prompt: string | null;
    thumbnail: string;
    title: string;
    video: string;
};
