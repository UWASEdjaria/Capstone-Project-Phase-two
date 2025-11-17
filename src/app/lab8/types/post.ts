export interface Comment { id: string; author: string; text: string; }
export interface Post { id: string; title: string; content: string; author: string; claps?: number; comments?: Comment[]; }
