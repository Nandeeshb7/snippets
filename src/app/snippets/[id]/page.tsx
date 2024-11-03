import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";

import *as actions from "@/actions"




interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 1000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  console.log(snippet);

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)
  return (
    <div>
      <div className="flex m-4 justify-between item-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>

        <div className="flex gap-4">
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
          <form action={deleteSnippetAction}>
          <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>

      <pre className="p-3 border rounded bg-gray-200 border-gray-100">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
