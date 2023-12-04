import rss from "@astrojs/rss";
import { getBlogsList } from "../utils/blogs";
import getAllEpisodes from "../utils/episodes";

export async function GET(context) {
  const blogs = await getBlogsList();

  const episodes = await getAllEpisodes();

  const items = blogs.map((blog) => {
    return {
      title: blog.title,
      description: blog.description,
      link: `${context.site}articles/${blog.route}`,
      guid: `${context.site}articles/${blog.route}`,
      pubDate: blog.published_on,
    };
  });

  episodes.forEach((episode) => {
    items.push({
      title: episode.title,
      link: episode.stream_link,
      guid: episode.stream_link,
      pubDate: episode.stream_date_raw,
    });
  });

  // sort items by pubDate
  items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return rss({
    title: "Build With Hussain",
    description: "Build With Hussain Articles and Episodes",
    stylesheet: '/rss/styles.xsl',
    site: context.site,
    items,
  });
}
