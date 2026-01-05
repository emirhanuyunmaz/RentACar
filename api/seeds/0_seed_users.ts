import type { Knex } from 'knex';

exports.seed = async function (knex: Knex) {
  // await knex('users').del();

  await knex('users').insert([
    {
      name: 'Emirhan',
      surname: 'Uyunmaz',
      email: 'emirhan1@example.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Ayşe',
      surname: 'Yılmaz',
      email: 'ayse@example.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Mehmet',
      surname: 'Demir',
      email: 'mehmet@example.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Zeynep',
      surname: 'Çelik',
      email: 'zeynep@example.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Ahmet',
      surname: 'Kaya',
      email: 'ahmet@example.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Elif',
      surname: 'Şahin',
      email: 'elif@example.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Mert',
      surname: 'Koç',
      email: 'mert@example.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Selin',
      surname: 'Aydın',
      email: 'selin@example.com',
      password: '123456',
      gender: 'female',
    },
    {
      name: 'Can',
      surname: 'Güler',
      email: 'can@example.com',
      password: '123456',
      gender: 'male',
    },
    {
      name: 'Buse',
      surname: 'Aksoy',
      email: 'buse@example.com',
      password: '1234560',
      gender: 'female',
    },
  ]);
};
