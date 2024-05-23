import { useEffect, useState } from "react";
const BASE_URL = "https://jsonplaceholder.typicode.com";
interface Post {
  id: number;
  title: string;
}

export default function App() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }

      setLoading(false);
    };
    fetchPost();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>something wrong</h1>;
  return (
    <div>
      <h1>Data fetching in react</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
