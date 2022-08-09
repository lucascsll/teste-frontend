import React from "react";
import {Title} from "../../styles/global";
import Card from "../../components/Card";

const Home:React.FC = () => {
return(
    <>
        <Title>Grupos do GitHub</Title>;
        <Card urlImg='https://avatars.githubusercontent.com/u/139426?s=200&v=4' path='public_members/orgs/angular' name='Angular' isIcon={true}/>
        <Card urlImg='https://avatars.githubusercontent.com/u/69631?s=200&v=4' path='public_members/orgs/facebook' name='Meta' isIcon={true}/>
        <Card urlImg='https://avatars.githubusercontent.com/u/6128107?s=200&v=4' path='public_members/orgs/vuejs' name='Vue' isIcon={true}/>
    </>
)
};

export default Home;

