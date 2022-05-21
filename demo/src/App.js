import React from 'react';
import Chat from './components/Chat/Chat';
import useSocket from './Hooks/useSocket';

export let socket;

function App() {
  [socket] = useSocket('http://localhost:8080', { transports: ['websocket'] });
  return (
    <Chat />
  );
}

export default App;
