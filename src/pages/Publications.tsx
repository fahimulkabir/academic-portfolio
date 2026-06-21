import PublicationsList from "../components/PublicationsPreview";

export default function Publications() {
  return (
    <main>
      {/* Set showBody to true! */}
      <PublicationsList showMoreLink={false} showBody={true} />
    </main>
  );
}
