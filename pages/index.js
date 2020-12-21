import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Index Page</h1>
            <p>Check current Bitcoin Rates</p>
        </div>
        <Prices bpi = {props.bpi} />
    </Layout>
);


Index.getInitialProps = async function(){
    const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);

    const data = await res.json();

    return {
        bpi: data.bpi
    };
}

export default Index;