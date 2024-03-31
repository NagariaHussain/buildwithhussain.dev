import { Html } from "@react-email/html";
import { Font } from "@react-email/font";
import { Tailwind } from "@react-email/tailwind";
import { Container, Body, Head, Link, Img } from "@react-email/components";

const EmailFooter = () => (
  <div className="my-10">
    <p>
      Hussain <br />
      <span className="text-2xl">✌🏼</span>
    </p>

    <div class="mt-4">
      <Link
        href="https://buildwithhussain.dev"
        class="text-green-700 underline underline-offset-2 mr-3"
      >
        buildwithhussain.dev
      </Link>

      <Link
        href="https://platform.buildwithhussain.dev/unsubscribe-from-bwh-emails/new"
        class="text-green-700 underline underline-offset-2"
      >
        Unsubscribe
      </Link>

      <div class="mt-4">
        <Link href="https://frappe.io/products">
          <Img class="h-12 mt-2" src="https://platform.buildwithhussain.dev/files/pbfm.png" alt="powered by Frappe Mail badge" />
        </Link>
      </div>

      </div>
  </div>
);

export const MailBase = ({ children }) => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                green: {
                  50: "#F3FCF5",
                  100: "#E4F5E9",
                  200: "#DAF0E1",
                  300: "#CAE5D4",
                  400: "#B6DEC5",
                  500: "#59BA8B",
                  600: "#30A66D",
                  700: "#278F5E",
                  800: "#16794C",
                  900: "#173B2C",
                },
              },
            },
            fontFamily: {
              sans: ["Poppins", "Verdana", "sans-serif"],
            },
          },
        }}
      >
        <Body className="bg-green-50 text-green-900 p-3">
          {children}
          <EmailFooter />
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MailBase;
