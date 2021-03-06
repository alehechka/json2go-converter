import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout/App';
import ThemeProvider from './layout/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
