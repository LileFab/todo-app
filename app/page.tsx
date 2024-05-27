import { Abril_Fatface} from "next/font/google";
import { currentUser } from '@clerk/nextjs/server';

const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] })

export default async function Home() {

  const user = await currentUser();

  return (
    <div className="pt-36 w-screen text-center">
      {!user &&
        <h1 className= {`${abril.className} text-3xl`} >Merci de vous connecter afin d'accéder à vos tâches.</h1>
      }
      {user &&
        <h1 className= {`${abril.className} text-5xl`} >&#9207; Vos tâches {user?.firstName}&#9207;</h1>
      }
      
    </div>
    )
}
