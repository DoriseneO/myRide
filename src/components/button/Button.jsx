import "./Button.css";
export default function Button({
  content,
  color,
  height,
  onClick,
  width,
  backgroundColor,
}) {
  return (
    <div className="button">
      <button
        onClick={onclick}
        style={{
          content,
          color,
          height,
          onClick,
          width,
          backgroundColor,
        }}
      >
        {content}
      </button>
    </div>
  );
}
