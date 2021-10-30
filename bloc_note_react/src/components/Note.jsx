

export default function(props){

    return(
        <div className="note">
            <h3>{props.title}</h3>
            <div>{props.content}</div>
        </div>
    )
}