interface ITrailer {
  title: string;
  path: string;
  class: string;
}

export function Trailer(props: ITrailer): JSX.Element {
  return (
    <div className={`video-${props.class}`}>
      {props.class === 'bottom' && <p>Assista ao trailer:</p>}
      <iframe
        src={props.path.replace('play=1', 'play=0')}
        frameBorder="0"
        title={props.title}
        className="trailer"
      ></iframe>
    </div>
  );
}
