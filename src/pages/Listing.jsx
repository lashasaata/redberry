import { useForm } from "react-hook-form";

function Listing() {
  return (
    <main>
      <h1>ლისტინგის დამატება</h1>
      <form>
        <div>
          <h3>გარიგების ტიპი</h3>
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
              <label htmlFor="adress">მისამართი *</label>
              <input type="text" id="adress" />
              <div>
                <img src="" alt="" />
                <span>მინიმუმ ორი სიმბოლო</span>
              </div>
            </div>
            <div>
              <label htmlFor="postalIndex">საფოსტო ინდექსი *</label>
              <input type="text" id="postalIndex" />
              <div>
                <img src="" alt="" />
                <span>მხოლოდ რიცხვები</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span>რეგიონი</span>
              <input type="text" />
            </div>
            <div>
              <span>ქალაქი</span>
              <input type="text" />
            </div>
          </div>
        </section>
        <section>
          <h3>ბინის დეტალები</h3>
          <div>
            <div>
              <label htmlFor="price">ფასი</label>
              <input type="text" id="price" />
              <div>
                <img src="" alt="" />
                <span>მხოლოდ რიცხვები</span>
              </div>
            </div>
            <div>
              <label htmlFor="area">ფართობი</label>
              <input type="text" id="area" />
              <div>
                <img src="" alt="" />
                <span>მხოლოდ რიცხვები</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="roomsAmount">საძინებლების რაოდენობა*</label>
            <input type="text" id="roomsAmount" />
            <div>
              <img src="" alt="" />
              <span>მხოლოდ რიცხვები</span>
            </div>
          </div>
          <div>
            <label htmlFor="description">აღწერა *</label>
            <textarea name="" id="description" cols="30" rows="10"></textarea>
            <div>
              <img src="" alt="" />
              <span>მინიმუმ ხუთი სიტყვა</span>
            </div>
          </div>
          <div>
            <span>ატვირთეთ ფოტო *</span>
            <input type="photo" />
          </div>
        </section>
        <section>
          <h3>აგენტი</h3>
          <div>
            <span>აირჩიე</span>
            <input type="text" />
          </div>
        </section>
        <div>
          <button>გაუქმება</button>
          <button>დაამატე ლისტინგი</button>
        </div>
      </form>
    </main>
  );
}

export default Listing;
