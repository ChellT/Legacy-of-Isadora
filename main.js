function StarterButton() { 
    var journey = prompt("WELCOME TO LEGACY OF ISADORA  (write 1 or 2 in the box depending on which option you pick!)    You wake up cold, and alone, in a forest. the sun is only visable through the thick layer of leaves and branches. you stand up and see a stick[1] and a broken glass bottle[2] on the floor. which one do you pick up?");
    if(journey == 1){

        journey = prompt ("An ambush! a gang of wolves run up to attack you. you start hitting them with your stick, but it barely hurts them. a wolf bites you (you lose 4 health out of 10)              You walk down the forest trail and come across a two breaking off paths. one sign on the left saying 'Emberfall village'[1] and the other path is leading further up the hill[2], where do you go?")
        if (journey == 2){
            journey = prompt("You start dragging yourself up the hill with your injury from that wolf. 10 minutes up the hill you come to another break in the path. You can either go to what seems like a withces tower[1] or further up the hill[2]")
            if (journey == 1){
                journey = prompt("test")
            } else {
                alert("As you were walking further up the hill, you bleed to death. If only you could've picked up the glass bottle at the start. ENDING 2/6 'Pushed to the limit'")
            }
        }  
        else if(journey == 1){
            journey = prompt("People! you are surrounded by small village houses and local villagers. a tavern[1] and a blacksmith[2] catches your eye, which one do you go in")
            if(journey == 1 || journey == 2){
                alert("You were kicked ou! why? because you were bleeding all over the floor since that wolf injured you. Now on the street as people walk past you, not helping. You wished you picked up the glass bottle to protect yourself, but now you'll never know.     ENDING 1/6 'Outcast'")
            }
        }
    } else if(journey == 2) {
        journey = prompt ("An ambush! a gang of wolves run up to attack you. you start hitting them with your broken glass bottle. You hurt the wolves badly and win the fight.              You walk down the forest trail and come across a two breaking off paths. one sign on the left saying 'Emberfall village'[1] and the other path is leading further up the hill[2], where do you go?" )
        if(journey == 1){
            journey = prompt("People! you are surrounded by small village houses and local villagers. a tavern[1] and a blacksmith[2] catches your eye, which one do you go in")
        }
    }
}
    