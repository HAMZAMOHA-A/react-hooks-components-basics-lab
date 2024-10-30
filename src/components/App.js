import React from "react";

function NavBar() {
  return (
    <nav>NavBar</nav>
     
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <home />
      <About />
    </div>
  );
}

export default App;
