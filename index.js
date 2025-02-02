// Charger les données depuis le fichier JSON
fetch('musiques.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const mainContainer = document.getElementById('main-container');

        // Générer dynamiquement le contenu depuis le JSON
        data.forEach((musique, index) => {
            
            

                // Section avec un arrière-plan fixe
                const section = document.createElement('div');
    
                section.className =`fixed-bg bg-${index + 1}`
                const h1 = document.createElement('h1');
                h1.textContent = musique.musique;
                section.appendChild(h1);

                mainContainer.appendChild(section);

                // Section avec du texte et un lecteur audio
                const sectionAudio = document.createElement('div');
                sectionAudio.className = `color-${index + 1}`;
                const container = document.createElement('div');
                container.className = "container";

                // Texte descriptif
                const p = document.createElement('p');
                p.textContent = musique.descriptionMusiques;
                container.appendChild(p);


                // Élément audio
                const audio = document.createElement('audio');
                audio.id = `audio-${index}`;
                audio.src = musique.fichierAudio;
                audio.style.display = 'none';
                container.appendChild(audio);

                // Bouton lecture/pause
                const playButton = document.createElement('button');
                playButton.className = "play";
                playButton.dataset.audio = `audio-${index}`;
                playButton.textContent = '⏵';
                container.appendChild(playButton);

                sectionAudio.appendChild(container);
            

                // Sélectionner l'élément où insérer le logo
                const logoContainer = document.getElementById('logo-container'); 
                
                // Créer la balise <a>
                const link = document.createElement('a');
                link.href = musique.spotifyLink; // URL vers laquelle l'image redirige
                link.target = '_blank'; // Ouvre dans un nouvel onglet
                link.rel = 'noopener noreferrer'; // Meilleure sécurité pour les liens externes

                // Créer la balise <img>
                const logo = document.createElement('img');
                logo.className = 'logo-image'; // Ajoute une classe CSS

                logo.src = 'Images/Spotify Logo.png'; // Chemin vers L'image
                
                logo.style.width = '110px'; // Largeur de l'image
                logo.style.height = 'auto'; // Garder le ratio de l'image
                                
                // Ajouter l'image comme enfant du lien
                link.appendChild(logo);
                               
                // Ajouter le lien au conteneur
                container.appendChild(link);

                mainContainer.appendChild(sectionAudio);
        });

        // Gestion de la lecture/pause
        document.querySelectorAll('.play').forEach(button => {
            console.log(button);
            button.addEventListener('click', function () {
                console.log('click')
                const audioId = this.dataset.audio;
                const audio = document.getElementById(audioId);

                if (!audio) {
                    console.error(`Aucun élément audio trouvé pour l'ID : ${audioId}`);
                    return;
                }

                if (audio.paused) {
                    // Jouer l'audio
                    audio.play();
                    this.textContent = '⏸';
                } else {
                    // Pause de l'audio
                    audio.pause();
                    this.textContent = '⏵';
                }
            });
        });
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));



//Formulaire    
//Q2
const titreInput = document.getElementById('titre');
console.log(titreInput); // Test du sélecteur
console.log("Valeur du champ 'titre' :", titreInput.value); // Affiche la valeur entrée

//Q3
titreInput.addEventListener('keyup', (event) => {
    console.log("Champ modifié :", titreInput.value);
});

// Affiche le mot "description :" quand la touche est relachée
const descriptionInput = document.getElementById('descriptionMusique');
descriptionInput.addEventListener('keyup', () => {
   
    console.log("Champ modifié :", descriptionInput.value);
});


const urlInput = document.getElementById('urlMusique');
urlInput.addEventListener('keyup', () => {
    
    console.log("Champ modifié :", urlInput.value);
});
const mailInput = document.getElementById('email');
mailInput.addEventListener('keyup', () => {
    
    console.log("Champ modifié :", mailInput.value);
});



var urlEnvoyée = "http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=nivinou&courriel=philippe.gambette@univ-eiffel.fr&message=Je%20n'ai%20aucune%20suggestion%20de%20musique%20mais%20je%20vous%20félicite%20pour%20votre%20site%20web%20de%20sélection%20musicale%20que%20je%20trouve%20très%20réussi";

var btnEnvoyer = document.querySelector('#btnEnvoyer');

//Q 9, 10, 11
btnEnvoyer.addEventListener('click', () => {
    //var urlModifiée = "http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json" + "&login=nivinou" + "&courriel=" + mailInput.value + "&message=Titre :" + titreInput.value + "; Description :" + descriptionInput.value + "; Adresse du fichier audio" + urlInput.value;


    var urlModifiée = `http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=nivinou&courriel=${encodeURIComponent(mailInput.value)}&message=${encodeURIComponent("Titre :" + titreInput.value + "; Description :" + descriptionInput.value + "; Adresse du fichier audio : " + urlInput.value)}`;

    console.log("URL générée avec les données du formulaire :", urlModifiée);
        
    fetch(urlModifiée).then(response => {
            response.json().then(data => {
                console.log("Réponse reçue :");
                console.log(data);
            });
        });
 });


function togglePopup(){
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
}



