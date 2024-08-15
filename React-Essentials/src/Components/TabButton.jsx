export default function TabButton({ children, handleClick, isActive }) {
  return(
    <li>
      <button className={isActive ? 'active': undefined} onClick={handleClick}>{children}</button>
    </li>
  );
}