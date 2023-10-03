import { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export type Post = {
  slug: string;
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
  isFeatured: boolean;
};

export interface MessageType {
  email: string;
  message: string;
  name: string;
  id?: string;
}
