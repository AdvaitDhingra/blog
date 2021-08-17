import Card from 'react-bootstrap/Card'

export default function Post(props) {
    return(
        <Card style = {{width: 'auto'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text} 
                </Card.Text>
            </Card.Body>
        </Card>
    )

}