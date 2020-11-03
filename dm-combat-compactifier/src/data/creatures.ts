type DiceSet = {
  n?: number; // Count of dice to roll. If omitted, assume 1
  d: number; // Maximum pips on dice, eg d4, d6, d8, d10, d12, d20.
}
type Damage = {
  damageType: string;
  damageBonus?: number; // If absent, assume zero
  rawRolls?: Array<number>; // TODO: Remove and make rolls required (or not required if it's possible to do fixed damage in some places)
  rolls?: Array<DiceSet>;
};
type AttackStats = {
  attackBonus?: number; // If absent, assume zero
  damages: Array<Damage>;
};
type Attack = {
  type: string;
  name: string;
  stats: AttackStats;
}
type HealComponent = {
  healingBonus?: number; // If absent, assume zero
  rolls: Array<DiceSet>;
};
type HealStats = {
  heals: Array<HealComponent>;
};
type Heal = {
  type: string;
  name: string;
  stats: HealStats;
}
type Creature = {
  attacks: Array<Attack | Heal>; // TODO: Either rename this to something like "actions" or separate out heals.
}
const creatures: Map<string, Creature> = new Map([
  ["Aarakocra", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "javelin melee",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "talons",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin ranged",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin melee dive",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "talons melee dive",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "slashing",
              damageBonus: 2,
              "rawRolls": [4, 6]
            }
          ]
        }
      }
    ]
  }],
  ["Aboleth", {
    background: "#4caeae",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tentacle",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tentacle",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tentacle",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Psychic Drain",
        stats: {
          damages: [
            {
              damageType: "Psychic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Deva", {
    background: "#dfc220",
    group: "Angels",
    attacks: [
      {
        type: "melee",
        name: "mace",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "mace",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "heal",
        name: "Healing Touch",
        stats: {
          heals: [
            {
              healingBonus: 2,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Planetar", {
    background: "#00997a",
    group: "Angels",
    attacks: [
      {
        type: "melee",
        name: "greatsword",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 4, d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 5, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "greatsword",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 4, d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 5, d: 8 }]
            }
          ]
        }
      },
      {
        type: "heal",
        name: "Healing Touch",
        stats: {
          heals: [
            {
              healingBonus: 3,
              rolls: [{ n: 6, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Solar", {
    background: "#c63939",
    group: "Angels",
    attacks: [
      {
        type: "melee",
        name: "greatsword",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 4, d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 6, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "slaying longbow",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 6, d: 8 }]
            }
          ]
        }
      },
      {
        type: "heal",
        name: "Healing Touch",
        stats: {
          heals: [
            {
              healingBonus: 4,
              rolls: [{ n: 8, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Searing Burst",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AnimatedArmor", {
    background: "#c0c0c0",
    group: "Animated Objects",
    attacks: [
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["FlyingSword", {
    background: "#737373",
    group: "Animated Objects",
    attacks: [
      {
        type: "twoHandedMelee",
        name: " longsword",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["RugOfSmothering", {
    background: "#cc0000",
    group: "Animated Objects",
    attacks: [
      {
        type: "twoHandedMelee",
        name: "smother",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ankheg", {
    background: "#cc3300",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Acid spray",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Azer", {
    background: "#ff8000",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Heated Body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Heated Body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Heated Body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Warhammer one-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Warhammer two-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Banshee", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "corrupting touch",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 2,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wail",
        stats: {
          damages: [
            {
              damageType: "Psychic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Basilisk", {
    background: "#80ccff",
    attacks: [
      {
        type: "melee",
        name: "Bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Behir", {
    background: "#468bb9",
    attacks: [
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 12, d: 10 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "constrict",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Beholder", {
    visible: false,
    attacks: [
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Enervation ray",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 8, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Disintegration Ray",
        stats: {
          damages: [
            {
              damageType: "Force",
              rolls: [{ n: 6, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["DeathTyrant", {
    visible: false,
    attacks: [
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Enervation ray",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 8, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Disintegration Ray",
        stats: {
          damages: [
            {
              damageType: "Force",
              rolls: [{ n: 6, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Spectator", {
    visible: false,
    attacks: [
      {
        type: "bite",
        name: "Bite",
        stats: {
          attackBonus: 1,
          damages: [
            {
              damageType: "    ",
              damageBonus: -1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wounding Ray",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["TwigBlight", {
    visible: false,
    attacks: [
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["VineBlight", {
    visible: false,
    attacks: [
      {
        type: "twoHandedMelee",
        name: "constrict",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Bugbear", {
    background: "#cc6600",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "javelin melee no surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "morningstar no surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin ranged no surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin melee surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "javelin ranged surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["BugbearChief", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "javelin melee no surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "morningstar no surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin ranged no surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin melee surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "javelin ranged surprise",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Bulette", {
    background: "#80aaff",
    attacks: [
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Deadly Leap",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 3, d: 6 }]
            },
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Bullywug", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "spear one-handed ranged or melee",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "spear two-handed melee",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["CarrionCrawler", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tentacles",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Poison",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Centaur", {
    background: "#993300",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "pike",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "pike charge",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              "rawRolls": [10, 6, 6, 6]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "hooves",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Chimera", {
    background: "#ff6100",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "horns",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 7, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Chuul", {
    background: "#888844",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "pincer",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "pincer",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Cloaker", {
    background: "#000010",
    attacks: [
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Cockatrice", {
    background: "#4b4f4f",
    attacks: [
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Couatl", {
    background: "#00336e",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "constrict",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["CrawlingClaw", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning or slashing (your choice)",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Cyclops", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rock",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Darkmantle", {
    background: "#d59090",
    attacks: [
      {
        type: "twoHandedMelee",
        name: "crush",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DeathKnight", {
    visible: false,
    attacks: [
      {
        type: "melee",
        name: "longsword one-hand",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longsword two-hands",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Hellfire orb",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 10, d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 10, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Demilich", {
    visible: false,
    attacks: [
      {
        type: "areaOfEffect",
        name: "Life Drain",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Balor", {
    background: "#c63939",
    group: "Demons",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Death Throes",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 20, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longsword",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 3, d: 8 }]
            },
            {
              damageType: "lightning",
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "whip",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Barlgura", {
    visible: false,
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Chasme", {
    visible: false,
    group: "Demons",
    attacks: [
      {
        type: "melee",
        name: "proboscis",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 4, d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Dretch", {
    background: "#0088cc",
    group: "Demons",
    attacks: [
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Slashing",
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Glabrezu", {
    background: "#990000",
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "pincer",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "pincer",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "fist",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "fist",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Goristro", {
    visible: false,
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "hoof",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "gore",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 7, d: 10 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "gore charge",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Gore piercing",
              damageBonus: 7,
              rolls: [{ n: 7, d: 10 }]
            },
            {
              damageType: "Charge piercing",
              rolls: [{ n: 7, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Hezrou", {
    background: "#cc3300",
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Manes", {
    visible: false,
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Slashing",
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Marilith", {
    background: "#00802b",
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tail",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longsword",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longsword",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longsword",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longsword",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Nalfeshnee", {
    background: "#000099",
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 5, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Quasit", {
    background: "#009900",
    group: "Demons",
    attacks: [
      {
        type: "melee",
        name: "claws/bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              "divider": 1000,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["ShadowDemon", {
    visible: false,
    group: "Demons",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Psychic",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws (with advantage damage)",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Psychic",
              damageBonus: 3,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Psychic",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Vrock", {
    background: "#3e3e74",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "beak",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "talons",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "beak",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "spores",
        stats: {
          damages: [
            {
              damageType: "poison",
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Spores",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Yochlol", {
    visible: false,
    attacks: [
      {
        type: "melee",
        name: "slam",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "slam",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["BarbedDevil", {
    background: "#336600",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "hurl flame",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "hurl flame",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["BeardedDevil", {
    background: "#a63f84",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "beard",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "glaive",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "(no specified damage type)",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["BoneDevil", {
    background: "#ffebe6",
    color: "black",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "sting",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["ChainDevil", {
    background: "#cc2900",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "chain",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "chain",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "chain",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "chain",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "chain",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "damage If grappled",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Damage if grappled",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Erinyes", {
    background: "#991f00",
    group: "Devils",
    attacks: [
      {
        type: "melee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longsword two-handed",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["HornedDevil", {
    background: "#cc6600",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fork",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fork",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail (doesn't account for infernal wounds)",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "piercing",
              damageBonus: 6,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "hurl flame",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "hurl flame",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["IceDevil", {
    background: "#b3b3ff",
    group: "Devils",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Wall of ice initial",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 10, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wall of ice when player moves through",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Cold",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claws",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 4 }]
            },
            {
              damageType: "Cold",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Imp", {
    background: "#b30000",
    group: "Devils",
    attacks: [
      {
        type: "melee",
        name: "sting (bite in beast form)",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              damageBonus: 2,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Lemure", {
    background: "#ff9999",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["PitFiend", {
    background: "#e60000",
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "bite",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fireball",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 8, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wall of Fire",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 5, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Poison at start of player's turn from bite",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "mace",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["SpinedDevil", {
    visible: false,
    group: "Devils",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Slashing",
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fork",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tail spine",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tail spine",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Allosaurus", {
    visible: false,
    group: "Dinosaurs",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ankylosaurus", {
    visible: false,
    group: "Dinosaurs",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tail",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tail",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Plesiosaurus", {
    background: "#3366cc",
    group: "Dinosaurs",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Pteranodon", {
    background: "#ff9933",
    group: "Dinosaurs",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Triceratops", {
    background: "#6b6b47",
    group: "Dinosaurs",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Gore",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Gore",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "Stomp",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Stomp",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["TyrannosaurusRex", {
    background: "#8f7356",
    group: "Dinosaurs",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tail",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      }
    ]
  }],
  ["DisplacerBeast", {
    visible: false,
    attacks: [
      {
        type: "melee",
        name: "tentacle",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Piercing",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tentacle",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Piercing",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Doppelganger", {
    background: "#8080ff",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "slam surprise",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "slam surprise",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "slam suprise",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Suprise",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultBlueDracolich", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 12, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Lightning",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungRedShadowDragon", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Shadow Breath",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 16, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientBlackDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid Breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 15, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Acid",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultBlackDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid Breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 12, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Bite",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungBlackDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 11, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["BlackDragonWyrmling", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Acid breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 5, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientBlueDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 13, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 9,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Lightning",
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultBlueDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 12, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Lightning",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungBlueDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 10, d: 10 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Lightning",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["BlueDragonWyrmling", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Lightning breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Lightning",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientGreenDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Poison breath",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 22, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultGreenDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Poison Breath",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 16, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungGreenDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Poison Breath",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 12, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GreenDragonWyrmling", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Poison Breath",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Poison",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientRedDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 26, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultRedDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 18, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungRedDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 16, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["RedDragonWyrmling", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientWhiteDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 16, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: " Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Cold",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultWhiteDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 12, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Bite",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Cold",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungWhiteDragon", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 10, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            },
            {
              damageType: "Cold",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["WhiteDragonWyrmling", {
    group: "Dragons", subgroup: "Chromatic",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 5, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Cold",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientBrassDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 16, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultBrassDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 9, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungBrassDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 12, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["BrassDragonWyrmling", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientBronzeDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 16,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 9,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 13, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultBronzeDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "Bite",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 12, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungBronzeDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 10, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["BronzeDragonWyrmling", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Breath",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientCopperDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid Breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 14, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultCopperDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid Breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 12, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungCopperDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid Breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 9, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["CopperDragonWyrmling", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Acid Breath",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientGoldDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 13, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultGoldDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 12, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungGoldDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 9, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GoldDragonWyrmling", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["AncientSilverDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 15, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AdultSilverDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tail",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 13, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Wing attack",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungSilverDragon", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 12, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["SilverDragonWyrmling", {
    group: "Dragons", subgroup: "Metallic",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["DragonTurtle", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 3, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 12 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 12 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Steam Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 15, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Drider", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longsword one-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longsword two-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longsword two-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longbow",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Dryad", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "club",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "club (with shillelagh)",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Duergar", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "War Pick",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "War Pick enlarged",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "Javelin ranged or melee",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Javelin melee enlarged",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AirElemental", {
    group: "Elementals",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Whirlwind",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Whirlwind flung into creature or wall",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["EarthElemental", {
    group: "Elementals",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["FireElemental", {
    group: "Elementals",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Touch",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Fire",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Touch",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Fire",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Ignite",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["WaterElemental", {
    group: "Elementals",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Whelm",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Drow", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "hand crossbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DrowEliteWarrior", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "hand crossbow",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "hand crossbow",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "shortsword",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "shortsword",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DrowMage", {
    attacks: [
      {
        type: "melee",
        name: "staff",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: -1,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "staff",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: -1,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DrowPriestessofLolth", {
    attacks: [
      {
        type: "melee",
        name: "Scourge",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Scourge",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Empyrean", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Maul",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Bolt",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Your choice of acid, cold, fire, force, lightning, radiant or thunder",
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "Bolt",
        stats: {
          attackBonus: 15,
          damages: [
            {
              damageType: "Your choice of acid, cold, fire, force, lightning, radiant or thunder",
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Maul",
        stats: {
          attackBonus: 17,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ettercap", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ettin", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Battleaxe",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Morningstar",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["FaerieDragon", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["Flameskull", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fire ray",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fire ray",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "fire ray",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fireball",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 8, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Flumph", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Reoccurring acid damage",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Tendrils",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Fomorian", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Evil Eye",
        stats: {
          damages: [
            {
              damageType: "Psychic",
              rolls: [{ n: 6, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GasSpore", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "touch",
        stats: {
          damages: [
            {
              damageType: "Poison",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "touch",
        stats: {
          damages: [
            {
              damageType: "Poison",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["Shrieker", {
    group: "Fungi",
    attacks: []
  }],
  ["VioletFungus", {
    group: "Fungi",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "rotting touch",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "rotting touch",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rotting touch",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rotting touch",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GalebDuhr", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "rolling charge",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Gargoyle", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Dao", {
    group: "Genies",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "maul",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "maul",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "fist",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Djinni", {
    group: "Genies",
    attacks: [
      {
        type: "melee",
        name: "scimitar",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Lightning or thunder",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "scimitar",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Lightning or thunder",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Efreeti", {
    group: "Genies",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "hurl flame",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "hurl flame",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "hurl flame",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "scimitar",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Marid", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "trident one-handed ranged or melee",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "trident one-handed ranged or melee",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "trident two-handed melee",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "trident two-handed melee",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Water Jet",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ghost", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "withering touch",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 3,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "withering touch",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 3,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ghast", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ghoul", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          damages: [
            {
              damageType: "Slashing",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["CloudGiant", {
    group: "Giants",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Morningstar",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Morningstar",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 8,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rock",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rock",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 8,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["FireGiant", {
    group: "Giants",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Greatsword",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Greatsword",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "Rock",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Rock",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["FrostGiant", {
    group: "Giants",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Greataxe",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 3, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Greataxe",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 3, d: 12 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rock",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rock",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["HillGiant", {
    group: "Giants",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rock",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rock",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["StoneGiant", {
    group: "Giants",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rock",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rock",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["StormGiant", {
    group: "Giants",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatsword",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "rock",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rock",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 9,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "greatsword",
        stats: {
          attackBonus: 14,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Strike",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 12, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GibberingMouth", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bites",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bites",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GithyankiWarrior", {
    attacks: [
      {
        type: "melee",
        name: "greatsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "greatsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GithyankiKnight", {
    attacks: [
      {
        type: "melee",
        name: "silver greatsword",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "silver greatsword",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GithyankiMonk", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "unarmed strike",
        stats: {
          damages: [
            {
              damageType: "    ",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "unarmed strike",
        stats: {
          damages: [
            {
              damageType: "    ",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "unarmed strike",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "unarmed strike",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GithyankiZerth", {
    attacks: [
      {
        type: "melee",
        name: "unarmed strike",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "unarmed strike",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Psychic",
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Gnoll", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "spear one-handed melee or ranged",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "spear two-handed melee",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longbow",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GnollPackLord", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "glaive",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "glaive",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GnollFangOfYeenoghu", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              "divider": 1000,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DeepGnome", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "warpick",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "poisoned dart",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["GoblinBoss", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Goblin", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["ClayGolem", {
    group: "Golems",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["FleshGolem", {
    group: "Golems",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["IronGolem", {
    group: "Golems",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 7,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "sword",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "sword",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "sword",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Poison Breath",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 10, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["StoneGolem", {
    group: "Golems",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Gorgon", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "gore",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "hooves",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 5,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Grell", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tentacles",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "beak",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Grick", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tentacles",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "beak",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GrickAlpha", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tail",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tentacles",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "beak",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "beak",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Griffon", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "beak",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Grimlock", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "   ",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "spiked bone club",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Piercing",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["GreenHag", {
    group: "Hags",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["NightHag", {
    group: "Hags",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["SeaHag", {
    group: "Hags",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["HalfRedDragonVeteran", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longsword two-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "shortsword",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "heavy crossbow",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Harpy", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "club",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["HellHound", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["HelmedHorror", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longsword two-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longsword one-handed",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Hippogriff", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "beak",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Hobgoblin", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longsword one-handed martial advantage",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              "rawRolls": [8, 6, 6]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longsword two-handed",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longsword two-handed",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              "rawRolls": [10, 6, 6]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longbow",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["HobgoblinCaptain", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greatsword martial advantage",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin martial advantage",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "javelin martial advantage",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["HobgoblinWarlord", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "longsword one-handed",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longsword one-handed martial advantage",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              "rawRolls": [8, 6, 6, 6, 6]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longsword two-handed",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "shield bash",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              "rawRolls": [4, 6]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "javelin",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Homunculus", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["HookHorror", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "hook",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "hook",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Hydra", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["IntellectDevourer", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Devour Intellect",
        stats: {
          damages: [
            {
              damageType: "Psychic",
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["InvisibleStalker", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Jackalwere", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Scimitar",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Kenku", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortbow",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["WingedKobold", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "dagger",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "dropped rock",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Kobold", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Dagger",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Sling",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Kraken", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 18,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tentacle",
        stats: {
          attackBonus: 18,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tentacle",
        stats: {
          attackBonus: 18,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tentacle",
        stats: {
          attackBonus: 18,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tentacle",
        stats: {
          attackBonus: 18,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Lightning Storm",
        stats: {
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Ink Cloud",
        stats: {
          damages: [
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Swallow",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 12, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Lamia", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "dagger",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "intoxicating touch",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "No",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["Lich", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "paralyzing touch",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "paralyzing touch",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Disrupt Life",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Lizardfolk", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "heavy club",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin melee or ranged",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "spiked shield",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["LizardfolkShaman", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite in crocodile form",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["LizardKingOrQueen", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "trident one-handed melee or ranged",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "trident one-handed melee or ranged",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "trident two-handed melee",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Werebear", {
    group: "Lycanthropes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "greataxe",
        stats: {
          damages: [
            {
              damageType: "Slashing",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "greataxe",
        stats: {
          damages: [
            {
              damageType: "Slashing",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["Wereboar", {
    group: "Lycanthropes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "maul",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "maul",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tusks",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tusks charge",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Wererat", {
    group: "Lycanthropes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "shortsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "hand crossbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Weretiger", {
    group: "Lycanthropes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Scimitar",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "Scimitar",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "Longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Werewolf", {
    group: "Lycanthropes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "spear one-handed melee or ranged",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Spear two-handed melee",
        stats: {
          damages: [
            {
              damageType: "    ",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["Magmin", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "touch",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Death Burst",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Continuous fire damage from touch",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Manticore", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tail spike",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tail spike",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Medusa", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "snake hair",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longbow",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DustMephit", {
    group: "Mephits",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "     ",
        stats: {
          damages: [
            {
              damageType: "   ",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["IceMephit", {
    group: "Mephits",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Frost Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Death Burst",
        stats: {
          damages: [
            {
              damageType: "Slashing",
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Cold",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["MagmaMephit", {
    group: "Mephits",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Fire Breath",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Death Burst",
        stats: {
          damages: [
            {
              damageType: "Fire",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["MudMephit", {
    group: "Mephits",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Fists",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["SmokeMephit", {
    group: "Mephits",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["SteamMephit", {
    group: "Mephits",
    attacks: [
      {
        type: "melee",
        name: "claws",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Slashing",
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Merfolk", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Spear one-handed ranged or melee",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Spear two-handed",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Merrow", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "harpoon",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Mimic", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Pseudopod",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["MindFlayer", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "tentacles",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Psychic",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "extract brain",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 8, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Mind Blast",
        stats: {
          damages: [
            {
              damageType: "Psychic",
              damageBonus: 4,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Minotaur", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "gore",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "gore charge",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Monodrone", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "dagger",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "javelin",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Duodrone", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin ranged or melee",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Tridrone", { attacks: [] }],
  ["Quadrone", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "shortbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "shortbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "shortbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Pentadrone", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "arm",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "arm",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "arm",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "arm",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "arm",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Mummy", {
    attacks: [
      {
        type: "melee",
        name: "rotting fist",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["MummyLord", {
    attacks: [
      {
        type: "melee",
        name: "rotting fist",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 3, d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "rotting fist",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 3, d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["BoneNaga", {
    group: "Naga",
    attacks: [
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["SpiritNaga", {
    group: "Naga",
    attacks: [
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              "divider": 2,
              rolls: [{ n: 7, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GuardianNaga", {
    group: "Naga",
    attacks: [
      {
        type: "melee",
        name: "   ",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "   ",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              "divider": 2,
              rolls: [{ n: 8, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Nightmare", {
    attacks: [
      {
        type: "melee",
        name: "Hooves",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Nothic", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Rotting Gaze",
        stats: {
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Ogre", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greatclub",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "javelin",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["HalfOgre", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Battleaxe one-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Battleaxe two-handed",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Oni", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "glaive",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "glaive",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "glaive in small or medium form",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["BlackPudding", {
    group: "Oozes",
    attacks: [
      {
        type: "areaOfEffect",
        name: "Corrosive Form",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Pseudopod",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Acid",
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["GelatinousCube", {
    group: "Oozes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Pseudopod",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Ooze Cube",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GrayOoze", {
    group: "Oozes",
    attacks: [
      {
        type: "melee",
        name: "Pseudopod",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Acid",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["OchreJelly", {
    group: "Oozes",
    attacks: [
      {
        type: "melee",
        name: "Pseudopod",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Acid",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Orc", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "javelin",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["OrcWarChief", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              "rawRolls": [12, 8]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              "rawRolls": [12, 8]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "spear one-handed ranged or melee",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              "rawRolls": [6, 8]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "spear one-handed ranged or melee",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              "rawRolls": [6, 8]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "spear two-handed melee",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["OrcEyeOfGruumsh", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "spear one-handed ranged or melee",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              "rawRolls": [6, 8]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "spear two handed melee",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Orog", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 12 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "javelin",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "javelin",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Otyugh", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "tentacle Slam",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tentacle",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Piercing",
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tentacle",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Piercing",
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Owlbear", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "beak",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Pegasus", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Hooves",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Hooves",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Peryton", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "gore",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "gore dive attack",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "talons",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "talons dive attack",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              "rawRolls": [4, 4, 8, 8]
            }
          ]
        }
      }
    ]
  }],
  ["Piercer", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "10 foot drop",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "20 foot drop",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "30 foot drop",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "40 foot drop",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "50 foot drop",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              rolls: [{ n: 5, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Pixie", { attacks: [] }],
  ["Pseudodragon", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "sting",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["PurpleWorm", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite initial",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 9,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite initial",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 9,
              rolls: [{ n: 3, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Swallowed Damage",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tail stinger",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 9,
              rolls: [{ n: 3, d: 6 }]
            },
            {
              damageType: "Poison",
              "divider": 2,
              rolls: [{ n: 8, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Quaggoth", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw wounded fury",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claw wounded fury",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Rakshasa", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "slashing",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YoungRemorhaz", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Heated Body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 3, d: 10 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Remorhazes", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "swallow damage at start of turn",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Heated body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Bite",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 7,
              rolls: [{ n: 6, d: 10 }]
            },
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Revenant", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "fist against sworn vengeance target",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "fist against sworn vengeance target",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Roc", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Beak",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 9,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Talons",
        stats: {
          attackBonus: 13,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 9,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Roper", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "tendrils",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "No",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "tendrils",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "No",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "tendrils",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "No",
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "tendrils",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "No",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["RustMonster", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Sahuagin", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "spear one-handed ranged or melee",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "spear two-handed melee",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["SahuaginPriestess", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["SahuaginBaron", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Trident one-handed ranged or melee",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "Trident two-handed melee",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["FireSnake", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Heated Body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "tail",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Salamander", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Heated Body",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Spear one-handed ranged or melee",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "Spear two-handed melee",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            },
            {
              damageType: "Fire",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Satyr", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "ram",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "shortbow",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Scarecrow", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Shadow", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "strength drain",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "strength drain",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 2,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["ShamblingMound", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Slam",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoining",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Slam",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoining",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Engulf",
        stats: {
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["ShieldGuardian", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoining",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "fist",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoining",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Skeletons", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "shortsword",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["MinotaurSkeleton", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "greataxe",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "gore",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "gore charge",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["WarhorseSkeleton", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "hooves",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "hooves",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["RedSlaad", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["SlaadTadpole", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["BlueSlaad", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "infection every 24 hours",
        stats: {
          damages: [
            {
              damageType: "",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GreenSlaad", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "staff",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "hurl flame",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["GraySlaad", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "greatsword",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "greatsword",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["DeathSlaad", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Fireball",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 8, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Cloudkill",
        stats: {
          damages: [
            {
              damageType: "Poisonous",
              rolls: [{ n: 5, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 5,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claws",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ d: 10 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Specter", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Life Drain",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Life Drain",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Androsphinx", {
    group: "Sphinxes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "claw",
        stats: {
          attackBonus: 12,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 6,
              rolls: [{ n: 2, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Third Roar",
        stats: {
          damages: [
            {
              damageType: "Thunder",
              rolls: [{ n: 8, d: 10 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Flame Strike",
        stats: {
          damages: [
            {
              damageType: "Fire",
              rolls: [{ n: 4, d: 6 }]
            },
            {
              damageType: "Radiant",
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Gynosphinx", {
    group: "Sphinxes",
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Sprite", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "longsword",
        stats: {
          attackBonus: 2,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shortbow",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["Stirge", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Blood Drain",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "   ",
        stats: {
          damages: [
            {
              damageType: "  ",
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Blood Drain once attached",
        stats: {
          damages: [
            {
              damageType: "Piercing",
              "rawRolls": [0]
            }
          ]
        }
      }
    ]
  }],
  ["SuccubusOrIncubus", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Draining Kiss",
        stats: {
          damages: [
            {
              damageType: "Psychic",
              damageBonus: 5,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Tarrasque", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 19,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 19,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 10,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "horns",
        stats: {
          attackBonus: 19,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "Tail",
        stats: {
          attackBonus: 19,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 10,
              rolls: [{ n: 4, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "bite",
        stats: {
          attackBonus: 19,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 10,
              rolls: [{ n: 4, d: 12 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Swallow",
        stats: {
          damages: [
            {
              damageType: "Acid",
              rolls: [{ n: 16, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["ThriKreen", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Treant", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "slam",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "rock",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "rock",
        stats: {
          attackBonus: 10,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 6,
              rolls: [{ n: 4, d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Troglodyte", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 4 }]
            }
          ]
        }
      }
    ]
  }],
  ["Troll", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["UmberHulk", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "mandibles",
        stats: {
          attackBonus: 8,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 5,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Unicorn", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "horn",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "hooves",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "hooves",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "hooves",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "hooves",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "heal",
        name: "Healing Touch",
        stats: {
          heals: [
            {
              healingBonus: 2,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Vampire", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "unarmed strike",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "unarmed strike",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "unarmed strike",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "unarmed strike",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 9,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["VampireSpawn", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 4 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Necrotic",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["WaterWeird", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Constrict",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "Constrict",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Wight", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "life drain",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 2,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "longsword one-handed",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            }
          ]
        }
      },
      {
        type: "tail",
        name: "longsword two-handed",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["WilloWisp", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "shock",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "shock",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Lightning",
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }],
  ["Wraith", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "Life Drain",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Necrotic",
              damageBonus: 3,
              rolls: [{ n: 4, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Incorporeal Movement",
        stats: {
          damages: [
            {
              damageType: "Force",
              rolls: [{ d: 10 }]
            }
          ]
        }
      }
    ]
  }],
  ["Wyvern", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claws",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "stinger",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Poison",
              "divider": 2,
              rolls: [{ n: 7, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Xorn", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "bite",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Yeti", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "   ",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Chilling Gaze",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Cold",
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claw",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Cold",
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["AbominableYeti", {
    attacks: [
      {
        type: "areaOfEffect",
        name: "Cold Breath",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 10, d: 8 }]
            }
          ]
        }
      },
      {
        type: "areaOfEffect",
        name: "Chilling Gaze",
        stats: {
          damages: [
            {
              damageType: "Cold",
              rolls: [{ n: 6, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Cold",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "claw",
        stats: {
          attackBonus: 11,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 7,
              rolls: [{ n: 2, d: 6 }]
            },
            {
              damageType: "Cold",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YuanTiAbomination", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "ranged",
        name: "scimitar",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "constrict",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longbow",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YuanTiMalisona", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longbow",
        stats: {
          attackBonus: 4,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 2,
              rolls: [{ d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YuanTiMalisonb", {
    attacks: [
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ d: 4 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YuanTiMalisonc", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 5,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 3,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "bite",
        name: "constrict",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "longbow",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 3,
              rolls: [{ n: 2, d: 8 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "bite",
        stats: {
          attackBonus: 7,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 4,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 3, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["YuanTiPureblood", {
    attacks: [
      {
        type: "oneHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "twoHandedMelee",
        name: "scimitar",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Slashing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      },
      {
        type: "melee",
        name: "shortbow",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Piercing",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            },
            {
              damageType: "Poison",
              rolls: [{ n: 2, d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["Zombie", {
    group: "Zombies",
    attacks: [
      {
        type: "twoHandedMelee",
        name: "Slam",
        stats: {
          attackBonus: 3,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 1,
              rolls: [{ d: 6 }]
            }
          ]
        }
      }
    ]
  }],
  ["OgreZombie", {
    group: "Zombies",
    attacks: [
      {
        type: "twoHandedMelee",
        name: "Morningstar",
        stats: {
          attackBonus: 6,
          damages: [
            {
              damageType: "Bludgeoning",
              damageBonus: 4,
              rolls: [{ n: 2, d: 8 }]
            }
          ]
        }
      }
    ]
  }]
]);
export default creatures;
