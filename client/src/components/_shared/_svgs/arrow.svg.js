export function ArrowSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      width={props.width ?? 39}
      height={props.height ?? 39}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor ?? "#FFFFE3"}
        d="M3.251 22.75H27.93L17.2 33.434A3.259 3.259 0 0 0 19.51 39c.865 0 1.695-.343 2.308-.955l16.256-16.237c.296-.308.528-.673.683-1.071a3.244 3.244 0 0 0 0-2.468 3.246 3.246 0 0 0-.683-1.072L21.817.961a3.252 3.252 0 0 0-4.617 0 3.248 3.248 0 0 0-.712 3.554c.165.396.407.755.712 1.057l10.73 10.683H3.25A3.253 3.253 0 0 0 0 19.504a3.245 3.245 0 0 0 3.251 3.247Z"
      />
      <path
        stroke={props.strokeColor ?? "#FFFFE3"}
        strokeOpacity={0.28}
        d="m28.282 23.104.858-.854H3.25A2.753 2.753 0 0 1 .5 19.503a2.745 2.745 0 0 1 2.751-2.747H29.14l-.857-.855-10.73-10.684a2.747 2.747 0 0 1 0-3.901l.002-.003a2.752 2.752 0 0 1 3.908 0l.001.001 16.253 16.233c.249.26.444.567.574.903l.004.009a2.743 2.743 0 0 1 0 2.088l-.004.009c-.13.335-.325.642-.574.903L21.463 37.69a2.767 2.767 0 0 1-4.72-1.952c0-.732.292-1.434.81-1.951l10.729-10.684Z"
      />
    </svg>
  );
}
