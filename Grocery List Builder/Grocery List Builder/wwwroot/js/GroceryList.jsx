class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <div className="groceryList">
                <h1>Tomo's Grocery List Builder</h1>
                <p>Start adding items to your list to get started!</p>
                <ItemSelector />
            </div>
        );
    }
}

class ItemSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', price: '', quantity: '' }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleItemSubmit = this.handleItemSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handlePriceChange(e) {
        this.setState({ price: e.target.value });
    }

    handleQuantityChange(e) {
        this.setState({ quantity: e.target.value });
    }

    handleItemSubmit(e) {
        e.preventDefault();
        const name = this.state.name.trim();
        const price = this.state.price.trim();
        const quantity = this.state.quantity.trim();
        if (!name || !price || !quantity) {
            return;
        }
        //Todo item submit
        this.setState({ name: '', price: '', quantity: '' });
    }

    render() {
        return (
            <div className="grocerySelector">
                <form className="grocerySelectorForm" method="POST" onSubmit={this.handleItemSubmit}>
                    <select onChange={this.handleNameChange}>
                        <option value="" />
                        <option value="Apple">Apple</option>
                        <option value="Banana">Banana</option>
                        <option value="Orange">Orange</option>
                    </select>
                    <input type="text" placeholder="Price" value={this.state.price} onChange={this.handlePriceChange} />
                    <input type="text" placeholder="Quantity" value={this.state.quantity} onChange={this.handleQuantityChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<GroceryList />, document.getElementById('content'));