import React, { Component } from 'react';



class MyList extends Component {
 
    
    constructor() {
        super();
        
        this.state = {
            items: []
        };

        this.addListItem = this.addListItem.bind(this);

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, i) => {
                        return (
                            <ListItem item={item} />
                        );
                    })}
                </ul>
                <button 
                        onClick={this.addListItem}>Add list item</button>
            </div>
        );
    }


    addListItem() {

        this.setState(state => ({
            items: state.items.concat("Item #" + (state.items.length+1).toString())
        }))

    }

}

class ListItem extends Component {
    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}


export default MyList;
