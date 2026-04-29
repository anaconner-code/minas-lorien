const Tabs = ({ active, onChange }) => {
  const tabs = ['inspire', 'vault', 'add'];
  return (
    <div className="ml-tabs">
      {tabs.map(t => (
        <div key={t}
             className={'ml-tab' + (active === t ? ' ml-tab--active' : '')}
             onClick={() => onChange(t)}>
          {t}
        </div>
      ))}
    </div>
  );
};
window.Tabs = Tabs;
