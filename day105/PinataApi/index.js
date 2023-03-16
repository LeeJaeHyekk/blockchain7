const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const pinFileToIpfs = async () => {
  const formData = new FormData();
  const src = "imgs/why_always_me.jpg";

  const file = fs.createReadStream(src);
  formData.append("file", file);

  const metadata = JSON.stringify({
    name: "my character.png",
  });
  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "content-type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: "0d333de50cc1aa3dc833",
          pinata_secret_api_key:
            "6db01606657750a3cb819c9e4e3447ed0a9ef633d1d124298d032be436718c30",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// pinFileToIpfs()

const pinJson = async () => {
  const formData = {
    pinatametadata: {
      name: "NFT 1",
    },
    piantaOptions: {
      cidVersion: 0,
    },
    pinataContent: {
      name: "315 NFT",
      description: "피나타 써보는 중",
      image:
        "https://gateway.pinata,cloud/ipfs/QmWwFZZAXfWTcYyUorGjM4q7ixo6piMG8PcTM8NH4xDKsJ",
      attributes: [],
    },
  };

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      formData,
      {
        headers: {
          "content-type": "application/json",
          pinata_api_key: "0d333de50cc1aa3dc833 ",
          pinata_secret_api_key:
            "6db01606657750a3cb819c9e4e3447ed0a9ef633d1d124298d032be436718c30",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// pinFileToIpfs();
