import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h3 className="degree">{data.degree}</h3>
        <p className="school">
          <a href={data.link}>{data.school}</a>,{' '}
          {data.startYear ? (
            <>
              <time dateTime={String(data.startYear)}>{data.startYear}</time>
              <span aria-hidden="true"> – </span>
              <span className="sr-only"> to </span>
            </>
          ) : null}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
    </article>
  );
}
