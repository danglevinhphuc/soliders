const teamInit = {
  1: 0,
  2: 0,
  3: 0,
};
class FindTeam {
  constructor(listTeam = []) {
    this._listTeam = listTeam.map((o) => {
      return Number(o);
    });
    this._arrayResultTeam = [];
    this._countEach = 0;
  }
  checkPassTeam(team = teamInit) {
    // 1 < 2 < 3 or 3 > 2 >1
    return (team[1] < team[2] && team[2] < team[3]) ||
      (team[1] > team[2] && team[2] > team[3])
      ? true
      : false;
  }
  checkIsExits(team) {
    return this._arrayResultTeam.find((o) => {
      return o[1] == team[1] && o[2] == team[2] && o[3] == team[3];
    });
  }
  get() {
    return this._arrayResultTeam.length;
  }
  checkAndAddTeam({ first, second, array }) {
    if (!array.length) {
      return;
    }
    for (let i = 0; i <= array.length - 1; i++) {
      let dataTeam = { ...teamInit };
      dataTeam[1] = first;
      dataTeam[2] = second;
      dataTeam[3] = array[i];
      this._countEach++;
      if (!array[i]) return;
      if (!this.checkIsExits(dataTeam) && this.checkPassTeam(dataTeam)) {
        this._arrayResultTeam.push(dataTeam);
      }
    }
    return this.checkAndAddTeam({
      first,
      second: array[0],
      array: array.slice(1, this._listTeam.length),
    });
  }
  exc() {
    if (!this._listTeam.length) return;
    let position = 0;
    while (position < this._listTeam.length - 1) {
      if (!this._listTeam[position + 2]) {
        break;
      }
      this.checkAndAddTeam({
        first: this._listTeam[position],
        second: this._listTeam[position + 1],
        array: this._listTeam.slice(position + 2, this._listTeam.length),
      });
      position++;
    }
  }
}
