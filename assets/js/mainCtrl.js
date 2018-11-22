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
        document.getElementById('lang').innerHTML="FR";
        document.getElementById('surv').innerHTML="Survey";
        document.getElementById('title').innerHTML="The Survey";
        return 1;
    }
    if (document.getElementById('lang').innerHTML==="FR") {
        document.getElementById('p1').innerHTML = "Avec le soutien de l'ADEME, du Ministère de l'écologie, de l'énergie et de la mer et du Ministère de l'économie et\n" +
            "    des finances, de l'association AGIT (Alliance for Green IT) et des éco-organisations du réseau de recyclage des déchets\n" +
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
        document.getElementById('surv').innerHTML="Questionnaire";
        document.getElementById('title').innerHTML="La Questionnaire";
        return 1;
    }
}