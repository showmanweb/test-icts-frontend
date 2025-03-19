import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./Input";
import { validationForm } from "../validates/form";
import { handleZipcode } from "../services/address";

interface FormProps {
  fullName: string;
  birthday: Date | undefined;
  document?: string;
  phone: string;
  email: string;
  father?: string;
  mother?: string;
  zipcode?: string;
  place?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  complement?: string;
}

const Form: React.FC = () => {
  const defaultValues = useMemo(
    () => ({
      fullName: "",
      birthday: new Date(),
      document: "",
      phone: "",
      email: "",
      father: "",
      mother: "",
      zipcode: "",
      place: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      complement: "",
    }),
    []
  );

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationForm),
    defaultValues,
  });

  const handleAddress = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    e.preventDefault();
    (e.target as HTMLInputElement).value = value.replace(/\D/g, "");

    if (value.length == 8) {
      handleZipcode(value).then((response) => {
        const { data } = response;
        if (!data.erro) {
          setValue("place", data.logradouro);
          setValue("neighborhood", data.bairro);
          setValue("city", data.localidade);
          setValue("state", data.uf);
        } else {
          setValue("place", "");
          setValue("neighborhood", "");
          setValue("city", "");
          setValue("state", "");
        }
      });
    } else {
      setValue("place", "");
      setValue("neighborhood", "");
      setValue("city", "");
      setValue("state", "");
    }
  };

  const handleReset = () => {
    reset(defaultValues);
  };

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleOnlyNumbers = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    e.preventDefault();
    (e.target as HTMLInputElement).value = value.replace(/\D/g, "");
  };

  return (
    <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-12">
              <div className="row g-3">
                <div className="col-md-12">
                  <h5>Dados Pessoais</h5>
                </div>

                <div className="col-md-12">
                  <Input
                    name="fullName"
                    label="Nome Completo"
                    type="text"
                    control={control}
                    error={errors.fullName?.message}
                    classes="text-capitalize"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="birthday"
                    label="Data de Nascimento"
                    type="date"
                    control={control}
                    error={errors.birthday?.message}
                    {...{ max: new Date().toISOString().split("T")[0] }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="document"
                    label="RG ou CPF"
                    type="tel"
                    control={control}
                    error={errors.document?.message}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="phone"
                    label="Telefone"
                    type="tel"
                    control={control}
                    error={errors.phone?.message}
                    {...{
                      maxLength: 11,
                      onInput: handleOnlyNumbers,
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="email"
                    label="E-mail"
                    type="email"
                    control={control}
                    error={errors.email?.message}
                    classes="text-lowercase"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    name="father"
                    label="Nome do Pai"
                    type="text"
                    control={control}
                    classes="text-capitalize"
                    error={errors.father?.message}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    name="mother"
                    label="Nome da Mãe"
                    type="text"
                    control={control}
                    classes="text-capitalize"
                    error={errors.mother?.message}
                  />
                </div>

                <div className="col-md-3">
                  <Input
                    name="zipcode"
                    label="CEP"
                    type="tel"
                    control={control}
                    {...{
                      maxLength: 8,
                      onInput: handleAddress,
                    }}
                    error={errors.zipcode?.message}
                  />
                </div>

                <div className="col-md-7">
                  <Input
                    name="place"
                    label="Logradouro"
                    type="text"
                    control={control}
                    classes="text-capitalize"
                    error={errors.place?.message}
                  />
                </div>

                <div className="col-md-2">
                  <Input
                    name="number"
                    label="Número"
                    type="tel"
                    control={control}
                    error={errors.number?.message}
                  />
                </div>

                <div className="col-md-5">
                  <Input
                    name="neighborhood"
                    label="Bairro"
                    type="text"
                    control={control}
                    classes="text-capitalize"
                    error={errors.neighborhood?.message}
                  />
                </div>

                <div className="col-md-5">
                  <Input
                    name="city"
                    label="Cidade"
                    type="text"
                    control={control}
                    classes="text-capitalize"
                    error={errors.city?.message}
                  />
                </div>

                <div className="col-md-2">
                  <Input
                    name="state"
                    label="Estado"
                    type="text"
                    control={control}
                    {...{ maxLength: 2 }}
                    classes="text-uppercase"
                    error={errors.state?.message}
                  />
                </div>

                <div className="col-md-12">
                  <Input
                    name="complement"
                    label="Complemento"
                    type="text"
                    control={control}
                    error={errors.complement?.message}
                  />
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary px-5 me-2">
                    Enviar
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleReset}
                  >
                    Limpar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
