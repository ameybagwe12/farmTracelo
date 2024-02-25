// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PT {
    struct Product {
        string name;
        uint bought_weight;
        uint sold_weight;
        uint price;
        string prev;
        bool isConsumed;
    }

    mapping(string => Product) public transactions;
    string[] public list;

    function addProductByFarmer(
        string calldata id,
        string calldata _name,
        uint _bought_weight,
        uint _sold_weight,
        uint price
    ) public {
        Product memory product = Product(
            _name,
            _bought_weight,
            _sold_weight,
            price,
            "",
            false
        );
        transactions[id] = product;
        list.push(id);
    }

    function addProductByTrader(
        string calldata _id,
        uint weight_to_buy,
        uint price,
        string calldata _prev
    ) public {
        Product memory prevProduct = getProduct(_prev);
        // require(prevProduct != address(0), "Previous product must exist");
        bool consume = false;
        if (prevProduct.bought_weight == weight_to_buy) {
            consume = true;
        }

        Product memory product = Product(
            prevProduct.name,
            prevProduct.bought_weight,
            weight_to_buy,
            price,
            _prev,
            consume
        );

        transactions[_id] = product;
        list.push(_id);
    }

    function getProduct(
        string memory _id
    ) public view returns (Product memory) {
        return transactions[_id];
        // return products[_id];
    }

    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory output = new Product[](list.length);
        for (uint i = 0; i < list.length; i++) {
            output[i] = transactions[list[i]];
        }
        return output;
    }
}
