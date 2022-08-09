import React, {useState, useEffect} from "react";
import {Title,Error} from "../../styles/global";
import Card from "../../components/Card";
import InputSearch from "../../components/InputSearch";
import api from "../../services/api";
import {useParams} from "react-router-dom";
import {MessagesError} from "../../helpers/messages.helper";

interface Member{
    avatar_url:string;
    login:string
}

const Members:React.FC = () => {
    const [members,setMembers] = useState<Member[]>([])
    const [page,setPage ] = useState(0)
    const [oldMemembers,setOldMemembers] = useState<Member[]>([])
    const [search,setSearch] = useState('')
    const [error,setError] = useState('')

    let { org } : any  = useParams();

    async function fetch():Promise<void>{
        try {
            const response = await api.get(`orgs/${org}/public_members`,{
                params:{
                    per_page:10,
                    page:page,
                    order: 'DESC',
                }
            })
            setMembers([...members,...response.data])
            setOldMemembers([...oldMemembers,...response.data])
        }catch (e) {
            setError(MessagesError.API_FAIL_MEMBER_GROUP)
        }

    }

    function filterMembers(value:string){
        setSearch(value)
        const newMembers = members.filter(item => {
        const itemData = item.login.toUpperCase()
        const textValue = value.toUpperCase()
        return itemData.indexOf(textValue) > -1
        })
        setOldMemembers(newMembers)
    }

    useEffect( () => {
        const  intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((props)=>props.isIntersecting)){
                setPage((currentPage) => currentPage + 1 )
            }
        })
        intersectionObserver.observe(document.querySelector('#observever')!)
        return () => intersectionObserver.disconnect()
    },[org])

    useEffect(() => {
        if (page > 0 ) {
            const loadMembers = async () => {
                await fetch();
            };
            loadMembers();
        }
    }, [page]);

    return(
        <>
            <Title>Membros</Title>;
            <InputSearch value={search} onChange={(value)=>filterMembers(value.target.value)} name='search'  />
            { oldMemembers.map(member=>(
                <Card key={member.login} urlImg={member.avatar_url} name={member.login} path={`/users/${member.login}`} isIcon={true} />
            ))}
            {error && <Error>{error}</Error> }
                <li id="observever">
                </li>
        </>
    )
};

export default Members;

