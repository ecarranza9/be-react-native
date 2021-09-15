export const parseCpResponse = (response) => ({
  cp: response.cep,
  barrio: response.bairro,
  localidad: response.localidade
});