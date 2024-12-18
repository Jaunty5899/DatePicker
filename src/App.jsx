import "./App.css";
import DateItem from "./DateItem";

function App() {
  return (
    <>
      <div className="container">
        <div className="placeholder">
          <span className="fullDate">dd / mm / yyyy</span>
          <span className="image">📅</span>
        </div>
        <div className="dateContainer">
          <div className="monthYearSlider">
            <span id="previous">◀</span>
            <span id="yearMonth">December 2024</span>
            <span id="next">▶</span>
          </div>
          <div className="dateTable">
            <table>
              <tr>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
              </tr>
              <tr>
                <DateItem />
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
