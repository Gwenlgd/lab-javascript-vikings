// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    // if (damage > 0) {
    //   return `${this.name} has received ${damage} points of damage`
    // } else if (damage === 0) {
    //   return `${this.name} has died in act of combat`
    // }

    if (damage === 0) {
      return `${this.name} has died in act of combat`
    } else if (damage > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
}

// War
class War {

}
