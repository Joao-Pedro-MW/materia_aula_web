export function Article({ title, datetime, displayDate, paragraphs = [], image, figcaption }) {
  return (
    <article>
      <h2>{title}</h2>
      <time dateTime={datetime}>{displayDate || datetime}</time>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {image && (
        <figure>
          <img src={image.src} alt={image.alt} />
          {figcaption && <figcaption>{figcaption}</figcaption>}
        </figure>
      )}
    </article>
  );
}