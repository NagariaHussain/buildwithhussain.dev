import { Html } from "@react-email/html";
import { Font } from "@react-email/font";
import { Tailwind } from "@react-email/tailwind";
import { Container, Body, Head, Button } from "@react-email/components";

export const Mail = () => {
  const first_name = "Hussain";
  const stream_title = "How to build a React app with Tailwind CSS";
  
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
      <Body>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#30A66D",
                },
              },
              fontFamily: {
                sans: ["Poppins", "Verdana", "sans-serif"],
              }
            },
          }}
        >

          <div className="font-sans text-green-900">

          <p className="mb-2">
            Hi {first_name} 👋🏼!
          </p>

          <p>
          A new episode of #BuildWithHussain is going live in less than 3 hours:
          </p>

          <h2 className="text-lg font-semibold text-green-900 font-sans">{stream_title }</h2>

          </div>

          <Button
            href="{ stream_link }"
            className="font-sans bg-brand px-3 py-2 font-medium leading-4 text-white rounded-md"
          >
            Join Livestream
          </Button>

          <p className="text-white font-sans">
            Hussain <br />
            ✌🏼
          </p>

          <div>
          <a className="text-green-400 font-sans" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=My Event&details=Event description text&dates={{start_datetime}}/{{end_datetime}}&location=New York City">Add to Google Calendar</a>
          </div>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default Mail;
