import { useForm } from "react-hook-form";

function Listing() {
  return (
    <main>
      <h1></h1>
      <form>
        <div>
          <h3></h3>
          <div>
            <div>
              <input type="checkbox" id="forSale" />
              <label htmlFor="forSale">იყიდება</label>
            </div>
            <div>
              <input type="checkbox" id="forRent" />
              <label htmlFor="forRent">ქირავდება</label>
            </div>
          </div>
        </div>
        <section>
          <h3>მდებარეობა</h3>
          <div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
              <span></span>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <span></span>
              <input type="text" />
            </div>
            <div>
              <span></span>
              <input type="text" />
            </div>
          </div>
        </section>
        <section>
          <h3></h3>
          <div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
              <span></span>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
              <span></span>
            </div>
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
            <span></span>
          </div>
          <div>
            <label htmlFor=""></label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span></span>
          </div>
          <div>
            <span></span>
            <input type="photo" />
          </div>
        </section>
        <section>
          <h3></h3>
          <div>
            <span></span>
            <input type="text" />
          </div>
        </section>
        <div>
          <button></button>
          <button></button>
        </div>
      </form>
    </main>
  );
}

export default Listing;
