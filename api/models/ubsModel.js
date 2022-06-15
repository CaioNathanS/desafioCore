import mongoose from 'mongoose';

const ubsSchema = new mongoose.Schema(
  {
    CNES: { type: String, required: true },
    UF: { type: Number, required: true },
    IBGE: { type: String, required: true },
    NOME: { type: String, required: true },
    LOGRADOURO: { type: String, required: true },
    BAIRRO: { type: String, required: true },
    LATITUDE: { type: String, required: true },
    LONGITUDE: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Ubs = mongoose.model('Ubs', ubsSchema);
export default Ubs;