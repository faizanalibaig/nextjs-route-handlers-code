import { comments } from "./data";

export async function GET() {
    return new Response(JSON.stringify(comments), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    });
  }

 
  export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: (comments.length + 1).toString(), 
        text: comment.text,
    };
  
    comments.push(newComment);
  
    return new Response(JSON.stringify(newComment), {
      headers: {
        'content-type': 'application/json',
      },
      status: 201,
    });
  }
  