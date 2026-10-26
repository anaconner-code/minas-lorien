const WinCard = ({ win, onDelete, onEdit }) => {
  const color = window.CAT_COLORS[win.category] || '#a58a5c';
  return (
    <div className={'ml-card ml-card--' + win.category.toLowerCase()}>
      <div className="ml-card-body">
        <div className="ml-meta">
          <ChevronMark color={color}/>
          {win.category} · {win.type}
        </div>
        <div className="ml-card-text">{win.text}</div>
      </div>
      <button className="ml-card-edit" onClick={() => onEdit && onEdit(win)}>edit</button>
      <button className="ml-card-delete" onClick={() => onDelete && onDelete(win)}>×</button>
    </div>
  );
};
window.WinCard = WinCard;
