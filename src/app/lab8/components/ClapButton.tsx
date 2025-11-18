import { Post } from "../types/post";
interface Props { post: Post; setPost: (p: Post) => void; }
export default function ClapButton({ post, setPost }: Props) {
  return <button onClick={() => setPost({ ...post, claps: (post.claps||0)+1 })}>👏 {post.claps||0}</button>;
}
