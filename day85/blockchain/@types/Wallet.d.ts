declare interface IWallet {
  address: string;
  publicKey: string;
  privateKey: string;
  balance: number;

  getAddress(): string;
  getPrivateKey(): string;
  getPublicKey(): string;
}
