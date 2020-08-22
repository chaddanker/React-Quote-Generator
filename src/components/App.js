import React from 'react';

import Card from './Card';

import quotes from '../quotes';

const App = () => {
    return (
        <div style={{ marginTop: '30px' }}>
            <div className="container-sm">
                <Card quotes={quotes} Id="quote-box" />
            </div>
        </div>
    );
};

export default App;