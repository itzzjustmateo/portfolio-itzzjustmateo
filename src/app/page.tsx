import Link from "next/link";

const GITHUB_URL = "https://github.com/itzzjustmateo";
const YOUTUBE_URL = "https://youtube.com/@OneFlex3";
const TWITCH_URL = "https://twitch.tv/@OneFlex3";
const DISCORD_URL = "https://dc.gg/developer";

export default function Home() {
  return (
    <div>
      <h1 className={"text-3xl text-center uppercase font-extrabold pt-5 pb-3"}>
        itzzmateo
      </h1>
      <p className={"text-center"}>
        Fullstack Web-Developer | NextJS Expert | Still a minor
      </p>
      <div className={"flex items-center justify-center pt-4"}>
        <Link
          className={"hover:text-blue-600 transition-all duration-75< mr-1 ml-1 text-blue-500 underline underline-offset-2"}
          href={GITHUB_URL}
        >
          My Github
        </Link>
        <Link
          className={"hover:text-blue-600 transition-all duration-75< mr-1 ml-1 text-blue-500 underline underline-offset-2"}
          href={YOUTUBE_URL}
        >
          My YouTube
        </Link>
        <Link
          className={"hover:text-blue-600 transition-all duration-75< mr-1 ml-1 text-blue-500 underline underline-offset-2"}
          href={TWITCH_URL}
        >
          My Twitch
        </Link>
        <Link
          className={"hover:text-blue-600 transition-all duration-75< mr-1 ml-1 text-blue-500 underline underline-offset-2"}
          href={DISCORD_URL}
        >
          My Discord
        </Link>
      </div>
    </div>
  );
}
