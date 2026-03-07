// Coauthor Network Data
// Edit URLs and affiliations freely — the network visualization reads from this file.
// group: "self" = Paul, "direct" = Paul's direct coauthors, "second" = coauthors of coauthors, "project" = large collaboration entity
// shape: "circle" (default), "diamond" (project entities)

var NETWORK_DATA = {
  nodes: [
    // === SELF ===
    { id: "paul", name: "Paul M. Gorny", url: "index.html", affiliation: "Karlsruhe Institute of Technology", group: "self" },

    // === DIRECT COAUTHORS ===
    { id: "nieken", name: "Petra Nieken", url: "https://www.ibu.kit.edu/english/1967_1975.php", affiliation: "KIT", group: "direct" },
    { id: "strohlein", name: "Karoline Ströhlein", url: "https://sites.google.com/view/karolinestroehlein", affiliation: "KIT", group: "direct" },
    { id: "strobel", name: "Christina Strobel", url: "https://christina-strobel.de/", affiliation: "", group: "direct" },
    { id: "alekseev", name: "Aleksandr Alekseev", url: "https://aalexee.com/", affiliation: "", group: "direct" },
    { id: "anufriev", name: "Mikhail Anufriev", url: "https://sites.google.com/view/anufriev", affiliation: "", group: "direct" },
    { id: "cortes", name: "Sebastián Cortes-Corrales", url: "https://sites.google.com/view/sebastiancortescorrales/home", affiliation: "", group: "direct" },
    { id: "schafer", name: "Louis Schäfer", url: "", affiliation: "KIT", group: "direct" },
    { id: "grubiak", name: "Kevin Grubiak", url: "https://www.wiwi.uni-passau.de/wirtschaftstheorie/lehrstuhlteam/dr-kevin-grubiak/", affiliation: "University of Passau", group: "direct" },
    { id: "nasamu", name: "Emike Nasamu", url: "", affiliation: "University of Chester", group: "direct" },
    { id: "wang", name: "Mengjie Wang", url: "https://sites.google.com/site/mengjiewangeco/", affiliation: "Cardiff University", group: "direct" },
    { id: "woodard", name: "Ritchie C. Woodard", url: "https://sites.google.com/view/ritchie-woodard/", affiliation: "", group: "direct" },
    { id: "groos", name: "Eva Groos", url: "", affiliation: "", group: "direct" },
    { id: "trenkle", name: "Martin Trenkle", url: "", affiliation: "Workwise", group: "direct" },
    { id: "renner", name: "Benedikt Renner", url: "", affiliation: "", group: "direct" },
    { id: "kandler", name: "Magnus Kandler", url: "", affiliation: "KIT", group: "direct" },
    { id: "lanza", name: "Gisela Lanza", url: "", affiliation: "KIT", group: "direct" },
    { id: "riedinger", name: "Sebastian Riedinger", url: "", affiliation: "KIT", group: "direct" },
    { id: "wuest", name: "Fabian Wüst", url: "", affiliation: "", group: "direct" },
    { id: "greif", name: "Anke Greif-Winzrieth", url: "", affiliation: "", group: "direct" },
    { id: "dorner", name: "Verena Dorner", url: "", affiliation: "", group: "direct" },
    { id: "weinhardt", name: "Christof Weinhardt", url: "", affiliation: "KIT", group: "direct" },
    { id: "busse", name: "Niklas Busse", url: "", affiliation: "", group: "direct" },
    { id: "a_sadrieh", name: "Abdolkarim Sadrieh", url: "", affiliation: "", group: "direct" },
    { id: "f_sadrieh", name: "Frederic Sadrieh", url: "", affiliation: "", group: "direct" },

    // === PROJECT ENTITIES (large collaborations) ===
    { id: "proj_mansci", name: "ManSci Reproducibility Collaboration", url: "https://doi.org/10.1287/mnsc.2023.03556", affiliation: "Management Science, 2024", group: "project", shape: "diamond" },
    { id: "proj_pnas", name: "PNAS Crowd-Sourced Experiment", url: "https://www.pnas.org/doi/10.1073/pnas.2215572120", affiliation: "PNAS, 2023", group: "project", shape: "diamond" },
    { id: "proj_manydaughters", name: "#ManyDaughters", url: "https://www.manydaughters.com/", affiliation: "Crowd-sourced project", group: "project", shape: "diamond" },
    { id: "proj_manydesigns", name: "#ManyDesignsCarbon", url: "https://manydesignscarbon.online/", affiliation: "Crowd-sourced project", group: "project", shape: "diamond" },
    { id: "proj_synthetic", name: "Synthetic Replication Games", url: "https://talkingtomachines.org/projects/imebess-2025-synthetic-replication-games/", affiliation: "Crowd-sourced project", group: "project", shape: "diamond" },

    // === SECOND-DEGREE: Cortes-Corrales's coauthors ===
    { id: "polanski", name: "Arnold Polanski", url: "", affiliation: "", group: "second" },
    { id: "rojo_arjona", name: "David Rojo Arjona", url: "", affiliation: "", group: "second" },
    { id: "kovenock", name: "Dan Kovenock", url: "", affiliation: "", group: "second" },
    { id: "zanchettin", name: "Piercarlo Zanchettin", url: "", affiliation: "", group: "second" },
    { id: "chowdhury", name: "Subhasish Chowdhury", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Nieken's coauthors ===
    { id: "dato", name: "Simon Dato", url: "", affiliation: "", group: "second" },
    { id: "feess", name: "Eberhard Feess", url: "", affiliation: "", group: "second" },
    { id: "schmitz", name: "Patrick W. Schmitz", url: "", affiliation: "", group: "second" },
    { id: "schottner", name: "Anja Schöttner", url: "", affiliation: "", group: "second" },
    { id: "gurtler", name: "Oliver Gürtler", url: "", affiliation: "", group: "second" },
    { id: "munster", name: "Johannes Münster", url: "", affiliation: "", group: "second" },
    { id: "krakel", name: "Matthias Kräkel", url: "", affiliation: "", group: "second" },
    { id: "sliwka", name: "Dirk Sliwka", url: "", affiliation: "", group: "second" },
    { id: "berger", name: "Johannes Berger", url: "", affiliation: "", group: "second" },
    { id: "kvaloy", name: "Ola Kvaløy", url: "", affiliation: "", group: "second" },
    { id: "fest", name: "Sebastian Fest", url: "", affiliation: "", group: "second" },
    { id: "staudt", name: "Philipp Staudt", url: "", affiliation: "", group: "second" },
    { id: "breuer", name: "Kathrin Breuer", url: "", affiliation: "", group: "second" },
    { id: "przemeck", name: "Jörg Przemeck", url: "", affiliation: "", group: "second" },
    { id: "mohnen", name: "Alwine Mohnen", url: "", affiliation: "", group: "second" },
    { id: "n_zhou", name: "Nan Zhou", url: "", affiliation: "", group: "second" },
    { id: "djawadi", name: "Behnud M. Djawadi", url: "", affiliation: "", group: "second" },
    { id: "hammermann", name: "Andrea Hammermann", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Ströhlein's coauthors ===
    { id: "belot", name: "Michèle Belot", url: "", affiliation: "", group: "second" },
    { id: "cassar", name: "Lea Cassar", url: "", affiliation: "", group: "second" },
    { id: "malessa", name: "Nada Malessa", url: "", affiliation: "", group: "second" },
    { id: "hulla", name: "Markus Hulla", url: "", affiliation: "", group: "second" },
    { id: "hoffmann", name: "Marc Hoffmann", url: "", affiliation: "", group: "second" },
    { id: "pinckney", name: "Shane Pinckney", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Strobel's coauthors ===
    { id: "kirchkamp", name: "Oliver Kirchkamp", url: "", affiliation: "", group: "second" },
    { id: "dana", name: "Jason Dana", url: "", affiliation: "", group: "second" },
    { id: "heinrich", name: "Timo Heinrich", url: "", affiliation: "", group: "second" },
    { id: "meemann", name: "Carina Meemann", url: "", affiliation: "", group: "second" },
    { id: "traub", name: "Stefan Traub", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Alekseev's coauthors ===
    { id: "harrison", name: "Glenn W. Harrison", url: "", affiliation: "", group: "second" },
    { id: "lau", name: "Morten Lau", url: "", affiliation: "", group: "second" },
    { id: "ross_d", name: "Don Ross", url: "", affiliation: "", group: "second" },
    { id: "alm", name: "James Alm", url: "", affiliation: "", group: "second" },
    { id: "sadiraj", name: "Vjollca Sadiraj", url: "", affiliation: "", group: "second" },
    { id: "sjoquist", name: "David L. Sjoquist", url: "", affiliation: "", group: "second" },
    { id: "charness", name: "Gary Charness", url: "", affiliation: "", group: "second" },
    { id: "gneezy", name: "Uri Gneezy", url: "", affiliation: "", group: "second" },
    { id: "freer", name: "Mikhail Freer", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Anufriev's coauthors ===
    { id: "panchenko", name: "Valentyn Panchenko", url: "", affiliation: "", group: "second" },
    { id: "pin", name: "Paolo Pin", url: "", affiliation: "", group: "second" },
    { id: "neunhoeffer", name: "Frieder Neunhoeffer", url: "", affiliation: "", group: "second" },
    { id: "tuinstra", name: "Jan Tuinstra", url: "", affiliation: "", group: "second" },
    { id: "lamantia", name: "Fabio Lamantia", url: "", affiliation: "", group: "second" },
    { id: "radi", name: "Davide Radi", url: "", affiliation: "", group: "second" },
    { id: "arifovic", name: "Jasmina Arifovic", url: "", affiliation: "", group: "second" },
    { id: "hommes", name: "Cars Hommes", url: "", affiliation: "", group: "second" },
    { id: "duffy", name: "John Duffy", url: "", affiliation: "", group: "second" },
    { id: "borissov", name: "Kirill Borissov", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Grubiak's coauthors ===
    { id: "isoni", name: "Andrea Isoni", url: "", affiliation: "", group: "second" },
    { id: "sugden", name: "Robert Sugden", url: "", affiliation: "", group: "second" },
    { id: "zheng", name: "Jiawen Zheng", url: "", affiliation: "", group: "second" },
    { id: "arad", name: "Ayala Arad", url: "", affiliation: "", group: "second" },
    { id: "penczynski", name: "Stefan P. Penczynski", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Wang's coauthors ===
    { id: "zizzo", name: "Daniel J. Zizzo", url: "", affiliation: "", group: "second" },

    // === SECOND-DEGREE: Nasamu's coauthors ===
    { id: "connolly", name: "Sara Connolly", url: "", affiliation: "", group: "second" },
    { id: "bryan", name: "Mark Bryan", url: "", affiliation: "", group: "second" },
    { id: "bryce", name: "Anthony Bryce", url: "", affiliation: "", group: "second" },
    { id: "daniels", name: "Kevin Daniels", url: "", affiliation: "", group: "second" },
    { id: "fitzhugh", name: "Heather Fitzhugh", url: "", affiliation: "", group: "second" },
    { id: "michaelides", name: "George Michaelides", url: "", affiliation: "", group: "second" }
  ],

  links: [
    // === PAUL → DIRECT COAUTHORS ===
    { source: "paul", target: "nieken" },
    { source: "paul", target: "strohlein" },
    { source: "paul", target: "strobel" },
    { source: "paul", target: "alekseev" },
    { source: "paul", target: "anufriev" },
    { source: "paul", target: "cortes" },
    { source: "paul", target: "schafer" },
    { source: "paul", target: "grubiak" },
    { source: "paul", target: "nasamu" },
    { source: "paul", target: "wang" },
    { source: "paul", target: "woodard" },
    { source: "paul", target: "groos" },
    { source: "paul", target: "trenkle" },
    { source: "paul", target: "renner" },
    { source: "paul", target: "kandler" },
    { source: "paul", target: "lanza" },
    { source: "paul", target: "riedinger" },
    { source: "paul", target: "wuest" },
    { source: "paul", target: "greif" },
    { source: "paul", target: "dorner" },
    { source: "paul", target: "weinhardt" },
    { source: "paul", target: "busse" },
    { source: "paul", target: "a_sadrieh" },
    { source: "paul", target: "f_sadrieh" },

    // === PAUL → PROJECT ENTITIES ===
    { source: "paul", target: "proj_mansci" },
    { source: "paul", target: "proj_pnas" },
    { source: "paul", target: "proj_manydaughters" },
    { source: "paul", target: "proj_manydesigns" },
    { source: "paul", target: "proj_synthetic" },

    // === DIRECT-DIRECT connections (coauthors who also coauthor with each other) ===
    { source: "nieken", target: "strohlein" },
    { source: "nieken", target: "lanza" },
    { source: "nieken", target: "kandler" },
    { source: "nieken", target: "schafer" },
    { source: "nieken", target: "greif" },
    { source: "nieken", target: "weinhardt" },
    { source: "nieken", target: "a_sadrieh" },
    { source: "strohlein", target: "lanza" },
    { source: "strohlein", target: "kandler" },
    { source: "strohlein", target: "schafer" },
    { source: "strohlein", target: "nieken" },
    { source: "strobel", target: "alekseev" },
    { source: "strobel", target: "groos" },
    { source: "grubiak", target: "wang" },
    { source: "wuest", target: "greif" },
    { source: "nieken", target: "riedinger" },
    { source: "nieken", target: "trenkle" },    // via JMP
    { source: "nieken", target: "wuest" },       // via FrISB-BE
    { source: "nieken", target: "busse" },        // via FrISB-BE
    { source: "dorner", target: "greif" },
    { source: "dorner", target: "weinhardt" },
    { source: "dorner", target: "wuest" },

    // === DIRECT → PROJECT connections ===
    { source: "nieken", target: "proj_mansci" },
    { source: "strohlein", target: "proj_mansci" },

    // === CORTES-CORRALES → second-degree ===
    { source: "cortes", target: "polanski" },
    { source: "cortes", target: "rojo_arjona" },
    { source: "cortes", target: "kovenock" },
    { source: "cortes", target: "zanchettin" },
    { source: "cortes", target: "chowdhury" },

    // === NIEKEN → second-degree ===
    { source: "nieken", target: "dato" },
    { source: "nieken", target: "feess" },
    { source: "nieken", target: "schmitz" },
    { source: "nieken", target: "schottner" },
    { source: "nieken", target: "gurtler" },
    { source: "nieken", target: "munster" },
    { source: "nieken", target: "krakel" },
    { source: "nieken", target: "sliwka" },
    { source: "nieken", target: "berger" },
    { source: "nieken", target: "kvaloy" },
    { source: "nieken", target: "fest" },
    { source: "nieken", target: "staudt" },
    { source: "nieken", target: "breuer" },
    { source: "nieken", target: "przemeck" },
    { source: "nieken", target: "mohnen" },
    { source: "nieken", target: "n_zhou" },
    { source: "nieken", target: "djawadi" },
    { source: "nieken", target: "hammermann" },

    // cross-links within Nieken's network
    { source: "dato", target: "feess" },
    { source: "sliwka", target: "berger" },
    { source: "kvaloy", target: "schottner" },
    { source: "kvaloy", target: "fest" },

    // === STRÖHLEIN → second-degree ===
    { source: "strohlein", target: "belot" },
    { source: "strohlein", target: "cassar" },
    { source: "strohlein", target: "malessa" },
    { source: "strohlein", target: "hulla" },
    { source: "strohlein", target: "hoffmann" },
    { source: "strohlein", target: "pinckney" },

    // === STROBEL → second-degree ===
    { source: "strobel", target: "kirchkamp" },
    { source: "strobel", target: "dana" },
    { source: "strobel", target: "heinrich" },
    { source: "strobel", target: "meemann" },
    { source: "strobel", target: "traub" },

    // === ALEKSEEV → second-degree ===
    { source: "alekseev", target: "harrison" },
    { source: "alekseev", target: "lau" },
    { source: "alekseev", target: "ross_d" },
    { source: "alekseev", target: "alm" },
    { source: "alekseev", target: "sadiraj" },
    { source: "alekseev", target: "sjoquist" },
    { source: "alekseev", target: "charness" },
    { source: "alekseev", target: "gneezy" },
    { source: "alekseev", target: "freer" },

    // cross-links within Alekseev's network
    { source: "harrison", target: "lau" },
    { source: "harrison", target: "ross_d" },
    { source: "alm", target: "sadiraj" },
    { source: "alm", target: "sjoquist" },
    { source: "charness", target: "gneezy" },

    // === ANUFRIEV → second-degree ===
    { source: "anufriev", target: "panchenko" },
    { source: "anufriev", target: "pin" },
    { source: "anufriev", target: "neunhoeffer" },
    { source: "anufriev", target: "tuinstra" },
    { source: "anufriev", target: "lamantia" },
    { source: "anufriev", target: "radi" },
    { source: "anufriev", target: "arifovic" },
    { source: "anufriev", target: "hommes" },
    { source: "anufriev", target: "duffy" },
    { source: "anufriev", target: "borissov" },

    // cross-links within Anufriev's network
    { source: "lamantia", target: "radi" },
    { source: "hommes", target: "tuinstra" },

    // === GRUBIAK → second-degree ===
    { source: "grubiak", target: "isoni" },
    { source: "grubiak", target: "sugden" },
    { source: "grubiak", target: "zheng" },
    { source: "grubiak", target: "arad" },
    { source: "grubiak", target: "penczynski" },

    // cross-links: Grubiak-Wang shared coauthors
    { source: "wang", target: "isoni" },
    { source: "wang", target: "sugden" },
    { source: "wang", target: "zheng" },
    { source: "wang", target: "zizzo" },
    { source: "isoni", target: "sugden" },
    { source: "isoni", target: "zheng" },
    { source: "sugden", target: "zheng" },

    // === NASAMU → second-degree ===
    { source: "nasamu", target: "connolly" },
    { source: "nasamu", target: "bryan" },
    { source: "nasamu", target: "bryce" },
    { source: "nasamu", target: "daniels" },
    { source: "nasamu", target: "fitzhugh" },
    { source: "nasamu", target: "michaelides" },

    // cross-links within Nasamu's network
    { source: "connolly", target: "bryan" },
    { source: "connolly", target: "bryce" },
    { source: "daniels", target: "fitzhugh" },
    { source: "daniels", target: "michaelides" }
  ]
};
