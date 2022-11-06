import { PunkFullBeer, PunkErrorObject } from "../types/APITypes";
import { BeerDetailsProps } from "../types/PropsTypes"

export async function detailsLoader({params}:any){

    let response = await fetch(`https://api.punkapi.com/v2/beers/${params.beerId}`, { method:"GET"})

    const beerData:PunkFullBeer[] | PunkErrorObject = await response.json();

    if((beerData as PunkErrorObject).statusCode !== undefined)
        throw new Error((beerData as PunkErrorObject).message)

    let casted = beerData as PunkFullBeer[]
    return casted[0];
}