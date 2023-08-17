import Header from "@/src/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, Container } from "reactstrap";

const Home: NextPage = () =>{
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generate by create next app"/>
            </Head>

            <Header/>

            <main>
                <Container className="py-5 text-center">
                    <h1 className="mt-5 display-1">
                        O melhor jeito de comprar o que você ama 
                    </h1>
                    <p className="my-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae autem quisquam soluta, tenetur impedit iure enim, ipsum nisi voluptate culpa nobis necessitatibus, voluptatibus nihil reprehenderit omnis blanditiis iusto facilis quaerat.
                    </p>
                    <Link href={'/products'}>
                        <Button color="dark" className="px-4 pb-2">
                            Conheça nossos produtos!
                        </Button>
                    </Link>
                </Container>
            </main>
        </>
    )
}

export default Home