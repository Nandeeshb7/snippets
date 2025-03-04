import { db } from "@/db";
import Link from "next/link";
export default async function Home() {
  // Fetching data from data base

  const snippets = await db.snippet.findMany();
  console.log(snippets);

  const renderSnippets = snippets.map((snippet) => {
    
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return(
  <div>
    <div className="flex m-2 justify-between item-center">
      <h1 className="text-xl font-bold">Snippets</h1>
      <Link href="/snippets/new" className="border p-2 rounded">New</Link>
    </div>
    <div className="flex flex-col gap-2">{renderSnippets}</div>
    
    </div>
);}
