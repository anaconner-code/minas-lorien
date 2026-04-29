const StatusBar = ({ state, count }) => {
  const map = {
    connecting: { cls: '', text: 'Connecting to your vault…' },
    syncing:    { cls: 'ml-status--syncing', text: 'Loading your vault…' },
    synced:     { cls: 'ml-status--ok',      text: `Vault synced · ${count} entries` },
    error:      { cls: 'ml-status--error',   text: 'Could not connect — check your internet' },
  };
  const s = map[state] || map.connecting;
  return <div className={'ml-status ' + s.cls}>{s.text}</div>;
};
window.StatusBar = StatusBar;
