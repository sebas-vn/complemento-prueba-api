import { Document } from "mongoose";

export interface Gato extends Document {
  readonly nombre: string;
  readonly raza: string;
  readonly edad: number;
  readonly foto: string;
}