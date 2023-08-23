import { Types } from "./Types";
import { Sprites } from "./Sprites";

export interface Pokemon {

  id: number;
  name: string;
  height: number;
  weight: number;
  types: Types[];
  sprites: Sprites;
}
