function switchlang() {
    if (document.getElementById('lang').innerHTML==="EN") {
        document.getElementById('p1').innerHTML = "With the support of ADEME, the Ministry of Ecology, Energy and the Sea and the Ministry of Economy and Finance, the\n" +
            "    association AGIT (Alliance for Green IT) and the eco-organizations of the recycling network of Waste Electrical and\n" +
            "    Electronic Equipment (WEEE) organize a survey to assess the deposits of computer and office equipment present in\n" +
            "    companies and more generally on the maturity of companies in France in the use of eco-responsible digital services.";
        document.getElementById('p2').innerHTML = "1. The duration of the questionnaire is estimated at 15 minutes if you are able to answer questions directly.";
        document.getElementById('p3').innerHTML = "2. You can return at any time on the questionnaire, answer in several times, your previous answers are recorded.\n" +
            "        In case of modification, only the last answer will be taken into account.";
        document.getElementById('p4').innerHTML = "3. You can submit this questionnaire to several people in your organization. All you have to do is simply share\n" +
            "        the link to the questionnaire.";
        document.getElementById('p5').innerHTML = "Thank you for participating in this survey. Your answer is invaluable to us to constitute the most representative\n" +
            "    sample of the companies in France.";
        document.getElementById('Null1').innerHTML="...Choose";
        document.getElementById('Null2').innerHTML="...Choose";
        document.getElementById('Null3').innerHTML="...Choose";
        document.getElementById('Null83').innerHTML="...Choose";
        document.getElementById('lang').innerHTML="FR";
        document.getElementById('surv').innerHTML="Survey";
        document.getElementById('Oui5').innerHTML="Yes";
        document.getElementById('Oui79').innerHTML="Yes";
        document.getElementById('title').innerHTML="The Survey";
        document.getElementById('1').innerHTML="1. In which sector of activity is your company active? (linked with your APE code)";
        document.getElementById('2').innerHTML="2. What is the number of employees in your company on 18/12/31 ?";
        document.getElementById('3').innerHTML="3. What is the turnover of your company in the last fiscal year? (or annual budget for Public sector)";
        document.getElementById('4').innerHTML="4. Do you develop digital services for internal or external use (sales to customers)?";
        document.getElementById('5').innerHTML="5. What is the number of users of your digital services?";
        document.getElementById('6').innerHTML="6. Do you apply the rules and best practices for digital accessibility?";
        document.getElementById('7').innerHTML="7. Have you optimized the states and printouts in your application tools (reduced number of pages when printing, ink consumption ...)";
        document.getElementById('8').innerHTML="8. Do you integrate the principles of the ecodesign of digital services?";
        document.getElementById('9').innerHTML="9. Do you use a modular application architecture?";
        document.getElementById('10').innerHTML="10. Do you do a design review at the end of your application's development?";
        document.getElementById('11').innerHTML="11. What is the overall storage volume of your corporate data (centralized on external hard drives, centralized server, NAS, SAN ...) in Terabytes (TB) useful?";
        document.getElementById('12').innerHTML="12. Do you have a server or do you only work with one or more workstations?";
        document.getElementById('13').innerHTML="13. Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?";
        document.getElementById('14').innerHTML="14. Is your computer room in house or at a host?";
        document.getElementById('15').innerHTML="15. What is the total area of your computer rooms (excluding technical infrastructure *)? (in m2)";
        document.getElementById('16').innerHTML="16. Do you know the PUE * of your Data Center?";
        document.getElementById('17').innerHTML="17. What is the rate of charge or energy use of your computer rooms?";
        document.getElementById('18').innerHTML="18. Have you led or are you planning actions to optimize your infrastructure? Especially :";
        document.getElementById('19').innerHTML="19. The purchase of non-IT equipment from IT rooms (air conditioning, air treatment, inverters, etc.) according to energy efficiency criteria\n";
        document.getElementById('20').innerHTML="20. Implementing the good practices of the European Code of Conduct for DataCenter?";
        document.getElementById('21').innerHTML="21. Data center PUE tracking";
        document.getElementById('22').innerHTML="22. Regular monitoring of environmental indicators of computer rooms";
        document.getElementById('23').innerHTML="23. Environmental impact analysis of the datacenter in life cycle approach";
        document.getElementById('24').innerHTML="24. Optimizing the architecture and layout of rooms";
        document.getElementById('25').innerHTML="25. The urbanization of halls in hot / cold aisles";
        document.getElementById('26').innerHTML="26. Containment of air flows (corridors)";
        document.getElementById('27').innerHTML="27. The use of natural cooling sources (freecooling)";
        document.getElementById('28').innerHTML="28. Implementation of a heat recovery system for computer rooms (heating)";
        document.getElementById('29').innerHTML="29. The set temperature in the cold corridor remains higher than 24 °";
        document.getElementById('30').innerHTML="31. Have you led or are you planning actions to optimize your infrastructure? Especially :";
        document.getElementById('31').innerHTML="32. Suspending network equipment";
        document.getElementById('32').innerHTML="33. Pooling physical equipment";
        document.getElementById('33').innerHTML="34. Uninstalling unnecessary infrastructure";
        document.getElementById('34').innerHTML="35. Traceability of material elements (CMDB)";
        document.getElementById('35').innerHTML="36. The correct sizing of the servers in relation to their use";
        document.getElementById('36').innerHTML="37. Give priority to ASHRAE 2 compatible equipment";
        document.getElementById('37').innerHTML="38. A procedure for provisioning and de-provisioning data-processing equipment in datacenters";
        document.getElementById('38').innerHTML="38. A procedure for provisioning and de-provisioning data-processing equipment in datacenters";
        document.getElementById('39').innerHTML="39. Do you know the number of physical servers and virtual servers in your company?";
        document.getElementById('40').innerHTML="40. How many physical servers do you have?";
        document.getElementById('41').innerHTML="41. How many virtual servers do you have?";
        document.getElementById('42').innerHTML="42. What will be the evolution of your number of physical servers for 2019? (in% or quantity)";
        document.getElementById('43').innerHTML="43. What will be the evolution of your number of virtual servers for 2019? (in% or quantity)";
        document.getElementById('44').innerHTML="44. Has your company appointed a Green IT Manager / Digital Manager?";
        document.getElementById('45').innerHTML="45. Do you have a responsible digital strategy broken down into an action plan?";
        document.getElementById('46').innerHTML="46. Is Green IT a topic integrated into your CSR strategy?";
        document.getElementById('47').innerHTML="47. Do you regularly evaluate the environmental impacts of your information system?";
        document.getElementById('48').innerHTML="48. Do you have a team of competent referees on the topics of Green IT?";
        document.getElementById('49').innerHTML="49. Have you integrated Green IT into your business strategy";
        document.getElementById('50').innerHTML="50. Do you have those equipments in your company:";
        document.getElementById('51').innerHTML="51. Fixed stations, workstations";
        document.getElementById('52').innerHTML="52. Laptops, digital tablets";
        document.getElementById('53').innerHTML="53. Small printers (<15kg, potentially used by a household)";
        document.getElementById('54').innerHTML="54. Flat screen monitors";
        document.getElementById('55').innerHTML="55. Other flat screens (TV, projection screen, digital board ...)";
        document.getElementById('56').innerHTML="56. CRT monitors (monitors or other)";
        document.getElementById('57').innerHTML="57. Video projectors";
        document.getElementById('58').innerHTML="58. Mobile phones";
        document.getElementById('59').innerHTML="59. Fixed telephones (standalone not connected to such a standard)";
        document.getElementById('60').innerHTML="60. Digital cameras";
        document.getElementById('61').innerHTML="61. Hard Disk Devices, Storage, Backup";
        document.getElementById('62').innerHTML="62. Do you have other devices in your company?";
        document.getElementById('63').innerHTML="63. Regarding other devices, do you have in your company:";
        document.getElementById('64').innerHTML="64. Keyboards";
        document.getElementById('65').innerHTML="65. Mouse";
        document.getElementById('66').innerHTML="66. Graphic tablets";
        document.getElementById('67').innerHTML="67. Scanners";
        document.getElementById('68').innerHTML="68. Speakers";
        document.getElementById('69').innerHTML="69. Office automation";
        document.getElementById('70').innerHTML="70. Do you know the consumption of your workstation in kWh per year?";
        document.getElementById('71').innerHTML="71. Do you track the energy consumption of your compagny activities?";
        document.getElementById('72').innerHTML="72. Do you know the share of IT and IT equipment in your company's total energy consumption?";
        document.getElementById('73').innerHTML="73. Have you set up a power management system? (automatic shutdown / shutdown of workstations)";
        document.getElementById('74').innerHTML="74. Do you use copiers from a repackaging industry (second-hand / second-hand)?";
        document.getElementById('75').innerHTML="75. Do you consolidate individual printers to shared printers?";
        document.getElementById('76').innerHTML="76. Have you set up an identification system on printers (to trigger printing)?";
        document.getElementById('77').innerHTML="77. What is the average life of your professional copier / MFP *?";
        document.getElementById('78').innerHTML="78. Are your printers set by default in eco mode? Especially :";
        document.getElementById('79').innerHTML="79. Energy saving (Automatic standby)";
        document.getElementById('80').innerHTML="80. Black and white by default";
        document.getElementById('81').innerHTML="81. Default duplex";
        document.getElementById('82').innerHTML="82. Default draft mode";
        document.getElementById('83').innerHTML="83. What is the number of pages printed / day / employee? (A4 equivalent)";
        document.getElementById('84').innerHTML="84. Can you specify the number of cartridges / toners:";
        document.getElementById('85').innerHTML="85. Do you organize the separate collection of waste cartridges / toners?";
        document.getElementById('86').innerHTML="86. Do you prefer the use of recycled paper?";
        document.getElementById('87').innerHTML="87. Do you choose certified paper?";
        document.getElementById('88').innerHTML="88. Do you organize the separate collection of waste paper for recycling?";

        return 1;
    }
    if (document.getElementById('lang').innerHTML==="FR") {
        document.getElementById('p1').innerHTML = "Avec le soutien de l'ADEME, du Ministère de l'écologie, de l'énergie et de la mer et du Ministère de l'économie et" +
            "    des finances, de l'association AGIT (Alliance for Green IT) et des éco-organisations du réseau de recyclage des déchets" +
            "    d'équipements électriques et électroniques (DEEE) organiser une enquête pour évaluer les dépôts d'équipements informatiques\n" +
            "    et bureautiques présents dans les entreprises et plus généralement sur la maturité des entreprises en France dans\n" +
            "    l'utilisation de services numériques éco-responsables." ;
        document.getElementById('p2').innerHTML = "1. La durée du questionnaire est estimée à 15 minutes si vous êtes capable de répondre directement à des questions.";
        document.getElementById('p3').innerHTML = "2. Vous pouvez revenir à tout moment sur le questionnaire, répondre en plusieurs fois, vos réponses précédentes sont enregistrées.\n" +
            "    En cas de modification, seule la dernière réponse sera prise en compte.";
        document.getElementById('p4').innerHTML = "3. Vous pouvez soumettre ce questionnaire à plusieurs personnes de votre organisation. Tout ce que vous avez à faire est\n" +
            "    simplement de partager le lien vers le questionnaire.";
        document.getElementById('p5').innerHTML = "Merci d'avoir participé à cette enquête. Votre réponse nous est précieuse pour constituer l’échantillon le plus\n" +
            "    représentatif des entreprises en France.";
        document.getElementById('lang').innerHTML="EN";
        document.getElementById('Oui5').innerHTML="Oui";
        document.getElementById('Oui79').innerHTML="Oui";
        document.getElementById('Null1').innerHTML="...Choisissez";
        document.getElementById('Null2').innerHTML="...Choisissez";
        document.getElementById('Null3').innerHTML="...Choisissez";
        document.getElementById('Null83').innerHTML="...Choisissez";
        document.getElementById('surv').innerHTML="Questionnaire";
        document.getElementById('title').innerHTML="Le Questionnaire";
        document.getElementById('1').innerHTML="1. Dans quel secteur d'activité votre entreprise est-elle active? (lié avec votre code APE)";
        document.getElementById('2').innerHTML="2. Quel est le nombre d'employés dans votre entreprise le 18/12/31?";
        document.getElementById('3').innerHTML="3. Quel est le chiffre d'affaires de votre entreprise au cours du dernier exercice? (ou budget annuel du secteur public)";
        document.getElementById('4').innerHTML="4. Développez-vous des services numériques à usage interne ou externe (vente aux clients)?";
        document.getElementById('5').innerHTML="5. Quel est le nombre d'utilisateurs de vos services numériques?";
        document.getElementById('6').innerHTML="6. Appliquez-vous les règles et les meilleures pratiques pour l’accessibilité numérique?";
        document.getElementById('7').innerHTML="7. Avez-vous optimisé les états et les impressions dans vos outils d'application (nombre de pages réduit lors de l'impression, consommation d'encre, etc.)";
        document.getElementById('8').innerHTML="8. Intégrez-vous les principes de l'écoconception des services numériques?";
        document.getElementById('9').innerHTML="9. Utilisez-vous une architecture d’application modulaire?";
        document.getElementById('10').innerHTML="10. Faites-vous une revue de conception à la fin du développement de votre application?";
        document.getElementById('11').innerHTML="11. Quel est le volume de stockage global de vos données d'entreprise (centralisé sur des disques durs externes, serveur centralisé, NAS, SAN ...) en téraoctets (To)?";
        document.getElementById('12').innerHTML="12. Avez-vous un serveur ou travaillez-vous uniquement avec un ou plusieurs postes de travail?";
        document.getElementById('13').innerHTML="13. Avez-vous une pièce dédiée, une simple pièce ou une armoire avec baie dédiée à votre infrastructure informatique?";
        document.getElementById('14').innerHTML="14. Votre salle informatique est-elle chez vous ou chez un hôte?";
        document.getElementById('15').innerHTML="15. Quelle est la surface totale de vos salles informatiques (hors infrastructure technique *)? (en m2)";
        document.getElementById('16').innerHTML="16. Connaissez-vous le PUE(Power Usage Effectiveness) de votre centre de données?";
        document.getElementById('17').innerHTML="17. Quel est le taux de charge ou d’utilisation énergétique de vos salles informatiques?";
        document.getElementById('18').innerHTML="18. Avez-vous dirigé ou envisagez-vous des actions pour optimiser votre infrastructure? Notamment :";
        document.getElementById('19').innerHTML="19.L'achat d'équipements non informatiques auprès de salles informatiques (climatisation, traitement de l'air, onduleurs, etc.) selon des critères d'efficacité énergétique";
        document.getElementById('20').innerHTML="20. Mise en œuvre des bonnes pratiques du \"Code de conduite européen des centres de données\"?";
        document.getElementById('21').innerHTML="21. Centre de données suivi PUE?";
        document.getElementById('22').innerHTML="22. Surveillance régulière des indicateurs environnementaux des salles informatiques?";
        document.getElementById('23').innerHTML="23. Analyse d'impact environnemental de l'approche du centre de données en cycle de vie?";
        document.getElementById('24').innerHTML="24. Optimiser l'architecture et l'aménagement des salles";
        document.getElementById('25').innerHTML="25. L'urbanisation des halls dans les allées chaudes / froides";
        document.getElementById('26').innerHTML="26. Confinement des flux d'air (corridors)?";
        document.getElementById('27').innerHTML="27. L'utilisation de sources de refroidissement naturelles (free cooling)?";
        document.getElementById('28').innerHTML="28. Mise en place d'un système de récupération de chaleur pour les salles informatiques (chauffage)?";
        document.getElementById('29').innerHTML="29. La température de consigne dans le couloir froid reste supérieure à 24 °";
        document.getElementById('30').innerHTML="30. Le choix d'une architecture de centre de données modulaire?";
        document.getElementById('31').innerHTML="31. Avez-vous dirigé ou envisagez-vous des actions pour optimiser votre infrastructure? Notamment :";
        document.getElementById('32').innerHTML="32.Suspension d'équipements réseau";
        document.getElementById('33').innerHTML="33. Mise en commun des équipements physiques";
        document.getElementById('34').innerHTML="34. Désinstallation des infrastructures inutiles";
        document.getElementById('35').innerHTML="35. Traçabilité des éléments matériels (CMDB)";
        document.getElementById('36').innerHTML="36. Le dimensionnement correct des serveurs par rapport à leur utilisation";
        document.getElementById('37').innerHTML="37. Donner la priorité aux équipements compatibles ASHRAE 2";
        document.getElementById('38').innerHTML="38. Une procédure de provisioning et de déprovisioning d'équipements de traitement de données dans des centres de donnée?";
        document.getElementById('39').innerHTML="39. Connaissez-vous le nombre de serveurs physiques et virtuels dans votre entreprise?";
        document.getElementById('40').innerHTML="40. Combien de serveurs physiques avez-vous?";
        document.getElementById('41').innerHTML="41. Combien de serveurs virtuels avez-vous?";
        document.getElementById('42').innerHTML="42. Quelle sera l'évolution de votre nombre de serveurs physiques pour 2019? (en% ou quantité)";
        document.getElementById('43').innerHTML="43. Quelle sera l'évolution de votre nombre de serveurs virtuels pour 2019? (en% ou quantité)";
        document.getElementById('44').innerHTML="44. Votre entreprise a-t-elle nommé un responsable informatique vert / responsable numérique?";
        document.getElementById('45').innerHTML="45. Avez-vous une stratégie numérique responsable déclinée en un plan d’action?";
        document.getElementById('46').innerHTML="46. ​​L'informatique verte est-elle un sujet intégré à votre stratégie de RSE?";
        document.getElementById('47').innerHTML="47. Evaluez-vous régulièrement les impacts environnementaux de votre système d’information?";
        document.getElementById('48').innerHTML="48. Avez-vous une équipe d’arbitres compétents sur les thèmes du Green IT?";
        document.getElementById('49').innerHTML="49. Avez-vous intégré l'informatique verte dans votre stratégie d'entreprise?";
        document.getElementById('50').innerHTML="50. Avez-vous ces équipements dans votre entreprise:";
        document.getElementById('51').innerHTML="51. Stations fixes, postes de travail";
        document.getElementById('52').innerHTML="52. ordinateurs portables, tablettes numériques";
        document.getElementById('53').innerHTML="53. Petites imprimantes (<15 kg, potentiellement utilisées par un ménage)";
        document.getElementById('54').innerHTML="54. Moniteurs à écran plat";
        document.getElementById('55').innerHTML="55. Autres écrans plats (TV, écran de projection, tableau numérique ...)";
        document.getElementById('56').innerHTML="56. Moniteurs CRT (moniteurs ou autres)";
        document.getElementById('57').innerHTML="57. Projecteurs vidéo";
        document.getElementById('58').innerHTML="58. Téléphones mobiles";
        document.getElementById('59').innerHTML="59. Téléphones fixes (autonomes non connectés à une telle norme)";
        document.getElementById('60').innerHTML="60. Appareils photo numériques";
        document.getElementById('61').innerHTML="61. Périphériques à disque dur, stockage, sauvegarde";
        document.getElementById('62').innerHTML="62. Avez-vous d'autres appareils dans votre entreprise?";
        document.getElementById('63').innerHTML="63. Concernant les autres appareils, avez-vous dans votre entreprise:";
        document.getElementById('64').innerHTML="64. Claviers";
        document.getElementById('65').innerHTML="65. Souris";
        document.getElementById('66').innerHTML="66. Tablettes graphiques";
        document.getElementById('67').innerHTML="67. Scanners";
        document.getElementById('68').innerHTML="68. haut-parleurs";
        document.getElementById('69').innerHTML="69. Bureautique";
        document.getElementById('70').innerHTML="70. Connaissez-vous la consommation de votre poste de travail en kWh par an?";
        document.getElementById('71').innerHTML="71. Suivez-vous la consommation énergétique des activités de votre entreprise?";
        document.getElementById('72').innerHTML="72. Connaissez-vous la part de l'informatique et des équipements informatiques dans la consommation totale d'énergie de votre entreprise?";
        document.getElementById('73').innerHTML="73. Avez-vous mis en place un système de gestion de l'alimentation? (arrêt automatique / arrêt des postes de travail)";
        document.getElementById('74').innerHTML="74. Utilisez-vous des copieurs provenant d’une industrie de reconditionnement (d’occasion ou d’occasion)?";
        document.getElementById('75').innerHTML="75. Consolidez-vous des imprimantes individuelles en imprimantes partagées?";
        document.getElementById('76').innerHTML="76. Avez-vous configuré un système d’identification sur les imprimantes (pour déclencher l’impression)?";
        document.getElementById('77').innerHTML="77. Quelle est la durée de vie moyenne de votre copieur / MFP professionnel *?";
        document.getElementById('78').innerHTML="78. Vos imprimantes sont-elles définies par défaut en mode éco? Notamment :";
        document.getElementById('79').innerHTML="79. Économie d'énergie (veille automatique)";
        document.getElementById('80').innerHTML="80. Noir et blanc par défaut";
        document.getElementById('81').innerHTML="81. Duplex par défaut";
        document.getElementById('82').innerHTML="82. Mode brouillon par défaut";
        document.getElementById('83').innerHTML="83. Quel est le nombre de pages imprimées / jour / employé? (Équivalent A4)";
        document.getElementById('84').innerHTML="84. Pouvez-vous préciser le nombre de cartouches / toners:";
        document.getElementById('85').innerHTML="85. Organisez-vous la collecte séparée des cartouches / toners usagés?";
        document.getElementById('86').innerHTML="86. Préférez-vous l'utilisation de papier recyclé?";
        document.getElementById('87').innerHTML="87. Choisissez-vous du papier certifié?";
        document.getElementById('88').innerHTML="88. Organisez-vous la collecte séparée des vieux papiers pour le recyclage?";

        return 1;
    }
}
function disable11() {
    document.getElementById('Text11').disabled= true;
}
function enable11() {
    document.getElementById('Text11').disabled= false;
    document.getElementById('Option11_1').checked=false;
    document.getElementById('Option11_2').checked=false;
}
function disable15() {
    document.getElementById('Text15').disabled= true;
}
function enable15() {
    document.getElementById('Text15').disabled= false;
    document.getElementById('Option15_1').checked=false;
    document.getElementById('Option15_2').checked=false;
}
function disable42() {
    document.getElementById('Text42_1').disabled= true;
    document.getElementById('Text42_2').disabled= true;
}
function enable42() {
    document.getElementById('Text42_1').disabled= false;
    document.getElementById('Text42_2').disabled= false;
    document.getElementById('Option42_1').checked=false;
    document.getElementById('Option42_2').checked=false;
}

function disable43() {
    document.getElementById('Text43_1').disabled= true;
    document.getElementById('Text43_2').disabled= true;
}
function enable43() {
    document.getElementById('Text43_1').disabled= false;
    document.getElementById('Text43_2').disabled= false;
    document.getElementById('Option43_1').checked=false;
    document.getElementById('Option43_2').checked=false;
}

function enable70() {
    document.getElementById('Text70').disabled=false;
}
function disable70() {
    document.getElementById('Text70').disabled=true;
}
function enable77() {
    document.getElementById('Text77').disabled=false;
}
function disable77() {
    document.getElementById('Text77').disabled=true;
}

function disenable87() {
   if (document.getElementById('Checkb1').checked == false) {
        document.getElementById('Text87').disabled = true;
    }
    else
       document.getElementById('Text87').disabled=false;
}