
import { Injectable } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

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
    this.logService.writeLog('Changed side of ' + characterInfo.name + ', new side: ' + characterInfo.side);
  }
}
