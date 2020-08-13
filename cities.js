var cities = [
  'Toronto',
  ,
  'Montréal',
  ,
  'Vancouver',
  ,
  'Ottawa',
  ,
  'Calgary',
  ,
  'Edmonton',
  ,
  'Hamilton',
  ,
  'Winnipeg',
  ,
  'Québec',
  ,
  'Oshawa',
  ,
  'Kitchener',
  ,
  'Halifax',
  ,
  'London',
  ,
  'Windsor',
  ,
  'Victoria',
  ,
  'Saskatoon',
  ,
  'Barrie',
  ,
  'Regina',
  ,
  'Sudbury',
  ,
  'Abbotsford',
  ,
  'Sarnia',
  ,
  'Sherbrooke',
  ,
  'Saint John’s',
  ,
  'Kelowna',
  ,
  'Trois-Rivières',
  ,
  'Kingston',
  ,
  'Thunder Bay',
  ,
  'Moncton',
  ,
  'Saint John',
  ,
  'Nanaimo',
  ,
  'Peterborough',
  ,
  'Saint-Jérôme',
  ,
  'Red Deer',
  ,
  'Lethbridge',
  ,
  'Kamloops',
  ,
  'Prince George',
  ,
  'Medicine Hat',
  ,
  'Drummondville',
  ,
  'Chicoutimi',
  ,
  'Fredericton',
  ,
  'Chilliwack',
  ,
  'North Bay',
  ,
  'Shawinigan-Sud',
  ,
  'Cornwall',
  ,
  'Joliette',
  ,
  'Belleville',
  ,
  'Charlottetown',
  ,
  'Victoriaville',
  ,
  'Grande Prairie',
  ,
  'Penticton',
  ,
  'Sydney',
  ,
  'Orillia',
  ,
  'Rimouski',
  ,
  'Timmins',
  ,
  'Prince Albert',
  ,
  'Campbell River',
  ,
  'Courtenay',
  ,
  'Orangeville',
  ,
  'Moose Jaw',
  ,
  'Brandon',
  ,
  'Brockville',
  ,
  'Saint-Georges',
  ,
  'Sept-Îles',
  ,
  'Rouyn-Noranda',
  ,
  'Whitehorse',
  ,
  'Owen Sound',
  ,
  'Fort McMurray',
  ,
  'Corner Brook',
  ,
  'Val-d’Or',
  ,
  'New Glasgow',
  ,
  'Terrace',
  ,
  'North Battleford',
  ,
  'Yellowknife',
  ,
  'Fort Saint John',
  ,
  'Cranbrook',
  ,
  'Edmundston',
  ,
  'Rivière-du-Loup',
  ,
  'Camrose',
  ,
  'Pembroke',
  ,
  'Yorkton',
  ,
  'Swift Current',
  ,
  'Prince Rupert',
  ,
  'Williams Lake',
  ,
  'Brooks',
  ,
  'Quesnel',
  ,
  'Thompson',
  ,
  'Dolbeau',
  ,
  'Powell River',
  ,
  'Wetaskiwin',
  ,
  'Nelson',
  ,
  'Mont-Laurier',
  ,
  'Kenora',
  ,
  'Dawson Creek',
  ,
  'Amos',
  ,
  'Baie-Comeau',
  ,
  'Hinton',
  ,
  'Selkirk',
  ,
  'Steinbach',
  ,
  'Weyburn',
  ,
  'Amherst',
  ,
  'Kapuskasing',
  ,
  'Dauphin',
  ,
  'Dryden',
  ,
  'Revelstoke',
  ,
  'Happy Valley',
  ,
  'Banff',
  ,
  'Yarmouth',
  ,
  'La Sarre',
  ,
  'Parry Sound',
  ,
  'Stephenville',
  ,
  'Antigonish',
  ,
  'Flin Flon',
  ,
  'Fort Nelson',
  ,
  'Smithers',
  ,
  'Iqaluit',
  ,
  'Bathurst',
  ,
  'The Pas',
  ,
  'Norway House',
  ,
  'Meadow Lake',
  ,
  'Vegreville',
  ,
  'Stettler',
  ,
  'Peace River',
  ,
  'New Liskeard',
  ,
  'Hearst',
  ,
  'Creston',
  ,
  'Marathon',
  ,
  'Cochrane',
  ,
  'Kindersley',
  ,
  'Liverpool',
  ,
  'Melville',
  ,
  'Channel-Port aux Basques',
  ,
  'Deer Lake',
  ,
  'Saint-Augustin',
  ,
  'Digby',
  ,
  'Jasper',
  ,
  'Hay River',
  ,
  'Windsor',
  ,
  'La Ronge',
  ,
  'Deer Lake',
  ,
  'Gaspé',
  ,
  'Atikokan',
  ,
  'Gander',
  ,
  'Fort Chipewyan',
  ,
  'Shelburne',
  ,
  'Inuvik',
  ,
  'Lac La Biche',
  ,
  'Lillooet',
  ,
  'Chapleau',
  ,
  'Burns Lake',
  ,
  'Gimli',
  ,
  'Athabasca',
  ,
  'Nelson House',
  ,
  'Rankin Inlet',
  ,
  'Port Hardy',
  ,
  'Biggar',
  ,
  'Wiarton',
  ,
  'Wawa',
  ,
  'Hudson Bay',
  ,
  'Matagami',
  ,
  'Arviat',
  ,
  'Attawapiskat',
  ,
  'Red Lake',
  ,
  'Moosonee',
  ,
  'Tofino',
  ,
  'Igloolik',
  ,
  'Inukjuak',
  ,
  'Little Current',
  ,
  'Baker Lake',
  ,
  'Pond Inlet',
  ,
  'Cap-Chat',
  ,
  'Cambridge Bay',
  ,
  'Thessalon',
  ,
  'New Bella Bella',
  ,
  'Cobalt',
  ,
  'Cape Dorset',
  ,
  'Pangnirtung',
  ,
  'West Dawson',
  ,
  'Kugluktuk',
  ,
  'Geraldton',
  ,
  'Gillam',
  ,
  'Kuujjuaq',
  ,
  'Lake Louise',
  ,
  'Nipigon',
  ,
  'Nain',
  ,
  'Gjoa Haven',
  ,
  'Fort McPherson',
  ,
  'Argentia',
  ,
  'Norman Wells',
  ,
  'Churchill',
  ,
  'Repulse Bay',
  ,
  'Tuktoyaktuk',
  ,
  'Berens River',
  ,
  'Shamattawa',
  ,
  'Baddeck',
  ,
  'Coral Harbour',
  ,
  'La Scie',
  ,
  'Watson Lake',
  ,
  'Taloyoak',
  ,
  'Natashquan',
  ,
  'Buchans',
  ,
  'Hall Beach',
  ,
  'Arctic Bay',
  ,
  'Fort Good Hope',
  ,
  'Mingan',
  ,
  'Kangirsuk',
  ,
  'Sandspit',
  ,
  'Délįne',
  ,
  'Fort Smith',
  ,
  'Cartwright',
  ,
  'Holman',
  ,
  'Lynn Lake',
  ,
  'Schefferville',
  ,
  'Trout River',
  ,
  'Forteau Bay',
  ,
  'Fort Resolution',
  ,
  'Hopedale',
  ,
  'Pukatawagan',
  ,
  'Trepassey',
  ,
  'Kimmirut',
  ,
  'Chesterfield Inlet',
  ,
  'Eastmain',
  ,
  'Dease Lake',
  ,
  'Paulatuk',
  ,
  'Fort Simpson',
  ,
  'Brochet',
  ,
  'Cat Lake',
  ,
  'Radisson',
  ,
  'Port-Menier',
  ,
  'Resolute',
  ,
  'Saint Anthony',
  ,
  'Port Hope Simpson',
  ,
  'Oxford House',
  ,
  'Tsiigehtchic',
  ,
  'Ivujivik',
  ,
  'Stony Rapids',
  ,
  'Alert',
  ,
  'Fort Severn',
  ,
  'Rigolet',
  ,
  'Lansdowne House',
  ,
  'Salluit',
  ,
  'Tutselk’e',
  ,
  'Uranium City',
  ,
  'Burwash Landing',
  ,
  'Grise Fiord',
  ,
  'Big Beaverhouse',
  ,
  'Island Lake',
  ,
  'Ennadai'
];

var sortedCities = cities.sort();
