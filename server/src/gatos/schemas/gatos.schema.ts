import { Schema } from "mongoose";

export const GatoSchema = new Schema({
  nombre: { type: String },
  raza: { type: String },
  edad: { type: Number },
  foto: { type: String }
});
