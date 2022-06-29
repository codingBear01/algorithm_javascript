/*# 문제12 : 게임 캐릭터 클래스 만들기

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.***/

//class 식 선언부
const Wizard = class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
};
//변수 x는 Wizard에 다음 입력값을 갖는다.
const x = new Wizard(545, 210, 10);
//변수 x의 health, mana, armor에 input된 값을 반환
console.log(x.health, x.mana, x.armor);
//변수 x의 attack()함수 실행
x.attack();

/*
output
545 210 10
파이어볼
*/
