import { useState } from "react";
interface Props { onAdd: (text: string) => void; }
export default function CommentForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  return <div>
    <input value={text} onChange={e=>setText(e.target.value)} placeholder="Comment"/>
    <button onClick={() => { onAdd(text); setText(""); }}>Add</button>
  </div>;
}
