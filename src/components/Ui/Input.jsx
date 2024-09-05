export default function Input({ label, id, className, ...props }) {
  return (
    <p className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
