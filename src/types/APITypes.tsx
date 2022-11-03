export interface PunkFullBeer {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    volume : {value: string, unit: string},
    boil_volume: {value: string, unit: string},
    food_pairing: string[],
    brewers_tips: string

}

export interface PunkShortBeer {
    id: number,
    name: string,
    image_url: string
}