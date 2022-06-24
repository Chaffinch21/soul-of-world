import React from 'react';
import 'normalize.css';
import './style.css';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);