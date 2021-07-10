const Link = ({ className, compPath, children }) => {
  const onClick = (e) => {
    // To open in new tab on press of Ctrl + Click or Cmd + Click
    if (e.metaKey | e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", compPath);

    const navEvent = new PopStateEvent("navigation");
    window.dispatchEvent(navEvent);
  };
  return (
    <a className={className} href={compPath} onClick={onClick}>
      {children}
    </a>
  );
};
export default Link;
