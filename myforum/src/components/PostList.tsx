"use client";

type Post = {
    id: number;
    title: string;
    content: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Посты:</h2>
            <ul className="space-y-2">
                {posts.map((post) => (
                    <li key={post.id} className="p-2 border rounded">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


