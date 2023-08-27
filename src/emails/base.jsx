import { Html } from "@react-email/html";
import { Font } from "@react-email/font";
import { Tailwind } from "@react-email/tailwind";
import { Container, Body, Head, Button } from "@react-email/components";

export const MailBase = ({ children }) => {
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
        <Body className="bg-green-50">
          <Container className="font-sans px-4">
            {children}

            <p>
              Hussain <br />
              ✌🏼
            </p>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MailBase;
