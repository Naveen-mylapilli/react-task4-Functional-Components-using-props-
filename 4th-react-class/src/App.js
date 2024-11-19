// import logo from './logo.svg';
import './App.css';
import RichMan from './components/RichMan';

function App() {
  return (
    <div className="App">
      <h1>Top Richest peaple in the world</h1>
      <div className="richManDiv">
        <img src="./images/1. Elon Musk.webp"alt="" ></img>
        <h2>Elon Musk</h2>
        <h2>World Rank:1</h2>
        <h2>Net Wort:$315.3 B $11.6 B</h2>
      </div>

      <div className="richManDiv">
        <img src="./images/2. Jeff Bezos.webp"alt="" ></img>
        <h2>Jeff Bezos</h2>
        <h2>World Rank:2</h2>
        <h2>Net Wort:$307.3 B $06.6 B</h2>
      </div>

      <div className="richManDiv">
        <img src="./images/3. Mark Zuckerberg.webp"alt="" ></img>
        <h2>Mark Zuckerberg</h2>
        <h2>World Rank:3</h2>
        <h2>Net Wort:$298.3 B $15.6 B</h2>
      </div>

      <div className="richManDiv">
        <img src="./images/4. Bernard Arnault.webp"alt="" ></img>
        <h2>Bernard Arnault</h2>
        <h2>World Rank:4</h2>
        <h2>Net Wort:$295.3 B $16.6 B</h2>
      </div>

      <div className="richManDiv">
        <img src="./images/5. Larry Ellison.webp"alt="" ></img>
        <h2>Larry Ellison</h2>
        <h2>World Rank:5</h2>
        <h2>Net Wort:$294.3 B $10.6 B</h2>
      </div>
      <hr></hr>
      <h1>Using Functional Components(props)</h1>
      <RichMan name="Bill Gates" WorldRank ="6" NetWort= "$294.3 B $10.6 B" imgURL="./images/6. Bill Gates.webp" ></RichMan>
      <RichMan name="Larry Page" WorldRank ="7" NetWort= "$275.3 B $60.6 B" imgURL="./images/7. Larry Page.webp" ></RichMan>
      <RichMan name="Steve Ballmer" WorldRank ="8" NetWort= "$271.3 B $10.6 B" imgURL="./images/8. Steve Ballmer.webp" ></RichMan>
      <RichMan name="Warren Buffett" WorldRank ="9" NetWort= "$263.3 B $09.6 B" imgURL="./images/9. Warren Buffett.webp" ></RichMan>
      <RichMan name="Sergey Brin" WorldRank ="10" NetWort= "$259.3 B $10.6 B" imgURL="./images/10. Sergey Brin.webp" ></RichMan>

      
      
    </div>
  );
}

export default App;
