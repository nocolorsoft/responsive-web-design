import './App.css';
import React, {useState} from 'react';

function App() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!navOpen);
    }

    return (
        <div className="App">
            <header>
                <h1>My React App</h1>
                <button id="nav-button" className="nav-button" onClick={toggleNav}>&#9776;</button>
            </header>
            <nav id="navMenu" className={navOpen ? 'open' : ''}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Products</li>
                </ul>
            </nav>
            <main>
                <section>
                    <h2>Section 1</h2>
                    <p>Section 1 content</p>
                </section>
                <section>
                    <h2>Section 2</h2>
                    <p>Section 2 content</p>
                </section>
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default App;