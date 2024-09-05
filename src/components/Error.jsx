export default function Error({ title, message }) {
  return (
    <modal>
      <div className="error">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </modal>
  );
}
