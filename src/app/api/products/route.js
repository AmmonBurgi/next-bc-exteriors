import clientPromise from "@/lib/mongodb";

export async function GET(request, response) {
  try {
    const client = await clientPromise;
    const db = client.db("ExteriorsStore");
    // Example: Insert or fetch data
    const posts = await db.collection("products").find({}).toArray();

    console.log('Fetched products:', posts);

    return Response.json(posts, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}