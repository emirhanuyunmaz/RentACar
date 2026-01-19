import type { Knex } from 'knex';

exports.seed = async function (knex: Knex) {
  // await knex('users').truncate();
  await knex('users').insert([
    {
      name: 'Emirhan',
      surname: 'Uyunmaz',
      email: 'emirhan1@gmail.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Ayşe',
      surname: 'Yılmaz',
      email: 'ayse@gmail.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Mehmet',
      surname: 'Demir',
      email: 'mehmet@gmail.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Zeynep',
      surname: 'Çelik',
      email: 'zeynep@gmail.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Ahmet',
      surname: 'Kaya',
      email: 'ahmet@gmail.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Elif',
      surname: 'Şahin',
      email: 'elif@gmail.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Mert',
      surname: 'Koç',
      email: 'mert@gmail.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Selin',
      surname: 'Aydın',
      email: 'selin@gmail.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Can',
      surname: 'Güler',
      email: 'can@gmail.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Buse',
      surname: 'Aksoy',
      email: 'buse@gmail.com',
      password: '1234560',
      gender: 'female',
    },
  ]);
};
