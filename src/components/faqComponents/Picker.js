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
            <span clspanss="faq-main-item">the org</span>
          </td>
          <td>
            <span class="faq-main-item">interview</span>
          </td>
          <td>
            <div class="faq-main-item">
              <img src={Beer} class="faq-icons"></img>
            </div>
          </td>
        </tr>

        <tr class="faq-main-group">
          <td>
            <span class="faq-main-item">application</span>
          </td>
          <td>
            <div class="faq-main-item">
              <img src={Burger} class="faq-icons" alt="icon"></img>
            </div>
          </td>
          <td>
            <span class="faq-main-item" alt="icon">results</span>
          </td>
        </tr>

        <tr class="faq-main-group">
          <td>
            <div class="faq-main-item">
              <img src={Duck} class="faq-icons" alt="icon"></img>
            </div>
          </td>
          <td>
            <span class="faq-main-item" colspan="2">
              thought you'd never ask
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Picker;
