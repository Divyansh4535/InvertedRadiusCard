import React from "react";
import InvertedCard from "./Component/Card/invertedCard";

const App = () => {
  const CardData = [
    {
      mainHeading: "Web Design",
      btnColor: "bg-red-500",
      btnText: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 7l-10 10" />
          <path d="M8 7l9 0l0 9" />
        </svg>
      ),
      mainImgSrc:
        "https://s3-alpha-sig.figma.com/img/508b/1c6f/3cdaf2a5a0ec054eea65e8d507512dda?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OhG-fiv5LtW0E-pkEE1oKmjAxz130~JhC~LkWF5xchT4UQr0dFU1MuAGDYHp2J6eA6dlJ229rreasaAPtPMyXC5H~XjuBEFxKSqkVr2fjz60ztioNYJs4McmU8Fn2V1ODpV2LwKdmAAI~ZCwSu6ldb0Tr2ANT6d3toArBcqk67QiN2gUqlK4WQYZvwvDs7Ahf5kwA5f7kLvmT0GDA~DpbKlp5DdsHC3ZrsUMzF72Fo~cpbaK0zi~dEWakARNeHdxOjnb6vjTvIldzM8tUWKrJlyLyrWGS~mChnMz~AEKQoRawuou5q2MVEQEa53ZCgbNWbyaAV5YqoubdcdzHS58xQ__",
    },
    {
      mainHeading: "Web Development",
      btnColor: "bg-blue-500",
      btnText: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 7l-10 10" />
          <path d="M8 7l9 0l0 9" />
        </svg>
      ),
      mainImgSrc:
        "https://s3-alpha-sig.figma.com/img/f0db/0da8/30b9a12bbbb22ae7a31b1faf3e8ce3f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GBDGaY0RmY4NZJ5Fk14uN94dRD0CYwIK0VrtlJerf0afq~HTf9i-I2-D1EloKBZAxqgVc1DFCk9dBUvseQriqTRLgTE5ZWud0C92-td1V63NK~~IUOl-wDzVf3OH361ked9SkXjRUbU7PzJZIIMsyUD5tLMUxLSraQy-LArlMkIVvbBe6k2uI0pg66kcYmnMCAmiMUI0zEFzveOmbXnMJTJt6AqiwzXaWqpNQEIS1QvVzLS0k0JPVTWpBIL2gqismG6n5jZ7nCotpc4ar~W~InbGBPu90Mfluj5pOk2fM3T08dZBzFEPADc6JZ-qNdIUxtq57lz4bIuWQ~pOt4xmig__",
    },
  ];

  return (
    <>
      <main
        className="flex items-center justify-center h-screen w-screen bg-white gap-10 flex-wrap"
        styles={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/57e2/2219/06d547fa2080873389d5cdb526033110?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Cc5GKzh4l5tCAWKHrdM995Zj6Mmr~9CKZC6e9cWmYRlfP2l5cvrQAN3a6Jg6aeLwP4d7PHPHGXIALu9RTTnzIezjbi6i03gqIhvQPQoesHkOaS6tBEap1ROtu2aemSJ2wWZyEuXui-x6MGAYDBptqa4zRokUc6j6zvu7p5nTCCaSq6KP1XyLB6LNh22~hn-W2s7y93ywrQBWXZhLPTJrcg~FPxToVDfdPS6-UitAfts788pnbRQm4wioUHdIqcWdZX5p8Z6KWa32f23FJfHTPpIRxjDSLB4FCofJ~KbGDEUj2nQ54XWe4Lb37mcR0Oy7IDA3nqMGcM1Io~8mnSI4dA__")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {CardData.map((data, index) => (
          <InvertedCard
            key={index}
            mainHeading={data.mainHeading}
            btnColor={data.btnColor}
            btnText={data.btnText}
            mainImgSrc={data.mainImgSrc}
          />
        ))}
      </main>
    </>
  );
};

export default App;
