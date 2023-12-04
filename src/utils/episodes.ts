import { format, parse } from "date-fns";
import { getFrappeDB } from "./frappe";

export interface Episode {
  title: string;
  stream_date_raw: string;
  stream_date: string;
  stream_time: string;
  stream_link: string;
  stream_date_time: Date;
  series: "#BWHforFOSS" | "Build With Hussain" | "Let's Learn ERPNext!";
}

export default async function getAllEpisodes(): Promise<Episode[]> {
  const db = getFrappeDB();

  let episodes = await db.getDocList("BWH Stream", {
    fields: ["title", "stream_date", "stream_time", "stream_link", "series"],
    orderBy: {
      field: "stream_date",
      order: "asc",
    },
    limit: 1000,
  });

  episodes.forEach((stream) => {
    stream.stream_date_raw = stream.stream_date;
    stream.stream_date = format(
      parse(stream.stream_date, "yyyy-MM-dd", new Date()),
      "do MMM, yyyy"
    );

    stream.stream_time = format(
      parse(stream.stream_time, "HH:mm:ss", new Date()),
      "hh:mma"
    );

    const streamDate = parse(stream.stream_date, "do MMM, yyyy", new Date());
    const streamTime = parse(stream.stream_time, "hh:mma", new Date());

    const streamDateTime = new Date(
      streamDate.getFullYear(),
      streamDate.getMonth(),
      streamDate.getDate(),
      streamTime.getHours(),
      streamTime.getMinutes(),
      streamTime.getSeconds()
    );

    stream.stream_date_time = streamDateTime;
  });

  return episodes;
}

export async function getBWHforFOSSEpisodes() {
  const allEpisodes = await getAllEpisodes();

  // series = "#BWHforFOSS"
  const episodes = allEpisodes.filter(
    (episode) => episode.series === "#BWHforFOSS"
  );

  return episodes;
}

export async function getBWHEpisodes() {
  const allEpisodes = await getAllEpisodes();

  const episodes = allEpisodes.filter(
    (episode) => episode.series === "Build With Hussain"
  );

  return episodes;
}
