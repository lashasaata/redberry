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
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                საფასო კატეგორია
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
              <section>
                <h1>ფასის მიხედვით</h1>
                <div>
                  <div>
                    <input type="text" placeholder="დან" />
                    <span>₾</span>
                  </div>
                  <div>
                    <input type="text" placeholder="მდე" />
                    <span>₾</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2>მინ. ფასი</h2>
                    <div>
                      <span>50,000 ₾</span>
                      <span>100,000 ₾</span>
                      <span>150,000 ₾</span>
                      <span>200,000 ₾</span>
                      <span>300,000 ₾</span>
                    </div>
                  </div>
                  <div>
                    <h2>მაქს. ფასი</h2>
                    <div>
                      <span>50,000 ₾</span>
                      <span>100,000 ₾</span>
                      <span>150,000 ₾</span>
                      <span>200,000 ₾</span>
                      <span>300,000 ₾</span>
                    </div>
                  </div>
                </div>
                <button className="w-[77px] h-[33px] flex items-center justify-center self-end mt-2 text-sm text-[#fff] font-[600] tracking-normal rounded-[8px] bg-[#f93b1d]">
                  არჩევა
                </button>
              </section>
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                ფართობი
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                საძინებლების რაოდენობა
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
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
