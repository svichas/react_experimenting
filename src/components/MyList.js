import React, { Component } from 'react';

class MyList extends Component {
 
    
    constructor() {
        super();
        
        this.items = [
        ];

    }

    render() {
        return (
            <div>
                <ul>
                    {this.items.map(function(item, i) {
                        return (
                            <ListItem item={item} />
                        );
                    })}
                </ul>
                <button 
                        onClick={(e) => { this.addListItem(e) }}>Add list item</button>
            </div>
        );
    }


    addListItem() {

        let itemCount = this.items.length + 1;
        this.items.push("Item #" + itemCount.toString());

        this.forceUpdate();
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
