import { useState } from "react";
import { useEffect } from "react";
import { RepoItem } from "../RepoItem";
import { Wrapper } from "./style";
import { Api } from "../../services";


export function RepoList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(Api)
        .then(response => response.json())
        .then(data => setRepositories(data))
      },[]);
      
    return(
        <Wrapper>
            <div className="container">
                <h1>Listando os repositórios</h1>
                <ul>
                    {
                        repositories.map(repos=> (
                            <RepoItem key={repos.id} repository={repos}/>
                            )
                        )
                    }
                </ul>
            </div>
        </Wrapper>
    )
}