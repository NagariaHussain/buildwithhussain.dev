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
  blogger: string;
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
