import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Landing() {
  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate(`/AddListing`);
  };

  const [useRegions, setRegions] = useState([]);
  const apiUrl =
    "https://api.real-estate-manager.redberryinternship.ge/api/regions";
  const token = "9d025c29-ad91-40fa-bad6-c361841343ce"; // Replace with your actual token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        setRegions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, token]);
  return (
    <main className="w-full min-h-screen">
      <div className="w-full px-[162px]">
        <nav className="flex items-center justify-between mt-[77px]">
          <section className="w-[785px] flex items-center justify-between p-[6px] rounded-[10px] border border-solid border-[#dbdbdb]">
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px] relative">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                რეგიონი
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
              <section className="hidden w-[731px] absolute left-[-6px] bottom-[-16px] transform translate-y-full p-6 flex flex-col gap-6 rounded-[10px] border border-solid border-[#dbdbdb] shadow-region">
                <h1 className="text-base text-[##021526] font-[600] leading-[19px]">
                  რეგიონის მიხედვით
                </h1>
                <div className="max-h-[140px] flex flex-col grid grid-cols-3 gap-y-[17.5px] gap-x-[50px]">
                  {useRegions.map((e) => {
                    return (
                      <div key={e.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={e.name}
                          className="w-5 h-5 rounded-[2px] border border-solid border-[#dbdbdb] checked:bg-[#45a849]"
                        />
                        <label
                          htmlFor={e.name}
                          className="text-sm text-[#021526] font-normal leading-[17px]"
                        >
                          {e.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <button className="w-[77px] h-[33px] flex items-center justify-center self-end mt-2 text-sm text-[#fff] font-[600] tracking-normal rounded-[8px] bg-[#f93b1d]">
                  არჩევა
                </button>
              </section>
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px] relative">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                საფასო კატეგორია
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
              <section className="hidden w-[382px] absolute left-[-2px] bottom-[-16px] transform translate-y-full flex flex-col gap-6 p-6 rounded-[10px] border border-solid border-[#dbdbdb] shadow-region ">
                <h1 className="text-base text-[#021526] font-[600] leading-[19px]">
                  ფასის მიხედვით
                </h1>
                <div className="flex items-center justify-between">
                  <div className="h-[42px] flex items-center justify-between gap-2 p-[10px] rounded-[6px] border border-solid border-[#808a93]">
                    <input
                      type="text"
                      placeholder="დან"
                      className="outline-none w-[120px] placeholder:text-sm placeholder:text-placeholder placeholder:leading-[17px] placeholder:font-[500]  text-sm text-[#021526] font-[500] leading-[17px]"
                    />
                    <span className="text-xs text-[#2d3648] font-normal leading-[14px] mt-[2px]">
                      ₾
                    </span>
                  </div>
                  <div className="h-[42px] flex items-center justify-between gap-2 p-[10px] rounded-[6px] border border-solid border-[#808a93]">
                    <input
                      type="text"
                      placeholder="მდე"
                      className="outline-none w-[120px] placeholder:text-sm placeholder:text-placeholder placeholder:leading-[17px] placeholder:font-[500] text-sm text-[#021526] font-[500] leading-[17px]"
                    />
                    <span className="text-xs text-[#2d3648] font-normal leading-[14px] mt-[2px]">
                      ₾
                    </span>
                  </div>
                </div>
                <div className="flex justify-between pr-[82px]">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-sm text-[#021526] font-[600] leading-[17px]">
                      მინ. ფასი
                    </h2>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        50,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        100,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        150,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        200,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        300,000 ₾
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-sm text-[#021526] font-[600] leading-[17px]">
                      მაქს. ფასი
                    </h2>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        50,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        100,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        150,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        200,000 ₾
                      </span>
                      <span className="text-sm text-[#2d3648] font-normal leading-[17px]">
                        300,000 ₾
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-[77px] h-[33px] flex items-center justify-center self-end mt-2 text-sm text-[#fff] font-[600] tracking-normal rounded-[8px] bg-[#f93b1d]">
                  არჩევა
                </button>
              </section>
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px] relative">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                ფართობი
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
              <section className="hidden w-[382px] absolute left-[-2px] bottom-[-16px] transform translate-y-full flex flex-col gap-6 p-6 rounded-[10px] border border-solid border-[#dbdbdb] shadow-region ">
                <h1 className="text-base text-[#021526] font-[600] leading-[19px]">
                  ფართობის მიხედვით
                </h1>
                <div className="flex items-center justify-between">
                  <div className="h-[42px] flex items-center justify-between gap-2 p-[10px] rounded-[6px] border border-solid border-[#808a93]">
                    <input
                      type="text"
                      placeholder="დან"
                      className="outline-none w-[110px] placeholder:text-sm placeholder:text-placeholder placeholder:leading-[17px] placeholder:font-[500]  text-sm text-[#021526] font-[500] leading-[17px]"
                    />
                    <span className="flex gap-[1px] text-base text-m font-normal leading-[14px] mt-[2px]">
                      მ
                      <span className="text-[10px] text-m font-normal leading-[12px]">
                        2
                      </span>
                    </span>
                  </div>
                  <div className="h-[42px] flex items-center justify-between gap-2 p-[10px] rounded-[6px] border border-solid border-[#808a93] mr-2">
                    <input
                      type="text"
                      placeholder="მდე"
                      className="outline-none w-[110px] placeholder:text-sm placeholder:text-placeholder placeholder:leading-[17px] placeholder:font-[500] text-sm text-[#021526] font-[500] leading-[17px]"
                    />
                    <span className="flex gap-[1px] text-base text-m font-normal leading-[14px] mt-[2px]">
                      მ
                      <span className="text-[10px] text-m font-normal leading-[12px]">
                        2
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex justify-between pr-[82px]">
                  <div className="flex flex-col gap-4">
                    <h2 className=" flex items-center gap-2 text-sm text-[#021526] font-[600] leading-[17px]">
                      მინ.{" "}
                      <span className="flex gap-[1px] text-sm text-[#021526] font-[600] leading-[17px]">
                        მ
                        <span className="text-[7px] text-[#021526] font-[500] leading-[8px]">
                          2
                        </span>
                      </span>
                    </h2>
                    <div className="flex flex-col gap-2">
                      {" "}
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        50{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        100{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        150{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        200{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        300{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className=" flex items-center gap-2 text-sm text-[#021526] font-[600] leading-[17px]">
                      მაქს.{" "}
                      <span className="flex gap-[1px] text-sm text-[#021526] font-[600] leading-[17px]">
                        მ
                        <span className="text-[7px] text-[#021526] font-[500] leading-[8px]">
                          2
                        </span>
                      </span>
                    </h2>
                    <div className="flex flex-col gap-2">
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        50{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        100{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        150{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        200{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                      <h2 className="flex items-center gap-1 text-sm text-[#2d3648] font-normal leading-[17px]">
                        300{" "}
                        <span className="flex gap-[1px] text-base text-m font-[600] leading-[19px]">
                          მ
                          <span className="text-[10px] text-m font-[500] leading-[12px]">
                            2
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <button className="w-[77px] h-[33px] flex items-center justify-center self-end mt-2 text-sm text-[#fff] font-[600] tracking-normal rounded-[8px] bg-[#f93b1d]">
                  არჩევა
                </button>
              </section>
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px] relative">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                საძინებლების რაოდენობა
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
              <section className="w-[282px] absolute left-[0px] bottom-[-16px] transform translate-y-full flex flex-col gap-6 p-6 rounded-[10px] border border-solid border-[#dbdbdb] shadow-region ">
                <h1 className="text-base text-[#021526] font-[600] leading-[19px]">
                  საძინებლების რაოდენობა
                </h1>
                <div className="w-[42px] h-[42px] p-[10px] pl-[15px] pt-[9px] rounded-[6px] border border-solid border-[#808a93]">
                  <input
                    type="text"
                    placeholder="2"
                    className="outline-none w-[21px] h-[17px]  placeholder:text-sm placeholder:text-placeholder placeholder:leading-[17px]"
                  />
                </div>
                <button className="w-[77px] h-[33px] flex items-center justify-center self-end mt-2 text-sm text-[#fff] font-[600] tracking-normal rounded-[8px] bg-[#f93b1d]">
                  არჩევა
                </button>
              </section>
            </div>
          </section>
          <section className="flex items-center gap-8">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-[2px] px-4 py-[12.5px] rounded-[10px] bg-[#f93b1d]"
            >
              <img src="/ic-round-plus.png" alt="plus" />
              <span className="w-[174px] text-base text-[#fff] font-[600] leading-[19px] ">
                ლისტინგის დამატება
              </span>
            </button>
            <button className="flex items-center gap-[2px] px-4 py-[12.5px] rounded-[10px] bg-[#fff] border border-solid border-[#f93b1d]">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 12.414h-4.584v4.584a.917.917 0 1 1-1.833 0v-4.584H5.5a.917.917 0 0 1 0-1.833h4.583V5.998a.917.917 0 0 1 1.833 0v4.583H16.5a.917.917 0 1 1 0 1.833z"
                  fill="#F93B1D"
                />
              </svg>
              <span className="w-[145px] text-base text-[#f93b1d] font-[600] leading-[19px]">
                აგენტის დამატება
              </span>
            </button>
          </section>
        </nav>
      </div>
    </main>
  );
}

export default Landing;
