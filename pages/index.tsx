import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () =>{
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generate by create next app"/>
            </Head>
            <main>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.Js</a>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic eveniet quia, exercitationem, esse unde culpa quasi rem error vitae omnis non et qui beatae molestias nam placeat laudantium odit.
                </p>
            </main>
        </>
    )
}

export default Home