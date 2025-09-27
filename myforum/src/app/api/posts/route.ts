import { NextResponse } from 'next/server';

let posts = [
    { id: 1, title: 'Первый пост', content: 'Привет, форум!' },
    { id: 2, title: 'Второй пост', content: 'Это тренировочный проект' },
];

export async function GET() {
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    const body = await req.json();
    const newPost = { id: Date.now(), ...body };
    posts.push(newPost);
    return NextResponse.json(newPost);
}
