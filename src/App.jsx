import "./App.css";

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
            <span id="yearMonth">December 2022</span>
            <span id="next">▶</span>
          </div>
          <div className="dateTable">
            <table>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
              <tr>
                <td>29</td>
                <td>30</td>
                <td>31</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
