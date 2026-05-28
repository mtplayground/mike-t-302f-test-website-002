const projectDetails = [
  "Next.js App Router",
  "TypeScript",
  "Development server on port 8080",
];

export default function Home() {
  return (
    <section className="page-shell" aria-labelledby="intro-title">
      <div className="intro">
        <p className="eyebrow">Issue #1</p>
        <h1 id="intro-title">Next.js project initialized</h1>
        <p className="summary">
          This repository is ready for application work with the App Router,
          TypeScript, and a repeatable local development workflow.
        </p>
        <ul className="details" aria-label="Project setup details">
          {projectDetails.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
