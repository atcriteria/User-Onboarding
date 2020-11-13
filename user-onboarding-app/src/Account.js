import react from 'react';
import styled from 'styled-components';

export default function Account(props){
    const { account } = props;

    return (
        <MainContain>
            <div>{`Name: ${(account.name === undefined) ? `${account.first_name} ${account.last_name}` : account.name}`}</div>
            <div>Email: {account.email}</div>
        </MainContain>
    )
}


const MainContain = styled.div`
margin: 1.5% 0;
`