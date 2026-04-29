const Spotlight = ({ win }) => {
  if (!win) {
    return <div className="ml-empty">Nothing here yet — go add some.</div>;
  }
  const color = window.CAT_COLORS[win.category] || '#a58a5c';
  return (
    <div className={'ml-spotlight ml-spotlight--' + win.category.toLowerCase()}>
      <div className="ml-spotlight-body">
        <div className="ml-meta">
          <ChevronMark color={color}/>
          {win.category} · {win.type}
        </div>
        <div className="ml-spotlight-text">{win.text}</div>
        <div className="ml-spotlight-rule"><span className="ml-rule-mark">· · ·</span></div>
      </div>
    </div>
  );
};
window.Spotlight = Spotlight;
