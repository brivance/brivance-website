import { ArrowOutward } from "@public/icons/ArrowOutward";
import { CheckBox } from "@public/icons/CheckBox";
import Image from "next/image";
import { useState } from "react";

export default function MaternalHealthComplications() {

  const [activeTab, setActiveTab] = useState("Goals");

  const tabs = ["Goals", "Outcomes", "Future Work"];

  const renderContent = () => {
    switch (activeTab) {
      case "Goals":
        return (
          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-3 items-center">
              <CheckBox className="h-7 w-7 text-green" />
              <div>
                To predict whether or not a patient walking in to the ER is there for maternal complications.
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <CheckBox className="h-7 w-7 text-green" />
              <div>
                To determine the most important features that contribute to maternal complications.
              </div>
            </div>
          </div>
        );
      case "Outcomes":
        return (
          <div className="flex flex-col gap-8 test-center items-center">
            <div>
              Below displays the accuracy metrics we found after training iterations of each different model:
            </div>
            <Image src="/projects/maternal-health-pic-4.jpg" width={1500} height={175} alt="Model statistics" />
            <div>
              These were the most important features we found for our models in predicting maternal health complications:
            </div>
            <Image src="/projects/maternal-health-pic-3.jpg" width={500} height={175} alt="Model statistics" />
            <div>
              Below are confusion matrices; the recall accuracy is much higher than the precision.
              This means that the models were very good at telling when someone had a pregnancy complication (true positive),
              but had a hard time with identifying true negatives.
            </div>
            <div className="flex gap-2">
              <Image src="/projects/maternal-health-pic-1.png" width={500} height={175} alt="Model statistics" />
              <Image src="/projects/maternal-health-pic-2.png" width={500} height={175} alt="Model statistics" />
            </div>
          </div>
        );
      case "Future Work":
        return (
          <div className="flex flex-col items-start gap-3 ml-[5%]">
            <div className="flex gap-3 items-center">
              <div className="bg-blue py-1 px-3 text-white">
                1.
              </div>
              <div>
                Other models could be tested to bring better accuracy.
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-blue py-1 px-2.5 text-white">
                2.
              </div>
              <div>
                Reducing false negatives would greatly increase overall accuracy and usefulness.
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center w-3xl mx-auto">
      <div className="mx-auto text-dark-blue font-medium text-5xl pb-7">
        Maternal Health Complications
      </div>
      <div className="text-lg mx-auto flex text-center mb-[4%]">
        This project consists of models trained on ER patients records and demographics.
        It predicts whether or not a patient walking in to the ER is there for maternal complications.
        I worked on the Logistic Regression and KNN models.
      </div>
      <div className="ml-[22%] px-[1%] py-[0.5%] flex justify-start w-1/2 bg-secondary-pink rounded-sm border border-secondary-pink">
        Tools: Python, Pandas, Numpy, Sklearn, Matplotlib, Seaborn
      </div>
      <a
        href="https://github.com/brivance/maternal-health-complications"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end items-center hover:bg-blue-hover -mt-[2.25%] ml-auto mr-[22%] mb-[5%] gap-2 text-center text-xl px-[1%] py-[0.25%] bg-blue text-white border-blue rounded-sm">
        <div>Github Repository</div>
        <ArrowOutward className="h-4 w-4" />
      </a>
      <div>
        <div className="flex justify-center gap-4 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 text-lg mb-[4%] py-2 border-b-2 font-medium transition-all duration-500 ${activeTab === tab
                ? "bg-light-blue border border-light-blue rounded-md text-blue"
                : "border-transparent hover:text-blue hover:font-extrabold cursor-pointer"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="min-h-80 px-8 mt-4 text-center mb-[20%]">{renderContent()}</div>
      </div>
    </div>
  );
}