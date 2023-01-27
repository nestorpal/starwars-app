import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  chosenList = 'all';

  constructor() { }

  ngOnInit(): void { }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice(); // returns a copy to avoid external modification
    }

    return this.characters.filter(x => {
      return x.side === this.chosenList;
    });

  }

  onChoose(side: string) {
    this.chosenList = side;
  }

  onSideChosen(characterInfo: any) {
    const pos = this.characters.findIndex(x => {
      return x.name === characterInfo.name;
    });
    this.characters[pos].side = characterInfo.side;
  }
}
