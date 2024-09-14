function Landing() {
  return (
    <main className="w-full min-h-screen">
      <div className="px-[162px] py-[38px] border-b border-solid border-[#dbdbdb]">
        <img src="/redberry logo.png" alt="logo" />
      </div>
      <div className="w-full px-[162px]">
        <nav className="flex items-center justify-between mt-[77px]">
          <section className="flex items-center gap-6 p-[6px] rounded-[10px] border border-solid border-[#dbdbdb]">
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600] leading-[19px]">
                რეგიონი
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
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
            <button className="flex items-center gap-[2px] px-4 py-[12.5px] rounded-[10px] bg-[#f93b1d]">
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
