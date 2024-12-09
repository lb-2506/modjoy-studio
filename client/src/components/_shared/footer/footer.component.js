import Link from "next/link";

// I18N
import { useTranslation } from "next-i18next";

// SVG
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
  YoutubeSvg,
} from "../_svgs/_index";

export default function FooterComponent() {
  const { t } = useTranslation("common");
  return (
    <footer className="py-24 max-w-[90%] mx-auto">
      <div className="flex justify-between">
        <div className="w-1/3">
          <img
            src="/img/logo.png"
            draggable={false}
            alt="logo"
            className="max-h-[30px]"
          />
        </div>

        <ul className="flex justify-center items-center gap-12 text-creamy w-1/3">
          <li className="text-nowrap">Link 1</li>

          <li className="text-nowrap">Link 2</li>

          <li className="text-nowrap">Link 3</li>

          <li className="text-nowrap">Link 4</li>
        </ul>

        <ul className="flex justify-end gap-4 items-center w-1/3">
          <FacebookSvg />
          <InstagramSvg />
          <TwitterSvg />
          <LinkedInSvg />
          <YoutubeSvg />
        </ul>
      </div>

      <hr className="text-creamy opacity-10 mt-24 mb-12" />

      <div
        style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
        className="flex justify-center items-center text-center gap-4 text-creamy"
      >
        <p>© 2024 Modjoy Studio. All rights reserved.</p>
        <Link href="#">
          <a className="underline">Privacy Policy</a>
        </Link>

        <Link href="#">
          <a className="underline">Terms of Use</a>
        </Link>

        <Link href="#">
          <a className="underline">Cookie Settings</a>
        </Link>
      </div>
    </footer>
  );
}
