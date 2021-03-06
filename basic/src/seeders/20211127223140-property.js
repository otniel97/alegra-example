'use strict';
const Portfolio = require('../models').Portfolio;
const PropertyType = require('../models').PropertyType;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const portfolios = await Portfolio.findAll();
    const propertyTypes = await PropertyType.findAll();

    return queryInterface.bulkInsert('Properties', [{
      name: 'Casa 1',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 1',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 1',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 1',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 1',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 2',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 2',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 2',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 2',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 2',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 3',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 3',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 3',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 3',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 3',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 4',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 4',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 4',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 4',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 4',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[0].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 5',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 5',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 5',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 5',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 5',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 6',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 6',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 6',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 6',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 6',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 7',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 7',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 7',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 7',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 7',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 8',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 8',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 8',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 8',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 8',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[1].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 9',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 9',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 9',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 9',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 9',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 10',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 10',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 10',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 10',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 10',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 11',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 11',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 11',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 11',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 11',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 12',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 12',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 12',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 12',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 12',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[2].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 13',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 13',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 13',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 13',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 13',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 14',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 14',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 14',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 14',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 14',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 15',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 15',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 15',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 15',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 15',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 16',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 16',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 16',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 16',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 16',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[3].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 17',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 17',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 17',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 17',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 17',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 18',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 18',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 18',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 18',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 18',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 19',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 19',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 19',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 19',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 19',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Casa 20',
      description: 'Propiedad de tipo Casa',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[0].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento 20',
      description: 'Propiedad de tipo Apartamento',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[1].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial 20',
      description: 'Propiedad de tipo Local comercial',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[2].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión 20',
      description: 'Propiedad de tipo Mansión',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[3].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón 20',
      description: 'Propiedad de tipo Galpón',
      cost: 10,
      income: 20,
      portfolioId: portfolios[4].id,
      propertyTypeId: propertyTypes[4].id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
