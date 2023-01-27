export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice(); // returns a copy to avoid external modification
    }

    return this.characters.filter(x => {
      return x.side === chosenList;
    });
  }

  onSideChosen(characterInfo: any) {
    const pos = this.characters.findIndex(x => {
      return x.name === characterInfo.name;
    });
    this.characters[pos].side = characterInfo.side;
  }
}
