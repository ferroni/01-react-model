import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

type Repository = {
    id: number,
    name: string
}

export function RepositoryList() {

    const [counter, setCounter] = useState(0);
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
            <section className="repository-list">
                <h1>Lista de repositórios</h1>
                <ul>
                    {repositories.map(repository => {
                       return <RepositoryItem key={repository.id} repository={repository} />; 
                    })}
                </ul>
            </section>
            <br/>
            {counter}
            <br/>
            <button onClick={increment}>Contador</button>
        </>
    );
}