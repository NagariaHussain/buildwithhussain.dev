import { Button } from "@react-email/components";
import MailBase from "./base";

export const Mail = () => {
  const first_name = "Hussain";
  const stream_title = "How to build a React app with Tailwind CSS";

  return (
    <MailBase>
      <div className="text-green-900">
        <p className="mb-2">Hi {first_name} 👋🏼!</p>

        <p>
          A new episode of #BuildWithHussain is going live in less than 3 hours:
        </p>

        <h2 className="text-lg font-semibold text-green-900">{stream_title}</h2>
      </div>

      <Button
        href="{ stream_link }"
        className="bg-green-500 px-3 py-2 font-medium leading-4 text-white rounded-md"
      >
        Join Livestream
      </Button>
    </MailBase>
  );
};

export default Mail;
