function Landing() {
  return (
    <main className="w-full min-h-screen">
      <div className="px-[162px] py-[38px] border-b border-solid border-[#dbdbdb]">
        <img src="/redberry logo.png" alt="logo" />
      </div>
      <nav>
        <section>
          <div>
            <span>რეგიონი</span>
            <img src="/icon-arrow-down.svg" alt="arrow-down" />
          </div>
          <div>
            <span>საფასო კატეგორია</span>
            <img src="/icon-arrow-down.svg" alt="arrow-down" />
          </div>
          <div>
            <span>ფართობი</span>
            <img src="/icon-arrow-down.svg" alt="arrow-down" />
          </div>
          <div>
            <span>საძინებლების რაოდენობა</span>
            <img src="/icon-arrow-down.svg" alt="arrow-down" />
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
    </main>
  );
}

export default Landing;
