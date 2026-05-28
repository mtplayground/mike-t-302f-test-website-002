const projectDetails = [
  "Next.js App Router",
  "TypeScript",
  "Development server on port 8080",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="intro">
        <p className="eyebrow">Issue #1</p>
        <h1>Next.js project initialized</h1>
        <p className="summary">
          This repository is ready for application work with the App Router,
          TypeScript, and a repeatable local development workflow.
        </p>
        <ul className="details" aria-label="Project setup details">
          {projectDetails.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
