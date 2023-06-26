import { useState } from 'react';

export default function CommandInput({ onCommandSubmit }) {
  const [command, setCommand] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCommand("");
    await onCommandSubmit(command);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="justify-self-center cmd-input w-[764px] text-base text-ellipsis overflow-hidden"
        type="text"
        placeholder="Please ask me"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button type="submit" hidden>Submit</button>
    </form>
  );
}
