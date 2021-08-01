import React from "react";
import {Card} from "react-native-elements";
import {Bucket} from "../../API";

export class BucketCard extends React.Component<Bucket, any> {

    constructor(props: Bucket) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Title>{this.props.title}</Card.Title>
                <p>Current: {this.props.current}</p>
                <p>Goal: {this.props.goal}</p>
            </Card>
        )
    }
}