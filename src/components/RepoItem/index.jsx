import { Wrapper } from "./style"

export function RepoItem({
    repository,
    ...rest
}){
    return(
        <>
            <Wrapper>
                <strong>
                    {repository.name}
                </strong>
                <p>
                    {repository.description}
                </p>
                <a href={repository.html_url}>
                    Acessar ao repositório
                </a>
            </Wrapper>
        </>
    )
}