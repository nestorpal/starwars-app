
import { Injectable } from '@angular/core';
import { LogService } from "./log.service";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  private logService: LogService;
  charactersChanged = new Subject<void>();
  httpService: HttpClient;

  constructor(logService: LogService, httpService: HttpClient) {
    this.logService = logService;
    this.httpService = httpService;
  }

  fetchCharacters() {
    this.httpService.get('https://swapi.dev/api/people/')
      .subscribe((response: any) => {
        const extractedCharacters = response.results;
        const characters = extractedCharacters.map((character: any) =>{
          return { name: character.name, side: '' }
        });

        this.characters = characters;
        this.charactersChanged.next();
      });
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
    this.charactersChanged.next(); // emits new event
    this.logService.writeLog('Changed side of ' + characterInfo.name + ', new side: ' + characterInfo.side);
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex(x => {
      return x.name === name;
    });
    if (pos !== -1) {
      return;
    }

    const newCharacter = { name, side };
    this.characters.push(newCharacter);
  }
}
