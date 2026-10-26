const FilterChips = ({ value, onChange, counts, withCounts = false }) => {
  const cats = ['all', 'Work', 'Creativity', 'Family', 'Inspiration'];
  return (
    <div className={withCounts ? 'ml-filters ml-filters--vault' : 'ml-filters ml-filters--inspire'}>
      {cats.map(c => (
        <button key={c}
                className={'ml-chip' + (value === c ? ' ml-chip--active' : '')}
                onClick={() => onChange(c)}>
          {c === 'all' ? 'All' : c}
          {withCounts && (
            <span className="ml-chip-badge">{counts[c] ?? 0}</span>
          )}
        </button>
      ))}
    </div>
  );
};
window.FilterChips = FilterChips;
