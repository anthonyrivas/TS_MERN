import React from 'react';
import HelloWorld from 'components/HelloWorld';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <HelloWorld />
            <Footer />
        </>
    );
};

export default App;
