import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import {BookStoreServiceProvider} from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>
);
