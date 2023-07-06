import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
// import './styles/App.css';




function App() {
    const [selectedItem, setSelectedItem] = React.useState('');

    const renderPage = () => {
      switch (selectedItem) {
        case "About":
          return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Contact":
          return <Contact />;
        case "Resume":
          return <Resume />;
        default:
          return <About />;
      }
    };

    return (
      <div className="App">
        <Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        {renderPage()}
        </div>
    );
};

export default App;
