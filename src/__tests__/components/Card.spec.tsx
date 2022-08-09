import React from "react";
import Card from '../../components/Card'
import {getByText, render,screen } from "@testing-library/react";

describe('Renderiza component Card',()=>{
    it('deve renderizar com suas propriedades', function () {
        render(<Card name='Angular' path='/public_members/orgs/angular' urlImg='https://avatars.githubusercontent.com/u/139426?s=200&v=4'/>)
        expect(screen.getByText('Angular')).toBeInTheDocument()
        expect(screen.getByText('Angular').closest('a')).toHaveAttribute('href','/public_members/orgs/angular')
    });


})
