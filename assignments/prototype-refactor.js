/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

function pause(numberMillis) { 
    var now = new Date(); 
    var exitTime = now.getTime() + numberMillis; 
    while (true) { 
        now = new Date(); 
        if (now.getTime() > exitTime) 
            return; 
    } 
  } 
  
  
  console.log(`\n\n\n\n*** Prototype *** \n\n\n\n`)


class GameObject { 
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    } 
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

  
class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }

}

  
class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }

 }  

  
class Villain extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }
    cuts() {
        console.log(`\n`);
        if (swordsman.healthPoints < 1) {
          console.log(`The Swordsman is dead and can't fight!\nThe Swordsman lost the fight!`);
          throw new Error("Swordsman is dead");
        }
        let hit = Math.floor(Math.random() * 10);
        if (hit < 2) {
          return `The Swordsman missed everyone!`;
        } else if (hit < 6) {
          let deathPoints = Math.floor(Math.random() * 10);
          mage.healthPoints -= deathPoints;
          console.log(`The Swordsman hit the Mage and scored ${deathPoints} points of damage, the mage has ${mage.healthPoints} health points left`);
          if (mage.healthPoints < 1) {
            return `The mage is dead!`;
          }else {
            return `Now there coming after you!!!`
          };
        } else {
          let deathPoints = Math.floor(Math.random() * 10);
          archer.healthPoints -= deathPoints;
          console.log(`The Swordsman hit the Archer and scored ${deathPoints} points of damage, the archer has ${archer.healthPoints} health points left`);
          if (archer.healthPoints < 1) {
            return `The mage is dead!`;
          } else {
            return `Now there coming after you!!!`;
          };
        }
    }
 } 
 
   
class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }
    stabs() {
        console.log(`\n`);
        if (archer.healthPoints < 1) {
          return `The Archer is dead and can't fight!`;
        }
        let hit = Math.floor(Math.random() * 10);
        if (hit < 5) {
          return `The Archor missed the Swordsman!`;
        } else {
          let deathPoints = Math.floor(Math.random() * 10);
          swordsman.healthPoints -= deathPoints;
          console.log(`The Archor hit the Swordsman and scored ${deathPoints} points of damage, the Swordsman has ${swordsman.healthPoints} health points left`);
          if (swordsman.healthPoints < 1) {
            return `The Swordsman is dead!`;
          }else {
            return `You didn't get him yet!!!`
          };
        }
    }
    slashes() {
        console.log(`\n`);
        if (mage.healthPoints < 1) {
          return `The Mage is dead and can't fight!`;
        }
        let hit = Math.floor(Math.random() * 10);
        if (hit < 5) {
          return `The Mage missed the Swordsman!`;
        } else {
          let deathPoints = Math.floor(Math.random() * 10);
          swordsman.healthPoints -= deathPoints;
          console.log(`The Mage hit the Swordsman and scored ${deathPoints} points of damage, the Swordsman has ${swordsman.healthPoints} health points left`);
          if (swordsman.healthPoints < 1) {
            return `The Swordsman is dead!`;
          }else {
            return `You didn't get him yet!!!`
          };
        }
    }
} 
  
  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 70,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 70,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
//   console.log(swordsman.cuts());
//   pause(4000);
//   console.log(archer.stabs());
//   pause(4000);
//   console.log(mage.slashes());
  
  
