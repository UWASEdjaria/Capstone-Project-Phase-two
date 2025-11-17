export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
  claps?: number;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  text: string;
}
