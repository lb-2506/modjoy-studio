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
            >
              {props.project.description}
            </p>
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
            <p className="text-lg font-semibold">Client</p>
            <p>{props.project.client}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Date</p>
            <p>{props.project.date}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Role</p>
            <p>{props.project.role}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Website</p>
            <a
              href={`https://${props.project.website}`}
              target="_blank"
              rel="noo pener noreferrer"
              className="underline"
            >
              {props.project.website}
            </a>
          </div>
        </div>
      </div>

      <div
        className="mt-12 h-[700px] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${props.project.imgSrc})` }}
        aria-label={props.project.title}
      />
    </section>
  );
}
