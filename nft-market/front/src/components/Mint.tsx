import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import Web3 from "web3";

export const Mint = ({ web3, account }: { web3: Web3; account: string }) => {
  const [NftName, setName] = useState<string>("");
  const [NftDescription, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [img, setImg] = useState<string | ArrayBuffer>("");

  const nameInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }, []);
  const descriptionInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    // e를 모르면 e.target.Value 를 알기 위해서
    setDescription(e.currentTarget.value);
  }, []);
  const fileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log("파일", e.currentTarget.files);
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.currentTarget.files[0]);
      reader.onload = () => {
        if (reader.result) {
          console.log(reader.result);
          setImg(reader.result);
        }
      };
    }
  }, []);

  const mint = useCallback(async () => {
    if (!NftName || !NftDescription || !file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", NftName);
    formData.append("description", NftDescription);
    formData.append("from", account);
    const result = (
      await axios.post("http://localhost:8080/api/mint", formData)
    ).data;
    console.log(result);
    web3.eth.sendTransaction(result);
  }, []);

  return (
    <div>
      <input type="text" onInput={nameInput} placeholder={"Nft Name"} />
      <input
        type="text"
        onInput={descriptionInput}
        placeholder={"Nft Description"}
      />
      <input type="file" onChange={fileChange} multiple />
      {/* 미리보기 작업 */}
      {img && (
        <div>
          <img src={img.toString()} />
        </div>
      )}
      <button onClick={mint}>Mint</button>
    </div>
  );
};