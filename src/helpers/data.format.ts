export const dateFormat = (data:string)=>{
    return new Intl.DateTimeFormat('pt-BR').format(new Date(data))
}
