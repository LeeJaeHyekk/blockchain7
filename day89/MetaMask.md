# MetaMask 설정

1.  설정에서 네트워크로 들어간다.
2.  현재 http://localhost:8545로 되어있는 네트워크를 수정한다.
    - 네트워크 이름 : 자유
    - 새 RPC URL : 현재 잡으려는 이더리움 네트워크의 주소(port 포함)
    - 채인 ID : 체인 ID
    - 통화 기호 : 사용하는 코인 표기법

```sh
curl -X POST -H "content-type:application/json" --data '{"id":50,"jsonrpc":"2.0","method":"miner_setEtherbase","params":["0x519c1a08dd063ddc8d8b0c391c9bd8ecf9171c34"]}' http://localhost:8080
```

```sh
curl -X POST -H "content-type:application/json" --data '{"id":50,"jsonrpc":"2.0","method":"miner_stop","params":["0x519c1a08dd063ddc8d8b0c391c9bd8ecf9171c34"]}' http://localhost:8080
```

```sh
geth --datadir ~/realGeth --http --http.addr "0.0.0.0" --http.port 8080 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 console
```

- console: attach로 안가도되고 바로 가능
