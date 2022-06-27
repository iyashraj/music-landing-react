import React from "react";

const DownloadAds = () => {
  return (
    <div className="download">
      <div className="download_images flex">
        <img src={require("../img/App_Store.png")} alt="appStore" className="border-[2px] border-[#232a4e] rounded-[13px] h-12 w-40 mt-2 mr-8"/>
        <img src={require("../img/Google Play.png")} alt="googlePlay" className="border-[2px] border-[#232a4e] rounded-[13px] h-12 w-40 mt-2"/>
      </div>
    </div>
  );
};

export default DownloadAds;
