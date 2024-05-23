import { useEffect, useRef, useState } from "react";
const BASE_URL = "https://jsonplaceholder.typicode.com";
interface Post {
  id: number;
  title: string;
}

export default function App() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts? page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (e: any) {
        if (e.name === "AbortError") {
          console.log("fetch aborted");
          return;
        }
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [page]);

  if (error) return <h1>something wrong</h1>;
  return (
    <div>
      <h1>Data fetching in react</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page({page})</button>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
