import Combat from './combat_class.js';

export default class Environment {
  constructor(name,description,items,monsters,players,exits) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.monsters = monsters;
    this.players = players;
    this.exits = exits;
    this.combat = new Combat();
  }  
} 
