import { Link, Img } from "@react-email/components";
import MailBase from "./base";

export const Mail = () => {
  return (
    <MailBase>
      <div>
        <p className="mb-2">Hi ##first_name## 👋🏼!</p>

        <p>
          A new episode of #BuildWithHussain is going live in less than
          ##n_hours## hours:
        </p>

        <h2 className="text-lg font-semibold">##stream_title##</h2>
      </div>

      {/* TODO: Later */}
{/* 
      <Img class="mb-5" src="##stream_thumbnail##" alt="Episode Thumbnail" /> */}

      <Link
        href="##stream_link##"
        className="bg-green-900 px-3 py-2 font-medium leading-4 text-green-50 rounded-md"
      >
        Join Livestream
      </Link>

      <div>
        <p class="font-medium text-sm">Scheduled for ##stream_date## at ##stream_time## IST.</p>
      </div>
    </MailBase>
  );
};

export default Mail;
