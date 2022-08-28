import Beer from "../../assets/Beer.png";
import Burger from "../../assets/Burger.png";
import Duck from "../../assets/Duck.png";

function Picker() {
  return (
    <div className="picker-div">
      <h1 className="faq-head">
        Frequently<br></br>Asked<br></br>Questions
      </h1>

      <table class="faq-main-holder">
        <tr class="faq-main-group">
          <td>
            <a class="faq-main-item">the org</a>
          </td>
          <td>
            <a class="faq-main-item">interview</a>
          </td>
          <td>
            <div class="faq-main-item">
              <img src={Beer} class="faq-icons"></img>
            </div>
          </td>
        </tr>

        <tr class="faq-main-group">
          <td>
            <a class="faq-main-item">application</a>
          </td>
          <td>
            <div class="faq-main-item">
              <img src={Burger} class="faq-icons"></img>
            </div>
          </td>
          <td>
            <a class="faq-main-item">results</a>
          </td>
        </tr>

        <tr class="faq-main-group">
          <td>
            <div class="faq-main-item">
              <img src={Duck} class="faq-icons"></img>
            </div>
          </td>
          <td>
            <a class="faq-main-item" colspan="2">
              thought you'd never ask
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Picker;
