import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Icon(props: Record<string, any>) {
  const classClickable: string = props.onClick == undefined ? "" : " clickable";
  const propsClass: string =
    props.className == undefined ? "" : ` ${props.className}`;
  return (
    <div
      className={styles.iconButton + propsClass + classClickable}
      onClick={props.onClick}
    >
      <img className={styles.icon} src={props.src} style={props.style} />
    </div>
  );
}

function IconButton(props: Record<string, any>) {
  var selected = props.selected;
  const className = props.className ? props.className : "";

  // If selected, show selected-icon,
  const src = props.selected ? `/selected-${props.src}` : `/${props.src}`;

  return (
    <Link
      to={!selected ? props.href : undefined}
      className={styles.iconButton + " " + className}
      onClick={props.onClick}
    >
      <img className={styles.icon} src={src} style={props.style} />
    </Link>
  );
}

function NavBar(props: Record<string, any>) {
  const className = props.className ? props.className : "";
  return (
    <div className={styles.navbar + " " + className}>{props.children}</div>
  );
}

function TopNavBar(props: Record<string, any>) {
  return <NavBar className={styles.topNavBar}>{props.children}</NavBar>;
}

function SoftKeys({ selected }: { selected: string }) {
  return (
    <NavBar className={styles.softKeys}>
      <IconButton
        src="calendar.svg"
        href="/calendar"
        selected={selected.startsWith("/calendar")}
      />
      <IconButton
        src="home.svg"
        href="/index"
        selected={selected.startsWith("/index")}
      />
      <IconButton
        src="user.svg"
        href="/PetOwner"
        selected={selected.startsWith("/PetOwner")}
      />
    </NavBar>
  );
}

export { Icon, IconButton, SoftKeys, TopNavBar };
