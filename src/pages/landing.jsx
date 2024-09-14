function Landing() {
  return (
    <main className="w-full min-h-screen">
      <div className="px-[162px] py-[38px] border-b border-solid border-[#dbdbdb]">
        <img src="/redberry logo.png" alt="logo" />
      </div>
      <div className="w-full px-[162px]">
        <nav className="flex items-center justify-between">
          <section className="flex items-center gap-6 p-[6px] rounded-[10px] border border-solid border-[#dbdbdb]">
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600]">
                რეგიონი
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600]">
                საფასო კატეგორია
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600]">
                ფართობი
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
            </div>
            <div className="px-[14px] py-2 flex items-center gap-1 rounded-[6px]">
              <span className="text-base text-[#021526] font-[600]">
                საძინებლების რაოდენობა
              </span>
              <img
                className="mt-1"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
            </div>
          </section>
          <section>
            <button>
              <img src="/ic-round-plus.png" alt="plus" />
              <span>ლისტინგის დამატება</span>
            </button>
            <button>
              <img src="ic-round-plus.png" alt="" />
              <span>აგენტის დამატება</span>
            </button>
          </section>
        </nav>
      </div>
    </main>
  );
}

export default Landing;
