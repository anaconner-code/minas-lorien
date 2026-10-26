const AddForm = ({ onSave }) => {
  const [category, setCategory] = React.useState('Inspiration');
  const [type, setType] = React.useState('Quote');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [hasFile, setHasFile] = React.useState(false);

  const submit = () => {
    if (!text.trim()) return;
    onSave({ id: String(Date.now()), category, type, title, text });
    setTitle(''); setText(''); setHasFile(false);
  };

  return (
    <div className="ml-form">
      <h3 className="ml-h3">Add a New Entry</h3>
      <div className="ml-form-row">
        <select className="ml-input" value={category} onChange={e => setCategory(e.target.value)}>
          <option>Work</option><option>Creativity</option>
          <option>Family</option><option>Inspiration</option>
        </select>
        <select className="ml-input" value={type} onChange={e => setType(e.target.value)}>
          <option>Feedback</option><option>Performance Review</option>
          <option>Achievement</option><option>Quote</option>
          <option>Link</option><option>Note</option><option>Memory</option>
        </select>
      </div>
      <input className="ml-input" type="text"
             placeholder="Title — e.g. Q3 review from Sarah"
             value={title} onChange={e => setTitle(e.target.value)}/>
      <textarea className="ml-input ml-textarea"
                placeholder="Paste your content here — feedback, a quote, a URL, a memory, anything."
                value={text} onChange={e => setText(e.target.value)}/>
      <div className={'ml-upload' + (hasFile ? ' ml-upload--has' : '')}
           onClick={() => setHasFile(h => !h)}>
        {hasFile
          ? '🖼️ photo-2024-09-12.jpg — click to change'
          : 'Click to attach a file — image, PDF, Word doc, audio, or video (optional)'}
      </div>
      <button className="ml-btn ml-btn--primary" onClick={submit}>Save to vault</button>
    </div>
  );
};
window.AddForm = AddForm;
