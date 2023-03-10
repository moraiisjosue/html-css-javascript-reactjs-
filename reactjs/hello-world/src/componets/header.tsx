type Props = {
    name: string;
    age: number;
}

export const Header = ({name, age}: Props) => {
    return (
        <div>
            <h1>Hello {name}, você tem idade para acessar esse site?</h1>
        </div>
    )
}