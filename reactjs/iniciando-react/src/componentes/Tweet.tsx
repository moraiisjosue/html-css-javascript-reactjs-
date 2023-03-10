type TweetProps = { //tipagem 
    text: string;
}

export function Tweet(props: TweetProps) {
    return (
        <p>{props.text}</p> //mostra no html a váriavel
    );
}