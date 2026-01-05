import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
//import { textElement} from 'react';
import Navbar from './components/header/header';
import Bio from './components/bio/Bio';
import Toolbox from './components/toolbox-block/tool-box';
import Project from './components/Projects-box/projects';

function App() {
  return (
    <div className="Background">
      <div className="App">
        <Navbar />

        <section className="section">
          <Bio />
        </section>

        <section className="section">
          <Toolbox />
        </section>

        <section className="section">
          <Project />
        </section>
      </div>
    </div>
  );
}


export default App;
