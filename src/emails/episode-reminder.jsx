import { Link } from "@react-email/components";
import MailBase from "./base";

export const Mail = () => {
  return (
    <MailBase>
      <div>
        <p className="mb-2">Hi ##first_name## 👋🏼!</p>

        <p>
          A new episode of #BuildWithHussain is going live in less than 3 hours:
        </p>

        <h2 className="text-lg font-semibold">##stream_title##</h2>
      </div>

      <Link
        href="##stream_link##"
        className="bg-green-500 px-3 py-2 font-medium leading-4 text-green-50 rounded-md"
      >
        Join Livestream
      </Link>
    </MailBase>
  );
};

export default Mail;
