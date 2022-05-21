import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import Chat from './Modules/Chat.js/Chat';
import { Toast } from 'primereact/toast';
import useSocket from './Hooks/useSocket';

export let socket;

function App() {
  [socket] = useSocket('http://216.48.189.49:8080', { transports: ['websocket'] });

  const actions = useSelector(state => {
    console.log(state?.user?.actions)
    return state?.user?.actions || []
  });

  const toast = useRef(null);

  const showSuccess = (value) => {
    toast.current.show({ severity: 'success', summary: value.detail, detail: value.message });
  }


  return (
    <>
      <Toast ref={toast} />
    <Suspense fallback={<div>Loading ...</div>}>
      {
        useRoutes(routes({ actions, showSuccess }))
      }
    </Suspense>

      </>
  )
}

export default App;
