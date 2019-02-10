import Link from 'next/link'

const Index = ({nodeEnv1,nodeEnv2,nodeEnv3,isServer}) => {
    return (
        <div>
        <Link href='/about'><a>About</a></Link>
            <br/>isServer: {isServer}
            <br/>
            <br/>
            nodeEnv1: {nodeEnv1}<br/>
            nodeEnv2: {nodeEnv2}<br/>
            nodeEnv3: {nodeEnv3}<br/>
        </div>
    )
};

Index.getInitialProps = async ({ req }) => {
    const isServer = !!req;
    if (isServer) {
        const nodeEnv1 = process.env.NODE_ENV
        const nodeEnv2 = process.env["NODE_ENV"];
        const x = "NODE_ENV";
        const nodeEnv3 = process.env[x];
        return {
            isServer,
            nodeEnv1,
            nodeEnv2,
            nodeEnv3
        };
    }
    else {
        const nodeEnv1 = process.env.NODE_ENV
        const nodeEnv2 = process.env["NODE_ENV"];
        const x = "NODE_ENV";
        const nodeEnv3 = process.env[x];
        return {
            isServer,
            nodeEnv1,
            nodeEnv2,
            nodeEnv3
        };
    }
};

export default Index;
