import shiki from "shiki";
import markdown from "markdown-it";

export async function getParsedMarkdown(content_md: string) {
  const highlighter = await shiki.getHighlighter({
    theme: "poimandres",
  });

  const md = markdown({
    html: true,
    highlight: (code, lang) => {
      return highlighter.codeToHtml(code, { lang });
    },
  });

  return md.render(content_md);
}
