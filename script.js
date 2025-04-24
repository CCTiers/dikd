// Simulated leaderboard data for each game mode with tiers
const leaderboards = {
    overall: {
        tier1: [{ player: "Marlowww", tier: "Combat Master", points: 355, skin: "https://mc-heads.net/avatar/Marlowww/32" }],
        tier2: [{ player: "Dwqgo", tier: "Combat Ace", points: 300, skin: "https://mc-heads.net/avatar/Dwqgo/32" }],
        tier3: [{ player: "SharpOrganic985", tier: "Combat Pro", points: 280, skin: "https://mc-heads.net/avatar/SharpOrganic985/32" }],
        tier4: [{ player: "TheNetherLordFAN", tier: "Combat Skilled", points: 250, skin: "https://mc-heads.net/avatar/TheNetherLordFAN/32" }],
        tier5: [{ player: "monkey_banana", tier: "Combat Novice", points: 220, skin: "https://mc-heads.net/avatar/monkey_banana/32" }]
    },
    sword: {
        tier1: [{ player: "Kylaz", tier: "Combat Master", points: 340, skin: "https://mc-heads.net/avatar/Kylaz/32" }],
        tier2: [{ player: "Prusso", tier: "Combat Ace", points: 310, skin: "https://mc-heads.net/avatar/Prusso/32" }],
        tier3: [
            { player: "Starzide", tier: "Combat Pro", points: 270, skin: "https://mc-heads.net/avatar/Starzide/32" },
            { player: "@Not_Axe", tier: "Combat Pro", points: 275, skin: "https://mc-heads.net/avatar/Not_Axe/32" },
            { player: "thedrainboy", tier: "Combat Pro", points: 272, skin: "https://mc-heads.net/avatar/thedrainboy/32" },
            { player: "MagicBread1121", tier: "Combat Pro", points: 268, skin: "https://mc-heads.net/avatar/MagicBread1121/32" }
        ],
        tier4: [{ player: "iwannabeaswedish", tier: "Combat Skilled", points: 240, skin: "https://mc-heads.net/avatar/iwannabeaswedish/32" }],
        tier5: [
            { player: "Rich_Monkey", tier: "Combat Novice", points: 210, skin: "https://mc-heads.net/avatar/Rich_Monkey/32" },
            { player: "Ltvillain_", tier: "Combat Novice", points: 215, skin: "https://mc-heads.net/avatar/Ltvillain_/32" }
        ]
    },
    nethpot: {
        tier1: [{ player: "Roist_", tier: "Combat Master", points: 350, skin: "https://mc-heads.net/avatar/Roist_/32" }],
        tier2: [{ player: "GOCKK", tier: "Combat Ace", points: 320, skin: "https://mc-heads.net/avatar/GOCKK/32" }],
        tier3: [
            { player: "360Mall", tier: "Combat Pro", points: 290, skin: "https://mc-heads.net/avatar/360Mall/32" },
            { player: "Grandpriest007", tier: "Combat Pro", points: 288, skin: "https://mc-heads.net/avatar/Grandpriest007/32" },
            { player: "SensouMain", tier: "Combat Pro", points: 285, skin: "https://mc-heads.net/avatar/SensouMain/32" },
            { player: "RaagUwU", tier: "Combat Pro", points: 282, skin: "https://mc-heads.net/avatar/RaagUwU/32" }
        ],
        tier4: [
            { player: "zu8", tier: "Combat Skilled", points: 260, skin: "https://mc-heads.net/avatar/zu8/32" },
            { player: "GalaSioGamex", tier: "Combat Skilled", points: 258, skin: "https://mc-heads.net/avatar/GalaSioGamex/32" },
            { player: "cyfwy", tier: "Combat Skilled", points: 255, skin: "https://mc-heads.net/avatar/cyfwy/32" }
        ],
        tier5: [
            { player: "HighTierTwee", tier: "Combat Novice", points: 230, skin: "https://mc-heads.net/avatar/HighTierTwee/32" }
        ]
    },
    uhc: {
        tier1: [{ player: "Swight", tier: "Combat Master", points: 330, skin: "https://mc-heads.net/avatar/Swight/32" }],
        tier2: [{ player: "Spawnplayer", tier: "Combat Ace", points: 300, skin: "https://mc-heads.net/avatar/Spawnplayer/32" }],
        tier3: [
            { player: "MimicRyupz", tier: "Combat Pro", points: 270, skin: "https://mc-heads.net/avatar/MimicRyupz/32" },
            { player: "Tomie.", tier: "Combat Pro", points: 275, skin: "https://mc-heads.net/avatar/Tomie/32" }
        ],
        tier4: [
            { player: "Mr_JulioCMR", tier: "Combat Skilled", points: 240, skin: "https://mc-heads.net/avatar/Mr_JulioCMR/32" },
            { player: "Comet4561", tier: "Combat Skilled", points: 245, skin: "https://mc-heads.net/avatar/Comet4561/32" },
            { player: "Resistenve3", tier: "Combat Skilled", points: 242, skin: "https://mc-heads.net/avatar/Resistenve3/32" },
            { player: "vnnith", tier: "Combat Skilled", points: 238, skin: "https://mc-heads.net/avatar/vnnith/32" }
        ],
        tier5: [
            { player: "ZD015", tier: "Combat Novice", points: 210, skin: "https://mc-heads.net/avatar/ZD015/32" },
            { player: "cyfwy", tier: "Combat Novice", points: 215, skin: "https://mc-heads.net/avatar/cyfwy/32" }
        ]
    },
    diapot: {
        tier1: [{ player: "DiamondAce", tier: "Combat Master", points: 340, skin: "https://mc-heads.net/avatar/DiamondAce/32" }],
        tier2: [{ player: "GemWarrior", tier: "Combat Ace", points: 310, skin: "https://mc-heads.net/avatar/GemWarrior/32" }],
        tier3: [{ player: "CrystalKnight", tier: "Combat Pro", points: 280, skin: "https://mc-heads.net/avatar/CrystalKnight/32" }],
        tier4: [{ player: "SparkleGem", tier: "Combat Skilled", points: 250, skin: "https://mc-heads.net/avatar/SparkleGem/32" }],
        tier5: [{ player: "StoneSmasher", tier: "Combat Novice", points: 220, skin: "https://mc-heads.net/avatar/StoneSmasher/32" }]
    },
    mace: {
        tier1: [{ player: "Marlowww", tier: "Combat Master", points: 350, skin: "https://mc-heads.net/avatar/Marlowww/32" }],
        tier2: [{ player: "PUFFIEZ", tier: "Combat Ace", points: 320, skin: "https://mc-heads.net/avatar/PUFFIEZ/32" }],
        tier3: [{ player: "AlexDinks", tier: "Combat Pro", points: 290, skin: "https://mc-heads.net/avatar/AlexDinks/32" }],
        tier4: [{ player: "Netwax", tier: "Combat Skilled", points: 260, skin: "https://mc-heads.net/avatar/Netwax/32" }],
        tier5: [{ player: "MidnightsCrow", tier: "Combat Novice", points: 230, skin: "https://mc-heads.net/avatar/MidnightsCrow/32" }]
    },
    cpvp: {
        tier1: [{ player: "CrystalBomber", tier: "Combat Master", points: 340, skin: "https://mc-heads.net/avatar/CrystalBomber/32" }],
        tier2: [{ player: "ExplosivePro", tier: "Combat Ace", points: 310, skin: "https://mc-heads.net/avatar/ExplosivePro/32" }],
        tier3: [
            { player: "TNTMaster", tier: "Combat Pro", points: 280, skin: "https://mc-heads.net/avatar/TNTMaster/32" },
            { player: "McMaster", tier: "Combat Pro", points: 278, skin: "https://mc-heads.net/avatar/McMaster/32" }
        ],
        tier4: [{ player: "BlastKing", tier: "Combat Skilled", points: 250, skin: "https://mc-heads.net/avatar/BlastKing/32" }],
        tier5: [{ player: "FireCracker", tier: "Combat Novice", points: 220, skin: "https://mc-heads.net/avatar/FireCracker/32" }]
    },
    smp: {
        tier1: [{ player: "Marlowww", tier: "Combat Master", points: 350, skin: "https://mc-heads.net/avatar/Marlowww/32" }],
        tier2: [{ player: "DivineRevival", tier: "Combat Ace", points: 320, skin: "https://mc-heads.net/avatar/DivineRevival/32" }],
        tier3: [
            { player: "HappyBrownie_", tier: "Combat Pro", points: 290, skin: "https://mc-heads.net/avatar/HappyBrownie_/32" },
            { player: "Aweak_MC", tier: "Combat Pro", points: 288, skin: "https://mc-heads.net/avatar/Aweak_MC/32" },
            { player: "Awardkend_", tier: "Combat Pro", points: 286, skin: "https://mc-heads.net/avatar/Awardkend_/32" },
            { player: "Obaid2727", tier: "Combat Pro", points: 284, skin: "https://mc-heads.net/avatar/Obaid2727/32" }
        ],
        tier4: [{ player: "Zukaa_", tier: "Combat Skilled", points: 260, skin: "https://mc-heads.net/avatar/Zukaa_/32" }],
        tier5: [{ player: "CorruptedAnchor", tier: "Combat Novice", points: 230, skin: "https://mc-heads.net/avatar/CorruptedAnchor/32" }]
    },
    axe: {
        tier1: [{ player: "Raign", tier: "Combat Master", points: 340, skin: "https://mc-heads.net/avatar/Raign/32" }],
        tier2: [{ player: "Milkzweh", tier: "Combat Ace", points: 310, skin: "https://mc-heads.net/avatar/Milkzweh/32" }],
        tier3: [
            { player: "Klassy02", tier: "Combat Pro", points: 280, skin: "https://mc-heads.net/avatar/Klassy02/32" },
            { player: "Vicky", tier: "Combat Pro", points: 278, skin: "https://mc-heads.net/avatar/Vicky/32" }
        ],
        tier4: [
            { player: "ysheepDE", tier: "Combat Skilled", points: 250, skin: "https://mc-heads.net/avatar/ysheepDE/32" },
            { player: "GalasioGameX", tier: "Combat Skilled", points: 248, skin: "https://mc-heads.net/avatar/GalasioGameX/32" }
        ],
        tier5: [{ player: "MONOtNee", tier: "Combat Novice", points: 220, skin: "https://mc-heads.net/avatar/MONOtNee/32" }]
    }
};

// Populate leaderboards
function updateLeaderboards() {
    Object.keys(leaderboards).forEach(mode => {
        for (let tier = 1; tier <= 5; tier++) {
            const tierDiv = document.getElementById(`${mode}-tier${tier}`);
            tierDiv.innerHTML = '';
            const players = leaderboards[mode][`tier${tier}`];
            players.forEach(player => {
                const entry = document.createElement('div');
                entry.className = 'player-entry';
                entry.innerHTML = `
                    <img src="${player.skin}" alt="${player.player}" class="player-skin">
                    <div class="player-info">
                        <div class="player-name">${player.player}</div>
                        <div class="player-tier">${player.tier} (${player.points} points)</div>
                    </div>
                `;
                tierDiv.appendChild(entry);
            });
        }
    });
}

// Initialize leaderboards on page load
window.onload = updateLeaderboards;