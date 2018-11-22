angular.module("myApp", []).controller("mainCtrl", function($scope, $http) {
    //Call these functions
    $scope.questionnaireLocal = [];
    $scope.questionaire;
    $scope.option;
    $scope.pageInfo = {"p1":"With the support of ADEME, the Ministry of Ecology, Energy and the Sea and the Ministry of Economy and Finance, the association AGIT (Alliance for Green IT) and the eco-organizations of the recycling network of Waste Electrical and Electronic Equipment (WEEE) organize a survey to assess the deposits of computer and office equipment present in companies and more generally on the maturity of companies in France in the use of eco-responsible digital services.","p2":"1. The duration of the questionnaire is estimated at 15 minutes if you are able to answer questions directly.","p3":"2. You can return at any time on the questionnaire, answer in several times, your previous answers are recorded. In case of modification, only the last answer will be taken into account.","p4":"3. You can submit this questionnaire to several people in your organization. All you have to do is simply share the link to the questionnaire.","p5":"Thank you for participating in this survey. Your answer is invaluable to us to constitute the most representative sample of the companies in France.","surv":"Survey","title":"The Survey","welcome":"Welcome to Green4Challenge Survey","makeYourSurvey":"Make your Survey","completedSurvey":"Completed Survey","openingSurvey":"Opening Survey","notcompletedSurvey":"Not completed Survey","getSurvey":"Get Survey","introduction":"Introduction","complete":"Complete","home":"Home","email":"Email","sectorOfActivity":"Sector Of Activity","numberOfEmployees":"Number Of Employees","turnOver":"Turn Over"};
    $scope.language = "EN";
    /*$http.get('json/translate-en.json').then(function(response) {
        $scope.option = response.data;
    });*/
    $scope.init = function (){
        //Load JSON in questions and options
        if($scope.language == 'EN'){
            //load questions in English
            $http.get('json/questions-en.json').then(function(response) {
                $scope.questionaire = response.data;
            });
            $http.get('json/options-en.json').then(function(response) {
                $scope.option = response.data;
            });
            /*$scope.questionaire = {"userName":"","email":"","link":"","status":"","organisation":{"value":"","question1":{"id":1,"content":"1. In which sector of activity is your company active? (linked with your APE code)?","value":""},"question2":{"id":2,"content":"2. What is the number of employees in your company on 18/12/31 ?","value":""},"question3":{"id":3,"content":"3. What is the turnover of your company in the last fiscal year? (or annual budget for Public sector)","value":""},"question4":{"id":4,"content":"4. Do you develop digital services for internal or external use (sales to customers)?","value":true,"question5":{"id":5,"content":"5. What is the number of users of your digital services?","value":""},"EcoconceptionGoodPractices":{"value":"","question":[{"id":6,"content":"6. Do you apply the rules and best practices for digital accessibility?","value":""},{"id":7,"content":"7. Have you optimized the states and printouts in your application tools (reduced number of pages when printing, ink consumption ...)","value":""},{"id":8,"content":"Do you integrate the principles of the ecodesign of digital services?","value":""},{"id":9,"content":"Do you use a modular application architecture?","value":""},{"id":10,"content":"Do you do a design review at the end of your application's development?","value":""}]}},"question12":{"id":12,"content":"Do you have a server or do you only work with one or more workstations?","value":""}},"informationSystem":{"value":"","question11":{"id":11,"content":"What is the overall storage volume of your corporate data (centralized on external hard drives, centralized server, NAS, SAN ...) in Terabytes (TB) useful?","value":"","volume":0},"question12":{"id":12,"content":"Do you have a server or do you only work with one or more workstations?","value":"","posteDeTravail":{},"servuer":{"value":"","question13":{"id":13,"content":"Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?","value":"","unPlacard":{"question13":{"id":13,"content":"Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?","value":""}},"unVeritable":{"salleInformation":{"question14":{"id":14,"content":"Is your computer room in house or at a host?","value":""},"question15":{"id":15,"content":"What is the total area of your computer rooms (excluding technical infrastructure *)? (in m2)","value":"","area":0},"question16":{"id":16,"content":"Do you know the PUE * of your Data Center?","value":""},"question17":{"id":17,"content":"What is the rate of charge or energy use of your computer rooms?","value":""}},"DemarchesOptimation":{"question18":{"id":18,"content":"Have you led or are you planning actions to optimize your infrastructure? Especially :","value":"","question19":{"id":19,"content":"The purchase of non-IT equipment from IT rooms (air conditioning, air treatment, inverters, etc.) according to energy efficiency criteria","value":""},"question20":{"id":20,"content":"Implementing the good practices of the \"European Code of Conduct for DataCenter\"?","value":""},"question21":{"id":21,"content":"Data center PUE tracking","value":""},"question22":{"id":22,"content":"Regular monitoring of environmental indicators of computer rooms","value":""},"question23":{"id":23,"content":"Environmental impact analysis of the datacenter in life cycle approach","value":""},"question24":{"id":24,"content":"Optimizing the architecture and layout of rooms","value":""},"question25":{"id":25,"content":"The urbanization of halls in hot / cold aisles","value":""},"question26":{"id":26,"content":"Containment of air flows (corridors)","value":""},"question27":{"id":27,"content":"The use of natural cooling sources (freecooling)","value":""},"question28":{"id":28,"content":"Implementation of a heat recovery system for computer rooms (heating)","value":""},"question29":{"id":29,"content":"The set temperature in the cold corridor remains higher than 24 °","value":""},"question30":{"id":30,"content":"The choice of a modular datacenter architecture","value":""}}}}}}}},"InfrastructureInformatique":{"question31":{"id":31,"content":"Have you led or are you planning actions to optimize your infrastructure? Especially :","value":"","question32":{"id":32,"content":"Suspending network equipment","value":""},"question33":{"id":33,"content":"Pooling physical equipment","value":""},"question34":{"id":34,"content":"Uninstalling unnecessary infrastructure","value":""},"question35":{"id":35,"content":"Traceability of material elements (CMDB)","value":""},"question36":{"id":36,"content":"The correct sizing of the servers in relation to their use","value":""},"question37":{"id":37,"content":"Give priority to ASHRAE 2 compatible equipment","value":""},"question38":{"id":38,"content":"A procedure for provisioning and de-provisioning data-processing equipment in datacenters","value":""}},"question39":{"id":39,"content":"Do you know the number of physical servers and virtual servers in your company?","NombreDeServeur":{"question40":{"id":40,"content":"How many physical servers do you have?","value":0},"question41":{"id":41,"content":"How many virtual servers do you have?","value":0}},"EvolutionDuBesoinEnServeur":{"question42":{"id":42,"content":"What will be the evolution of your number of physical servers for 2019? (in% or quantity)","value":"","percent":0,"quantity":0},"question43":{"id":43,"content":"What will be the evolution of your number of virtual servers for 2019? (in% or quantity)","value":"","percent":0,"quantity":0}},"value":""}},"LaGouvernanceGCETI":{"question44":{"id":44,"content":"Has your company appointed a Green IT Manager / Digital Manager?","value":""},"question45":{"id":45,"content":"Do you have a responsible digital strategy broken down into an action plan?","value":""},"question46":{"id":46,"content":"Is Green IT a topic integrated into your CSR strategy?","value":""},"question47":{"id":47,"content":"Do you regularly evaluate the environmental impacts of your information system?","value":""},"question48":{"id":48,"content":"Do you have a team of competent referees on the topics of Green IT?","value":""},"question49":{"id":49,"content":"Have you integrated Green IT into your business strategy?","value":""}},"VotreInformation":{"question50":{"id":50,"content":"Do you have those equipments in your compagny?","value":"","equimpments":[{"id":51,"content":"Fixed stations, workstations","value":""},{"id":52,"content":"Laptops, digital tablets","value":""},{"id":53,"content":"Small printers (<15kg, potentially used by a household)","value":""},{"id":54,"content":"Flat screen monitors","value":""},{"id":55,"content":"Other flat screens (TV, projection screen, digital board ...)","value":""},{"id":56,"content":"CRT monitors (monitors or other)","value":""},{"id":57,"content":"Video projectors.","value":""},{"id":58,"content":"Mobile phones","value":""},{"id":59,"content":"Fixed telephones (standalone not connected to such a standard)","value":""},{"id":60,"content":"Digital cameras","value":""},{"id":61,"content":"Hard Disk Devices, Storage, Backup","value":""}]},"question62":{"id":62,"content":"Do you have other devices in your company?","value":""},"question63":{"id":63,"content":"Regarding other devices, do you have in your company:","value":"","question64":{"id":64,"content":"Keyboards","value":""},"question65":{"id":65,"content":"Mouse","value":""},"question66":{"id":66,"content":"Graphic tablets","value":""},"question67":{"id":67,"content":"Scanners","value":""},"question68":{"id":68,"content":"Speakers","value":""},"question69":{"id":69,"content":"Office automation","value":""}}},"ConsommationsEnergetiques":{"question70":{"id":70,"content":"Do you know the consumption of your workstation in kWh per year?","value":"","kWh":""},"question71":{"id":71,"content":"Do you track the energy consumption of your compagny activities?","value":""},"question72":{"id":72,"content":"Do you know the share of IT and IT equipment in your company's total energy consumption?","value":"","percent":""},"question73":{"id":73,"content":"Have you set up a power management system? (automatic shutdown / shutdown of workstations)","value":""}},"ImpressionConsommables":{"question74":{"id":74,"content":"Do you use copiers from a repackaging industry (second-hand / second-hand)?","value":""},"question75":{"id":75,"content":"Do you consolidate individual printers to shared printers?","value":""},"question76":{"id":76,"content":"Have you set up an identification system on printers (to trigger printing)?","value":""},"question77":{"id":77,"content":"What is the average life of your professional copier / MFP *? (* MFP Multi Fonction Printer)","value":"","comment":""},"question78":{"id":78,"content":"Are your printers set by default in eco mode? Especially :","value":"","question79":{"id":79,"content":"Energy saving (Automatic standby)","value":""},"question80":{"id":80,"content":"Black and white by default","value":""},"question81":{"id":81,"content":"Default duplex","value":""},"question82":{"id":82,"content":"Default draft mode","value":""}},"Consommables":{"question83":{"id":83,"content":"What is the number of pages printed / day / employee? (A4 equivalent)","value":""},"question84":{"id":84,"content":"Can you specify the number of cartridges / toners:","usedCartridges":0,"storedCartridges":0,"usedToners":0,"storedToners":0},"question85":{"id":85,"content":"Do you organize the separate collection of waste cartridges / toners?","value":""},"question86":{"id":86,"content":"Do you prefer the use of recycled paper?","value":""},"question87":{"id":87,"content":"Do you choose certified paper?","value":""},"question88":{"id":88,"content":"Do you organize the separate collection of waste paper for recycling?","value":""}}}};
            $scope.option = {"question1":{"Industry":{"content":"Industry","value":"Industry"},"Business":{"content":"Business","value":"Business"},"InformationAndcommunication":{"content":"Information and communication","value":"InfoCom"},"OtherServicesActivity":{"content":"Other services activity","value":"OtherServicesActivity"},"AllOtherActivities":{"content":"All other activities (financial, agricultural activities ...)","value":"allOther"},"Construction":{"content":"Construction","value":"Construction"},"PublicSector":{"content":"Public sector","value":"PublicSector"},"SpecializedScientificTechnicalAdministrativeSupportServices":{"content":"Specialized, Scientific and Technical or Administrative and Support Services Activities","value":"SpecializedScientificTechnicalAdministrativeSupportServices"},"RealEstate":{"content":"Real Estate","value":"RealEstate"}},"question2":{"opt0":{"content":"0","value":"0"},"opt1to2":{"content":"1 to 2","value":"1to2"},"opt3to9":{"content":"3 to 9","value":"3to9"},"opt10to49":{"content":"10to49","value":"10 to 49"},"opt50to249":{"content":"50 to 249","value":"50to249"},"opt250to4999":{"content":"250 to 4999","value":"250to4999"},"Morethan5000":{"content":"More than 5000","value":"Morethan5000"}},"question3":{"opt0to100K":{"content":"0 to 100K €","value":"0to100K €"},"opt100to500K":{"content":"100 to 500K €","value":"100to500K€"},"opt500to2M":{"content":"500 to 2 M €","value":"500to2M€"},"opt2to10M":{"content":"2 to 10 M€","value":"2to10M€"},"opt10to50M":{"content":"10 to 50 M€","value":"10to50M€"},"opt250to4999":{"content":"250 to 4999","value":"250to4999"},"Morethan50M":{"content":"More than 50 M€","value":"Morethan50M€"}},"question12":{"WeWorkWithWorkstation":{"content":"We work with workstation (s), without centralized physical server","value":"WeWorkWithWorkstation"},"centralizedServer":{"content":"We have (at least) a centralized physical server","value":"centralizedServer"}},"question13":{"RoomWithoutSystem":{"content":"A closet or a room without any specific system","value":"RoomWithoutSystem"},"DedicatedRoom":{"content":"A dedicated room","value":"DedicatedRoom"}},"question14":{"Internal":{"content":"Internal","value":"Internal"},"HostEuropeanCodeOfConduct":{"content":"Host Member of the European Code of Conduct for Datacenters","value":"HostEuropeanCodeOfConduct"},"NonHostEuropeanCodeOfConduct":{"content":"Non-adhering Host of the European Code of Conduct for Data Centers","value":"NonHostEuropeanCodeOfConduct"}},"question16":{"LessThan16":{"content":"Less than 1,6","value":"LessThan16"},"Between16and21":{"content":"Between 1,6 and 2,1","value":"Between16and21"},"MoreThan21 ":{"content":"More than 2,1","value":"MoreThan21"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question17":{"opt100-90":{"content":"100% - 90% ","value":"100%-90%"},"opt90-60":{"content":"90% - 60%","value":"90-60"},"Lessthan60":{"content":"Less than 60%","value":"Lessthan60"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question47":{"YesPartially":{"content":"Yes partially, including only equipment present in the company","value":"YesPartially"},"YesTotally":{"content":"Yes totally, including our internal equipment and services hosted by third parties","value":"YesTotally"},"No ":{"content":"No","value":"No"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question83":{"LessThan10":{"content":"Less than 10","value":"LessThan10"},"From10to20":{"content":"From 10 to 20","value":"From10to20"},"From20to30":{"content":"From 20 to 30","value":"From20to30"},"Morethan30 ":{"content":"More than 30","value":"Morethan30"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question84":{"Cartridgesusedayear":{"content":"Cartridges used a year","value":"Cartridgesusedayear"},"Cartridgesstoredintheaveragebusiness":{"content":"Cartridges stored in the average business","value":"Cartridgesstoredintheaveragebusiness"},"Tonersusedayear":{"content":"Toners used a year","value":"Tonersusedayear"},"Tonersstoredintheaveragebusiness ":{"content":"Toners stored in the average business","value":"Tonersstoredintheaveragebusiness"}},"question85":{"RepackagingIndustry":{"content":"Yes, to a repackaging industry","value":"RepackagingIndustry"},"RecyclingChannel":{"content":"Yes, towards a recycling channel (destruction)","value":"RecyclingChannel"},"SeparateCollection":{"content":"No no separate collection device is planned","value":"SeparateCollection"}},"question86":{"virginPaste":{"content":"Yes, our paper is made from virgin paste","value":"virginPaste"},"mixedPaper":{"content":"Yes, mixed paper","value":"MixedPaper"},"recycled":{"content":"Yes, 100% recycled","value":"recycled"},"noAttention":{"content":"I'm not paying attention","value":"noAttention"}},"question87":{"FSC":{"content":"Yes, FSC","value":"FSC"},"PEFC":{"content":"Yes, PEFC","value":"PEFC"},"blueAngel":{"content":"Yes, Blue Angel","value":"blueAngel"},"europeanLabel":{"content":"Yes, European Label","value":"europeanLabel"},"comment":{"content":"Yes, other >> comment fields to add","value":"comment"},"noAttention":{"content":"I'm not paying attention","value":"noAttention"}},"quantity":{"In%":{"content":"In %","value":"In%"},"InQuantity":{"content":"In quantity","value":"InQuantity"},"noAnswer":{"content":"I do not want to answer","value":"noAnswer"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"YesNo":{"yes":{"content":"Yes","value":"true"},"no":{"content":"No","value":"false"}},"YesNoUnknow":{"yes":{"content":"Yes","value":"true"},"no":{"content":"No","value":"false"},"noAnswer":{"content":"I do not want to answer","value":"noAnswer"},"dontKnow":{"content":"I don't know","value":"Idon'tknow"}}};*/
        }else if($scope.language == 'FR'){
            //load questions in French
            //Create json template to save data for user
            $http.get('json/questions-fr.json').then(function(response) {
                $scope.questionaire = response.data;
            });
            $http.get('json/options-fr.json').then(function(response) {
                $scope.option = response.data;
            });
            /*$scope.questionaire = {"userName":"","email":"","link":"","status":"","organisation":{"value":"","question1":{"id":1,"content":"1. In which sector of activity is your company active? (linked with your APE code)?","value":""},"question2":{"id":2,"content":"2. What is the number of employees in your company on 18/12/31 ?","value":""},"question3":{"id":3,"content":"3. What is the turnover of your company in the last fiscal year? (or annual budget for Public sector)","value":""},"question4":{"id":4,"content":"4. Do you develop digital services for internal or external use (sales to customers)?","value":true,"question5":{"id":5,"content":"5. What is the number of users of your digital services?","value":""},"EcoconceptionGoodPractices":{"value":"","question":[{"id":6,"content":"6. Do you apply the rules and best practices for digital accessibility?","value":""},{"id":7,"content":"7. Have you optimized the states and printouts in your application tools (reduced number of pages when printing, ink consumption ...)","value":""},{"id":8,"content":"Do you integrate the principles of the ecodesign of digital services?","value":""},{"id":9,"content":"Do you use a modular application architecture?","value":""},{"id":10,"content":"Do you do a design review at the end of your application's development?","value":""}]}},"question12":{"id":12,"content":"Do you have a server or do you only work with one or more workstations?","value":""}},"informationSystem":{"value":"","question11":{"id":11,"content":"What is the overall storage volume of your corporate data (centralized on external hard drives, centralized server, NAS, SAN ...) in Terabytes (TB) useful?","value":"","volume":0},"question12":{"id":12,"content":"Do you have a server or do you only work with one or more workstations?","value":"","posteDeTravail":{},"servuer":{"value":"","question13":{"id":13,"content":"Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?","value":"","unPlacard":{"question13":{"id":13,"content":"Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?","value":""}},"unVeritable":{"salleInformation":{"question14":{"id":14,"content":"Is your computer room in house or at a host?","value":""},"question15":{"id":15,"content":"What is the total area of your computer rooms (excluding technical infrastructure *)? (in m2)","value":"","area":0},"question16":{"id":16,"content":"Do you know the PUE * of your Data Center?","value":""},"question17":{"id":17,"content":"What is the rate of charge or energy use of your computer rooms?","value":""}},"DemarchesOptimation":{"question18":{"id":18,"content":"Have you led or are you planning actions to optimize your infrastructure? Especially :","value":"","question19":{"id":19,"content":"The purchase of non-IT equipment from IT rooms (air conditioning, air treatment, inverters, etc.) according to energy efficiency criteria","value":""},"question20":{"id":20,"content":"Implementing the good practices of the \"European Code of Conduct for DataCenter\"?","value":""},"question21":{"id":21,"content":"Data center PUE tracking","value":""},"question22":{"id":22,"content":"Regular monitoring of environmental indicators of computer rooms","value":""},"question23":{"id":23,"content":"Environmental impact analysis of the datacenter in life cycle approach","value":""},"question24":{"id":24,"content":"Optimizing the architecture and layout of rooms","value":""},"question25":{"id":25,"content":"The urbanization of halls in hot / cold aisles","value":""},"question26":{"id":26,"content":"Containment of air flows (corridors)","value":""},"question27":{"id":27,"content":"The use of natural cooling sources (freecooling)","value":""},"question28":{"id":28,"content":"Implementation of a heat recovery system for computer rooms (heating)","value":""},"question29":{"id":29,"content":"The set temperature in the cold corridor remains higher than 24 °","value":""},"question30":{"id":30,"content":"The choice of a modular datacenter architecture","value":""}}}}}}}},"InfrastructureInformatique":{"question31":{"id":31,"content":"Have you led or are you planning actions to optimize your infrastructure? Especially :","value":"","question32":{"id":32,"content":"Suspending network equipment","value":""},"question33":{"id":33,"content":"Pooling physical equipment","value":""},"question34":{"id":34,"content":"Uninstalling unnecessary infrastructure","value":""},"question35":{"id":35,"content":"Traceability of material elements (CMDB)","value":""},"question36":{"id":36,"content":"The correct sizing of the servers in relation to their use","value":""},"question37":{"id":37,"content":"Give priority to ASHRAE 2 compatible equipment","value":""},"question38":{"id":38,"content":"A procedure for provisioning and de-provisioning data-processing equipment in datacenters","value":""}},"question39":{"id":39,"content":"Do you know the number of physical servers and virtual servers in your company?","NombreDeServeur":{"question40":{"id":40,"content":"How many physical servers do you have?","value":0},"question41":{"id":41,"content":"How many virtual servers do you have?","value":0}},"EvolutionDuBesoinEnServeur":{"question42":{"id":42,"content":"What will be the evolution of your number of physical servers for 2019? (in% or quantity)","value":"","percent":0,"quantity":0},"question43":{"id":43,"content":"What will be the evolution of your number of virtual servers for 2019? (in% or quantity)","value":"","percent":0,"quantity":0}},"value":""}},"LaGouvernanceGCETI":{"question44":{"id":44,"content":"Has your company appointed a Green IT Manager / Digital Manager?","value":""},"question45":{"id":45,"content":"Do you have a responsible digital strategy broken down into an action plan?","value":""},"question46":{"id":46,"content":"Is Green IT a topic integrated into your CSR strategy?","value":""},"question47":{"id":47,"content":"Do you regularly evaluate the environmental impacts of your information system?","value":""},"question48":{"id":48,"content":"Do you have a team of competent referees on the topics of Green IT?","value":""},"question49":{"id":49,"content":"Have you integrated Green IT into your business strategy?","value":""}},"VotreInformation":{"question50":{"id":50,"content":"Do you have those equipments in your compagny?","value":"","equimpments":[{"id":51,"content":"Fixed stations, workstations","value":""},{"id":52,"content":"Laptops, digital tablets","value":""},{"id":53,"content":"Small printers (<15kg, potentially used by a household)","value":""},{"id":54,"content":"Flat screen monitors","value":""},{"id":55,"content":"Other flat screens (TV, projection screen, digital board ...)","value":""},{"id":56,"content":"CRT monitors (monitors or other)","value":""},{"id":57,"content":"Video projectors.","value":""},{"id":58,"content":"Mobile phones","value":""},{"id":59,"content":"Fixed telephones (standalone not connected to such a standard)","value":""},{"id":60,"content":"Digital cameras","value":""},{"id":61,"content":"Hard Disk Devices, Storage, Backup","value":""}]},"question62":{"id":62,"content":"Do you have other devices in your company?","value":""},"question63":{"id":63,"content":"Regarding other devices, do you have in your company:","value":"","question64":{"id":64,"content":"Keyboards","value":""},"question65":{"id":65,"content":"Mouse","value":""},"question66":{"id":66,"content":"Graphic tablets","value":""},"question67":{"id":67,"content":"Scanners","value":""},"question68":{"id":68,"content":"Speakers","value":""},"question69":{"id":69,"content":"Office automation","value":""}}},"ConsommationsEnergetiques":{"question70":{"id":70,"content":"Do you know the consumption of your workstation in kWh per year?","value":"","kWh":""},"question71":{"id":71,"content":"Do you track the energy consumption of your compagny activities?","value":""},"question72":{"id":72,"content":"Do you know the share of IT and IT equipment in your company's total energy consumption?","value":"","percent":""},"question73":{"id":73,"content":"Have you set up a power management system? (automatic shutdown / shutdown of workstations)","value":""}},"ImpressionConsommables":{"question74":{"id":74,"content":"Do you use copiers from a repackaging industry (second-hand / second-hand)?","value":""},"question75":{"id":75,"content":"Do you consolidate individual printers to shared printers?","value":""},"question76":{"id":76,"content":"Have you set up an identification system on printers (to trigger printing)?","value":""},"question77":{"id":77,"content":"What is the average life of your professional copier / MFP *? (* MFP Multi Fonction Printer)","value":"","comment":""},"question78":{"id":78,"content":"Are your printers set by default in eco mode? Especially :","value":"","question79":{"id":79,"content":"Energy saving (Automatic standby)","value":""},"question80":{"id":80,"content":"Black and white by default","value":""},"question81":{"id":81,"content":"Default duplex","value":""},"question82":{"id":82,"content":"Default draft mode","value":""}},"Consommables":{"question83":{"id":83,"content":"What is the number of pages printed / day / employee? (A4 equivalent)","value":""},"question84":{"id":84,"content":"Can you specify the number of cartridges / toners:","usedCartridges":0,"storedCartridges":0,"usedToners":0,"storedToners":0},"question85":{"id":85,"content":"Do you organize the separate collection of waste cartridges / toners?","value":""},"question86":{"id":86,"content":"Do you prefer the use of recycled paper?","value":""},"question87":{"id":87,"content":"Do you choose certified paper?","value":""},"question88":{"id":88,"content":"Do you organize the separate collection of waste paper for recycling?","value":""}}}};
            $scope.option = {"question1":{"Industry":{"content":"Industry","value":"Industry"},"Business":{"content":"Business","value":"Business"},"InformationAndcommunication":{"content":"Information and communication","value":"InfoCom"},"OtherServicesActivity":{"content":"Other services activity","value":"OtherServicesActivity"},"AllOtherActivities":{"content":"All other activities (financial, agricultural activities ...)","value":"allOther"},"Construction":{"content":"Construction","value":"Construction"},"PublicSector":{"content":"Public sector","value":"PublicSector"},"SpecializedScientificTechnicalAdministrativeSupportServices":{"content":"Specialized, Scientific and Technical or Administrative and Support Services Activities","value":"SpecializedScientificTechnicalAdministrativeSupportServices"},"RealEstate":{"content":"Real Estate","value":"RealEstate"}},"question2":{"opt0":{"content":"0","value":"0"},"opt1to2":{"content":"1 to 2","value":"1to2"},"opt3to9":{"content":"3 to 9","value":"3to9"},"opt10to49":{"content":"10to49","value":"10 to 49"},"opt50to249":{"content":"50 to 249","value":"50to249"},"opt250to4999":{"content":"250 to 4999","value":"250to4999"},"Morethan5000":{"content":"More than 5000","value":"Morethan5000"}},"question3":{"opt0to100K":{"content":"0 to 100K €","value":"0to100K €"},"opt100to500K":{"content":"100 to 500K €","value":"100to500K€"},"opt500to2M":{"content":"500 to 2 M €","value":"500to2M€"},"opt2to10M":{"content":"2 to 10 M€","value":"2to10M€"},"opt10to50M":{"content":"10 to 50 M€","value":"10to50M€"},"opt250to4999":{"content":"250 to 4999","value":"250to4999"},"Morethan50M":{"content":"More than 50 M€","value":"Morethan50M€"}},"question12":{"WeWorkWithWorkstation":{"content":"We work with workstation (s), without centralized physical server","value":"WeWorkWithWorkstation"},"centralizedServer":{"content":"We have (at least) a centralized physical server","value":"centralizedServer"}},"question13":{"RoomWithoutSystem":{"content":"A closet or a room without any specific system","value":"RoomWithoutSystem"},"DedicatedRoom":{"content":"A dedicated room","value":"DedicatedRoom"}},"question14":{"Internal":{"content":"Internal","value":"Internal"},"HostEuropeanCodeOfConduct":{"content":"Host Member of the European Code of Conduct for Datacenters","value":"HostEuropeanCodeOfConduct"},"NonHostEuropeanCodeOfConduct":{"content":"Non-adhering Host of the European Code of Conduct for Data Centers","value":"NonHostEuropeanCodeOfConduct"}},"question16":{"LessThan16":{"content":"Less than 1,6","value":"LessThan16"},"Between16and21":{"content":"Between 1,6 and 2,1","value":"Between16and21"},"MoreThan21 ":{"content":"More than 2,1","value":"MoreThan21"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question17":{"opt100-90":{"content":"100% - 90% ","value":"100%-90%"},"opt90-60":{"content":"90% - 60%","value":"90-60"},"Lessthan60":{"content":"Less than 60%","value":"Lessthan60"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question47":{"YesPartially":{"content":"Yes partially, including only equipment present in the company","value":"YesPartially"},"YesTotally":{"content":"Yes totally, including our internal equipment and services hosted by third parties","value":"YesTotally"},"No ":{"content":"No","value":"No"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question83":{"LessThan10":{"content":"Less than 10","value":"LessThan10"},"From10to20":{"content":"From 10 to 20","value":"From10to20"},"From20to30":{"content":"From 20 to 30","value":"From20to30"},"Morethan30 ":{"content":"More than 30","value":"Morethan30"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"question84":{"Cartridgesusedayear":{"content":"Cartridges used a year","value":"Cartridgesusedayear"},"Cartridgesstoredintheaveragebusiness":{"content":"Cartridges stored in the average business","value":"Cartridgesstoredintheaveragebusiness"},"Tonersusedayear":{"content":"Toners used a year","value":"Tonersusedayear"},"Tonersstoredintheaveragebusiness ":{"content":"Toners stored in the average business","value":"Tonersstoredintheaveragebusiness"}},"question85":{"RepackagingIndustry":{"content":"Yes, to a repackaging industry","value":"RepackagingIndustry"},"RecyclingChannel":{"content":"Yes, towards a recycling channel (destruction)","value":"RecyclingChannel"},"SeparateCollection":{"content":"No no separate collection device is planned","value":"SeparateCollection"}},"question86":{"virginPaste":{"content":"Yes, our paper is made from virgin paste","value":"virginPaste"},"mixedPaper":{"content":"Yes, mixed paper","value":"MixedPaper"},"recycled":{"content":"Yes, 100% recycled","value":"recycled"},"noAttention":{"content":"I'm not paying attention","value":"noAttention"}},"question87":{"FSC":{"content":"Yes, FSC","value":"FSC"},"PEFC":{"content":"Yes, PEFC","value":"PEFC"},"blueAngel":{"content":"Yes, Blue Angel","value":"blueAngel"},"europeanLabel":{"content":"Yes, European Label","value":"europeanLabel"},"comment":{"content":"Yes, other >> comment fields to add","value":"comment"},"noAttention":{"content":"I'm not paying attention","value":"noAttention"}},"quantity":{"In%":{"content":"In %","value":"In%"},"InQuantity":{"content":"In quantity","value":"InQuantity"},"noAnswer":{"content":"I do not want to answer","value":"noAnswer"},"IdontKnow":{"content":"I don't know","value":"IdontKnow"}},"YesNo":{"yes":{"content":"Yes","value":"true"},"no":{"content":"No","value":"false"}},"YesNoUnknow":{"yes":{"content":"Yes","value":"true"},"no":{"content":"No","value":"false"},"noAnswer":{"content":"I do not want to answer","value":"noAnswer"},"dontKnow":{"content":"I don't know","value":"Idon'tknow"}}};*/
        }
    }
    $scope.init();
    $scope.switchLang = function(){
        if($scope.language == "EN"){
            $scope.language = "FR";
            $scope.pageInfo = {"p1":"Avec le soutien de l'ADEME, du Ministère de l'écologie, de l'énergie et de la mer et du Ministère de l'économie et des finances, de l'association AGIT (Alliance for Green IT) et des éco-organisations du réseau de recyclage des déchets d'équipements électriques et électroniques (DEEE) organiser une enquête pour évaluer les dépôts d'équipements informatiques et bureautiques présents dans les entreprises et plus généralement sur la maturité des entreprises en France dans l'utilisation de services numériques éco-responsables.","p2":"1. La durée du questionnaire est estimée à 15 minutes si vous êtes capable de répondre directement à des questions.","p3":"2. Vous pouvez revenir à tout moment sur le questionnaire, répondre en plusieurs fois, vos réponses précédentes sont enregistrées.En cas de modification, seule la dernière réponse sera prise en compte.","p4":"3. Vous pouvez soumettre ce questionnaire à plusieurs personnes de votre organisation. Tout ce que vous avez à faire est simplement de partager le lien vers le questionnaire.","p5":"Merci d'avoir participé à cette enquête. Votre réponse nous est précieuse pour constituer l’échantillon le plus représentatif des entreprises en France.","surv":"Questionnaire","title":"La Questionnaire","welcome":"Bienvenue en Green4Challenge Survey","makeYourSurvey":"Faites votre enquête","completedSurvey":"Enquête terminée","openingSurvey":"Enquête d'ouverture","notcompletedSurvey":"Enquête non complétée","getSurvey":"Obtenir l'enquête","introduction":"Introduction","complete":"Achevée","home":"Accueil","email":"Email","sectorOfActivity":"Secteur d'activité","numberOfEmployees":"Nombre d'employés","turnOver":"Tourner"};
            /*$http.get('json/translate-fr.json').then(function(response) {
                $scope.option = response.data;
            });*/
        }else{
            $scope.language = "EN";
            $scope.pageInfo = {"p1":"With the support of ADEME, the Ministry of Ecology, Energy and the Sea and the Ministry of Economy and Finance, the association AGIT (Alliance for Green IT) and the eco-organizations of the recycling network of Waste Electrical and Electronic Equipment (WEEE) organize a survey to assess the deposits of computer and office equipment present in companies and more generally on the maturity of companies in France in the use of eco-responsible digital services.","p2":"1. The duration of the questionnaire is estimated at 15 minutes if you are able to answer questions directly.","p3":"2. You can return at any time on the questionnaire, answer in several times, your previous answers are recorded. In case of modification, only the last answer will be taken into account.","p4":"3. You can submit this questionnaire to several people in your organization. All you have to do is simply share the link to the questionnaire.","p5":"Thank you for participating in this survey. Your answer is invaluable to us to constitute the most representative sample of the companies in France.","surv":"Survey","title":"The Survey","welcome":"Welcome to Green4Challenge Survey","makeYourSurvey":"Make your Survey","completedSurvey":"Completed Survey","openingSurvey":"Opening Survey","notcompletedSurvey":"Not completed Survey","getSurvey":"Get Survey","introduction":"Introduction","complete":"Complete","home":"Home","email":"Email","sectorOfActivity":"Sector Of Activity","numberOfEmployees":"Number Of Employees","turnOver":"Turn Over"};
            /*$http.get('json/translate-en.json').then(function(response) {
                $scope.option = response.data;
            });*/
        }
    }
    $scope.submit = function(){
        console.log('in submit function');
    }
});

function goToSurvey() {
    document.getElementById('surveyForm').scrollIntoView();
}
