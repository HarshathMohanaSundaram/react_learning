export default function TabButton({ children, handleClick }) {
  return(
    <li onClick={handleClick}>
      <button>{children}</button>
    </li>
  );
}