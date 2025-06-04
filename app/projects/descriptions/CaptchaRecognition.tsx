import { ArrowOutward } from "@public/icons/ArrowOutward";
import Image from "next/image";
import { useState } from "react";

export default function CaptchaRecognition() {

  const [activeTab, setActiveTab] = useState("Image Classifier");

  const tabs = ["Image Classifier", "Text Classifier"];

  const renderContent = () => {
    switch (activeTab) {
      case "Image Classifier":
        return (
          <div className="flex flex-col gap-8 items-center">
            <div>
              An image dataset was used to create a simulated CAPTCHA dataset.
              ResNet50 and ResNet120 models were used for classifying the images without a noticible difference in results between the models.
              Green marks where they accurately predicted.
            </div>
            <div className="flex gap-2">
              <Image src="/projects/image-classifier-1.png" width={350} height={175} alt="Image classifier captcha work" />
              <Image src="/projects/image-classifier-2.png" width={350} height={175} alt="Image classifier captcha work" />
            </div>
            <div>
              Accuracy was calculated by each image classification accuracy, and the model achieved over 95% validation accuracy on the dataset.
            </div>
            <div className="flex gap-2">
              <Image src="/projects/image-loss.png" width={350} height={175} alt="Image classifier loss" />
              <Image src="/projects/image-accuracy.png" width={350} height={175} alt="Image classifier accuracy" />
            </div>
          </div>
        );
      case "Text Classifier":
        return (
          <div className="flex flex-col gap-8 items-center">
            <div>
              An actual CAPTCHA text dataset was used to train a ResNet50.
              This dataset was labeled with each character in the image, so the model was trained to predict
              each character on any given image.
            </div>
            <div className="flex gap-2">
              <Image src="/projects/text-classifier-1.png" width={350} height={175} alt="Image classifier captcha work" />
              <Image src="/projects/text-classifier-2.png" width={350} height={175} alt="Image classifier captcha work" />
            </div>
            <div>
              Accuracy was measured with each letter accurately guessed / each total letter.
              The ResNet50 achieved over 92% accuracy.
            </div>
            <div className="flex gap-2">
              <Image src="/projects/image-loss.png" width={350} height={175} alt="Image classifier loss" />
              <Image src="/projects/image-accuracy.png" width={350} height={175} alt="Image classifier accuracy" />
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
        CAPTCHA Recognition
      </div>
      <div className="text-lg mx-auto flex text-center mb-[4%]">
        A ResNet50 trained on classifying CAPTCHA images and texts.
      </div>
      <div className="ml-[15%] px-[1%] py-[0.5%] flex justify-start w-2/3 bg-secondary-pink rounded-sm border border-secondary-pink">
        Tools: PyTorch, Matplotlib, NumPy, CUDA
      </div>
      <a
        href="https://github.com/brivance/captcha_recognition"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end items-center hover:bg-blue-hover -mt-[2.25%] ml-auto mr-[15%] mb-[5%] gap-2 text-center text-xl px-[1%] py-[0.25%] bg-blue text-white border-blue rounded-sm">
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
        <div className="min-h-[300px] px-8 mt-4 text-center mb-[20%]">{renderContent()}</div>
      </div>
    </div>
  );
}