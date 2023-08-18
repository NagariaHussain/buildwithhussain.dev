import { getFrappeDB, getFrappeCall } from "./frappe";

interface BlogPost {
  name: string;
  title: string;
  route: string;
  read_time: number;
  blog_intro: string;
  content_md: string;
  meta_title: string;
  meta_description: string;
  meta_image: string;
  blogger: string;
}

interface Blogger {
  name: string;
  full_name: string;
  user: string;
  bio: string;
  avatar: string;
}

export async function getBlogsList(): Promise<Array<BlogPost>> {
  const db = getFrappeDB();

  const blogs = await db.getDocList("Blog Post", {
    fields: ["route", "name", "title", "meta_image"],
    filters: [["custom_published_on_bwh", "=", 1]],
  });

  return blogs;
}

export async function getBlogDocByRoute(route: string): Promise<BlogPost> {
  const call = getFrappeCall();

  const blog = await call.get("get-blog-post-by-route", {
    route: route,
  });
  return blog.message;
}

export async function getBloggerDoc(blogger: string): Promise<Blogger> {
  const db = getFrappeDB();
  return db.getDoc("Blogger", blogger);
}
