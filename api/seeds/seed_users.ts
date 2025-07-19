import type { Knex } from "knex";

// const { v4: uuidv4 } = require('uuid');

exports.seed = async function (knex:Knex) {
  
  await knex('users').del();

  await knex('users').insert([
    {
      
      name: 'Emirhan',
      surname: 'Uyunmaz',
      email: 'emirhan1@example.com',
      password: 'hashed_password1',
      gender: 'male',

    },
    {
      
      name: 'Ayşe',
      surname: 'Yılmaz',
      email: 'ayse@example.com',
      password: 'hashed_password2',
      gender: 'female',

    },
    {
      
      name: 'Mehmet',
      surname: 'Demir',
      email: 'mehmet@example.com',
      password: 'hashed_password3',
      gender: 'male',

    },
    {
      
      name: 'Zeynep',
      surname: 'Çelik',
      email: 'zeynep@example.com',
      password: 'hashed_password4',
      gender: 'female',

    },
    {
      
      name: 'Ahmet',
      surname: 'Kaya',
      email: 'ahmet@example.com',
      password: 'hashed_password5',
      gender: 'male',

    },
    {
      
      name: 'Elif',
      surname: 'Şahin',
      email: 'elif@example.com',
      password: 'hashed_password6',
      gender: 'female',

    },
    {
      
      name: 'Mert',
      surname: 'Koç',
      email: 'mert@example.com',
      password: 'hashed_password7',
      gender: 'male',

    },
    {
      
      name: 'Selin',
      surname: 'Aydın',
      email: 'selin@example.com',
      password: 'hashed_password8',
      gender: 'female',

    },
    {
      
      name: 'Can',
      surname: 'Güler',
      email: 'can@example.com',
      password: 'hashed_password9',
      gender: 'male',

    },
    {
      
      name: 'Buse',
      surname: 'Aksoy',
      email: 'buse@example.com',
      password: 'hashed_password10',
      gender: 'female',

    },
  ]);
};
