type DiceType = [number, number, number?]; // Tuple for dice representation

class Dice {
  phrase: string;
  dice: DiceType[]; // Array of dice tuples
  named_dice: string[];

  constructor(phrase: string) {
    this.phrase = phrase;
    this.dice = [];
    this.named_dice = [];
    this.parse();
  }

  private parse(): void {
    let dice = this.phrase;

    dice = dice.replace(/- */g, '+ -'); // Ensure spaces around operators are consistent
    dice = dice.replace(/D/g, 'd'); // Replace uppercase D with lowercase d
    const re = / *\+ */g;
    const items = dice.split(re);

    for (let i = 0; i < items.length; i++) {
      const match = items[i].match(/^[ \t]*(-)?(\d+)?(?:(d)(\d+))?[ \t]*$/);
      if (match) {
        const sign = match[1] ? -1 : 1;
        const num = parseInt(match[2] || '1', 10);
        const max = parseInt(match[4] || '0', 10);
        if (match[3]) {
          this.dice.push([sign, num, max]);
          this.named_dice.push(`${sign * num}d${max}`);
        } else {
          this.dice.push([sign, num]);
          this.named_dice.push(`${sign * num}`);
        }
      } else {
        throw new Error('Invalid dice format');
      }
    }
  }

  public roll(): { results: number[]; total: number } {
    let total = 0;
    const results: number[] = [];
    let die: DiceType;
    let j: number, d: number;

    for (const didx in this.dice) {
      die = this.dice[didx];
      if (die.length === 3) {
        for (j = 1; j <= die[1]; j++) {
          if (die[2] != undefined) {
            d = die[0] * Math.ceil(die[2] * Math.random());
            results.push(d);
            total += d;
          }
        }
      } else {
        d = die[0] * die[1];
        results.push(d);
        total += d;
      }
    }
    return { results: results, total: total };
  }
}

export default Dice;
