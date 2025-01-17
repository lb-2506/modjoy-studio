export default function HeroProjectsComponent(props) {
  return (
    <section className="pt-[186px] pb-24 max-w-[80%] mx-auto text-creamy ">
      <div className="flex justify-between gap-6">
        <div className="w-1/2">
          <div>
            <h1
              style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
              className="text-5xl font-bold"
            >
              {props.project.title}
            </h1>
            <p
              style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
              className="text-lg mt-6"
              dangerouslySetInnerHTML={{ __html: props.project.description }}
            />
          </div>

          <div className="flex gap-4 mt-4">
            {props.project.tags.map((tag, index) => {
              const bgColor =
                index === 0
                  ? "bg-pink"
                  : index === 1
                    ? "bg-green"
                    : index === 2
                      ? "bg-orange"
                      : "bg-pink";

              return (
                <span
                  key={index}
                  className={`${bgColor} bg-opacity-30 text-creamy px-4 py-2 rounded-full text-sm font-medium`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-12 mt-6 ">
          <div>
            <p className="text-lg font-semibold">Secteur</p>
            <p>{props.project.sector}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Date</p>
            <p>{props.project.date}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Durée</p>
            <p>{props.project.duration}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Website</p>

            <div className="flex flex-wrap items-center space-x-2">
              {props.project.website.map((site, index) => (
                <span key={index} className="flex items-center">
                  <a
                    href={`https://${site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {site}
                  </a>
                  {index < props.project.website.length - 1 && (
                    <span className="mx-2">&bull;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-12 h-[700px] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${props.project.imgHero})` }}
        aria-label={props.project.title}
      />
    </section>
  );
}
