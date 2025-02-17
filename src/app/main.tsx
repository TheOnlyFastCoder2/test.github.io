import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './routers';

import './globals.css';

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={App} />
);