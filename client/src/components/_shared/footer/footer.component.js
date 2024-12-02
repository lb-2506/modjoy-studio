import Link from "next/link";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { footerData } from "@/_assets/data/_index.data";

export default function FooterComponent() {
  const { t } = useTranslation("common");
  return (
    <footer className="">
    
    </footer>
  );
}
