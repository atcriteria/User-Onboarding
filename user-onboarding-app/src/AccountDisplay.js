import react from 'react';
import Account from './Account';

export default function AccountDisplay(props){
    const { accounts } = props;
    return(
        <div>
            <p>We have a total of {accounts.length + 1} accounts!</p>
            { accounts.map(account => {
                return <Account account={account} />
            }) }
        </div>
    )
}