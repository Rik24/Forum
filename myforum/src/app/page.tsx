"use client";
import { useState } from "react";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

type Post = {
    id: number;
    title: string;
    content: string;
};

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: "Первый пост", content: "Привет, это мой форум!" },
        { id: 2, title: "Второй пост", content: "Тренируемся во фронте 🚀" },
    ]);

    function addPost(post: Post) {
        setPosts([post, ...posts]);
    }

    return (
        <main className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">MyForum</h1>
            <PostForm onAdd={addPost} />
            <PostList posts={posts} />
        </main>
    );
}

