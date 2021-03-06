/* 'use strict';
require("babel-polyfill");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.bulkInsert('users', [{
        id: 12,
        username : 'Jillian Carlile',
        email : 'jillian.carlile@gmail.com',
        password: '$2a$08$RBGCepToCHMYokvBGvC0I.Zrs948SJgWPUADex.sRYiEIaABNZRbq',
        bioText: 'Seeder user of TravelHive!',
        profileImg: "data:image/jpeg;base64,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",
        createdAt : new Date(),
        updatedAt : new Date(),
      }]),
      await queryInterface.bulkInsert('inspirations', [{ 

    ] 
   
  },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.bulkDelete('users',null, {}),
    ]  
  }
}; */

'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return [
       queryInterface.bulkInsert('users', [{     
        id: 1000000, 
        username : 'Travel Hive',
        email : 'travel.hive@gmail.com',
        password: '$2a$08$RBGCepToCHMYokvBGvC0I.Zrs948SJgWPUADex.sRYiEIaABNZRbq',
        bioText: 'Seeded user of TravelHive!',
        profileImg: "data:image/jpeg;base64,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",
        createdAt : new Date(),
        updatedAt : new Date(),
      }]),

      queryInterface.bulkInsert('inspirations', [{
        id: "d870dec2-f923-4869-89ef-c8b997016e23",
        userid: 1000000,
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2RlODZjMTUyZWY2YWRlZmYxNDljNWIxNzU2NjNmYThhNzI4NTVhNzMuanBnIl0sWyJwIiwidGh1bWIiLCI5ODB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/de86c152ef6adeff149c5b175663fa8a72855a73.jpg",
        title: "Kasbah du Toubkal",
        description: "My inspiration is sipping coffee here at the base of the High Atlas Mountain in Morrocco, breathing in the fresh air.",
        attribution: "https://www.atlasobscura.com/places/kasbah-du-toubkal",
        createdAt : new Date(),
        updatedAt : new Date(),

      }]),
     

    ] 
   
  },

  down:  (queryInterface, Sequelize) => {
    return [
       queryInterface.bulkDelete('users', [{            
        id : 1000000,
       }]),
       queryInterface.bulkDelete('inspirations', [{
        userid: 1000000 
       }]),          
    ]}
};

