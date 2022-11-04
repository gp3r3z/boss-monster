const heroes = [
    {
        name: 'Mario',
        type: 'dwarf',
        damage: 5,
        health: 50
    },
    {
        name: 'Luigi',
        type: 'elf',
        damage: 10,
        health: 50
    }
]


const boss = {
    name: 'Bowser',
    health: 15,
    maxHealth: 100,
    damage: 5,
    level: 3
}
// appears these are creating new values rather than manipulating the object itself ... interesting

function update() {
    console.log("Updating some shizz")
    document.getElementById('boss-hp').innerText = boss.maxHealth
    document.getElementById('boss-lvl').innerText = boss.level
}

function heroAttack() {
    // debugger
    if (boss.health <= 0) {
        console.log("Boss is dead")
        bossLevelUp()
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

                // monsterHealth = monsterHealth - totalAttack
                // boss.health = monsterHealth

                // console.log(boss)

                // if (boss.health <= 0) {
                //     console.log("boss is dead")
                //     bossLevelUp()
                // }
            }


        })
        boss.health = boss.health - totalAttack
        console.log(boss.name, "took ", totalAttack, "Boss life is", boss.health)

        console.log(boss.health)



    }



    // update()
}

function bossLevelUp() {

    console.log("")
    boss.level++
    boss.maxHealth = 100
    boss.health = boss.maxHealth
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
            window.confirm('GAME OVER')
            clearInterval(monsterInterval)
        }
    })
}

// let monsterInterval = setInterval(bossAttack, 10000);
