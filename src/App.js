import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

// creatign style for placing the footer at the bottom of the page
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Occupy full viewport height
  },
  mainContent: {
    flex: '1', // Allow the main content to grow and take up remaining space
  },
  footer: {
    height: '90px', // Set a fixed height for the footer
    marginTop: 'auto', // Push the footer to the bottom of the container
  },
}));


function App() {
    const [selectedItem, setSelectedItem] = React.useState('About');
    const classes = useStyles();

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
      <div className={classes.container}>
        <Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <main className={classes.mainContent}>{renderPage()}</main>
        <footer className={classes.footer}> <Footer /></footer>        
        </div>
    );
};

export default App;
