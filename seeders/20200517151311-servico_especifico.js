'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('servico_especifico', [
        {
          servico: 'Nail design',
          fk_servico_geral: 1
        },
        {
          servico: 'Alongamento de unha em gel',
          fk_servico_geral: 1
        },
        {
          servico: 'Alongamento de unha em fibra',
          fk_servico_geral: 1
        },
        {
          servico: 'Alongamento de unha em acrílico',
          fk_servico_geral: 1
        },
        {
          servico: 'Fortalecimento de unhas',
          fk_servico_geral: 1
        },
        {
          servico: 'Nail design',
          fk_servico_geral: 2
        },
        {
          servico: 'Spa para os pés',
          fk_servico_geral: 2
        },
        {
          servico: 'Fortalecimento de unhas',
          fk_servico_geral: 2
        },
        {
          servico: 'Tratamento de unhas encravadas',
          fk_servico_geral: 3
        },
        {
          servico: 'Tratamento de pele',
          fk_servico_geral: 3
        },
        {
          servico: 'Tratamento de micose',
          fk_servico_geral: 3
        },
        {
          servico: 'Reflexos',
          fk_servico_geral: 4
        },
        {
          servico: 'Mechas',
          fk_servico_geral: 4
        },
        {
          servico: 'Californiana',
          fk_servico_geral: 4
        },
        {
          servico: 'Luzes',
          fk_servico_geral: 4
        },
        {
          servico: 'Balayage',
          fk_servico_geral: 4
        },
        {
          servico: 'Degradê',
          fk_servico_geral: 4
        },
        {
          servico: 'Tintura completa',
          fk_servico_geral: 4
        },
        {
          servico: 'Hidratação',
          fk_servico_geral: 5
        },
        {
          servico: 'Cauterização',
          fk_servico_geral: 5
        },
        {
          servico: 'Restauração',
          fk_servico_geral: 5
        },
        {
          servico: 'Peeling',
          fk_servico_geral: 5
        },
        {
          servico: 'Matização',
          fk_servico_geral: 5
        },
        {
          servico: 'Lavagem',
          fk_servico_geral: 5
        },
        {
          servico: 'Progressiva',
          fk_servico_geral: 6
        },
        {
          servico: 'Botox',
          fk_servico_geral: 6
        },
        {
          servico: 'Relaxamento',
          fk_servico_geral: 6
        },
        {
          servico: 'Escova',
          fk_servico_geral: 6
        },
        {
          servico: 'Limpeza facial',
          fk_servico_geral: 7
        },
        {
          servico: 'Hidratação facial',
          fk_servico_geral: 7
        },
        {
          servico: 'Esfoliação',
          fk_servico_geral: 7
        },
        {
          servico: 'Peeling',
          fk_servico_geral: 7
        },
        {
          servico: 'Linfodrenagem',
          fk_servico_geral: 8
        },
        {
          servico: 'Drenagem com bambu',
          fk_servico_geral: 8
        },
        {
          servico: 'Drenagem de alta pressão',
          fk_servico_geral: 8
        },
        {
          servico: 'Drenagem ortomolecular',
          fk_servico_geral: 8
        },
        {
          servico: 'Massagem sueca',
          fk_servico_geral: 9
        },
        {
          servico: 'Massagem com pedras quentes',
          fk_servico_geral: 9
        },
        {
          servico: 'Massagem de aromaterapia',
          fk_servico_geral: 9
        },
        {
          servico: 'Reflexologia',
          fk_servico_geral: 9
        },
        {
          servico: 'Massagem shiatsu',
          fk_servico_geral: 9
        },
        {
          servico: 'Massagem tailandesa',
          fk_servico_geral: 9
        },
        {
          servico: 'Depilação de buço',
          fk_servico_geral: 10
        },
        {
          servico: 'Depilação de costeleta',
          fk_servico_geral: 10
        },
        {
          servico: 'Depilação facial completa',
          fk_servico_geral: 10
        },
        {
          servico: 'Depilação íntima',
          fk_servico_geral: 10
        },
        {
          servico: 'Maquiagem para noiva',
          fk_servico_geral: 11
        },
        {
          servico: 'Maquiagem para madrinha',
          fk_servico_geral: 11
        },
        {
          servico: 'Maquiagem para debutante',
          fk_servico_geral: 11
        },
        {
          servico: 'Maquiagem para formatura',
          fk_servico_geral: 11
        },
        {
          servico: 'Maquiagem para festa',
          fk_servico_geral: 11
        },
        {
          servico: 'Aplicação de primers',
          fk_servico_geral: 11
        },
        {
          servico: 'Correção',
          fk_servico_geral: 11
        },
        {
          servico: 'Aplicação de base',
          fk_servico_geral: 11
        },
        {
          servico: 'Maquiagem para os olhos',
          fk_servico_geral: 11
        },
        {
          servico: 'Penteado para noiva',
          fk_servico_geral: 12
        },
        {
          servico: 'Penteado social',
          fk_servico_geral: 12
        },
        {
          servico: 'Trança embutida',
          fk_servico_geral: 12
        },
        {
          servico: 'Coque estilizado',
          fk_servico_geral: 12
        },
        {
          servico: 'Escama de peixe',
          fk_servico_geral: 12
        },
        {
          servico: 'Design',
          fk_servico_geral: 13
        },
        {
          servico: 'Aplicação de henna',
          fk_servico_geral: 13
        },
        {
          servico: 'Desondulação de fios',
          fk_servico_geral: 13
        },
        {
          servico: 'Micropigmentação esfumada',
          fk_servico_geral: 13
        },
        {
          servico: 'Micropigmentação fio a fio',
          fk_servico_geral: 13
        },
        {
          servico: 'Barba americana',
          fk_servico_geral: 14
        },
        {
          servico: 'Barba tradicional',
          fk_servico_geral: 14
        },
        {
          servico: 'Barba desenhada',
          fk_servico_geral: 14
        },
        {
          servico: 'Big Chop',
          fk_servico_geral: 15
        },
        {
          servico: 'Long bob',
          fk_servico_geral: 15
        },
        {
          servico: 'Aparo de pontas',
          fk_servico_geral: 15
        },
        {
          servico: 'Repicado',
          fk_servico_geral: 15
        },
        {
          servico: 'Corte com tesoura',
          fk_servico_geral: 16
        },
        {
          servico: 'Corte com máquina',
          fk_servico_geral: 16
        },
        {
          servico: 'Design com navalha',
          fk_servico_geral: 16
        },
        {
          servico: 'Blowout',
          fk_servico_geral: 16
        },
        {
          servico: 'Degradê',
          fk_servico_geral: 16
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('servico_especifico', null, {});
  }
};
