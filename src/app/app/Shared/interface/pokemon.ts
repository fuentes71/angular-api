
export interface Pokemon {
    name: string,
    url: string,
    id:number,
    types: PokeType,
    sprites: SpriteType,
    backgroundColor: string;

}

type SpriteType = {
    front_default: string
}
type PokeType = {
    name:string
}

                  //name,id,types,sprites.front_default
