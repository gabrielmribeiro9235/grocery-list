export default function Header({ itemsList }) {
  return (
    <footer>
        <h1 id="footerTitle">{itemsList.length} {itemsList.length === 1 ? "item" : "items"}</h1>
    </footer>
  );
};
