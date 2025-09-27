"use client";
import { useState } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
};

export default function PostForm({ onAdd }: { onAdd: (post: Post) => void }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        onAdd({ id: Date.now(), title, content });
        setTitle("");
        setContent("");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input
                className="border p-2 w-full rounded"
                placeholder="Заголовок поста"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="border p-2 w-full rounded"
                placeholder="Содержание поста"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Добавить пост
            </button>
        </form>
    );
}
