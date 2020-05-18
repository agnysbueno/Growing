'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('servico_especifico', [
        {
          id: 1,
          servico: 'Nail design',
          fk_servico_geral: 1
        },
        {
          id: 2,
          servico: 'Alongamento de unha em gel',
          fk_servico_geral: 1
        },
        {
          id: 3,
          servico: 'Alongamento de unha em fibra',
          fk_servico_geral: 1
        },
        {
          id: 4,
          servico: 'Alongamento de unha em acrílico',
          fk_servico_geral: 1
        },
        {
          id: 5,
          servico: 'Fortalecimento de unhas',
          fk_servico_geral: 1
        },
        {
          id: 6,
          servico: 'Nail design',
          fk_servico_geral: 2
        },
        {
          id: 7,
          servico: 'Spa para os pés',
          fk_servico_geral: 2
        },
        {
          id: 8,
          servico: 'Fortalecimento de unhas',
          fk_servico_geral: 2
        },
        {
          id: 9,
          servico: 'Tratamento de unhas encravadas',
          fk_servico_geral: 3
        },
        {
          id: 10,
          servico: 'Tratamento de pele',
          fk_servico_geral: 3
        },
        {
          id: 11,
          servico: 'Tratamento de micose',
          fk_servico_geral: 3
        },
        {
          id: 12,
          servico: 'Reflexos',
          fk_servico_geral: 4
        },
        {
          id: 13,
          servico: 'Mechas',
          fk_servico_geral: 4
        },
        {
          id: 14,
          servico: 'Californiana',
          fk_servico_geral: 4
        },
        {
          id: 15,
          servico: 'Luzes',
          fk_servico_geral: 4
        },
        {
          id: 16,
          servico: 'Balayage',
          fk_servico_geral: 4
        },
        {
          id: 17,
          servico: 'Degradê',
          fk_servico_geral: 4
        },
        {
          id: 18,
          servico: 'Tintura completa',
          fk_servico_geral: 4
        },
        {
          id: 19,
          servico: 'Hidratação',
          fk_servico_geral: 5
        },
        {
          id: 20,
          servico: 'Cauterização',
          fk_servico_geral: 5
        },
        {
          id: 21,
          servico: 'Restauração',
          fk_servico_geral: 5
        },
        {
          id: 22,
          servico: 'Peeling',
          fk_servico_geral: 5
        },
        {
          id: 23,
          servico: 'Matização',
          fk_servico_geral: 5
        },
        {
          id: 24,
          servico: 'Lavagem',
          fk_servico_geral: 5
        },
        {
          id: 25,
          servico: 'Progressiva',
          fk_servico_geral: 6
        },
        {
          id: 26,
          servico: 'Botox',
          fk_servico_geral: 6
        },
        {
          id: 27,
          servico: 'Relaxamento',
          fk_servico_geral: 6
        },
        {
          id: 28,
          servico: 'Escova',
          fk_servico_geral: 6
        },
        {
          id: 29,
          servico: 'Limpeza facial',
          fk_servico_geral: 7
        },
        {
          id: 30,
          servico: 'Hidratação facial',
          fk_servico_geral: 7
        },
        {
          id: 31,
          servico: 'Esfoliação',
          fk_servico_geral: 7
        },
        {
          id: 32,
          servico: 'Peeling',
          fk_servico_geral: 7
        },
        {
          id: 33,
          servico: 'Linfodrenagem',
          fk_servico_geral: 8
        },
        {
          id: 34,
          servico: 'Drenagem com bambu',
          fk_servico_geral: 8
        },
        {
          id: 35,
          servico: 'Drenagem de alta pressão',
          fk_servico_geral: 8
        },
        {
          id: 36,
          servico: 'Drenagem ortomolecular',
          fk_servico_geral: 8
        },
        {
          id: 37,
          servico: 'Massagem sueca',
          fk_servico_geral: 9
        },
        {
          id: 38,
          servico: 'Massagem com pedras quentes',
          fk_servico_geral: 9
        },
        {
          id: 39,
          servico: 'Massagem de aromaterapia',
          fk_servico_geral: 9
        },
        {
          id: 40,
          servico: 'Reflexologia',
          fk_servico_geral: 9
        },
        {
          id: 41,
          servico: 'Massagem shiatsu',
          fk_servico_geral: 9
        },
        {
          id: 42,
          servico: 'Massagem tailandesa',
          fk_servico_geral: 9
        },
        {
          id: 43,
          servico: 'Depilação de buço',
          fk_servico_geral: 10
        },
        {
          id: 44,
          servico: 'Depilação de costeleta',
          fk_servico_geral: 10
        },
        {
          id: 45,
          servico: 'Depilação facial completa',
          fk_servico_geral: 10
        },
        {
          id: 46,
          servico: 'Depilação íntima',
          fk_servico_geral: 10
        },
        {
          id: 47,
          servico: 'Maquiagem para noiva',
          fk_servico_geral: 11
        },
        {
          id: 48,
          servico: 'Maquiagem para madrinha',
          fk_servico_geral: 11
        },
        {
          id: 49,
          servico: 'Maquiagem para debutante',
          fk_servico_geral: 11
        },
        {
          id: 50,
          servico: 'Maquiagem para formatura',
          fk_servico_geral: 11
        },
        {
          id: 51,
          servico: 'Maquiagem para festa',
          fk_servico_geral: 11
        },
        {
          id: 52,
          servico: 'Aplicação de primers',
          fk_servico_geral: 11
        },
        {
          id: 53,
          servico: 'Correção',
          fk_servico_geral: 11
        },
        {
          id: 54,
          servico: 'Aplicação de base',
          fk_servico_geral: 11
        },
        {
          id: 55,
          servico: 'Maquiagem para os olhos',
          fk_servico_geral: 11
        },
        {
          id: 56,
          servico: 'Penteado para noiva',
          fk_servico_geral: 12
        },
        {
          id: 57,
          servico: 'Penteado social',
          fk_servico_geral: 12
        },
        {
          id: 58,
          servico: 'Trança embutida',
          fk_servico_geral: 12
        },
        {
          id: 59,
          servico: 'Coque estilizado',
          fk_servico_geral: 12
        },
        {
          id: 60,
          servico: 'Escama de peixe',
          fk_servico_geral: 12
        },
        {
          id: 61,
          servico: 'Design',
          fk_servico_geral: 13
        },
        {
          id: 62,
          servico: 'Aplicação de henna',
          fk_servico_geral: 13
        },
        {
          id: 63,
          servico: 'Desondulação de fios',
          fk_servico_geral: 13
        },
        {
          id: 64,
          servico: 'Micropigmentação esfumada',
          fk_servico_geral: 13
        },
        {
          id: 65,
          servico: 'Micropigmentação fio a fio',
          fk_servico_geral: 13
        },
        {
          id: 66,
          servico: 'Barba americana',
          fk_servico_geral: 14
        },
        {
          id: 67,
          servico: 'Barba tradicional',
          fk_servico_geral: 14
        },
        {
          id: 68,
          servico: 'Barba desenhada',
          fk_servico_geral: 14
        },
        {
          id: 69,
          servico: 'Big Chop',
          fk_servico_geral: 15
        },
        {
          id: 70,
          servico: 'Long bob',
          fk_servico_geral: 15
        },
        {
          id: 71,
          servico: 'Aparo de pontas',
          fk_servico_geral: 15
        },
        {
          id: 72,
          servico: 'Repicado',
          fk_servico_geral: 15
        },
        {
          id: 73,
          servico: 'Corte com tesoura',
          fk_servico_geral: 16
        },
        {
          id: 74,
          servico: 'Corte com máquina',
          fk_servico_geral: 16
        },
        {
          id: 75,
          servico: 'Design com navalha',
          fk_servico_geral: 16
        },
        {
          id: 76,
          servico: 'Blowout',
          fk_servico_geral: 16
        },
        {
          id: 77,
          servico: 'Degradê',
          fk_servico_geral: 16
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('servico_especifico', null, {});
  }
};
