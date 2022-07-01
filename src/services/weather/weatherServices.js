import { weatherAPI } from '../../http/weatherApi';

const getClimaCiudad = async (ciudad) => {
  return await weatherAPI.get(ciudad);
};

export {
    getClimaCiudad
  };
  