 import React, { useRef } from "react"; 
 import Editor from "@monaco-editor/react"; 
  
 export default function() { 
   const editorRef = useRef(null); 
  
   function handleEditorDidMount(editor, monaco) { 
     editorRef.current = editor;  
   } 
    
   function getValue () { 
     return editorRef.current.getValue(); 
   } 
    
   return( 
     <Editor 
        defaultLanguage="json" 
        onMount={handleEditorDidMount} 
      /> 
   ); 
 }
