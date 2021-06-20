type RepositoryItemProps = {
    repository: {
        name: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>Repo {props.repository.name}</li>
    );
}