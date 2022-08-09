import {dateFormat} from "../../helpers/data.format";

describe('Formatar datas',()=>{
    it('deve formatar uma data em timezone', function () {
        const date = dateFormat('2019-04-13T13:13:10Z')
        expect(date).toBe('13/04/2019')
    });
})

