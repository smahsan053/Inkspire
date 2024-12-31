import { SanityImageAssetDocument } from "next-sanity"

type BlogType = {
    title: string,
    summary: string,
    slug: string,
    image: SanityImageAssetDocument | null
}

type Block = {
    _type: 'block';
    _key?: string;
    children: Array<{
        _key: string;
        _type: 'span';
        text: string;
        marks?: string[];
        markDefs?: { _key: string; _type: string }[];
    }>;
    style?: string; // e.g., 'normal', 'h1', 'h2', etc.
    listItem?: string; // e.g., 'bullet', 'number', etc.
    level?: number; // for nested lists
};

type Author = {
    name: string,
    bio: string,
    image: SanityImageAssetDocument
}