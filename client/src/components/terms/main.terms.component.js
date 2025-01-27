export default function MainTermsPolicyComponent() {
  return (
    <div className="pt-[110px] tablet:pt-[186px] pb-24  font-sans text-creamy bg-darkGreen">
      <div className="max-w-[90%] mx-auto space-y-8">
        <h2
          style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
          className="text-4xl font-bold"
        >
          Mentions légales
        </h2>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            1. Identité de l'éditeur du site
          </h3>
          <p className="mb-4">
            Le site internet{" "}
            <span className="font-semibold">www.modjoy-studio.com</span> est
            édité par les freelances suivants :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Badol Swan</span> - Statut :
              Auto-entrepreneur - Numéro SIRET : 87970255300014
            </li>
            <li>
              <span className="font-semibold">Heurtevent Axelle</span> - Statut
              : Auto-entrepreneur - Numéro SIRET : 87799453300017
            </li>
            <li>
              <span className="font-semibold">Baccialone Léo</span> - Statut :
              Auto-entrepreneur - Numéro SIRET : 80954171700025
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            2. Coordonnées de contact
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Adresse e-mail :{" "}
              <a
                href="mailto:contact@modjoy-studio.com"
                className="text-blue-600 hover:underline"
              >
                contact@modjoy-studio.com
              </a>
            </li>
            <li>Numéro de téléphone : 064169197</li>
            <li>Adresse postale : 31 Villa Curial, 75019 PARIS</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            3. Responsable de la publication
          </h3>
          <p>
            Le responsable de la publication est{" "}
            <span className="font-semibold">Baccialone Léo</span>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Hébergeur du site</h3>
          <p className="mb-4">
            Le site est hébergé par : <br />
            <span className="font-semibold">Vercel, Inc.</span> <br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
            Site internet :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            5. Propriété intellectuelle
          </h3>
          <p>
            Tous les contenus présents sur le site{" "}
            <span className="font-semibold">www.modjoy-studio.com</span>, y
            compris les textes, images, logos, vidéos et graphiques, sont
            protégés par le droit de la propriété intellectuelle. Toute
            reproduction, distribution ou utilisation non autorisée de ces
            contenus, même partielle, est strictement interdite, sauf dans le
            cadre d’un usage personnel et privé conformément aux dispositions du
            Code de la propriété intellectuelle.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            6. Traitement des données personnelles
          </h3>
          <p className="mb-4">
            Le site <span className="font-semibold">www.modjoy-studio.com</span>{" "}
            collecte et traite des données personnelles via :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Formulaires de contact :</span>{" "}
              Les informations recueillies sont utilisées exclusivement pour
              répondre aux demandes des utilisateurs ayant laissé leurs
              coordonnées.
            </li>
            <li>
              <span className="font-semibold">Cookies :</span> utilisés à des
              fins de suivi statistique et pour améliorer l'expérience
              utilisateur.
            </li>
          </ul>
          <p>
            Les utilisateurs disposent d’un droit d’accès, de rectification et
            de suppression de leurs données personnelles, conformément au
            Règlement Général sur la Protection des Données (RGPD). Pour exercer
            ces droits, contactez-nous à
            <a
              href="mailto:dpo@modjoy-studio.com"
              className="text-blue-600 hover:underline"
            >
              dpo@modjoy-studio.com
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            7. Conditions d’utilisation
          </h3>
          <p className="mb-4">
            L’utilisation du site{" "}
            <span className="font-semibold">www.modjoy-studio.com</span>{" "}
            implique l’acceptation pleine et entière des conditions générales
            d’utilisation décrites ci-après :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              L’utilisateur s’engage à utiliser le site dans le respect des lois
              et règlements en vigueur.
            </li>
            <li>
              L’éditeur ne saurait être tenu responsable en cas d'erreurs
              techniques, d’indisponibilité temporaire ou permanente du site ou
              de perte de données liées à l’utilisation du site.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            8. Médiation et règlement des litiges
          </h3>
          <p>
            Le site <span className="font-semibold">www.modjoy-studio.com</span>{" "}
            est soumis à la loi française. En cas de litige, les utilisateurs
            sont informés qu’ils peuvent recourir à un médiateur en cas de
            désaccord concernant l’utilisation du site. À défaut d’accord
            amiable, seuls les tribunaux français seront compétents pour
            trancher tout différend.
          </p>
        </div>
      </div>
    </div>
  );
}
