// Mockup des données (Fake Data)
const peopleData = [
    {
        id: 1,
        firstname: 'Della',
        lastname: 'Duck',
        job: 'Dev lead',
        profileImg: null,
        desc: 'Détruire les stock de papier toilette attaquer les griffes peluches partout miaou miao français ciao litière pour entrer dans une pièce pour décider que vous ne vouliez pas y être de toute façon prow ?? ew chien vous buvez dans les toilettes, yum yum lait chaud plus chaud pls, ouch trop chaud mais a trouvé quelque chose bouger je le mord la queue regarder par la fenêtre.'
    },
    {
        id: 2,
        firstname: 'Zaza',
        lastname: 'Vanderquack',
        job : 'Stagiaire',
        profileImg: null,
        desc: 'Fournisseuse officielle de café pour Della Duck !'
    }
]

const personController = {

    list: (req, res) => {
        const data = {
            people : peopleData.map((person) => ({
                firstname : person.firstname,
                lastname: person.lastname,
                url: `person/${person.id}`
            }))
        };
        res.render('person/person-list', data);
    },

    detail: (req, res) => {
        const id = parseInt(req.params.id);
        const person = peopleData.find(p => p.id === id);

        if(!person) {
            res.render('person/person-notfound');
            return;
        }
        
        const data = {
            person
        };
        res.render('person/person-detail', data);
    }

};

module.exports = personController;