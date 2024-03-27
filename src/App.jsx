import Editor from "./components/Editor";
import "./App.css";
import { Preview } from "./components/Preview";
import { useEffect, useState } from "react";
import { markdownInitialText } from "./startedValue";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

function App() {
  const [text, setText] = useState(markdownInitialText);
  const [mark, setMark] = useState(marked(text));
  //! Editor deki text alanı değişirse hemen markdown haline çevrilir.
  useEffect(() => {
    setMark(marked(text));
  }, [text]);
  return (
    <>
      <Editor text={text} setText={setText} />
      <Preview mark={mark} />
    </>
  );
}

export default App;
