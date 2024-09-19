import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  name: yup.string().required("სავალდებულო").min(2, " მინიმუმ 2 სიმბოლო"),
  lastName: yup.string().required("სავალდებულო").min(2, " მინიმუმ 2 სიმბოლო"),
  email: yup
    .string()
    .required("სავალდებულო")
    .matches(
      /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
      "უნდა მთავრდებოდეს @redberry.ge-თ"
    ),
  phone: yup
    .string()
    .required("სავალდებულო")
    .matches(/^\d+$/, "ნუმერული სიმბოლოები")
    .matches(/^5\d{8}$/, "უნდა იყოს ფორმატის 5XXXXXXXX"),
  avatar: yup.string("it is not").required("Avatar is required"),
});
// .mixed()
// .required("Avatar is required")
// .test("fileSize", "File size is too large (maximum is 1MB)", (value) => {
//   if (!value || !value.length) return true; // Allow empty value
//   return value[0].size <= 1048576; // 1 MB in bytes
// }),
function NewAgent() {
  const [newAgent, setNewAgent] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (newAgent) => console.log(newAgent);

  const [fileA, setFileA] = useState(null);
  const [fileAUrl, setFileAUrl] = useState("");

  const handleFileA = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    const url = URL.createObjectURL(selectedFile);
    if (selectedFile) {
      setFileA(selectedFile);
    }
    if (url) {
      setFileAUrl(url);
    }
    console.log(url);
  };
  const handleClearFileA = () => {
    setFileA(null);
  };

  return (
    <div className="fixed inset-0 bg-agent backdrop-blur-[10px] flex items-center justify-center z-40">
      <main className="w-[1009px] px-[105px] py-[87px] rounded-[10px] shadow-agent bg-[#fff] flex flex-col items-center ">
        <h2 className="text-[32px] text-[#021526] font-[600] leading-[38px]">
          აგენტის დამატება
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[91px]"
        >
          <section className="flex flex-col gap-[28px] mt-[61px]">
            <section className="flex flex-col gap-[28px]">
              <div className="flex justify-between gap-[28px]">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm text-[#021526] font-[600] leading-[17px]"
                  >
                    სახელი *
                  </label>
                  <input
                    {...register("name")}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    id="name"
                    className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                  />
                  <div className="flex gap-[7px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    <p className="text-sm text-[#021526] font-[500] leading-[17px]">
                      {!errors.name
                        ? "მინიმუმ ორი სიმბოლო"
                        : `${errors.name.message}`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="lastName"
                    className="text-sm text-[#021526] font-[600] leading-[17px]"
                  >
                    გვარი
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    id="lastName"
                    className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                  />
                  <div className="flex gap-[7px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    <p className="text-sm text-[#021526] font-[500] leading-[17px]">
                      {!errors.lastName
                        ? "მინიმუმ ორი სიმბოლო"
                        : `${errors.lastName.message}`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#021526] font-[600] leading-[17px]"
                  >
                    ელ-ფოსტა*
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                  />
                  <div className="flex gap-[7px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    <p className="text-sm text-[#021526] font-[500] leading-[17px]">
                      {!errors.email
                        ? "გამოიყენეთ @redberry.ge ფოსტა"
                        : `${errors.email.message}`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="number"
                    className="text-sm text-[#021526] font-[600] leading-[17px]"
                  >
                    ტელეფონის ნომერი
                  </label>
                  <input
                    {...register("phone")}
                    type="text"
                    id="number"
                    className="outline-none w-[384px] h-[42px] p-[10px] rounded-[6px] border border-solid border-[#808a93]"
                  />
                  <div className="flex gap-[7px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    <p className="text-sm text-[#021526] font-[500] leading-[17px]">
                      {!errors.phone
                        ? "მხოლოდ რიცხვები"
                        : `${errors.phone.message}`}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="flex flex-col gap-[10px] mt-5">
                <span className="text-sm text-[#021526] font-[600] leading-[17px]">
                  ატვირთეთ ფოტო *
                </span>
                <div className="w-full h-[120px] flex justify-center items-center rounded-[6px] border border-dashed border-[#2d3648]">
                  {fileA ? (
                    <div className="relative">
                      <img
                        src={`${fileAUrl}`}
                        alt=""
                        className="w-[92px] h-[82px] rounded-[4px] z-0"
                      />
                      <div className="absolute right-[-8px] bottom-[-6px] z-40 bg-[#fff] w-6 h-6 flex items-center justify-center rounded-full border border-solid border-[#021526]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-trash3 cursor-pointer"
                          viewBox="0 0 16 16"
                          onClick={handleClearFileA}
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <label
                      htmlFor="image-uploadA"
                      className="w-full h-full flex justify-center items-center"
                    >
                      <img
                        src="/plus.png"
                        alt="add"
                        className="w-5 h-5 mt-[-10px]"
                      />
                    </label>
                  )}
                  <p className="text-sm text-[#021526] font-[500] leading-[17px]">
                    მხოლოდ რიცხვები
                    {errors.avatar && (
                      <span role="alert">{errors.avatar.message}</span>
                    )}
                  </p>
                </div>
                <input
                  {...register("avatar")}
                  id="image-uploadA"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileA}
                />
              </div>
            </section>
          </section>
          <div className="flex items-center gap-[15px] self-end">
            {" "}
            <button className="w-[103px] h-[47px] rounded-[10px] flex items-center justify-center border border-solid border-[#f93b1d] text-base text-[#f93b1d] font-[600] leading-[19px]">
              გაუქმება
            </button>
            <button
              type="submit"
              className="w-[161px] h-[47px] rounded-[10px] flex items-center justify-center bg-[#f93b1d] text-base text-[#fff] font-[600] leading-[19px]"
            >
              დაამატე აგენტი
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default NewAgent;
