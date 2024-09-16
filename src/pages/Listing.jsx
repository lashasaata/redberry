import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Listing() {
  const [useRegions, setRegions] = useState([]);
  const [useCities, setCities] = useState([]);
  const [useAgents, setAgents] = useState([]);
  const apiUrl = "https://api.real-estate-manager.redberryinternship.ge/api";
  const token = "9d025c29-ad91-40fa-bad6-c361841343ce"; // Replace with your actual token

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl =
          "https://api.real-estate-manager.redberryinternship.ge/api/regions";
        const responseR = await axios.get(apiUrl, {
          //   headers: {
          //     Authorization: `Bearer ${token}`, // Include the token in the headers
          //   },
        });
        apiUrl =
          "https://api.real-estate-manager.redberryinternship.ge/api/cities";
        const responseC = await axios.get(apiUrl, {
          //   headers: {
          //     Authorization: `Bearer ${token}`, // Include the token in the headers
          //   },
        });
        apiUrl =
          "https://api.real-estate-manager.redberryinternship.ge/api/agents";
        const responseA = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        setRegions(responseA.data);
        console.log(responseA.data);
        setRegions(responseC.data);
        console.log(responseC.data);
        setRegions(responseR.data);
        console.log(responseR.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, token]);

  return (
    <main className="flex flex-col items-center gap-[61px] mt-[62px] ">
      <h1 className="text-[32px] text-[#021526] font-[600] leading-[39px]">
        ლისტინგის დამატება
      </h1>
      <form className="w-[790px] flex flex-col gap-20 mb-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-base text-[#1a1a1f] font-[600] leading-[20px]">
            გარიგების ტიპი
          </h3>
          <div className="flex flex gap-20">
            <div className="flex items-center gap-[7px]">
              <div className="w-[17px] h-[17px] flex items-center justify-center rounded-full border border-solid border-[#021526]">
                <input
                  type="checkbox"
                  id="forSale"
                  className="appearance-none rounded-full checked:bg-[#021526] checked:w-[7px] checked:h-[7px]"
                />
              </div>
              <label
                htmlFor="forSale"
                className="text-sm text-[#021526] leading-[17px]"
              >
                იყიდება
              </label>
            </div>
            <div className="flex items-center gap-[7px]">
              <div className="w-[17px] h-[17px] flex items-center justify-center rounded-full border border-solid border-[#021526]">
                <input
                  type="checkbox"
                  id="forRent"
                  className="appearance-none rounded-full checked:bg-[#021526] checked:w-[7px] checked:h-[7px]"
                />
              </div>
              <label
                htmlFor="forRent"
                className="text-sm text-[#021526] leading-[17px]"
              >
                ქირავდება
              </label>
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-[22px]">
          <h3 className="text-base text-[#1a1a1f] font-[600] leading-[20px]">
            მდებარეობა
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="adress"
                  className="text-sm text-[#021526] font-[600] leading-[17px]"
                >
                  მისამართი *
                </label>
                <input
                  type="text"
                  id="adress"
                  className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                />
                <div>
                  <img src="" alt="" />
                  <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                    მინიმუმ ორი სიმბოლო
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="postalIndex"
                  className="text-sm text-[#021526] font-[600] leading-[17px]"
                >
                  საფოსტო ინდექსი *
                </label>
                <input
                  type="text"
                  id="postalIndex"
                  className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                />
                <div>
                  <img src="" alt="" />
                  <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                    მხოლოდ რიცხვები
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[5px]">
                <span className="text-sm text-[#021526] font-[600] leading-[17px]">
                  რეგიონი
                </span>
                <div className="w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93] flex items-center justify-between relative">
                  <span className="text-sm text-[#021526] font-normal leading-[17px]">
                    კახეთი
                  </span>
                  <img src="/icon-arrow-down.svg" alt="down" />
                  <section className="absolute max-h-[150px] overflow-scroll z-50 left-0 bottom-0 transform translate-y-full">
                    {useRegions.map((e) => {
                      return (
                        <div
                          key={e.id}
                          className={`${
                            e.id == 12 ? "rounded-b-[6px] border-b" : ""
                          }w-[384px] h-[42px] p-[10px] border-t border-l border-r border-solid border-[#808a93]`}
                        >
                          <span>{e.name}</span>
                        </div>
                      );
                    })}
                  </section>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-sm text-[#021526] font-[600] leading-[17px]">
                  ქალაქი
                </span>
                <div className="w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93] flex items-center justify-between relative">
                  <span className="text-sm text-[#021526] font-normal leading-[17px]">
                    თელავი
                  </span>
                  <img src="/icon-arrow-down.svg" alt="down" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="z-10">
          <h3 className="text-base z-0 text-[#1a1a1f] font-[600] leading-[20px]">
            ბინის დეტალები
          </h3>
          <div className="flex flex-col gap-[18px] mt-[22px]">
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="price"
                  className="text-sm text-[#021526] font-[600] leading-[17px]"
                >
                  ფასი
                </label>
                <input
                  type="text"
                  id="price"
                  className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                />
                <div>
                  <img src="" alt="" />
                  <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                    მხოლოდ რიცხვები
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="area"
                  className="text-sm text-[#021526] font-[600] leading-[17px]"
                >
                  ფართობი
                </label>
                <input
                  type="text"
                  id="area"
                  className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                />
                <div>
                  <img src="" alt="" />
                  <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                    მხოლოდ რიცხვები
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="roomsAmount"
                className="text-sm text-[#021526] font-[600] leading-[17px]"
              >
                საძინებლების რაოდენობა*
              </label>
              <input
                type="text"
                id="roomsAmount"
                className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
              />
              <div>
                <img src="" alt="" />
                <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                  მხოლოდ რიცხვები
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <label
              htmlFor="description"
              className="text-sm text-[#021526] font-[600] leading-[17px]"
            >
              აღწერა *
            </label>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="10"
              className="outline-none resize-none w-[788px] h-[135px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
            />
            <div>
              <img src="" alt="" />
              <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                მინიმუმ ხუთი სიტყვა
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-5">
            <span className="text-sm text-[#021526] font-[600] leading-[17px]">
              ატვირთეთ ფოტო *
            </span>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded-md p-2 text-lg shadow-md focus:border-blue-500 focus:outline-none"
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-base text-[#1a1a1f] font-[600] leading-[20px]">
            აგენტი
          </h3>
          <div className="flex flex-col gap-[5px]">
            <span className="text-sm text-[#021526] font-[600] leading-[17px]">
              აირჩიე
            </span>
            <div className="w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93] flex items-center justify-between">
              <input type="text" className="outline-none w-[340px]" />
              <img src="/icon-arrow-down.svg" alt="down" />
            </div>
          </div>
        </section>
        <div className="flex items-center gap-[15px] self-end mt-[10px]">
          <button className="w-[103px] h-[47px] rounded-[10px] flex items-center justify-center border border-solid border-[#f93b1d] text-base text-[#f93b1d] font-[600] leading-[19px]">
            გაუქმება
          </button>
          <button className="w-[187px] h-[47px] rounded-[10px] flex items-center justify-center bg-[#f93b1d] text-base text-[#fff] font-[600] leading-[19px]">
            დაამატე ლისტინგი
          </button>
        </div>
      </form>
    </main>
  );
}

export default Listing;
