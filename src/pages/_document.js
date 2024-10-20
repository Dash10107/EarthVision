import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          chat-title="EarthVision"
          agent-id="174d005f-d15f-4bfa-acb4-5c0eaad8a431"
          language-code="en"
        ></df-messenger>
      </body>
    </Html>
  );
}
