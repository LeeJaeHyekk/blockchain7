const cards = [];
for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
// 카드 1~8까지 쌍으로  8페어 16장

for (let i = 0; i < 100; i++) {
  const firstCard = parseInt(Math.random() * cards.length);
  //   첫번째 카드 선택
  const secondCard = parseInt(Math.random() * cards.length);
  //   두번째 카드 선택
  const temp = cards[firstCard];
  //   temp =1 / cards[firstCard] = 1
  //   첫번쨰 카드를 임시 저장
  cards[firstCard] = cards[secondCard];
  //    cards[firstCard] = 4 / cards[secondCard] = 4
  //   첫번째 카드 자리에 두번째 카드를 저장
  cards[secondCard] = temp;
  //   cards[secondCard]= 1 / temp =1
  //   두번째 카드에 temp를 저장
}

cardArr = function (cards) {
  let card = [];
  for (i = 0; i < cards.length; i++) {
    card.push([i]);
  }
};
