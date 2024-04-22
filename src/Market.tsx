import React from 'react';

const Market: React.FC = () => {
    React.useEffect(() => {
        fetch('http://localhost:8080/market')
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)));
    }, []);

    return (
        <div>
            <h1>Market</h1>
        </div>
    );
};

export default Market;
