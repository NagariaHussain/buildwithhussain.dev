import rss from "@astrojs/rss";
import { getBlogsList } from "../utils/blogs";
import getAllEpisodes from "../utils/episodes";

export async function GET(context) {
  const blogs = await getBlogsList();

  const episodes = await getAllEpisodes();

  const items = blogs.map((blog) => {
    console.log(blog.published_on)
    return {
      title: blog.title,
      description: blog.description,
      link: `${context.site}articles/${blog.route}`,
      guid: `${context.site}articles/${blog.route}`,
      pubDate: blog.published_on,
    };
  });

  episodes.forEach((episode) => {
    console.log(episode.stream_date)
    items.push({
      title: episode.title,
      link: episode.stream_link,
      guid: episode.stream_link,
      pubDate: episode.stream_date_raw,
    });
  });

  return rss({
    title: "Build With Hussain",
    description: "Build With Hussain Articles and Episodes",
    stylesheet: '/rss/styles.xsl',
    site: context.site,
    items,
  });
}
