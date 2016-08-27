import * as React from "react";
import {AccordianItem} from "./AccordianItem";

export interface EventProps { title: string, content: string, date: Date, expanded: boolean, onToggled: (item: AccordianItem) => void }

export class Event extends React.Component<EventProps, {}> {
    state: {expanded: boolean}
    constructor(props: EventProps) {
        super(props);
        this.state = {expanded: false};
    }

    get messageHtml () {
        return  {__html: this.props.content};
    }

    get formatedDate() {
        const months = ["January", "February ", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"]
        return months[this.props.date.getMonth()] + " " + this.props.date.getDate()
    }

    render() {
        var title = <div>
                        <span>{this.props.title} </span>
                        <i className="material-icons" style={{color: "rgba(0, 0, 0, 0.7)", fontSize: "20px", float: "right"}}>date_range</i>
                        <span style={{float: "right"}}>{this.formatedDate}</span>
                    </div>;
        return  <AccordianItem title={title} expanded={this.props.expanded} onToggled={this.props.onToggled}>
                    <span dangerouslySetInnerHTML={this.messageHtml} />
                </AccordianItem>
    }
}
