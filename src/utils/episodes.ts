import { format, parse } from "date-fns";
import { getFrappeDB } from "./frappe";

export interface Episode {
  title: string;
  stream_date: string;
  stream_time: string;
  stream_link: string;
  stream_date_time: Date;
}

export default async function getAllEpisodes(): Promise<Episode[]> {
  const db = getFrappeDB();

  let episodes = await db.getDocList("BWH Stream", {
    fields: ["title", "stream_date", "stream_time", "stream_link"],
    orderBy: {
      field: "stream_date",
      order: "asc",
    },
    limit: 1000,
  });

  episodes.forEach((stream) => {
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
