
"use client"

import type { Snippet } from "@prisma/client"
import Editor from "@monaco-editor/react";
import {useState} from "react";

import *as actions from "@/actions"


interface SnippetEditFormProps {
    snippet:Snippet
};

export default function SnippetEditForm({snippet}:SnippetEditFormProps){

    const [code, setCode] = useState(snippet.code);


    const handleEditorChange =(value:string = "")=>{
        setCode(value)
    }


    const editSnippetActions = actions.editSnippet.bind(null, snippet.id, code)

    return (
        <div className="pt-20">
            <Editor
            height="40vh"
            theme="vs-dark"
            language="typescript"
            defaultValue={snippet.code}
            options={{minimap:{enabled:false}}}
            onChange={handleEditorChange}
            />

            <form action={editSnippetActions}>
                <button type="submit" className="p-2 border rounded">Save</button>
            </form>
        </div>
    )
}