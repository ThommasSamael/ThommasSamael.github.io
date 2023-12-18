import React from "react";
import Header from "./_components/header/Header";
import Main from "./_components/main/main/Main";
import WOW from 'wowjs';
import Footer from "./_components/footer/Footer";







function App() {
  React.useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <>
    
      <Header />
      <Main />
      <Footer/>



    </>



  );

}

export default App;
