const { body } = require("express-validator");

const pacienteCreateValidation = () => {
  return [
    body("nome")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("fone")
      .optional()
      .isString()
      .withMessage("O telefone deve ser um número."),
    body("endereco")
      .optional()
      .isString()
      .withMessage("O endereço deve ser uma string."),
    body("prontuario")
      .optional()
      .isString()
      .withMessage("O prontuário deve ser uma string."),
    body("remedio")
      .optional()
      .isString()
      .withMessage("O remédio deve ser uma string."),
    body("comorbidade")
      .optional()
      .isString()
      .withMessage("A comorbidade deve ser uma string."),
    body("nomeMae")
      .optional()
      .isString()
      .withMessage("O nome da mãe deve ser uma string."),
    body("dataNasc")
      .optional()
      .isISO8601().toDate()
      .withMessage("A data de nascimento deve ser uma data válida."),
    body("sexo")
      .optional()
      .isIn(["Masculino", "Feminino", "Outro"])
      .withMessage("O sexo deve ser Masculino, Feminino ou Outro."),
    body("documento")
      .optional()
      .isString()
      .withMessage("O documento deve ser uma string."),
    body("plano")
      .optional()
      .isString()
      .withMessage("O plano deve ser uma string."),
    body("alergias")
      .optional()
      .isString()
      .withMessage("As alergias devem ser uma string."),
    body("vacinas")
      .optional()
      .isString()
      .withMessage("As vacinas devem ser uma string."),
    body("historicoFamilia")
      .optional().
      isString()
      .withMessage("O histórico familiar deve ser uma string."),
    body("internacoes")
      .optional()
      .isString()
      .withMessage("As internações devem ser uma string."),
    body("exame")
      .optional()
      .isArray()
      .withMessage("O exame deve ser um array."),
    body("exame.*.tipo")
      .if(body("exame").exists())
      .notEmpty()
      .withMessage("O tipo do exame é obrigatório.")
      .isString()
      .withMessage("O tipo do exame deve ser uma string."),
    body("exame.*.anexoId")
      .if(body("exame").exists())
      .notEmpty()
      .withMessage("O anexo do exame é obrigatório.")
      .isString()
      .withMessage("O anexo do exame deve ser uma string."),
    body("exame.*.resultado")
      .optional()
      .isString()
      .withMessage("O resultado do exame deve ser uma string."),
    body("exame.*.observacoes")
      .optional()
      .isString()
      .withMessage("As observações do exame devem ser uma string."),
    body("userId")
      .optional()
      .isMongoId()
      .withMessage("O ID do usuário deve ser um ID MongoDB válido."),
    body("userName")
      .optional()
      .isString()
      .withMessage("O nome do usuário deve ser uma string."),
  ];
};

const pacienteUpdateValidation = () => {
  return [
    body("nome")
      .optional()
      .isString()
      .withMessage("O nome deve ser uma string.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("fone")
      .optional()
      .isString()
      .withMessage("O telefone deve ser um número."),
    body("endereco")
      .optional()
      .isString()
      .withMessage("O endereço deve ser uma string."),
    body("prontuario")
      .optional()
      .isString()
      .withMessage("O prontuário deve ser uma string."),
    body("remedio")
      .optional()
      .isString()
      .withMessage("O remédio deve ser uma string."),
    body("comorbidade")
      .optional()
      .isString()
      .withMessage("A comorbidade deve ser uma string."),
    body("nomeMae")
      .optional()
      .isString()
      .withMessage("O nome da mãe deve ser uma string."),
    body("dataNasc")
      .optional()
      .isISO8601().toDate()
      .withMessage("A data de nascimento deve ser uma data válida."),
    body("sexo")
      .optional()
      .isIn(["Masculino", "Feminino", "Outro"])
      .withMessage("O sexo deve ser Masculino, Feminino ou Outro."),
    body("documento")
      .optional()
      .isString()
      .withMessage("O documento deve ser uma string."),
    body("plano")
      .optional()
      .isString()
      .withMessage("O plano deve ser uma string."),
    body("alergias")
      .optional()
      .isString()
      .withMessage("As alergias devem ser uma string."),
    body("vacinas")
      .optional()
      .isString()
      .withMessage("As vacinas devem ser uma string."),
    body("historicoFamilia")
      .optional()
      .isString()
      .withMessage("O histórico familiar deve ser uma string."),
    body("internacoes")
      .optional()
      .isString()
      .withMessage("As internações devem ser uma string."),
    body("exame")
      .optional()
      .isArray()
      .withMessage("O exame deve ser um array."),
    body("exame.*.tipo")
      .if(body("exame").exists())
      .notEmpty()
      .withMessage("O tipo do exame é obrigatório.")
      .isString()
      .withMessage("O tipo do exame deve ser uma string."),
    body("exame.*.anexoId")
      .if(body("exame").exists())
      .notEmpty()
      .withMessage("O anexo do exame é obrigatório.")
      .isString()
      .withMessage("O anexo do exame deve ser uma string."),
    body("exame.*.resultado")
      .optional()
      .isString()
      .withMessage("O resultado do exame deve ser uma string."),
    body("exame.*.observacoes")
      .optional()
      .isString()
      .withMessage("As observações do exame devem ser uma string."),
    body("userId")
      .optional()
      .isMongoId()
      .withMessage("O ID do usuário deve ser um ID MongoDB válido."),
    body("userName")
      .optional()
      .isString()
      .withMessage("O nome do usuário deve ser uma string."),
  ];
};

module.exports = {
  pacienteCreateValidation,
  pacienteUpdateValidation,
};
