import './App.css';
import BulletinBoard from './components/BulletinBoard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          React Bulletin Board
        </h1>

      </header>
      <main className='App-header'>
        <BulletinBoard/>
      </main>
      <footer>
        <p>A footer should be here!</p>
      </footer>

    </div>
  );
}

export default App;
