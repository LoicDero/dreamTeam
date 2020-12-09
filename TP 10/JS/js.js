let equipe = {}


function recup(construction){

    let joueur = construction.nom.value
    equipe[joueur] = {}

    
    equipe[joueur].prenom =  construction.prenom.value
    equipe[joueur].age = Number(construction.age.value)
    equipe[joueur].position = construction.position.value
    equipe[joueur].prix = Number(construction.prix.value)
     tableau()
    return false
}

function tableau(){
    let creer 
    
    for (let i in equipe){
        creer= "<tr> <td>"+ equipe[i].position +"</td> <td>"+ i +" </td> <td>"+ equipe[i].prenom +"</td> <td>"+ equipe[i].age+"</td> <td>"+ equipe[i].prix+"</td></tr>"
    }
    document.getElementById("tableau").innerHTML += creer
}
