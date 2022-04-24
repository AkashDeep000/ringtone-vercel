import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/tailwind-out.css";
import NProgress from 'nprogress';
import nprogressStyles from 'nprogress/nprogress.css';
import AudioProvider from "app/components/AudioPlayer/Provider"
import AudioPlayer from "app/components/AudioPlayer"


import {
  useTransition
} from "@remix-run/react";


export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export function links() {
  return [{
    rel: "stylesheet",
    href: styles,
  }]
}
export default function App() {
  const transition = useTransition();
  NProgress.configure({
    template: `<div class="bar" role="bar"><div class="peg"></div></div>`,
    minimum: 0.15
  })
  React.useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === "idle") NProgress.done();
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start();
  },
    [transition.state]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
    </head>
      <body>
              <AudioProvider>
                      <AudioPlayer />
        <Outlet />
                </AudioProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
    </body>
  </html>
);
}