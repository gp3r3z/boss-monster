const heroes = [
    {

        name: 'Mario',
        type: 'dwarf',
        damage: 5,
        health: 100,
        level: 1,
        gold: 0
    },
    {

        name: 'Luigi',
        type: 'elf',
        damage: 10,
        health: 100,
        level: 1,
        gold: 0
    }
]


const boss = {
    name: 'Bowser',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function updateBoss() {
    console.log("Boss object updating")
    let bossHPElm = document.getElementById('boss-hp-bar')
    let bossHealthBar = bossHPElm.querySelector('.progress-bar')
    bossHealthBar.style.width = boss.health + '%'
    // bossHealthBar.ariaValueMax = boss.maxHealth
    // TODO when progress bar is over 100 health indicator doesn't follow but i can update the values ? appears its style
    // bossHealthBar.ariaValueNow = boss.health
    // console.log("Boss maxhealth:", boss.maxHealth, "Aria max value:", bossHealthBar.ariaValueMax, "Aria value Now: ", bossHealthBar.ariaValueNow, "")
    console.log("boss style width ", bossHealthBar.style.width)
    document.getElementById('boss-hp').innerText = boss.health
    document.getElementById('boss-lvl').innerText = boss.level
}
function updateHero(hero) {


    if (hero.name == 'Mario') {
        document.getElementById('hero-nameA').innerText = hero.name
        document.getElementById('hero-lvlA').innerText = hero.level
        document.getElementById('hero-goldA').innerText = hero.gold
        document.getElementById('hero-hpA').innerText = hero.health
    }
    if (hero.name == 'Luigi') {
        document.getElementById('hero-nameB').innerText = hero.name
        document.getElementById('hero-lvlB').innerText = hero.level
        document.getElementById('hero-goldB').innerText = hero.gold
        document.getElementById('hero-hpB').innerText = hero.health
    }
}



function heroAttack() {
    // debugger
    if (boss.health <= 0) {
        console.log("Boss is dead")
        bossLevelUp()
        heroLevelUp()
    } else {

        let totalAttack = 0
        console.log('Attacking Boss')
        if (heroes.health <= 0) {
            window.alert('You dead')
            return
        }
        heroes.forEach(h => {
            if (h.health > 0) {
                console.log(h.name, "is hitting boss with attack points of ", h.damage)
                totalAttack = totalAttack + h.damage
            }


        })
        boss.health = boss.health - totalAttack
        console.log(boss.name, "took ", totalAttack, "Boss life is", boss.health)
        console.log(boss.health)

    }

    updateBoss()
}
function heroLevelUp() {
    console.log("Leveling up Hero ")
    let gold = 0
    gold++

    heroes.forEach(h => {
        h.gold = gold
        h.level++
        console.log(("adding gold"), h.gold);
        updateHero(h)
    })





}
function bossLevelUp() {


    console.log("Leveling up Boss ")
    boss.level++
    boss.maxHealth = boss.maxHealth * boss.level
    boss.health = boss.maxHealth
    console.log('Boss new maxx health', boss.maxHealth)
}


function bossAttack() {
    console.log('Attacking heroes');
    let bossAttack = boss.damage
    let bossLevel = boss.level
    heroes.find(h => {

        if (h.health > 0) {
            h.health = h.health - (bossAttack * boss.level)
            console.log("This is the heros health", h.health)

        }
        else {
            // window.confirm('GAME OVER')
            clearInterval(monsterInterval)
            console.log("Game over")
        }



        updateHero(h)
    })
}

// let monsterInterval = setInterval(bossAttack, 1500);


function getPaid() {
    console.log("Getting money")
    let gold = 0


}
