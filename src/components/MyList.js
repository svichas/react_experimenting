import React, { Component } from 'react';

class MyList extends Component {
 
    
    constructor() {
        super();
        let items = [];
    }

    render() {
        return (
            <div>
                <ul>
                    {this.items.map(function(item, i) {
                        return "<ListItem item=\""+item+"\" />";
                    })}
                </ul>
                <button 
                        onClick={this.addListItem}>Add list item</button>
            </div>
        );
    }


    addListItem() {
        let itemCount = this.items.length + 1;

        console.log(itemCount);
        this.render();
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
