import fm from "front-matter";

export async function loadJoinData() {
  const files = import.meta.glob("/src/content/join/join.md", { as: "raw" });
  const raw = await files["/src/content/join/join.md"]();

  const { attributes, body } = fm<any>(raw);

  return {
    title: attributes.title,
    body: body.trim(),
  };
}
