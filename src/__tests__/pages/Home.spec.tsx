import React from "react";
import Home from "../../pages/Home"
import {getByText, render,screen } from "@testing-library/react";


describe('Renderizar page Grupos',() => {
    it('Deve renderizar lista de items', function () {
        render(<Home/>)
        expect(screen.getByText('Vue')).toBeInTheDocument()
        expect(screen.getByText('Meta')).toBeInTheDocument()
        expect(screen.getByText('Angular')).toBeInTheDocument()

    });
    it('deve conter href da pagina equilavente', function () {
         render(<Home/>)
        expect(screen.getByText('Vue').closest('a')).toHaveAttribute('href','public_members/orgs/vuejs')
        expect(screen.getByText('Meta').closest('a')).toHaveAttribute('href','public_members/orgs/facebook')
        expect(screen.getByText('Angular').closest('a')).toHaveAttribute('href','public_members/orgs/angular')
    });
})
