const User = require('../../models/User');

class ContactController {
  async index(request, response) {
    // puxando todos os dados
    const contects = await User.findAll();

    response.json(contects);
  }

  async show(request, response) {
    // pegando somente um usuario por id
    const { id } = request.params;

    const contact = await User.findByPk(id);

    if (!contact) {
      return response.status(404).json({ Error: 'usuario nao existente' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // cadastrando
    if (!request.body.name) return response.status(400).json({ Error: 'preencha nome por favor' });
    if (!request.body.sobrenome) return response.status(400).json({ Error: 'preencha sobrenome por favor' });
    if (!request.body.email) return response.status(400).json({ Error: 'preencha email por favor' });
    if (!request.body.phone) return response.status(400).json({ Error: 'preencha phone por favor' });
    if (!request.body.cpf) return response.status(400).json({ Error: 'preencha cpf por favor' });
    await User.create(request.body).then(() => response.status(200).json({ Error: 'cadastrado com sucesso' }));
  }

  async update(request, response) {
    // fazendo updade em um contato no banco
    const { id } = request.params;
    const {
      name, sobrenome, email, cpf, phone, phone2,
    } = request.body;

    const contact = await User.findByPk(id);

    if (!contact) {
      return response.status(400).json({ Error: 'usuario nao existente' });
    }

    await User.update(
      {
        name, sobrenome, email, phone, cpf, phone2,
      },
      {
        where: {
          id: request.params.id,
        },
      },
    );

    response.status(200).json({ Error: 'editado com sucesso' });
  }

  async delete(request, response) {
    // deletando o cadatro no banco de dados
    const { id } = request.params;

    const contact = await User.findByPk(id);

    if (!contact) return response.status(400).json({ Error: 'usuario nao existente' });

    await User.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json({ Error: 'excluido com sucesso' });
  }
}

module.exports = new ContactController();
