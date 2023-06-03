import { format, parse } from "date-fns";
import { FrappeApp } from "frappe-js-sdk";

interface Episode {
    title: string;
    stream_date: string;
    stream_time: string;
    stream_link: string;
    stream_date_time: Date;
}

const FRAPPE_CMS_URL = "https://cms.buildwithhussain.dev";

export default async function getAllEpisodes(): Promise<Episode[]> {
    const frappe = new FrappeApp(FRAPPE_CMS_URL, {
        useToken: true,
        // Pass a custom function that returns the token as a string - this could be fetched from LocalStorage or auth providers like Firebase, Auth0 etc.
        token: () => getToken(),
        // This can be "Bearer" or "token"
        type: "token",
    });

    function getToken() {
        return `${import.meta.env.API_KEY}:${import.meta.env.API_SECRET}`;
    }

    const db = frappe.db();

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