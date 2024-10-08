import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import NewAgent from "../components/NewAgent";

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
        setAgents(responseA.data);
        console.log(responseA.data);
        setCities(responseC.data);
        console.log(responseC.data);
        setRegions(responseR.data);
        console.log(responseR.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, token]);

  const [listings, setListings] = useState({
    region: false,
    cities: false,
    agent: false,
  });

  const openList = (e) => {
    const id = e.target.childNodes[0].id;
    setListings({
      ...{
        region: false,
        cities: false,
        agent: false,
      },
      [id]: !listings[id],
    });
  };
  console.log(listings);

  const [newList, setNewList] = useState({
    price: 0,
    zip_code: 0,
    description: "",
    area: 0,
    city_id: 0,
    address: "",
    agent_id: 0,
    bedrooms: 0,
    is_rental: 0,
    image: "",
    created_at: "",
    id: 0,
  });

  const [regionId, setRegionId] = useState(0);
  const handleRegion = (e) => {
    const id = e.target.childNodes[0].id;
    setRegionId(id);
    setListings({
      region: false,
      cities: false,
      agent: false,
    });
  };
  const handleCities = (e) => {
    const id = e.target.childNodes[0].id;
    setNewList({
      ...newList,
      city_id: id,
    });
    setListings({
      region: false,
      cities: false,
      agent: false,
    });
  };
  const handleAgents = (e) => {
    const id = e.target.childNodes[0].id;
    setNewList({
      ...newList,
      agent_id_id: id,
    });
    setListings({
      region: false,
      cities: false,
      agent: false,
    });
  };

  // open add new agent section
  const [newAgent, setNewAgent] = useState(false);
  const addNewAgent = () => {
    setNewAgent(true);
    setListings({
      region: false,
      cities: false,
      agent: false,
    });
  };
  console.log(useCities.filter((e) => e.region_id == regionId));
  console.log(useRegions);

  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    const url = URL.createObjectURL(selectedFile);
    if (selectedFile) {
      setFile(selectedFile);
    }
    // const formData = new FormData();
    // formData.append("image", file);
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }
    console.log(url);
  };
  console.log(file);
  //   http://localhost:5173/f0d4d068-6000-41ca-8b26-73fa88f4eee1
  //   const handleUpload = async () => {
  //     if (!imageFile) return; // Ensure a file is selected

  //     const formData = new FormData();
  //     formData.append('image', imageFile);
  //   }

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <main className="flex flex-col items-center gap-[61px] mt-[62px] ">
      <h1 className="text-[32px] text-[#021526] font-[600] leading-[39px]">
        ლისტინგის დამატება
      </h1>
      <form className="w-[790px] flex flex-col gap-20 mb-20 z-0">
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
                  <img src="/check-lg.svg" alt="" />
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
                  <img src="/check-lg.svg" alt="" />
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
                <div className="relative">
                  <div
                    onClick={openList}
                    className={`${
                      listings.region ? "rounded-t-[6px]" : "rounded-[6px] "
                    } w-[384px] h-[42px] p-[10px] border border-solid border-[#808a93] flex items-center justify-between relative`}
                  >
                    <span
                      id="region"
                      className="text-sm text-[#021526] font-normal leading-[17px]"
                    >
                      {regionId == 0 ? "კახეთი" : useRegions[regionId - 1].name}
                    </span>
                    <img src="/icon-arrow-down.svg" alt="down" />
                  </div>
                  <section
                    className={`${
                      listings.region ? "flex flex-col" : "hidden"
                    } absolute max-h-[150px] overflow-scroll bg-[#fff] z-50 left-0 bottom-0 transform translate-y-full`}
                  >
                    {useRegions.map((e) => {
                      return (
                        <div
                          key={e.id}
                          onClick={handleRegion}
                          className={`${
                            e.id == 12 ? "rounded-b-[6px]" : ""
                          }w-[384px] h-[42px] p-[10px] border-b border-l border-r border-solid border-[#808a93]`}
                        >
                          <span id={e.id}>{e.name}</span>
                        </div>
                      );
                    })}
                  </section>
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-sm text-[#021526] font-[600] leading-[17px]">
                    ქალაქი
                  </span>
                  <div
                    onClick={openList}
                    className={`${
                      listings.cities ? "rounded-t-[6px]" : "rounded-[6px] "
                    } w-[384px] h-[42px] p-[10px] border border-solid border-[#808a93] flex items-center justify-between relative`}
                  >
                    <span
                      id="cities"
                      className="text-sm text-[#021526] font-normal leading-[17px]"
                    >
                      {newList.city_id == 0
                        ? "თელავი"
                        : useCities[newList.city_id - 1].name}
                    </span>
                    <img src="/icon-arrow-down.svg" alt="down" />
                  </div>
                </div>
                <section
                  className={`${
                    listings.cities ? "flex flex-col" : "hidden"
                  } absolute max-h-[150px] overflow-scroll bg-[#fff] z-50 left-0 bottom-0 transform translate-y-full`}
                >
                  {regionId == 0
                    ? useCities.map((e) => {
                        return (
                          <div
                            key={e.id}
                            onClick={handleCities}
                            className={`${
                              e.id == useCities.length ? "rounded-b-[6px] " : ""
                            } w-[384px] h-[42px] p-[10px] border-b border-l border-r border-solid border-[#808a93]`}
                          >
                            <span id={e.id}>{e.name}</span>
                          </div>
                        );
                      })
                    : useCities
                        .filter((e) => e.region_id == regionId)
                        .map((e) => {
                          return (
                            <div
                              key={e.id}
                              onClick={handleCities}
                              className={`${
                                e.id == useCities.length
                                  ? "rounded-b-[6px]"
                                  : ""
                              } w-[384px] h-[42px] p-[10px] border-b border-l border-r border-solid border-[#808a93]`}
                            >
                              <span id={e.id}>{e.name}</span>
                            </div>
                          );
                        })}
                </section>
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
                  <img src="/check-lg.svg" alt="" />
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
                  <img src="/check-lg.svg" alt="" />
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
                <img src="/check-lg.svg" alt="" />
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
              <img src="/check-lg.svg" alt="" />
              <span className="text-sm text-[#021526] font-[500] leading-[17px]">
                მინიმუმ ხუთი სიტყვა
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-5">
            <span className="text-sm text-[#021526] font-[600] leading-[17px]">
              ატვირთეთ ფოტო *
            </span>
            <div className="w-full h-[120px] flex justify-center items-center rounded-[6px] border border-dashed border-[#2d3648]">
              {file ? (
                <div className="relative">
                  <img
                    src=""
                    alt=""
                    className="w-[92px] h-[82px] rounded-[4px] z-0"
                  />
                  <div className="absolute right-[-8px] bottom-[-6px] z-40 bg-[#fff] w-6 h-6 flex items-center justify-center rounded-full border border-solid border-[#021526]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="image-upload"
                  className="w-full h-full flex justify-center items-center"
                >
                  <img
                    src="/plus.png"
                    alt="add"
                    className="w-5 h-5 mt-[-10px]"
                  />
                </label>
              )}
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </div>
        </section>
        <section className="relative">
          <div className="flex flex-col gap-4">
            <h3 className="text-base text-[#1a1a1f] font-[600] leading-[20px]">
              აგენტი
            </h3>

            <div className="flex flex-col gap-[5px]">
              <span className="text-sm text-[#021526] font-[600] leading-[17px]">
                აირჩიე
              </span>
              <div
                onClick={openList}
                className={`${
                  useAgents[0]
                    ? listings.agent
                      ? "rounded-t-[6px]"
                      : "rounded-[6px] "
                    : "hidden"
                } w-[384px] h-[42px] p-[10px] border border-solid border-[#808a93] flex items-center justify-between relative`}
              >
                <span
                  id="agent"
                  className="text-sm text-[#021526] font-normal leading-[17px]"
                >
                  {useAgents[0] ? useAgents[newList.agent_id].name : ""}{" "}
                  {useAgents[0] ? useAgents[newList.agent_id].surname : ""}
                </span>
                <img src="/icon-arrow-down.svg" alt="down" />
              </div>
            </div>
          </div>
          <section
            className={`${
              listings.agent
                ? "flex flex-col max-h-[150px]  overflow-scroll"
                : ""
            } absolute  z-50 left-0 bottom-0 transform translate-y-full`}
          >
            {useAgents.map((e) => {
              return (
                <div
                  key={e.id}
                  onClick={handleAgents}
                  className={`${
                    e.id == newList.agent_id ? "hidden" : ""
                  } w-[384px] h-[42px] p-[10px] border-b border-l border-r border-solid border-[#808a93]`}
                >
                  <span id={e.id}>
                    {e.name} {e.surname}
                  </span>
                </div>
              );
            })}
            <div
              onClick={addNewAgent}
              className={`${
                useAgents[0]
                  ? "rounded-b-[6px]"
                  : "border-t rounded-[6px] mt-[5px]"
              } w-[384px] h-[42px] p-[10px] flex items-center gap-2 border-l border-r border-b border-solid border-[#808a93]`}
            >
              <img src="/plus.png" alt="plus" className="w-5 h-5" />
              <span className="text-sm text-[#021526] font-[600] leading-[17px]">
                დაამატე აგენტი
              </span>
            </div>
          </section>
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
      {newAgent ? <NewAgent /> : ""}
    </main>
  );
}

export default Listing;
