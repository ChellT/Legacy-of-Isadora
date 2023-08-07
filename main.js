function StarterButton() { 
    var journey = prompt("WELCOME TO LEGACY OF ISADORA  (write 1 or 2 in the box depending on which option you pick!)    You wake up cold, and alone, in a forest. the sun is only visable through the thick layer of leaves and branches. you stand up and see a stick[1] and a broken glass bottle[2] on the floor. which one do you pick up?");
   /* start of option one */
    if(journey == 1){

        journey = prompt ("An ambush! a gang of wolves run up to attack you. you start hitting them with your stick, but it barely hurts them. a wolf bites you. You are now injured.             You walk down the forest trail and come across a two breaking off paths. one sign on the left saying 'Emberfall village'[1] and the other path is leading further up the hill[2], where do you go?")
        if (journey == 2){
            journey = prompt("You start dragging yourself up the hill with your injury from that wolf. 10 minutes up the hill you come to another break in the path. You can either go to what seems like a withces tower[1] or further up the hill[2]")
            if (journey == 1){ /* start of witch ending */
                journey = prompt("you start to get closer to the witches tower and see an old wooden door, 'Must be the entrence' you say to yourself. you go inside and see a spirling stone staircase leading to the top with cracks which have become homes for ants and beetles. You start to walk up the staircase, it felt like hours, but when you reach the top you're now in the middle of a big bedroom of sorts, with a woman going book to book frantically.'No, no, no, this just isn't right!' she says as she throws a wand on the floor and leaves a through a large window on a broom. You walk in and pick the wand, and when you do you look down and you injury has been healed and you feel some sort of power going through you. you also see she left a book open on a lectern. the book says 'Whosoever slayeth the dragon that resideth upon yon Emberfall mountain shall be crowned the monarch of monarchs.' with a map next to it. do you do it?[1] or leave it to someone else braver[2]")
                if (journey == 1){
                    alert("'Lets do this!' you say ripping out the map in the witches book and storming off, following the map and feeling as powerful as ever.    You reach Emberfall mountain and see a massive red dragon flying around in cirles in the sky, and its beginning to fly down. You are now face to face with the fearsome dragon, its time to show everyone who you really are. Armed with your ancient wand you found, you swoosh it over to the dragon, casting a powerful spell light that changes the clear sky in dark grey clouds. .... ")/*continue here */
                }
            } else {
                alert("As you were walking further up the hill, you bleed to death. If only you could've picked up the glass bottle at the start. ENDING 2/6 'Pushed to the limit'")
            }
        }  
        else if(journey == 1){
            journey = prompt("People! you are surrounded by small village houses and local villagers. a tavern[1] and a blacksmith[2] catches your eye, which one do you go in")
            if(journey == 1 || journey == 2){
                alert("You were kicked out! why? because you were bleeding all over the floor since that wolf injured you. Now you're on the street as people walk past you, not helping. You wished you picked up the glass bottle to protect yourself, but now you'll never know.     ENDING 1/6 'Outcast'")
            }
        } /* start of option two */
    } else if(journey == 2) {
        journey = prompt ("An ambush! a gang of wolves run up to attack you. you start hitting them with your broken glass bottle. You hurt the wolves badly and win the fight.              You walk down the forest trail and come across a two breaking off paths. one sign on the left saying 'Emberfall village'[1] and the other path is leading further up the hill[2], where do you go?" )
        if(journey == 1){
            journey = prompt("People! you are surrounded by small village houses and local villagers. a tavern[1] and a blacksmith[2] catches your eye, which one do you go in")
        }
    }
}
    