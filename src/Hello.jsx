export default function Hello({ name = "world" }) {
  return <p aria-label="greeting">Hello, {name}!</p>;
}
