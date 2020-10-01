import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Produtct extends Component {

    state = {
        products: {}
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({products: response.data});
    }

    render() {

        const { products } = this.state;

        return (
            <div className="product-info">
                <h1>{products.title}</h1>
                <p>{products.description}</p>

                <p>
                    URL: <a href={products.url}>{products.url}</a>
                </p>
            </div>
        )
    }
}
