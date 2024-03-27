import "./Preview.css";

export const Preview = ({ mark }) => {
  return (
    <div className="preview">
      <div className="toolbar">
        <h4>Preview</h4>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: mark }}></div>
    </div>
  );
};
