import * as Yup from "yup";

export const validationForm = Yup.object().shape({
  fullName: Yup.string()
    .matches(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "Nome não pode conter números ou caracteres especiais"
    )
    .required("Nome completo é obrigatório"),

  birthday: Yup.date()
    .max(new Date(), "Data de nascimento inválida")
    .required("Data de nascimento é obrigatória")
    .test("is-valid-date", "Data inválida", (value) => {
      return value instanceof Date && !isNaN(value.getTime());
    }),

  document: Yup.string()
    .matches(/^\d+$/, "Documento deve conter apenas números")
    .min(11, "Documento deve ter pelo menos 11 dígitos")
    .max(14, "Documento deve ter no máximo 14 dígitos")
    .optional(),

  phone: Yup.string()
    .matches(/^[0-9]{10,11}$/, "Telefone inválido")
    .required("Telefone é obrigatório"),

  email: Yup.string()
    .email("Formato de e-mail inválido")
    .required("E-mail é obrigatório"),

  father: Yup.string()
    .max(150, "Nome do pai não pode exceder 150 caracteres")
    .optional(),

  mother: Yup.string()
    .max(150, "Nome da mãe não pode exceder 150 caracteres")
    .optional(),

  zipcode: Yup.string()
    .matches(/^\d{8}/, "CEP deve estar no formato 00000000")
    .optional(),

  place: Yup.string()
    .max(150, "Endereço não pode exceder 150 caracteres")
    .optional(),

  number: Yup.string()
    .max(6, "Número do endereço não pode exceder 6 caracteres")
    .optional(),

  neighborhood: Yup.string()
    .max(100, "Bairro não pode exceder 100 caracteres")
    .optional(),

  city: Yup.string()
    .max(100, "Cidade não pode exceder 100 caracteres")
    .optional(),

  state: Yup.string().optional(),

  complement: Yup.string()
    .max(255, "Complemento não pode exceder 255 caracteres")
    .optional(),
});
