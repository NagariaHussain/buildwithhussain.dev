import { Img } from "@react-email/components";
import MailBase from "./base";
import { Link } from "./components/Link";

export const Mail = () => {
  return (
    <MailBase>
      <div>
        <p className="mb-2">Hi ##first_name## 👋🏼!</p>

        <p>
          You are really awesome for signing up for #BuildWithHussain! 🫶🏼
          <br></br>Let me make this worth your time!
        </p>

        <p>
          You can schedule a 15 or 30-minute call with me using this link:
          <div class="my-1"></div>
          <Link href="https://cal.com/bwh.live" className="mt-2">Book</Link>
        </p>


        <p>
          Join the Build With Hussain Community Discord Server and stay in touch:
          <div class="my-1"></div>
          <Link href="https://discord.gg/cGG9kZDnbh" className="mt-2">Join BWH Discord</Link>
        </p>


        <p>
          Here is your Frappe Bench CLI cheat sheet:
          <div class="my-1"></div>
          <Link href="https://frappeframework.com/files/Bench%20Cheatsheet%20v1.1.pdf" className="mt-2">Download</Link>
        </p>

        <p>
            Feel free to reply to this email if you have problem accessing any of the above resources!
        </p>
      </div>
    </MailBase>
  );
};

export default Mail;
