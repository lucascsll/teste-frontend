import React, {useEffect, useState} from "react";
import {Title} from "../../styles/global";
import Card from "../../components/Card";
import api from "../../services/api";


interface PokemonDetails {
    name:string;
    id:number,
    type:object,
    sprites:{
        front_default:string;
    }

}
const Home:React.FC = () => {

    const [pokemons,setPokemons] = useState<PokemonDetails[]>([])

    async function fetch(pokemonData: any):Promise<void>{
        pokemonData.map(async (url:any) =>{
            await api.get(`${url.url}`).then(response=>{
                console.log(response.data)
                //setPokemons(response.data)
            })
            console.log(pokemons)
        })
    }

    useEffect( ()=> {
        const getAllPokemons = async () => {
            await api.get(`pokemon?limit=10&offset=0`).then((response)=>{
                fetch(response.data.results)
            })
        };
        getAllPokemons();

    },[])

return(
    <>
        <Title>Grupos do GitHub</Title>;
        {/*<Card urlImg='https://avatars.githubusercontent.com/u/139426?s=200&v=4' path='public_members/orgs/angular' name='Angular' isIcon={true}/>*/}
        {/*<Card urlImg='https://avatars.githubusercontent.com/u/69631?s=200&v=4' path='public_members/orgs/facebook' name='Meta' isIcon={true}/>*/}
        {/*<Card urlImg='https://avatars.githubusercontent.com/u/6128107?s=200&v=4' path='public_members/orgs/vuejs' name='Vue' isIcon={true}/>*/}
    </>
)
};

export default Home;

