import "./Editor.css";

const Editor = ({ text, setText }) => {
  return (
    <div className="editor">
      <div className="toolbar">
        <h4>Editor</h4>
      </div>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;
